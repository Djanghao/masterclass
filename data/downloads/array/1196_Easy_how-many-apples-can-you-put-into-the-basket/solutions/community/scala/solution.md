# FP Scala solution

**Author:** bobojon2ov
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/1734915/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/1734915/)

---

```
def maxNumberOfApples(weight: Array[Int]): Int = {
    weight.sorted.scanLeft(0)(_ + _).count(x => x <= 5000) - 1
  }
```