# Supposedly, this should fail, but it beat 100%

**Author:** pictographer
**Votes:** 0
**Link:** [https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/5182084/](https://leetcode.com/problems/last-substring-in-lexicographical-order/solutions/5182084/)

---

# Intuition
Finding the maximum element in an unordered collection is trivial. The elements are successive suffixes of the input.

# Approach
For each position in the input, compare the suffix beginning at this position to the lexicographically greatest suffix already encounterered.

# Complexity
- Time complexity:
$$O(n^2)$$

- Space complexity:
$$O(n)$$ - Only a constant amount of memory is needed in addition to the size of the input.

# Notes

There was a bug filed against the test cases for this problem with a long string of ababab... This test case was intended to cause inefficient algorithms like this one to exceed the time limit.

# Code
```
impl Solution {
    pub fn last_substring(s: String) -> String {
        let mut result = &s[..];
        for i in 1..s.len() {
            let candidate = &s[i..];
            if candidate > result {
                result = candidate
            }
        }
        result.to_string() 
    }
}
```