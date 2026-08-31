# 🍞🍞🍞 Full thorough explanation || ✅ beginner friendly

**Author:** TheGElCOgecko
**Votes:** 112
**Link:** [https://leetcode.com/problems/interval-cancellation/solutions/3624619/](https://leetcode.com/problems/interval-cancellation/solutions/3624619/)

---

# Approach
- Call ```fn(...args)```.
- Set an interval ```timer```. The ```setInterval``` function in the code below will call ```() => fn(...args)``` every ```t``` milliseconds. Note, ```setInterval``` does not initially call the function before ```t``` milliseconds, which is why we call ```fn(...args)``` once before setting the interval.
- Now, we define a ```cancelFn``` function, which clears the interval when called. Return ```cancelFn```.
    - The function ```cancelFn``` is not called when our ```cancellable``` function is first defined. However, whenever someone calls ```cancellable```, the line ```return cancelFn```, in order to return, will call and execute ```cancelFn```, thereby cancelling the interval.
    - For example, if we define ```var myFunc = cancellable((num) => 1 + num, 13, 100)```, the interval will repeatedly call ```(num) => 1 + num``` until ```myFunc()``` is called. When ```myFunc()``` is called, the return line in ```myFunc``` is read, which will consequentially make ```cancelFn``` execute and return, thereby clearing the interval.

# Code
```
var cancellable = function(fn, args, t) {
    fn(...args);
    let timer = setInterval(() => fn(...args), t);

    let cancelFn = () => clearInterval(timer);
    return cancelFn;
};
```
UPVOTE if this was helpful \uD83C\uDF5E\uD83C\uDF5E\uD83C\uDF5E