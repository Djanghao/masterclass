# 1 line Python solution

**Author:** xcv58
**Votes:** 149
**Link:** [https://leetcode.com/problems/h-index/solutions/71055/](https://leetcode.com/problems/h-index/solutions/71055/)

---

It's straightforward:

        return sum(i < j for i, j in enumerate(sorted(citations, reverse=True)))