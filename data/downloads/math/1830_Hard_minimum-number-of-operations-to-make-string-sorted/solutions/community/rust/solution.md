# Rust bottom-up DP-ish solution

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/5262353/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/5262353/)

---

Use a variable `perm` to store the intermediate result of the number of unique permutations.
# 1.
Given a list of lowercase characters, the number of unique permutations can be calculated with a formula:

`(length of list)! / product of (freq[ch]!) for each ch`

Where `freq[ch]` means the number of occurrence of `ch`. e.g.
```
# with s = "abcbab",
# ch |freq
# --------
# 'a'|  2
# 'b'|  3
# 'c'|  1
# Number of unique permutations = 6! / (2! * 3! * 1!) = 60
```
An interesting fact is that, when we add a character `ch` to the list, the number of unique permutation can be found easily by multiplying it by `(new length) / (new freq[ch])`.
e.g. with `t = s + "a" = "abcbaba"`, because `freq[a]` becomes 3, the number of unique permutations for `t` = `60 * 7 / 3 = 140`.

This property can be also applied for the case when a character is **removed**.
# 2.
Let's say we know the answer for `s` (let it be `dp[s]`).

Then consider `s2 = ch + s`, meaning `s2` is another string formed by prepending a character `ch` to `s`.

The answer for `s2` will be also `dp[s]`, if `ch` is the smallest character inside `s2`.

Otherwise, `dp[s]` operations will transform `s2` to a format of `ch + asc`, where `asc` is sorted in ascending order.

From this point, we will want to further transform `ch + asc` to a format of `ch2 + asc2`, where `ch2` is "the largest character which is smaller than `ch`", and `asc2` is also sorted in ascending order.
(e.g.: From `"d" + "abce"` to `"c" + "abde"`.)

Thanks to the hints, we will calculate the number of unique permutations of the **remaining characters**(`"abde"` for the above example), and this will be exactly the number of operations needed to transform `ch + asc` to `ch2 + asc2`.

This process will be repeated, until the 1st character becomes the smallest. (i.e. `s2` is sorted.)

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

The size of, and iterating through the array `count` is considered $$O(1)$$ here.

# Code
```
const LARGE: i64 = 1_000_000_007;

impl Solution {
    pub fn make_string_sorted(s: String) -> i32 {
        let mut perm = 1i64;
        let mut ans = 0i64;
        let mut count = [0i64; 26];
        for (i, b) in s.bytes().rev().enumerate() {
            let j = (b - b'a') as usize;
            count[j] += 1;
            if i > 1 {
                perm = (perm * i as i64) % LARGE;
            }
            if count[j] > 1 {
                perm = (perm * Self::inv(count[j])) % LARGE;
            }
            // for k in 0..j {
            //     if count[k] != 0 {
            //         ans = (ans + perm * count[k]) % LARGE;
            //     }
            // }
            // *** can be simplified to: ***
            let count_sum = count[..j].iter().sum::<i64>() % LARGE;
            ans = (ans + perm * count_sum) % LARGE;
        }
        ans as i32
    }

    fn inv(mut x: i64) -> i64 {
        let mut pow = LARGE - 2;
        let mut ans = 1;
        while pow != 0 {
            if (pow & 1) == 1 {
                ans = (ans * x) % LARGE;
            }
            x = (x * x) % LARGE;
            pow >>= 1;
        }
        ans
    }
}
```