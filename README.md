# with-scroll-lock

## Instalation

`yarn add @breadhead/with-scroll-lock`

## Usage

```js
import * as React from "react";
import withScrollLock from "@breadhead/with-scroll-lock";


const Test = ({ bodyScrolling: { lock, unlock }}) => 
<div>
  <button onClick={lock}>lock scroll</button>
  <button onClick={unlock}>unlock scroll</button>
</div>  

export default withScrollLock(true)(Test)


```
