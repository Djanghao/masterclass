# scala sliding window with explanations

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4782028/](https://leetcode.com/problems/minimum-swaps-to-group-all-1s-together/solutions/4782028/)

---

# Approach
To solve the given problem in Scala, we can use a sliding window approach. The idea is to find the minimum number of swaps needed to group all 1's together in the array. This can be translated to finding the window of size equal to the number of 1's in the array that contains the most 1's. The minimum number of swaps will then be the size of this window minus the number of 1's within it.

# Complexity
- Time complexity:
$$O(n)$$: We iterate through the array once with two pointers, where $$n$$ is the length of the array. Each element is visited at most twice (once by each pointer), leading to a linear time complexity.

- Space complexity:
$$O(1)$$: The solution uses a constant amount of extra space for variables, regardless of the input size.

# Code
```
object Solution {
  /**
    * Finds the minimum number of swaps required to group all 1\u2019s together.
    *
    * @param data The input binary array.
    * @return The minimum number of swaps required.
    */
  def minSwaps(data: Array[Int]): Int = {
    // Count the total number of 1's in the array.
    val totalOnes = data.count(_ == 1)
    
    // Variables to keep track of the maximum number of 1's found in a window
    // and the current number of 1's in the current window.
    var maxOnesInWindow = 0
    var currentOnesInWindow = 0
    
    // Two pointers for the sliding window.
    var left = 0
    var right = 0
    
    // Iterate through the array with the right pointer.
    while (right < data.length) {
      // Add the current element to the current window count if it's a 1.
      currentOnesInWindow += data(right)
      
      // If the window size exceeds the total number of 1's, slide the window:
      // - Subtract the left element from the window count if it's a 1.
      // - Increment the left pointer to shrink the window from the left.
      if (right - left + 1 > totalOnes) {
        currentOnesInWindow -= data(left)
        left += 1
      }
      
      // Update the maximum number of 1's found in a window.
      maxOnesInWindow = maxOnesInWindow.max(currentOnesInWindow)
      
      // Move the right pointer to expand the window to the right.
      right += 1
    }
    
    // The minimum swaps required is the total number of 1's minus
    // the maximum number of 1's found in any window of size equal to the total number of 1's.
    totalOnes - maxOnesInWindow
  }
}
```