# Scala DP

**Author:** sblackmon
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/5954882/](https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/solutions/5954882/)

---

# Code
```scala []
object Solution {

    import scala.collection.mutable

    case class State(l : Int, r: Int)

    private val cache = mutable.Map.empty[State,Int]
    private var nums : Array[Int] = _
    private var multipliers: Array[Int] = _

    def mult(state: State): Int = multipliers(state.l + state.r)
    def subseq(state: State) = nums.view.slice(state.l,nums.length-state.r)

    def dp(state: State): Int = {
        if (state.l + state.r >= multipliers.length) then 0
        else if (cache.contains(state)) then cache(state)
        else {
            cache(state) =
                Math.max(
                    mult(state) * subseq(state).head + dp(State(l = state.l + 1, r = state.r)),
                    mult(state) * subseq(state).last + dp(State(l = state.l, r = state.r + 1))
                )
            cache(state)
        }
    }

    def maximumScore(nums: Array[Int], multipliers: Array[Int]): Int = {
        Solution.cache.clear()
        Solution.nums = nums
        Solution.multipliers = multipliers
        dp( State(0,0) )
    }

}
```