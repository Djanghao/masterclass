# Scala FP: just split, count & math

**Author:** SerhiyShaman
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5225312/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5225312/)

---

# Code
```
object Solution {
  def numSteps(s: String): Int = 
    s.length match {
      case len if s.tail.forall(_ == '0') => len - 1
      case len =>
        val internalZeroGroups = s"${s}0".split('1').init.filterNot(_.isEmpty)
        val zeroGroupsCount = internalZeroGroups.length
        val nonFirstZerosCount = internalZeroGroups.foldLeft(-zeroGroupsCount)(_ + _.length) 

        len + (zeroGroupsCount + 1 /* = oneGroupsCount */) + nonFirstZerosCount 
    }
}
```