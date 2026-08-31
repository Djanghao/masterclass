# Scala 1-line solution

**Author:** minato_yukina
**Votes:** 4
**Link:** [https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1807397/](https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/solutions/1807397/)

---

```
object Solution {
    def average(salary: Array[Int]): Double = (salary.sum - salary.min - salary.max).toDouble / (salary.length - 2)
}
```