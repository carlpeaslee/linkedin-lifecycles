*Mounting*

Before we begin to explore all of the individual properties and methods available to us from within a React Component, let's review each of the life cycle methods that we have available to us and see how they relate to each other.

To do this, we're going to build a LifecycleLab component that will help us see when and in what order each of our methods take effect.

There are three different "cycles" of methods which can be triggered during a react component's lifestyle. These cycles are the:

-mounting cycle
-update cycle
-unmounting cycle

in this video we are going to chart the mounting cycle and then a few other methods that actually happen before the mounting cycle

Officially, the mounting cycle is made up of the following methods which are called in this order:

-constructor()
-componentWillMount()
-render()
-componentDidMount()

but there are actually a few other things that happen even before the constructor function. Before constructor() is called, we see:

-defaultProps
-and our initial state


Our mounting cycle is initiated once the component is created (probably when it is first used on the dom) and won't be called again unless the component is unmounted.
