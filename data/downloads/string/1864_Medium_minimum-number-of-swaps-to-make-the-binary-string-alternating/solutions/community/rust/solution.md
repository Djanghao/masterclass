# simple solution

**Author:** theyta
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5609273/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/5609273/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    // possible iff no. of 0s and 1s within 1 of each other
    // if impossible just ret -1
    // else just check how many chars are different from 10101010...
    // to get no of chars different from 01010101... just do len - diff
    // each 2 in these differences represents a swap. so take smallest even of the two and div 2
    pub fn min_swaps(s: String) -> i32 {
        // could use `if` instead of `match`, but i prefer the extra safety of the `unreachable` clause
        if s.bytes().map(|x| match x {
            b'0' => -1,
            b'1' => 1,
            _ => unreachable!(),
        // not a big fan of using abs here but i dont want to use contains or nested match blocks to check for `-1|0|1`
        }).sum::<i32>().abs() > 1 { 
            return -1;
        }

        let diff = s.bytes()
            .zip("01".bytes().cycle())
            .filter(|(s_char, alternating_char)| s_char != alternating_char )
            .count();

        // couldnt think of a better way of finding smallest even
        ([diff, s.len() - diff].into_iter()
            .filter(|d| d % 2 == 0)
            .min()
            // b, n-b both odd iff b odd n even. if n even then b even by starting `if` statment
            // therefore there will be a minimum, and so we can unwrap safely
            .unwrap() >> 1) as i32
    }
}
```