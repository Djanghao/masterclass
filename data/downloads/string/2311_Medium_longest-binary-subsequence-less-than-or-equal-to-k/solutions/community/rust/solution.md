# Rust easy greedy solution.

**Author:** mimanshu-maheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/6044684/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/6044684/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
As 0 prefixed string is also valid that means that we can take all the zero's 
Rest is left to increase the length is to see how many 1's we can take so that the value still remains less than equal to $$k$$.

# Approach
<!-- Describe your approach to solving the problem. -->
- count all ones which creates values less than k from last 
- count all the zeros
- return the sum of both


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where n is the length of string.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ no extra memory was used.

# Code
```rust []
impl Solution {

    // as string starting with 0 are also valid that means we can take all zeros
    // and if their are ones in between 
    // we take as many that the val is smaller that k
    pub fn longest_subsequence(s: String, k: i32) -> i32 {
        let mut val = 0;
        let mut count = 0;
        let mut pow = 1;
        // simple loop to count all the ones 
        // such that string is less that k
        for char_ in s.chars().rev() {
            if (val + pow > k) {
                break;
            }
            if char_ == '1' {
                count += 1;
                val += pow;
            }
            pow = pow << 1;
        }
        // adding 0's count
        count += s.chars().filter(|&v| v == '0').count();
        count as i32
    }
}
```