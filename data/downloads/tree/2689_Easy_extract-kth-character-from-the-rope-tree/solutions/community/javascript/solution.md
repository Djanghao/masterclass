# JS DFS

**Author:** Automedon
**Votes:** 0
**Link:** [https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/5009604/](https://leetcode.com/problems/extract-kth-character-from-the-rope-tree/solutions/5009604/)

---

```
var getKthCharacter = function(root, k) {
  const dfs = (r)=>{
    if(!r) return '';
    return r.val+dfs(r.left)+dfs(r.right)
  }
  return dfs(root)[k-1]
};
```