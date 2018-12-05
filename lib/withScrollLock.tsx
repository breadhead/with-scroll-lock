import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import * as React from 'react'
import { canUseDOM } from './helpers/canUseDOM'

export interface ScrollLock {
  bodyScrolling: {
    lock: () => void,
    unlock: () => void,
  }
}

const withLockScroll = (isElementFixed: boolean = false) =>
  <P extends object>(Component: React.ComponentType<P & ScrollLock>) =>
    class extends React.Component<P> {
      public componentWillUnmount() {
        clearAllBodyScrollLocks()
      }

      public render() {
        const bodyScrolling = {
          lock: this.lockBodyScroll,
          unlock: this.unlockBodyScroll,
        }

        return <Component {...this.props} bodyScrolling={bodyScrolling} />
      }
      private lockBodyScroll = () => {
        disableBodyScroll()

        if (isElementFixed && canUseDOM) {
          document.body.style.position = 'fixed'
        }
      }

      private unlockBodyScroll = () => {
        clearAllBodyScrollLocks()

        if (isElementFixed && canUseDOM) {
          document.body.style.position = 'static'
        }
      }
    }

export default withLockScroll