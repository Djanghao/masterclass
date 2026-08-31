# Fast Python Recursive solution

**Author:** JummyEgg
**Votes:** 14
**Link:** [https://leetcode.com/problems/most-frequent-subtree-sum/solutions/391254/](https://leetcode.com/problems/most-frequent-subtree-sum/solutions/391254/)

---

Hash map + DFS recursively.

```python
class Solution:
    # 48 ms, 99%
    def findFrequentTreeSum(self, root: TreeNode) -> List[int]:
        if not root: return []
        
        D = collections.defaultdict(int)
        # DFS recursively
		def cal_sum(node):
            if not node: return 0
            rv = node.val + cal_sum(node.left) + cal_sum(node.right)
            D[rv] += 1
            return rv
        
        cal_sum(root)
        mx = max(D.values())
        return [k for k, v in D.items() if v == mx] # return key if its val == max
```
I haven't tried but i expect DFS itertively would be much harder as you need to keep track of return_value. Let me know how you would do it iteratively.