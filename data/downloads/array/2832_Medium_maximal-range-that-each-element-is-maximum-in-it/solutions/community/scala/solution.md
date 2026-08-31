# Scala stack

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/5367960/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/5367960/)

---

# Intuition
The problem requires finding the maximum length of ranges for each element in the input array nums where each range is defined as the longest subarray starting from the current element and ending before the first element greater than the current element. The stack can be used to keep track of elements in a decreasing order to efficiently compute these ranges.

# Approach

- Use a stack to maintain pairs of (index, value) in decreasing order of values.
- Append a very large number to the end of the array to ensure the last element is processed.

- For each element in the array, if the stack is not empty and the current element is greater than the element at the top of the stack, pop the stack and compute the range for the popped element.
- The range length for the element at index idx is calculated as the difference between the current index and the index of the new top element of the stack (or -1 if the stack is empty) minus one.
- Push the current element and its index onto the stack.

# Complexity
- Time complexity:
$$O(n)$$
- Space complexity:
$$O(n)$$

# Code
```
object Solution {
  def maximumLengthOfRanges(nums: Array[Int]): Array[Int] = {
    val n = nums.length
    val ans = Array.fill(n)(0)
    val stack = scala.collection.mutable.Stack[(Int, Int)]() // (idx, val) in decreasing order
    
    // Append a very large number to the end of the array
    val extendedNums = nums :+ Int.MaxValue

    for (i <- extendedNums.indices) {
      val num = extendedNums(i)
      while (stack.nonEmpty && stack.top._2 < num) {
        val (idx, _) = stack.pop()
        val left = if (stack.isEmpty) -1 else stack.top._1
        ans(idx) = i - left - 1
      }
      stack.push((i, num))
    }

    ans
  }
}

```