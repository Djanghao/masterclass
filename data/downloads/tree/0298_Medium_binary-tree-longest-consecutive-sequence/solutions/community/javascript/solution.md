# Javascript 100%

**Author:** fbecker11
**Votes:** 1
**Link:** [https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/889170/](https://leetcode.com/problems/binary-tree-longest-consecutive-sequence/solutions/889170/)

---

```
var longestConsecutive = function(root) {
  let max = -Infinity
  function dfs(node, seq = 0, prv){
    if(!node) return 
    if(node.val-1===prv){
      seq++
    }else{
      seq=1
    }
    max = Math.max(seq, max)
    dfs(node.left, seq, node.val)
    dfs(node.right, seq, node.val)
  }
  dfs(root)
  return max === -Infinity ? 0 : max
};
```