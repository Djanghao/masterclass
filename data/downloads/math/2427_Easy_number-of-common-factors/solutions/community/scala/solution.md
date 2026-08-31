# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-common-factors/solutions/3207626/](https://leetcode.com/problems/number-of-common-factors/solutions/3207626/)

---

# Code
```
object Solution {
  def commonFactors(a: Int, b: Int): Int =
    (1 to (a min b)).count{i => (a%i == 0) && (b%i == 0)}
}
```