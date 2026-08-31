# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4277332/](https://leetcode.com/problems/number-of-segments-in-a-string/solutions/4277332/)

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
# @return {Integer}
def count_segments(s)
    count = 0
    waiting_for_break_in_s = false
    s.each_char do |char|
        if char != " " and waiting_for_break_in_s == false
            waiting_for_break_in_s = true
            count += 1
        elsif char == " "
            waiting_for_break_in_s = false
        end 
    end
    
    count
end
```