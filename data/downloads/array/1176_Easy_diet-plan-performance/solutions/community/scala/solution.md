# scala two-pointers, sliding windows

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/diet-plan-performance/solutions/5247009/](https://leetcode.com/problems/diet-plan-performance/solutions/5247009/)

---

# Intuition
The problem involves tracking the performance of a diet plan based on calorie intake over fixed windows of days. The goal is to slide a window of size `k` across the `calories` array and calculate points based on whether the total calorie intake within the window is below `lower` or above `upper` thresholds. The first thought is to use a sliding window technique to efficiently manage the sum of elements within the window and calculate the points accordingly.

# Approach
1. **Initialize Pointers and Variables**: Use two pointers (`left` and `right`) to represent the current window in the `calories` array, along with variables to track the running sum of the window and the total points.
2. **Slide the Window**: Expand the window by moving the `right` pointer and updating the running sum with the value at the `right` pointer.
3. **Evaluate Window**: Once the window reaches size `k`, evaluate the sum:
   - If the sum is less than `lower`, decrement points.
   - If the sum is greater than `upper`, increment points.
   - Adjust the running sum by removing the value at the `left` pointer and then increment `left` to slide the window forward.
4. **Continue Sliding**: Repeat the process until the `right` pointer reaches the end of the array.
5. **Return Points**: After processing all possible windows, return the total points.

# Complexity
- Time complexity:
  The time complexity is $$O(n)$$, where \\(n\\) is the length of the `calories` array. This is because each element is added to the running sum once and removed once, resulting in a linear time complexity.

- Space complexity:
  The space complexity is $$O(1)$$ since we only use a constant amount of extra space for variables (`left`, `right`, `runningSum`, `points`), regardless of the input size.


# Code
```
object Solution {
  def dietPlanPerformance(calories: Array[Int], k: Int, lower: Int, upper: Int): Int = {
    val n = calories.length
    var left = 0
    var right = 0
    var runningSum = 0
    var points = 0

    while (right < n) {
      runningSum += calories(right)

      if (right - left + 1 == k) {
        if (runningSum < lower) {
          points -= 1
        } else if (runningSum > upper) {
          points += 1
        }

        runningSum -= calories(left)
        left += 1
      }

      right += 1
    }

    points
  }
}
```