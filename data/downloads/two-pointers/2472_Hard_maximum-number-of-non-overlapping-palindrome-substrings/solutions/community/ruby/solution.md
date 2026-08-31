# Multiple Ruby solutions

**Author:** ksodha93
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/4155581/](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/solutions/4155581/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Calculate longest palindromic substring similar to first solution [here](https://leetcode.com/problems/longest-palindromic-substring/solutions/4152696/multiple-ruby-solutions/). Calculate string for even and odd length. While doing that increment result count each time string length >= k. Along with it maintain a start variable which helps us avoid repeating values by jumping on to next index after the current palindromic string. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n ^ 2)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {String} s
# @param {Integer} k
# @return {Integer}
def max_palindromes(s, k)
    n = s.length
    result = 0
    start = 0

    (0...n).each do |i|
        left = i
        right = i
        while left >= start && right < n && s[left] == s[right]
            if right - left + 1 >= k
                result += 1
                start = right + 1
                break
            end
            left -= 1
            right += 1
        end

        left = i
        right = i + 1
        while left >= start && right < n && s[left] == s[right]
            if right - left + 1 >= k
                result += 1
                start = right + 1
                break
            end
            left -= 1
            right += 1
        end
    end
    result
end
```
Using mod to handle even and odd length
```
# @param {String} s
# @param {Integer} k
# @return {Integer}
def max_palindromes(s, k)
    n = s.length
    result = 0
    start = 0
    (0...(2*n)).each do |center|
        left = center / 2
        right = left + center % 2
        while left >= start && right < n && s[left] == s[right]
            if right + 1 - left >= k
                result += 1
                start = right + 1
                break
            end
            left -= 1
            right += 1
        end
    end
    result
end
```