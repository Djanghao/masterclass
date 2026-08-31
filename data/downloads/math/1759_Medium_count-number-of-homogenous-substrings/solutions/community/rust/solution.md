# 0ms 2.33 MB O(n) single-pass running count scan (sliding window alternate) with iterator adapters

**Author:** UrzaMancer
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266702/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266702/)

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
```
#[derive(Debug)]
struct SubstringCount {
    repeated_letter_count: i32,
    letter: char,
}

impl SubstringCount {
    pub fn new() -> Self {
        Self {
            repeated_letter_count: 0,
            letter: '.',
        }
    }
}

// if we count x letters in a row, there are y homogenous substrings contained within:
// x = 1, y = 1
// x = 2, y = 1 (2-len) + 2 (1-len) = 3
// x = 3, y = 1 (3-len) + 2 (2-len) + 3 (1-len) = 6
// x = 4, y = 1 (4-len) + 2 (3-len) + 3 (2-len) + 4 (1-len) = 10
// x = 5, y = 1 (5-len) + 2 (4-len) + 3 (3-len) + 4 (2-len) + 5 (1-len) = 15
// x = n, y = TR(n) = n * (n + 1) / 2: Triangular numbers

// So we count how many times we see a letter in a row, then when it changes, we take the total as x, calculate y = TR(x), add that to the total count, and reset the counter to 0

// We can do this in one pass: nothing matters before or after we finish calculating a substring.

// EXCEPT, we don't have to calculate, we can just add the number of times we have seen the same character in a row, every time we see it again. This works out to the same result as TR(x):

// "zzzzzz" (len: 6) -> TR(6) = 6 * 7 / 2 = 21
// "123456" -> 1 + 2 + 3 + 4 + 5 + 6 = 21

// "abbcccaa" -> "11212312" -> 1 + 1 + 2 + 1 + 3 + 1 + 2 = 13

impl Solution {
    pub fn count_homogenous(s: String) -> i32 {
        Self::count_homogenous_mod(&s) as i32 
    }

    fn count_homogenous_mod(s: &str) -> i64 {
        s.chars()
            .scan(SubstringCount::new(), |count, letter| {
                //println!("{:?}", count);
            match letter == count.letter {
                true => { 
                    count.repeated_letter_count += 1;
                    Some(count.repeated_letter_count as i64)
                },
                false => {
                    count.repeated_letter_count = 1;
                    count.letter = letter;
                    Some(1i64)
                }
            }})
            .sum::<i64>() % (1_000_000_007i64)
        // 44_721 is the rollover point:
        // TR(44_720) = 999_961_560
        // TR(44_721) = 1_000_006_281
        // so a string with len 44_721 all same character should modulo 6_274
        // max string size is 100_000
        // TR(100_000) = 5_000_050_000
    }
}

/* Test cases
"abbcccaa"
"xy"
"zzzzz"
"ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
"cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
"xxx ... xxx" (len: 44_721)
"xxx ... xxx" (len: 100_000)
*/
```

shoutout: https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266514/sliding-window/

