# Rust 0ms - 100% O(n) time - O(1) space.

**Author:** raul-sauco
**Votes:** 1
**Link:** [https://leetcode.com/problems/patching-array/solutions/5321233/](https://leetcode.com/problems/patching-array/solutions/5321233/)

---

# Intuition

We need to provide a way to set each bit of n. We cannot skip values on the sequence 1, 2, 4, 8, 16... or a way to add up to them. We can greedily make sure that we can add up, using the current values to the next value - 1, if we cannot, we need to "patch" a value.

# Approach

This solution adds n to the end of the input vector nums. Then iterates over the values until the sum >= n.

I tried to use saturating_add for the test case where n=2^32-1, but it was complicated and I ended using i64s for the sum, that made the code simpler.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
impl Solution {
    pub fn min_patches(nums: Vec<i32>, n: i32) -> i32 {
        let n = n as i64;
        let mut current_sum = 0;
        let mut patches = 0;
        for num in nums.into_iter().map(|x| x as i64).chain(std::iter::once(n)) {
            if current_sum >= n {
                break;
            }
            while num > current_sum + 1  && current_sum < n {
                patches += 1;
                current_sum += current_sum + 1;
            }
            current_sum += num;
        }
        patches
    }
}
```