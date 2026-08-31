# Rust with Manacher's

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/5494771/](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/solutions/5494771/)

---

# Intuition
Manacher's is your great friend when working with palindromes!!!

# Approach
(Note that we enclose the string with 2 chars, for an easier implementation of the algorithm. e.g. `s = "ababbb"` becomes `s = "^ababbb$"` ).$

Use Manacher's algorithm to find the lengths of **all** palindrome substrings.
`mana[i]` means `s[i - j] == s[i + j]`, for all `0 <= j < mana[i]`.

Then use another Vec `longest` to record the longest palindrome found in a prefix.
`longest[j]` means `max(mana[i])` for all `i` where `i + mana[i] - 1 <= j`.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
use std::iter::once;

impl Solution {
    pub fn max_product(s: String) -> i64 {
        let bytes: Vec<u8> = once(b'^')
            .chain(s.bytes())
            .chain(once(b'$'))
            .collect();
        let mut mana = vec![0usize; bytes.len()];
        let mut left = 1;
        let mut right = 1;
        let mut ans = 1;
        let mut longest = vec![0usize; bytes.len()];
        for i in 1..mana.len() - 1 {
            longest[i] = longest[i].max(longest[i - 1]);
            mana[i] = mana[left + right - i].min(right - i);
            loop {
                longest[i + mana[i] - 1] =
                    longest[i + mana[i] - 1].max(mana[i]);
                let product = (2 * mana[i] as i64 - 1)
                    * (2 * longest[i - mana[i]] as i64 - 1);
                ans = ans.max(product);
                if bytes[i - mana[i]] != bytes[i + mana[i]] {
                    break;
                }
                mana[i] += 1;
            }
            if i + mana[i] > right {
                left = i - mana[i];
                right = i + mana[i];
            }
        }
        ans
    }
}
```