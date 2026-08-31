# 100%/100% Idiomatic Fast rust with filter_map

**Author:** chris-ha458
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4335020/](https://leetcode.com/problems/find-words-containing-character/solutions/4335020/)

---

# Intuition & Approach
enumerate() and filter_map() are powerful constructions
`.then_some()` could be used as well

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn find_words_containing(words: Vec<String>, x: char) -> Vec<i32> {
        words
        .iter()
        .enumerate()
        .filter_map(|(idx, word)| word.contains(x).then(||idx as i32))
        .collect()
    }
}
```