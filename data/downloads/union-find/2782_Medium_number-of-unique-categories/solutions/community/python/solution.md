# 5 lines of code - You CANNOT make it simpler..

**Author:** durvorezbariq
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3791785/](https://leetcode.com/problems/number-of-unique-categories/solutions/3791785/)

---

For each element we check if it has a category we have not seen so far.

```
class Solution:
    def numberOfCategories(self, n: int, cat: Optional['CategoryHandler']) -> int:
        res = 0
        for j in range(n):
			if all(not cat.haveSameCategory(i,j) for i in range(j)):
				res +=  1 # if all previous elements are different we add 1
        return res
```

Time complexity $O(n^2)$