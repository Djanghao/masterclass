# JavaScript with explaination

**Author:** 0618
**Votes:** 14
**Link:** [https://leetcode.com/problems/house-robber-iii/solutions/385320/](https://leetcode.com/problems/house-robber-iii/solutions/385320/)

---

As most of the tree problems, recurssion is the easiest way to start.
Then, we need to figure out what we want to get from each of the node.
We want to know the max value we can get if we rob it or not, `[rob, not]`.
If the node is a leaf, it's `[0,0]`,
if it's not a leaf:
1. if we rob it, then we can't rob its leaves.
2. if we do not rob it, then we need to find the max from the combinations of the leaves. 

```
var rob = function(root) {
    function helper(node){
        if(!node) return [0,0];
        const [lr,ln] = helper(node.left);
        const [rr, rn] = helper(node.right);
        return [node.val + ln + rn, Math.max(lr+rr, ln+rn, lr+rn, ln+rr)];
    }
    
    return Math.max(...helper(root));
};
```