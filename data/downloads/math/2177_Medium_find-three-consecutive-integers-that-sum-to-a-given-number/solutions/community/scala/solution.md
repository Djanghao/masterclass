# scala solution.

**Author:** lyk4411
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2105349/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/2105349/)

---

```
  def sumOfThree(num: Long): Array[Long] = num % 3 == 0 match {
    case false => Array()
    case _ => Array(num/3 - 1,num/3,num/3 + 1)
  }
```