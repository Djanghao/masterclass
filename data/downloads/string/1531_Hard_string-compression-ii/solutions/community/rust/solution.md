# Rust | Top-Down DP | With Comments

**Author:** wallicent
**Votes:** 4
**Link:** [https://leetcode.com/problems/string-compression-ii/solutions/2705611/](https://leetcode.com/problems/string-compression-ii/solutions/2705611/)

---

I didn't have a lot of time to solve this today for the Daily Problem challenge, so I went for a top-down solution just to keep my streak. Still, this sort of quick-and-dirty solution got 100%/100%, so it's not that bad. :) And top-down solutions are generally the first place to start to understand how to implement the bottom-up, so I hope this offers some intuition for anyone reading this. OK, enough with the excuses. :)

Our DP state is the number of characters taken so far (`i`), the last/previous character (`last`), the current running count of that character (`cnt`) and the number of deletions performed so far (`j`). The interpretation of the `dp` function then becomes the minimum additional characters that must be added to the compressed output. The base case, when `i == s.len()` is that we need to add zero additional characters. For every other combination of the state, we have a few alternatives to choose from.

1. We can add the current character without any compression. This adds 1 to the output length. We reset the running count to one for this single character, and do not consume any deletions.
2. If this character is the same as the last, we can do RLE of this character. In that case, we save one character if the number of digits of the running count stays the same after we add 1 to it. We add 1 to the running count, and do not consume any deletions.
3. If we have made fewer than `k` deletions, we can skip this character. We save one character, and consume one deletion. The last character and the running count stay the same.

The recursion is kicked off with `b'A'` as the `last` character to ensure that no RLE is considered for the first character of `s`.

```
use std::collections::HashMap;

impl Solution {
    fn dp(s: &[u8], k: usize, i: usize, last: u8, cnt: usize, j: usize, memo: &mut HashMap<(usize, u8, usize, usize), i32>) -> i32 {
        if i == s.len() {
            0
        } else if let Some(additional_len) = memo.get(&(i, last, cnt, j)) {
            *additional_len
        } else {
            let b = s[i];
            let mut rez = 1 + Self::dp(s, k, i + 1, b, 1, j, memo);
            if last == b {
                let comp = if cnt != 1 && cnt != 9 && cnt != 99 {
                    Self::dp(s, k, i + 1, b, cnt + 1, j, memo)
                } else {
                    1 + Self::dp(s, k, i + 1, b, cnt + 1, j, memo)
                };
                rez = rez.min(comp);
            }
            if j < k {
                rez = rez.min(Self::dp(s, k, i + 1, last, cnt, j + 1, memo));
            }
            memo.insert((i, last, cnt, j), rez);
            rez
        }
    }

    pub fn get_length_of_optimal_compression(s: String, k: i32) -> i32 {
        Self::dp(s.as_bytes(), k as usize, 0, b'A', 0, 0, &mut HashMap::new())
    }
}
```