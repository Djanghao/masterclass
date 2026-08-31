# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5289422/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5289422/)

---


# Code
```
# @param {String} s
# @param {String} t
# @return {Integer}
def find_permutation_difference(s, t)
    index_hash = {}
    t.each_char.with_index do |char, i|
        index_hash[char] = i
    end

    answer = 0
    i = 0
    while i < s.size
        answer += (i - index_hash[s[i]]).abs
        i += 1
    end
    
    answer
end
```