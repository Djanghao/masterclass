# Simple and clean JavaScript solution

**Author:** Hongbo-Miao
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximum-average-subtree/solutions/409617/](https://leetcode.com/problems/maximum-average-subtree/solutions/409617/)

---

```
function maximumAverageSubtree(root) {
  function go(node) {
    if (node == null) return { sum: 0, count: 0, maxAvg: 0 };

    const l = go(node.left);
    const r = go(node.right);

    const sum = l.sum + r.sum + node.val;
    const count = l.count + r.count + 1;
    const maxAvg = Math.max(l.maxAvg, r.maxAvg, sum  / count);

    return { sum, count, maxAvg };
  }

  return go(root).maxAvg;
}
```

More at https://github.com/Hongbo-Miao/leetcode