# Dynamic Programming Beats 100% - Counting Monotonic Pairs in Arrays

**Author:** galin-chung-nguyen
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5620603/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5620603/)

---

![Screenshot 2024-08-11 at 15.13.02.png](./images/0.png)

### Problem Statement
Given an array $nums$ of positive integers, we want to count the number of possible pairs of two arrays $arr1$ and $arr2$ of non-negative integers such that:

0. $0 \\leq nums[i] \\leq 1000$
1. $arr1$ is a non-decreasing array.
2. $arr2$ is a non-increasing array.
3. The sum of corresponding elements in $arr1$ and $arr2$ equals the corresponding element in $nums$, i.e., $arr1[i] + arr2[i] == nums[i]$.

### Intuition
The problem is asking us to form pairs of arrays $arr1$ and $arr2$ under the constraints provided. A brute-force approach would involve checking all possible pairs, but this would be inefficient due to the exponential number of possible combinations.

Instead, we can use dynamic programming (DP) to solve the problem efficiently. The idea is to build solutions for smaller subproblems and combine them to solve the larger problem.

### Dynamic Programming Approach
Let's define a DP table $f[i][x] (0 \\leq i \\leq n - 1, 0 \\leq x \\leq 1000$:

- $f[i][x]$ represents the number of valid monotonic pairs of length $i+1$ where the last element of $arr1$ is $x$ and the last element of $arr2$ is $nums[i] - x$.

Given the above definition, we can break down the problem recursively:

1. **Base Case**: 
   - For the first element $nums[0]$, any pair $(arr1[0], arr2[0])$ where $arr1[0] = x$ and $arr2[0] = nums[0] - x$ is valid. Therefore, we initialize:
     $$
     f[0][x] = 1 \\quad \	ext{for all } x \\in [0, nums[0]]
     $$

2. **Recurrence Relation**:
   - To fill $f[i][x]$, we need to sum all possible valid pairs from the previous index $i-1$. This can be expressed as:
     $$
     f[i][x] = \\sum_{prevX=0}^{\\min(x, x - nums[i] + nums[i-1])} f[i-1][prevX] \\quad (1)
     $$
   - Here, $prevX$ must satisfy:
     - $prevX \\leq x$, ensuring $arr1$ is non-decreasing.
     - $nums[i-1] - prevX \\geq nums[i] - x \\iff preV \\leq x - nums[i] + nums[i - 1]$, ensuring $arr2$ is non-increasing.
     - => $prevX \\leq min(x, x - nums[i] + nums[i - 1])$

3. **Optimizing with Prefix Sums**:
   - To efficiently calculate the sum, for each iteration $i$ when we build $f[i][..]$, we can use a prefix sum array:
     $$
     \	ext{prefixSum}[y] = \\sum_{j=0}^{y} f[i-1][j]
     $$
   - With this, the recurrence $(1)$ becomes:
     $$
     f[i][x] = \	ext{prefixSum}[\\min(x, x - nums[i] + nums[i-1])]
     $$
    + Remember if $x - nums[i] + nums[i-1] < 0$, we can ignore this calculation because the index would be invalid (negative)

4. **Final Calculation**:
   - After filling the DP table, the result is the sum of all valid pairs at the last index $n-1$:
     $$
     \	ext{result} = \\sum_{x=0}^{nums[n - 1]} f[n-1][x]
     $$

# Complexity
- Time complexity: $O(n * 1000)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: $O(n * 1000)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Reference Implementation in Rust:
```rust
impl Solution {
  pub fn count_of_pairs(nums: Vec<i32>) -> i32 {
    let MOD = 1_000_000_007;

    let n = nums.len();
    let mut countMonotonicPairs = vec![vec![0; 1001]; n];

    // calculate countMonotonicPairs[0][x] for x in 0..=1000
    for x in 0..=nums[0] {
      countMonotonicPairs[0][x as usize] = 1;
    }

    for i in 1..=n - 1 {
      let mut prefixSum = vec![0; 1001];
      for x in 0..=1000 {
        if x > 0 {
          prefixSum[x] = prefixSum[x - 1] + countMonotonicPairs[i - 1][x];
        } else {
          prefixSum[x] = countMonotonicPairs[i - 1][x];
        }
        prefixSum[x] %= MOD;
      }
      for x in 0..=nums[i] {
        let left = x;
        let right = x - nums[i] + nums[i - 1];
        let threshold = if left < right { left } else { right };
        if threshold >= 0 {
          countMonotonicPairs[i][x as usize] = prefixSum[threshold as usize];
        }
      }
    }

    let mut res = 0;
    for x in 0..=nums[n - 1] {
      res += countMonotonicPairs[n - 1][x as usize];
      res %= MOD;
    }

    return res;
  }
}
```

# Follow-up
How can we optimize this even further? Can we optimize the recurrence formula or derive a lightweight math formula? Let's think about that.

### Conclusion
This solution efficiently computes the number of valid monotonic pairs by using dynamic programming with prefix sums. Good luck and get AC.
