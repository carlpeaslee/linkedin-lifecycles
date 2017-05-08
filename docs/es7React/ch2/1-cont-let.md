*Cont and Let*

Perhaps the most recognizable addition to es2015 was that of const and let, two new key words that allow us to declare variables which behave differently than var.

Let's start first with const.

A const is declared just like var except that it's intended to be a constant -- that is,  you aren't supposed to change it.

Let's try declaring a constant. When we change it we see that are given an error.

Watch this though, if we are working a const that has been assigned as an object or array, we can freely change that values of that object or array without any warning.

There is however Object.freeze()

Next we'll look at let. Let variables may be freely reassigned and maintain their value only in their local scope.

This is especially useful within for loops
