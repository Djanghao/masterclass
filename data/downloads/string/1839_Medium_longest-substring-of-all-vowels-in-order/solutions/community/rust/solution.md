# Rust Solution with Explanation

**Author:** ecpi
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5162608/](https://leetcode.com/problems/longest-substring-of-all-vowels-in-order/solutions/5162608/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For every character `'a'`, walk forward until the substring starting from that character is no longer beautiful. Then, start again at the next `'a'` after the part we just scanned. Keep track of the longest substring we've seen through that.


# Approach
<!-- Describe your approach to solving the problem. -->
Iterate `index` through the characters of `word` until `word[index]` is an `"a"`. Then, create a `right_index` that will iterate through the characters past `index`, breaking when
- reaching the end of the word
- `word[right_index]` is not the vowel that was previously seen, or the vowel that should be after that. If it is the vowel that comes next, then update the vowel that we compare to when walking forward.

Once that loop breaks, ensure that we ended at a `"u"` (meaning that we've seen each vowel), and update the `longest_seen` variable if the length `right_index - index` is greater than it. Set `index` to the ending value of `right_index`, because any value in between the two is guaranteed to be a shorter substring or invalid.

# Complexity
- Time complexity:
$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::cmp::max;

impl Solution {
    pub fn longest_beautiful_substring(word: String) -> i32 {
        let word_chars = word.as_bytes();
        let vowels = "aeiou".as_bytes();
        let mut index = 0;
        let mut longest_seen = 0;
        while let Some(starting_char) = word_chars.get(index) {
            if *starting_char != vowels[0] {
                index += 1;
                continue;
            }
            let mut vowels_index = 0;
            let mut right_index = index + 1;
            while let Some(right_char) = word_chars.get(right_index) {
                if *right_char == vowels[vowels_index] {
                    right_index += 1;
                } else if right_char == vowels.get(vowels_index + 1).unwrap_or(&0) {
                    vowels_index += 1;
                    right_index += 1;
                } else {
                    break;
                }
            }
            let length = right_index - index;
            index = right_index;
            if vowels_index != 4 {
                continue;
            }

            longest_seen = max(longest_seen, length);
        }
        longest_seen as i32
    }
}

```