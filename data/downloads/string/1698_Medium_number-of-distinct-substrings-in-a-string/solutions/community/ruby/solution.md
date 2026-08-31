# Brute force Ruby Solution

**Author:** hirens20
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/4121184/](https://leetcode.com/problems/number-of-distinct-substrings-in-a-string/solutions/4121184/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```
# @param {String} s
# @return {Integer}
def count_distinct(s)
    seen = Set.new
    n = s.length

    (0...n).each do |i|
        temp = s[i]
        seen.add(temp) # to add single values
        ((i + 1)...n).each do |j|
            temp += s[j]
            seen.add(temp)
        end
    end
    seen.length
end
```