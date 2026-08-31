# Heads Up Algorithm! Solution without using DP or HashMap : 100% Runtime and Memory

**Author:** dvishal485
**Votes:** 2
**Link:** [https://leetcode.com/problems/scramble-string/solutions/3358003/](https://leetcode.com/problems/scramble-string/solutions/3358003/)

---

# Intuition
**Observations**
- When slicing at index `idx`, the left and right side of the `idx` must have the same count of characters.
- This will be true for all their sub-slices.
- In the end we will be be remaining with two same strings or two strings which are reverse of each other.
- We are not checking out "every" possible state, we smartly select which state to check which will lead to a smaller sub problem every time.
- If problem can't de divided into smaller sub problems, we eagerly exit and that state is never repeated again.
- This way, no two sub-problems will be overlapped, hence we need not to use DP.

# Approach
Do a recursive approach.

1. Check if strings are equal or are reversed.
2. Do a check of character count starting from left side of both string. The point where character count matches, do a recursive call on the left and right subslice.
3. If the result is `true`, then we got our solution, return it.
4. If result is `false` then do the same check but start from left of one right and the right of other.
5. Repeat this procedure until problem is solved.

# Complexity
- Leetcode Statistics (Rust):
**Runtime :** `0ms` (100%)
**Memory :** `2MB` (100%)
- Time complexity:
I am not totally sure, but I think it is $$O(n^2)$$.
Do point it out if you think it is wrong.

- Space complexity:
Recursion stack ($$O(n)$$)

# Code
```rust
impl Solution {
    pub fn is_scramble(s1: String, s2: String) -> bool {
        fn char_idx(c: u8) -> usize {
            // converts character byte to the array index (in range 0..=26)
            (c - b'a') as usize
        }

        fn is_good_slice(s1: &str, s2: &str) -> bool {
            // check if strings are same or are reverse of each other
            if s1.as_bytes().iter().eq(s2.as_bytes().iter())
                || s1.as_bytes().iter().eq(s2.as_bytes().iter().rev())
            {
                return true;
            }

            // gets the index where the subslice have same char count
            let mut left_count = [0; 26];
            let mut right_count = [0; 26];
            let idx = s2
                .as_bytes()
                .iter()
                .zip(s1.as_bytes().iter())
                .position(|(x, y)| {
                    left_count[char_idx(*x)] += 1;
                    right_count[char_idx(*y)] += 1;
                    left_count == right_count
                });

            let left_check = if let Some(idx) = idx {
                // if such an index exists, check if the slice is not the same slice as the input
                if idx != s1.len() - 1 {
                    // if it is a new subslice, return the status of these subslices
                    is_good_slice(&s1[..=idx], &s2[..=idx])
                        && is_good_slice(&s1[idx + 1..], &s2[idx + 1..])
                } else {
                    // not a new subslice, this means it would have called
                    // the function with same subslice and hence be in an
                    // infinite loop, so exit with false as solution doesn't exist
                    false
                }
            } else {
                // if such an index doesn't exists, it means the char
                // count of both is not the same, so exit with false
                false
            };
            if left_check {
                return true;
            }

            // if we get a false, we do the same process but with one of the strings reversed
            let mut left_count = [0; 26];
            let mut right_count = [0; 26];
            let idx = s2
                .as_bytes()
                .iter()
                .zip(s1.as_bytes().iter().rev())
                .position(|(x, y)| {
                    left_count[char_idx(*x)] += 1;
                    right_count[char_idx(*y)] += 1;
                    left_count == right_count
                });
            let right_check = if let Some(idx) = idx {
                let n = s2.len() - idx - 1;
                if idx != s1.len() - 1 {
                    is_good_slice(&s1[n..], &s2[..=idx]) && is_good_slice(&s1[..n], &s2[idx + 1..])
                } else {
                    false
                }
            } else {
                false
            };
            right_check
        }

        is_good_slice(&s1, &s2)
    }
}
```

This solution is called "Heads Up" Algorithm as it help me to keep my head up in society where people use DP to solve trivial problem.