# Python3 efficient and concise without sorting

**Author:** mxmb
**Votes:** 24
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/1223870/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/1223870/)

---

```python
	def minDeletionSize(self, strs: List[str]) -> int:
        m, n = len(strs), len(strs[0])
        count = 0
        
        for i in range(n):
            for j in range(1,m):
                if strs[j][i] < strs[j-1][i]:
                    count += 1
                    break
        
        return count
```