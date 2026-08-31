# Sliding window

**Author:** ijross29
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5685236/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-i/solutions/5685236/)

---

# Intuition
Looking for substrings so use a sliding window 

Tricky part is knowing what to add to the answer. It's tempting to just add 1 to the answer but that's not exactly correct. 

Consider `10101` 

If we start at 1
ans = 1
10
ans = 3 because 1,0 and 10 so ans += (1 - 0 + 1)

# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```ruby []
# @param {String} s
# @param {Integer} k
# @return {Integer}
def count_k_constraint_substrings(s, k)
 s_chars = s.chars 

 left = 0
 right = 0
 curr_1s = 0
 curr_0s = 0
 ans = 0
 while right < s_chars.length
   curr_1s += 1 if s_chars[right] == '1'
   curr_0s += 1 if s_chars[right] == '0'
   while(curr_1s > k && curr_0s > k)
     curr_1s -= 1 if s_chars[left] == '1'
     curr_0s -= 1 if s_chars[left] == '0'
     left += 1
   end
   ans += (right - left + 1)
   right += 1
 end
 ans
end

```