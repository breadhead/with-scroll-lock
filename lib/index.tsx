import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import canUseDOM from 'can-use-dom'
import * as React from 'react'

const MOBILE_WIDTH = 767
export interface ScrollLock {
  bodyScrolling: {
    lock: () => void,
    unlock: () => void,
  }
}

const withLockScroll = (isElementFixed: boolean = false) =>
  <P extends object>(Component: React.ComponentType<P & ScrollLock>) =>
    class extends React.Component<P> {
      // took it from body-scroll-lock lib
      public isIosDevice = typeof window !== 'undefined' && window.navigator &&
      window.navigator.platform && /iP(ad|hone|od)/.test(window.navigator.platform)

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

      public lockBodyScroll = () => {
        disableBodyScroll()

        if (this.isIosDevice && window.innerWidth < MOBILE_WIDTH) {
          // need for mobile safari
          document.body.style.position = 'fixed'
        }

        if (isElementFixed && canUseDOM) {
          // need for fixed elements with height more than window height
          document.body.style.position = 'fixed'
        }
      }

      public unlockBodyScroll = () => {
        clearAllBodyScrollLocks()

        if (this.isIosDevice && window.innerWidth < MOBILE_WIDTH) {
          document.body.style.position = 'static'
        }

        if (isElementFixed && canUseDOM) {
          document.body.style.position = 'static'
        }
      }
    }

export default withLockScroll
