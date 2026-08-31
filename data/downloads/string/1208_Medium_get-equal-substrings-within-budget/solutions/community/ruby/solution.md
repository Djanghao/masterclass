# Ruby O(N) - beats 100% with a trick

**Author:** rmuntani
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218504/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5218504/)

---

Using t.bytes and s.bytes instead of s[i].ord and t[i].ord greatly increases the speed.

# Code
```
# @param {String} s
# @param {String} t
# @param {Integer} max_cost
# @return {Integer}
def equal_substring(s, t, max_cost)
   acc = 0
   max_length = 0 
   left = right = 0
   s = s.bytes
   t = t.bytes

   while right < s.length
     curr_cost = (t[right] - s[right]).abs
     acc += curr_cost
     while left <= right && acc > max_cost
        acc -= (t[left] - s[left]).abs 
        left += 1
     end 
     max_length = max_length > (right - left + 1) ? max_length : right - left + 1
     right += 1
   end

   max_length
end
```