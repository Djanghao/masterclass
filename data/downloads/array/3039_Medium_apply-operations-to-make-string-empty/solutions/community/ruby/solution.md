# Ruby 3-lines Solution

**Author:** vladhilko
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4905596/](https://leetcode.com/problems/apply-operations-to-make-string-empty/solutions/4905596/)

---

# Code
```
# @param {String} s
# @return {String}
def last_non_empty_string(s)
  hash_counter = s.chars.reverse.tally
  max_count = hash_counter.values.max

  hash_counter.select { _2 == max_count }.keys.reverse.join
end
```