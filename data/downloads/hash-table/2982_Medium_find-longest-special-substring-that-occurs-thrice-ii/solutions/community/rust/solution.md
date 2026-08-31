# Rust iterator solution | 25ms

**Author:** stevenylai
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/6131322/](https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-ii/solutions/6131322/)

---

# Intuition
Keep the top 3 most frequent for each char. For example, for string "abacad", the freq for char 'a' is `[1, 1, 1]` since a single 'a' occurred 3 times. For string "aa", the freq for char 'a' is `[-1, 1, 1]` because 1 'a' occurred once and another 2 'a' occurred once.

To get the result, we use the min for the freq for each char. For the same example above, if there is only one "aa" in the string, the freq is `[-1, 1, 1]` and the min is `-1` since we don't have 3 occurrence for 'a'.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```rust []
impl Solution {
    pub fn maximum_length(s: String) -> i32 {
        let freq = s
          .chars()
          .scan(None, |last, c| {
            match *last {
                None => {
                    *last = Some((c, 1));
                },
                Some((c_p, k)) => {
                    if c == c_p {
                        *last = Some((c, k + 1));
                    } else {
                        *last = Some((c, 1))
                    }
                }
            }
            *last
          })
          .fold(vec![vec![-1; 3]; 26], |mut freq, (c, cnt)| {
            let idx = c as usize - 'a' as usize;
            let (min_idx, min_val) = freq[idx]
              .iter()
              .enumerate()
              .min_by_key(|(i, &n)| n)
              .unwrap();
            if cnt > *min_val {
                freq[idx][min_idx] = cnt;
            }
            freq
          });

        freq
          .into_iter()
          .map(|v| v.into_iter().min().unwrap())
          .max()
          .unwrap()
    }
}
```