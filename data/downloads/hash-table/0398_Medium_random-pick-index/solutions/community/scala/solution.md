# Fast Scala solution, beats 100% in runtime and memory, too.

**Author:** dLuxHu
**Votes:** 0
**Link:** [https://leetcode.com/problems/random-pick-index/solutions/5380632/](https://leetcode.com/problems/random-pick-index/solutions/5380632/)

---

# Intuition
* Prepare a lookup map (target -> array_of_indices).

# Approach
* Prepare a lookup map (`idx`)
* Generate a random index out of all the indices at picking time.

# Complexity
- Time complexity:
$$O(1)$$ (not counting the setup time, which is $$O(n)$$)

- Space complexity:
$$O(n)$$

# Code
```
import scala.util.Random

class Solution(_nums: Array[Int]) {

  val idx = _nums.zip(0 until _nums.length).groupBy(_._1).view.mapValues(_.map(_._2)).toMap
  val random = new Random()

  def pick(target: Int): Int = {
    val indices = idx(target)
    indices(random.nextInt(indices.length))
  }

}
```