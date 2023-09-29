TypeError: responder.scrollResponderScrollTo is not a function (it is undefined), js engine: hermes


https://stackoverflow.com/questions/71709482/typeerror-responder-scrollresponderscrollto-is-not-a-function

Solution: 
Update the following code in the /node_modules/@codler/react-native-keyboard-aware-scroll-view/lib/KeyboardAwareHOC.js file line number 244.

scrollToPosition = (x: number, y: number, animated: boolean = true) => {
  const responder = this.getScrollResponder()
  if (!responder) {
    return
  }
  if (responder.scrollResponderScrollTo) {
    // React Native < 0.65
    responder.scrollResponderScrollTo({ x, y, animated })
  } else if (responder.scrollTo) {
    // React Native >= 0.65
    responder.scrollTo({ x, y, animated })
  }
  // responder && responder.scrollResponderScrollTo({ x, y, animated })
}

scrollToEnd = (animated?: boolean = true) => {
  const responder = this.getScrollResponder()
  if (!responder) {
    return
  }
  if (responder.scrollResponderScrollTo) {
    // React Native < 0.65
    responder.scrollResponderScrollTo({ x, y, animated })
  } else if (responder.scrollTo) {
    // React Native >= 0.65
    responder.scrollTo({ x, y, animated })
  }
  // responder && responder.scrollResponderScrollToEnd({ animated })
}