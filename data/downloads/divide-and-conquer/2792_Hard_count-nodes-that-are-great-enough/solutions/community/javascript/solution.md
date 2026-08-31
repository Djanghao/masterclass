# DFS + Sort |  O(N*klogk)

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/6068596/](https://leetcode.com/problems/count-nodes-that-are-great-enough/solutions/6068596/)

---

```javascript []
function countGreatEnoughNodes(root, k) {
  let ans = 0;

  const dfs = (root) => {
    if (!root) return [];

    let kSmallest = [...dfs(root.left), ...dfs(root.right)].sort((a, b) => a - b).slice(0, k);
    if (kSmallest.length === k && root.val > kSmallest.at(-1)) {
      ans++;
    }

    return [...kSmallest, root.val];
  };

  dfs(root);
  return ans;
}
```