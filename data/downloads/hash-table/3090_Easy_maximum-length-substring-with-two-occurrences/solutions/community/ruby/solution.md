# Sliding Window. O(n):O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4919459/](https://leetcode.com/problems/maximum-length-substring-with-two-occurrences/solutions/4919459/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {String} s
# @return {Integer}
def maximum_length_substring(s)
    sliding_window = Hash.new(0)
    max_char_count = 0
    l = 0
    r = 0
    char_count = 0
    while r < s.size
        # add
        sliding_window[s[r]] += 1
        char_count += 1

        # subtract
        while sliding_window[s[r]] > 2 and l <= r
            sliding_window[s[l]] -= 1
            char_count -= 1
            l += 1
        end

        # eval
        max_char_count = [max_char_count, char_count].max

        r += 1
    end
    
    max_char_count
end
```