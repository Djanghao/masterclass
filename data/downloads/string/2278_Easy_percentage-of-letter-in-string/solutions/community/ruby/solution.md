# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4982844/](https://leetcode.com/problems/percentage-of-letter-in-string/solutions/4982844/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {String} s
# @param {Character} letter
# @return {Integer}
def percentage_letter(s, letter)
    count = 0
    s.each_char do |char|
        if char == letter
            count += 1
        end
    end
    
    ((count/s.size.to_f) * 100).to_i
end
```