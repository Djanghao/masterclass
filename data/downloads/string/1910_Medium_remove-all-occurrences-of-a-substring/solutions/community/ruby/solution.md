# Beats 100% time and Space in Ruby

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/4304635/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/4304635/)

---

# Code
```
# @param {String} s
# @param {String} part
# @return {String}
def remove_occurrences(s, part)
    while s.include?(part)
        s.slice!(part)
    end
    s
end
```