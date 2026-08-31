# Leveraging RUST option type instead of bounds check

**Author:** AbandonShip2023
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/4213957/](https://leetcode.com/problems/valid-word-square/solutions/4213957/)

---

# Intuition
For condition to match, we expect the element at position [i][j] to be the same as the one in [j][i]. While we could use bounds check to determine whether its safe to access the element in the array, instead with the built in get() call for vectors in RUST, we can attempt to access the element. If None type is returned, then we know that the elements are unbalanced and exit

# Approach
One part of the comparison is always valid i.e. we're iterating over the columns of a particular word. We need the safe access methods to check whether its transpose exists

# Complexity
- Time complexity:
$$O(mxn)$$

- Space complexity:
$$O(1)$$

# Code
```
impl Solution {
    pub fn valid_word_square(words: Vec<String>) -> bool {
        for word_num in 0..words.len() {
            for char_position in 0..words[word_num].len() {
                if let Some(compare_word) = words.get(char_position) {
                    if let Some(&compare_char) = compare_word.as_bytes().get(word_num) {
                        if words[word_num].as_bytes()[char_position] != compare_char {
                            return false;
                        }
                    } else {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }

        true
    }
}
```