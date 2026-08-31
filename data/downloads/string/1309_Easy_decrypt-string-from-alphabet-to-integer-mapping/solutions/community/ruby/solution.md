# Solved easily

**Author:** andgursky
**Votes:** 0
**Link:** [https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4989739/](https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/solutions/4989739/)

---

# Intuition
split, decript

# Approach
1. Split the string with regexp
2. Create hash map with alphabet
3. Decrypt elements from the array to result string.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @return {String}
def freq_alphabets(s)
  map = {}
  index = 1
  arr = s.split(/(\\d{2}#|\\d)/).delete_if(&:empty?)
  ('a'..'z').each do |alpha_el|
    index >= 10 ? map["#{index.to_s}#"] = alpha_el : map[index.to_s] = alpha_el
    index += 1
  end
  result = arr.map { |el| el = map[el] }.join
end
```