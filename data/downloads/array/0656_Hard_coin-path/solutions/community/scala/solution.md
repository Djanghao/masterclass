# Scala O(n * log(k)) heap solution

**Author:** giulio-dambrosio
**Votes:** 0
**Link:** [https://leetcode.com/problems/coin-path/solutions/4870594/](https://leetcode.com/problems/coin-path/solutions/4870594/)

---

# Intuition
Dynamic programming can be used to produce a solution that is $$O(nk)$$ where $$n$$ is the number of coins and $$k$$ is the max jump.
Proceeding backwards, one can pick the cheapest previously computed path up to $$k$$ steps forward from the current coin location.
Doing so repeats most of the work for every coin and every possible jump in the maximum range.
This can be avoided by keeping the $$kk$$ results sorted in a heap 

# Approach
1. account for corner cases: last coin not reachable and only one coin
2. setup a heap with only the last coin and a list of jumps containing the landing position only
3. iterate backwards
4. at each position, discard any jump at the top of the heap that is not anymore within reach
5. insert in the heap the new path including the current coin cost, the previous cost and the previous path
6. if the heap ends up empty, there is no path
7. if we reach the first coin, return the result

# Complexity
- Time complexity:
$$O(n log k)$$

- Space complexity:
$$O(k)$$

# Code
```
object Solution {
  import collection.mutable
  def cheapestJump(coins: Array[Int], maxJump: Int): List[Int] = {
    if (coins.last == -1) List.empty
    else if (coins.size == 1) List(1)
    else {
      val n = coins.length
      val landings = mutable.PriorityQueue(coins.last -> List(n))(Ordering.by(t => (-t._1, -t._2.head)))
      var i = n - 2
      while (i >= 0 && landings.nonEmpty) {
        // remove jumps beyond reach
        while (landings.headOption.exists(_._2.head - 1 - i > maxJump)) landings.dequeue
        val coin = coins(i)
        if (coin >= 0 && landings.nonEmpty) {
          // concatenate the current landing with the cheapest path so far
          val (cost, path) = landings.head
          val updatedCost = cost + coin
          val updatedPath = (i + 1) :: path
          if (i == 0) return updatedPath
          else landings.enqueue(updatedCost -> updatedPath)
        }
        i -= 1
      }
      List.empty
    }
  }
}
```