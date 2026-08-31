# JavaScript Solution, Iterative & Recursive, Stack with explanation

**Author:** dball1126
**Votes:** 7
**Link:** [https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/1371273/](https://leetcode.com/problems/verify-preorder-sequence-in-binary-search-tree/solutions/1371273/)

---

Took me a while to figure this one out. The technique of using a Stack is pretty critical here. Preorder traversal is Root, Left, Right. This means we start out on the Root and go all the way left and than Once we start going right we can eliminate the values less than that right value. That's probably the most important part.
Start out by iterating over the values and pushing them into a stack...technically each node is also kind of like a root(left and right child), so before you push the value in look at the last value pushed into the stack...if it's smaller... just push it in and keep going LEFT, if it's bigger that means we're going RIGHT. Go through the stack and eliminate the values lower than this value, as you eliminate the values keep track of last one that is removed(hence the reason for the min variable)....this ensures we will be within range. During each iteration if at any time the current value is smaller than the MIN value then we know it's not an array of preorder values.

Iterative is faster

Success
Details 
Runtime: 60 ms, faster than 100.00% of JavaScript online submissions for Verify Preorder Sequence in Binary Search Tree.
Memory Usage: 43.1 MB, less than 80.00% of JavaScript online submissions for Verify Preorder Sequence in Binary Search Tree.
Next challenges:

```
Iterative:
var verifyPreorder = function(preorder) {
    let stack = []
    let min = -Infinity;

    for (let i = 0; i < preorder.length; i++) {
        const num = preorder[i];
        if (num < min) return false;
        while (stack.length && stack[stack.length -1] < num) {
            min = stack.pop();
        }
        stack.push(num)
    }
    
    return true;
};

Recursive: 
const verifyPreorder = (preorder) => {
    let min = -Infinity;
    
    const helper = (stack, values) => {
    let min = -Infinity;
    
    const helper = (stack, values) => {
        if (!values.length) return true;
        let value = values.shift();
        if (value < min) return false;
        while (stack.length && stack[stack.length - 1] < value) {
            min = stack.pop();
        }
        stack.push(value)
        return helper(stack, values)
    }
    return helper([], preorder)
}
```