# Ruby Easy Oneliner O(N)

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5485905/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5485905/)

---


# Complexity
- Time complexity: O(N)

# Code
```
# @param {String} s
# @return {String}
def greatest_letter(s)
  s.chars.tally.keys.map(&:downcase).tally.select {|k,v| v >= 2 }.keys.max.to_s.upcase
end
```