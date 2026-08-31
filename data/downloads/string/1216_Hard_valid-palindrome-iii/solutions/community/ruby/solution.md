# Easy to read Ruby solution

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome-iii/solutions/4480620/](https://leetcode.com/problems/valid-palindrome-iii/solutions/4480620/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {String} s
# @param {Integer} k
# @return {Boolean}
def is_valid_palindrome(s, k)
  @memo = {}

  dp(0,s.length - 1, s) <= k
end

def dp(left, right, str)
  return 0 if left >= right
  key = [left, right]
  return @memo[key] if @memo.key?(key)

  if str[left] == str[right]
    @memo[key] = dp(left + 1, right - 1, str)
  else
    @memo[key] = [dp(left + 1, right, str), dp(left, right - 1, str)].min + 1
  end

  @memo[key]
end


# Recursive with memo ---- TLE :(
# def is_valid_palindrome(s, k)
#   @memo = {}
#   valid_palindrome?(s, 0, s.size - 1, k)
# end

# def valid_palindrome?(str, left, right, remaining_removals)
#   return true if left >= right

#   key = [left, right, remaining_removals]
#   return @memo[key] if @memo.key?(key)

#   if str[left] == str[right]
#     @memo[key] = valid_palindrome?(str, left + 1, right - 1, remaining_removals)
#   else
#     return false if remaining_removals <= 0

#   @memo[key] = valid_palindrome?(str, left + 1, right, remaining_removals - 1) ||
#                  valid_palindrome?(str, left, right - 1, remaining_removals - 1)
#   end

#   @memo[key]
# end

```