# Rust no semicolon

**Author:** budianpaowonanshou
**Votes:** 0
**Link:** [https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/6073663/](https://leetcode.com/problems/triples-with-bitwise-and-equal-to-zero/solutions/6073663/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
impl Solution {
    pub fn count_triplets(nums: Vec<i32>) -> i32 {
        (0..nums.len())
            .fold(
                (
                    (0..nums.len()).fold(std::collections::HashMap::with_capacity(10000), |mut map, i| {
                        (0..nums.len())
                            .for_each(|j| *map.entry(nums[i] & nums[j]).or_insert(0) += 1);
                        map
                    }),
                    0,
                ),
                |(map, mut sum), i| {
                        for (&k, &v) in &map {
                            if k & nums[i] == 0 {
                                sum += v
                            }
                        }
                        (map, sum)
                },
            )
            .1
    }
}
```