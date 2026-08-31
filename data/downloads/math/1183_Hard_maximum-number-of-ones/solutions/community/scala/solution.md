# scala math

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-ones/solutions/4748030/](https://leetcode.com/problems/maximum-number-of-ones/solutions/4748030/)

---

# Complexity
- Time Complexity:
$$O(width * height)$$ for the nested loop that iterates over each cell in the matrix.
$$O(sideLength^2 * log(sideLength^2))$$ for sorting the counts of positions in the pattern. In the worst case, there are $$sideLength^2$$ unique positions, and sorting these takes $$O(n log n)$$ time, where $$n$$ is the number of unique positions.

The overall time complexity is dominated by the larger of these two, which is typically $$O(width * height)$$ for large matrices.

- Space Complexity
$$O(sideLength^2)$$ for storing the counts of each position in the repeating pattern. This is because there are at most sideLength^2 unique positions within the pattern.
The space complexity is primarily determined by the size of the map storing counts for each position in the repeating pattern.
# Code
```
import scala.collection.mutable

object Solution {
  /**
    * Calculate the maximum number of 1's that can be placed in a width x height matrix,
    * with a pattern repeating every sideLength, and only maxOnes 1's allowed in each pattern.
    *
    * @param width The width of the matrix.
    * @param height The height of the matrix.
    * @param sideLength The side length of the repeating pattern.
    * @param maxOnes The maximum number of ones allowed in the repeating pattern.
    * @return The maximum number of 1's that can be placed in the matrix following the given constraints.
    */
  def maximumNumberOfOnes(width: Int, height: Int, sideLength: Int, maxOnes: Int): Int = {
    val dict1 = mutable.Map[(Int, Int), Int]().withDefaultValue(0)

    for {
      i <- 0 until width
      j <- 0 until height
    } {
      val key = (i % sideLength, j % sideLength)
      dict1(key) = dict1(key) + 1
    }

    dict1.values.toSeq.sortWith(_ > _).take(maxOnes).sum
  }
}

```