# Rust Solution

**Author:** abhineetraj1
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5852354/](https://leetcode.com/problems/count-of-substrings-containing-every-vowel-and-k-consonants-i/solutions/5852354/)

---

# Intuition

To solve the problem, I first thought about how to efficiently count substrings that contain all five vowels and a specific number of consonants. The task requires checking various substrings of a given word and tracking the vowels and consonants.

# Approach
*    **Sliding Window**: I used a nested loop where the outer loop sets the starting index of the substring and the inner loop extends to the end index, checking each character.
*    **Tracking Vowels and Consonants**: I maintained a HashSet to track unique vowels found in the current substring and a counter for consonants.
*    **Conditions**: For each character added, I checked if all five vowels were present and if the consonant count matched k. If both conditions were met, I incremented the count of valid substrings.
*    **Early Termination**: If the consonant count exceeds k, I break out of the inner loop early to avoid unnecessary checks, as further extensions won't meet the condition.

# Complexity
- Time complexity: O(n<sup>2</sup>)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn count_of_substrings(word: String, k: i32) -> i32 {
        let n = word.len();
        let mut total_count = 0;

        let vowels_set: HashSet<char> = ['a', 'e', 'i', 'o', 'u'].iter().cloned().collect();

        for start in 0..n {
            let mut vowels_in_window = HashSet::new();
            let mut consonant_count = 0;

            for end in start..n {
                let c = word.chars().nth(end).unwrap();

                if vowels_set.contains(&c) {
                    vowels_in_window.insert(c);
                } else if c.is_ascii_alphabetic() {
                    consonant_count += 1;
                }

                if vowels_in_window.len() == 5 && consonant_count == k {
                    total_count += 1;
                }

                if consonant_count > k {
                    break;
                }
            }
        }

        total_count
    }
}

```