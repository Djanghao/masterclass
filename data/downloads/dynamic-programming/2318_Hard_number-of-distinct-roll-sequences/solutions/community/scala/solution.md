# Recursive with memoization

**Author:** norvinjunkins
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5004936/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/5004936/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Recursive search for all valid sequences.

# Approach
<!-- Describe your approach to solving the problem. -->
Each Sequence has a valid list of next elements based on the previous two.  Count the number of total sequences using a recurisive call, where ever leaf node in the tree depth n represents a sequence.  Use memoization to avoid calculating the same depth multiple times, and  to avoid stack overflow.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(k^n)$$ where k is some constant < 6


- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^3)$$ 
# Code
```
import scala.collection.mutable

object Solution {
    val hash = mutable.HashMap[(Int, Option[Int], Option[Int]), Int]()
    val MODULO = 1000000007
    val MAXSTACK = 500

    val addMod: (Int, Int) => Int = (acc, x) => (acc + (x % MODULO)) % MODULO

    val gcds: mutable.ArraySeq[List[Int]] = 
        mutable.ArraySeq(List(1,2,3,4,5,6),
                        List(2,3,4,5,6),
                        List(1,3,5),
                        List(1,2,4,5),
                        List(1,3,5),
                        List(1,2,3,4,6),
                        List(1,5))

    def distinctSequences(n: Int): Int = {
        // warm it up
        var i = MAXSTACK
        while (i < n) {
            distinctHelper(i)
            i += MAXSTACK
        }
        distinctHelper(n)
    }

    def distinctHelper(n: Int,
      prev: Option[Int] = None,
      prev2: Option[Int] = None): Int = {
        if (n == 0) {
            1
        } else {   
            hash.getOrElseUpdate((n, prev, prev2), {
                (prev, prev2) match {
                    case (None, _)  => // first call
                        gcds(0)
                            .map(d => distinctHelper(n-1, Some(d), None))
                            .foldLeft(0)(addMod)
                    case (Some(p1), None) =>
                        gcds(p1)
                            .map(d => distinctHelper(n-1, Some(d), Some(p1)))
                            .foldLeft(0)(addMod)
                    case (Some(p1), Some(p2)) =>
                        gcds(p1).filterNot(x => x == p2)
                            .map(d => distinctHelper(n- 1, Some(d), Some(p1)))
                            .foldLeft(0)(addMod)
                }
             })
        }
    }   
}
```