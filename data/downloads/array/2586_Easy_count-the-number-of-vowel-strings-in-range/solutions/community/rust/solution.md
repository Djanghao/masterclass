# 💥 Runtime beats 100.00%, Memory beats 75.00% [EXPLAINED]

**Author:** r9n
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5720511/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/5720511/)

---

# Intuition
You need to count how many strings within a specified range start and end with a vowel.

# Approach
Create a Set of Vowels: Use a set to quickly check if a character is a vowel.

Iterate Through the Range: For each string in the given range, check if it starts and ends with a vowel.

Count Valid Strings: Count strings that meet the vowel condition.

# Complexity
- Time complexity:
O(n): You check each string in the specified range, where n is the number of strings in the range.

- Space complexity:
O(1): The space used is constant, mainly for the vowel set.

# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn vowel_strings(words: Vec<String>, left: i32, right: i32) -> i32 {
        let vowels: HashSet<_> = ['a', 'e', 'i', 'o', 'u'].iter().copied().collect();

        (left as usize..=right as usize)
            .filter(|&i| {
                let word = &words[i];
                let first = word.chars().next().unwrap();
                let last = word.chars().last().unwrap();
                vowels.contains(&first) && vowels.contains(&last)
            })
            .count() as i32
    }
}

```