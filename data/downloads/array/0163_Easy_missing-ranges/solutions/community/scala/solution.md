# scala code with comments

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/missing-ranges/solutions/4529421/](https://leetcode.com/problems/missing-ranges/solutions/4529421/)

---

# Complexity
- Time complexity:
$$O(n)$$ 
The overall time complexity is dominated by the iteration over the array, making it O(n).

- Space complexity:
$$O(n)$$ 
The space complexity is primarily due to the ListBuffer used to store the missing ranges.
# Code
```
import scala.collection.mutable.ListBuffer

object Solution {
  // Function to find missing ranges in an array
  def findMissingRanges(nums: Array[Int], lower: Int, upper: Int): List[List[Int]] = {
    // Initialize a list buffer to store the missing ranges
    val answer = new ListBuffer[List[Int]]()

    // Set the previous number as one less than the lower bound
    var prev = lower.toLong - 1

    // Iterate through the array of numbers
    for (num <- nums) {
      // If the current number is more than one greater than the previous number,
      // there is a missing range
      if (num - prev > 1) answer += List((prev + 1).toInt, num - 1)

      // Update the previous number to the current number
      prev = num.toLong
    }

    // After processing all numbers, check if there is a missing range at the end
    if (upper - prev > 0) answer += List((prev + 1).toInt, upper)

    // Convert the ListBuffer to a List and return it
    answer.toList
  }
}

```