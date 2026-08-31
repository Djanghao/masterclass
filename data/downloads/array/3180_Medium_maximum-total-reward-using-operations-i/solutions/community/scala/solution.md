# scala oneliner

**Author:** vititov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5308759/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5308759/)

---

```scala
object Solution {
  def maxTotalReward(rewardValues: Array[Int]): Int =
    rewardValues.to(List).distinct.sorted.foldLeft(Set(0)){case (acc,curr) =>
      acc ++ acc.map(x => if(x<curr) x+curr else x)
    }.max
}


```