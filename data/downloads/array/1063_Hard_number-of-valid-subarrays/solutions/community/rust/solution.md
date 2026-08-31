# Monotonic stack

**Author:** mperepelitsyn
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-subarrays/solutions/4098120/](https://leetcode.com/problems/number-of-valid-subarrays/solutions/4098120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Let a monotonically increasing stack represent starting indices of subarrays. Before pushing a new index $i$ to the stack, we pop the indices from the stack whose values are larger, i.e not satisfying the problem statement. The number of valid subarrays staring at $j$ is then $i - j$.

# Complexity
- Time complexity: $O(N)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(N)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn valid_subarrays(nums: Vec<i32>) -> i32 {
        let mut stack = Vec::new();
        let mut ret = 0;
        for (i, &n) in nums.iter().chain(std::iter::once(&-1)).enumerate() {
            while let Some(&j) = stack.last() {
                if nums[j] <= n { break }
                ret += i - j;
                stack.pop();
            }
            stack.push(i);
        }
        ret as _
    }
}
```