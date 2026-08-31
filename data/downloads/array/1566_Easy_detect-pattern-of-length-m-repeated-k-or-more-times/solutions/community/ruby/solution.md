# Sliding Window

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4306527/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/4306527/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m)
# Code
```
# @param {Integer[]} arr
# @param {Integer} m
# @param {Integer} k
# @return {Boolean}
def contains_pattern(arr, m, k)
    pattern = []
    pattern_index = 0
    pattern_count = 0
    i = 0
    while i < arr.size
        v = arr[i]
        # Record a pattern of m size.
        if pattern.size < m
            pattern << v
            if pattern.size == m
                pattern_count = 1
            end
        else
            # Update pattern count and pattern index(only when m is larger than 1).
            if v == pattern[pattern_index]
                if m == 1
                    pattern_count += 1
                else
                    pattern_index += 1
                end

                if pattern[pattern_index] == nil
                    pattern_count += 1
                    pattern_index = 0
                end
               
                if pattern_count == k
                    return true
                end
            # Reset pattern, next step is recording a new pattern from current index when m == 1
            # or next index after your previous recorded pattern.
            else
                pattern = []
                pattern_count = 0
                pattern_index = 0
                if m > 1
                    i -= m - 1
                end
                next
            end

        end

        i += 1
    end
    
    return false
end
```