# [Python] 1-Liner Solution

**Author:** lee215
**Votes:** 22
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3419979/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/3419979/)

---

# **Explanation**
transpose the grid `zip(*A)` first,
then get the string length of each element,
return the max length of each row.
<br>


**Python**
```py
    def findColumnWidth(self, A: List[List[int]]) -> List[int]:
        return [max(len(str(a)) for a in r) for r in zip(*A)]
```
