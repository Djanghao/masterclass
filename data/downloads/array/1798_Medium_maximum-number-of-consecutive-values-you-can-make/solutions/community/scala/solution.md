# scala unfold oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5322334/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/5322334/)

---

same as "330. Patching Array" ( https://leetcode.com/problems/patching-array )
```
object Solution {
  def getMaximumConsecutive(coins: Array[Int]): Int =
    (1 +: LazyList.unfold((1,coins.toList.sorted)){case (num, l) =>
      //Option.unless(l.headOption.forall(num < _)){(num+l.head,(num+l.head, l.tail))}
      Option.when(l.headOption.exists(num >= _)){(num+l.head,(num+l.head, l.tail))}
    }).last
}
```