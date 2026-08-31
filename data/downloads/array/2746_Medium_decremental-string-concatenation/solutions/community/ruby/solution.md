# Desafio semanal weekly commit 06 de Junio - diegoheg

**Author:** diegoheg
**Votes:** 0
**Link:** [https://leetcode.com/problems/decremental-string-concatenation/solutions/5296381/](https://leetcode.com/problems/decremental-string-concatenation/solutions/5296381/)

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
def minimize_concatenated_length(words)
    memo = Array.new(words.length) { Hash.new }
    len = words.reduce(0) {|acc, word| acc + word.length}
    word = words.shift

    len - max_delete(0, word[0], word[-1], words, memo)
end

def max_delete(i, first, last, words, memo)
    return 0 if i == words.length
    return memo[i][[first,last]] if memo[i][[first,last]]

    left = max_delete(i + 1, words[i][0], last, words, memo)
    right = max_delete(i + 1, first, words[i][-1], words, memo)
    left += 1 if words[i][-1] == first
    right += 1 if words[i][0] == last

    memo[i][[first,last]] = [left,right].max
end
```