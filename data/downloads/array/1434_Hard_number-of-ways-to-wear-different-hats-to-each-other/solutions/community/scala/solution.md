# Wand Chooses the Wizard - My Scala DP Solution

**Author:** HeavenWatcher
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2912674/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2912674/)

---

It is natural to think about solving the problem by a dynamic programming pattern where we define `dp[p][h]` to be the answer for people `[0...p]` choosing a set of hats represented by a bit map `h`. In such a case, the complexity of search space is `10 * 2 ^ 40`, and time complexity is `O(h * n * 2 ^ h)`, too large to run within the time limit.
Let `dp[h][p]` be the answer for hats `[0...h]` choosing their owners from a set of people represented by bit map `p`, then the search space is `40 * 2 ^ 10`, fast enough to pass the tests.
```Scala
import scala.collection.mutable.HashMap
object Solution {
    def numberWays(hats: List[List[Int]]): Int = { 
        /* hat => a list of people it can choose */
        val people = hats.zipWithIndex.flatMap(x => x._1.map((_, x._2)))
            .groupBy(_._1).mapValues(_.map(_._2)).toMap.withDefaultValue(Nil)
        
        def mem[I, O](f: I => O) = new HashMap[I, O]() {
            override def apply(key: I) = getOrElseUpdate(key, f(key))
        }
        
        lazy val dp: ((Int, Int)) => Int = mem {
            case (0, p) => if (p == 0) 1 else 0
            /* a hat can choose no person, as reflected by dp(h - 1, p) */
            case (h, p) => (dp(h - 1, p) :: people(h).filter(x => ((1 << x) & p) != 0)
                .map(x => dp(h - 1, ~(1 << x) & p))).reduce((x, y) => (x + y) % (1e9 + 7).toInt)
        }
        
        dp(40, (1 << hats.size) - 1)
    }
}
```