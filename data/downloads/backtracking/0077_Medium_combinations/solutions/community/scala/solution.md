# Scala, too easy?

**Author:** deeds679
**Votes:** 1
**Link:** [https://leetcode.com/problems/combinations/solutions/2549968/](https://leetcode.com/problems/combinations/solutions/2549968/)

---

```
def combine(n: Int, k: Int): List[List[Int]] =
	(1 to n).toList.combinations(k).toList
```