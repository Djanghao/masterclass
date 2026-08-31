# Simple solution

**Author:** musthafa_kareechiyil
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/4523629/](https://leetcode.com/problems/count-the-number-of-vowel-strings-in-range/solutions/4523629/)

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
# @param {String[]} words
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def vowel_strings(words, left, right)
    vowels = Set.new(["a", "e", "i", "o", "u"])
    count = 0

    (left..right).each do |i|
        first_char, last_char = words[i][0], words[i][-1]
        count += 1 if vowels.include?(first_char) && vowels.include?(last_char)
    end

    count
end

```