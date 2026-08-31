# [Rust] Simple brute force solution | 1ms

**Author:** wf5432
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3817373/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3817373/)

---

# Approach
For each combination of starting indices `i` and `j`, we add characters to the substrings starting from `s[i]` and `t[j]` until they differ by more than one character. As long as the substrings differ by only one character, we add 1 to the answer.

# Complexity
- Time complexity:
$$O(n^3)$$ with $n = \\min(s.len(), t.len())$

- Space complexity:
$$O(1)$$


# Code
```
impl Solution {
    pub fn count_substrings(s: String, t: String) -> i32 {
        let mut ans = 0;
        let sb = s.as_bytes();
        let tb = t.as_bytes();

        for start_i in 0..s.len() {
            for start_j in 0..t.len() {
                let mut differs = false;
                for k in 0..((s.len() - start_i).min(t.len() - start_j)) {
                    if sb[start_i + k] != tb[start_j + k] {
                        if !differs {
                            differs = true;
                        } else {
                            break;
                        }
                    }
                    ans += differs as i32;
                }
            }
        }

        ans
    }
}

```