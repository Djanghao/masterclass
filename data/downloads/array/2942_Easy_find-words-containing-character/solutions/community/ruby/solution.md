# Straightforward Ruby solution (100%/100%)

**Author:** dtkalla
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4332116/](https://leetcode.com/problems/find-words-containing-character/solutions/4332116/)

---

# Intuition
Check whether each word contains char *x*, and return an array of the ones that do.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
def find_words_containing(words, x)
    (0...words.length).select { |i| words[i].include?(x) }
end
```