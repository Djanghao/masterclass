# Javascript with explanation. Recursive calls, short circuit when reach k-th node.

**Author:** paultman
**Votes:** 28
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/642045/](https://leetcode.com/problems/kth-smallest-element-in-a-bst/solutions/642045/)

---

Short and simple, good code documents itself.  Have a look.  

Basically you know that it's a binary search tree, so go left for smallest values, after begin adding to array values.  Now that I think about it, I guess we just need a counter, rather then an array of values.  Once we get to the kth value, just return that and done.  No need for the array.  

Anyway, here is what i've got.  This was a normal tree traversal, just added the short circuit factor.

If this helped you, please upvote so others can read.  Cheers.

```
var kthSmallest = function(root, k) {
  let vals = [];
  (function dfs(node) {
    if (vals.length !=k) { //no need to keep going after reach k-th number
      if(node.left) dfs(node.left); //go left first
      vals.push(node.val); //finished going left, now start adding values
      if (node.right) dfs(node.right); //if have right, go there and repeat process
    }  
  })(root) // IFFE Immediately Invoking Function Expression, starting from root.
  return vals[k-1]; //return element, but as i mentioned in the descript, don't need this full array, just the k-th elm
};
```