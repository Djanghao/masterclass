# ✅ Simple Python Solution

**Author:** KG-Profile
**Votes:** 9
**Link:** [https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206993/](https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/solutions/5206993/)

---

# Code
```
class Solution:
    def queryResults(self, limit: int, queries: List[List[int]]) -> List[int]:
        b_colors = {}
        col_count = {}
        dis_colors = set()
        res = []

        for x, y in queries:
            if x in b_colors:
                old_color = b_colors[x]
                col_count[old_color] -= 1
                if col_count[old_color] == 0:
                    dis_colors.remove(old_color)

            b_colors[x] = y
            if y in col_count:
                col_count[y] += 1
            else:
                col_count[y] = 1
            dis_colors.add(y)
            
            res.append(len(dis_colors))
        
        return res
```