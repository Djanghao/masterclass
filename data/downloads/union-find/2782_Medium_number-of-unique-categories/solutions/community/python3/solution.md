# Count duplicate numbers

**Author:** WayWardCC
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-unique-categories/solutions/3790792/](https://leetcode.com/problems/number-of-unique-categories/solutions/3790792/)

---

Straighforward solution
```
# Definition for a category handler.
# class CategoryHandler:
#     def haveSameCategory(self, a: int, b: int) -> bool:
#         pass
class Solution:
    def numberOfCategories(self, n: int, categoryHandler: Optional['CategoryHandler']) -> int:
        cnt = 0
        for i in range(1, n):
            for j in range(i):
                if categoryHandler.haveSameCategory(i, j):
                    cnt += 1
                    break
        
        return n - cnt
```