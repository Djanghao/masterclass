# [scala] - compare right border of the window with TreeSet of elements to the left

**Author:** nikiforo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3907578/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3907578/)

---

I am deeply concerned by the amount of attention given to Scala. Please submit your solutions and upvote.

# Intuition
The task is to find the minimum absolute difference between two elements in the array that are at least x indices apart. The task is equal to the following: `Iterate over all elements that are exactly x indices apart. Find the minimum absolute difference between the right border and all the elements you've seen to the left of the border`.

`nums.zip(nums.drop(x))` provides us with a collection of all pairs that are `exactly x indices apart`.

`foldLeft` iterates over the pairs and accumulates state.

In `evalFold`, we maintain the state. We put the left border into a collection (`set`) and compare the right border to each element in that collection. `TreeSet` is used to effectively (log N) search for the closest elements seen to the left.

# Code
```
object Solution {

  import scala.collection.immutable.TreeSet

  def minAbsoluteDifference(nums: List[Int], x: Int): Int =
    nums.zip(nums.drop(x)).foldLeft((TreeSet.empty[Int], Int.MaxValue))(evalFold)._2

  private def evalFold(state: (TreeSet[Int], Int), elem: (Int, Int)) = {
    val ((set, min), (left, right)) = (state, elem)
    val nSet = set + left
    val diffs = List(nSet.maxBefore(right), nSet.minAfter(right)).flatten.map(n => math.abs(right - n))
    (nSet, (min :: diffs).min)
  }
}
```