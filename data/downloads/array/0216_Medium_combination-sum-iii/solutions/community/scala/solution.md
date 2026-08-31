# 1 Liner Pure Functional Solution Simple

**Author:** Kalz337
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/5363973/](https://leetcode.com/problems/combination-sum-iii/solutions/5363973/)

---


```
def combinationSum3(k: Int, n: Int): List[List[Int]] = 
    (1 to 9).toList.combinations(k).filter(_.sum==n).toList
```