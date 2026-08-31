# Easy JS DFS Solution

**Author:** Ashish1323
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/1302295/](https://leetcode.com/problems/sum-of-nodes-with-even-valued-grandparent/solutions/1302295/)

---

```
var sumEvenGrandparent = function(root) {
    var res=0
    function helper(root,p,gp){
        if(!root) return;
        if(gp%2==0) res+=root.val
        helper(root.left,root.val,p)
        helper(root.right,root.val,p)
    }
    helper(root,1,1)
    return res
};
```