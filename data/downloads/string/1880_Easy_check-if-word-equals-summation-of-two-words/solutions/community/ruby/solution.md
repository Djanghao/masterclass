# RUBY 🔶 One-liner 67 ms (Beats 100%)

**Author:** jolswlf
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3276374/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/3276374/)

---

# Approach
Use `.tr` to translate each character to a number then we use `.to_i` convert the strings to ints and sum them up for the check.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def is_sum_equal(first_word, second_word, target_word)
    first_word.tr('a-j', '0-9').to_i + second_word.tr('a-j', '0-9').to_i == target_word.tr('a-j', '0-9').to_i 
end
```