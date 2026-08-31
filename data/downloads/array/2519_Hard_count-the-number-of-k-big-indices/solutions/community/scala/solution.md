# scala code with explanations

**Author:** urbanclimatefr
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4782052/](https://leetcode.com/problems/count-the-number-of-k-big-indices/solutions/4782052/)

---

# Approach

To solve the problem, we'll iterate through each index i in the nums array and count the number of indices to the left and right of i that contain elements smaller than nums[i]. We'll use two auxiliary arrays, leftSmaller and rightSmaller, to keep track of these counts for each index. Here's a step-by-step approach and the corresponding Scala code:

1. Initialize two arrays, leftSmaller and rightSmaller, of the same length as nums, filled with zeros. These will hold the count of smaller elements to the left and right for each index, respectively.

2. Fill the leftSmaller array: For each index from left to right, count the number of smaller elements to its left.

3. Fill the rightSmaller array: For each index from right to left, count the number of smaller elements to its right.

4. Count k-big indices: Iterate through each index and check if both leftSmaller[i] and rightSmaller[i] are greater than or equal to k. If so, increment a counter.

5. Return the counter as the number of k-big indices.

# Complexity
- Time complexity:
 $$O(n^2)$$, where $$n $$ is the length of the nums array. This is because for each element, we iterate over the elements to its left and right, leading to a quadratic time complexity.

- Space complexity:
$$O(n)$$, due to the additional arrays (leftSmaller and rightSmaller) we use, each of which has a length equal to the input array nums.

# Code
```
object Solution {
  def kBigIndices(nums: Array[Int], k: Int): Int = {
    val n = nums.length
    val leftSmaller = new Array[Int](n)
    val rightSmaller = new Array[Int](n)

    // Update leftSmaller for each element
    for (i <- nums.indices) {
      var count = 0
      for (j <- 0 until i) {
        if (nums(j) < nums(i)) count += 1
      }
      leftSmaller(i) = count
    }

    // Update rightSmaller for each element
    for (i <- nums.indices.reverse) {
      var count = 0
      for (j <- i + 1 until n) {
        if (nums(j) < nums(i)) count += 1
      }
      rightSmaller(i) = count
    }

    // Count and return the number of k-big indices
    (for (i <- nums.indices if leftSmaller(i) >= k && rightSmaller(i) >= k) yield 1).sum
  }
}

```