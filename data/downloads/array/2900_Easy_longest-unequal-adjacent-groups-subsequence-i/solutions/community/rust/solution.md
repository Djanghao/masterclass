# greedy!

**Author:** user5400vw
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5768997/](https://leetcode.com/problems/longest-unequal-adjacent-groups-subsequence-i/solutions/5768997/)

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
    pub fn get_longest_subsequence(words: Vec<String>, groups: Vec<i32>) -> Vec<String> {
        let mut result = Vec::new();
        let mut last_group = -1;

        for (word, &group) in words.iter().zip(groups.iter()) {
            if group != last_group {
                result.push(word.clone());
                last_group = group;
            }
        }

        result
    }
}
```