# Ruby solution beats 100% both run time and memory.

**Author:** neelarunabh
**Votes:** 1
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5428495/](https://leetcode.com/problems/pass-the-pillow/solutions/5428495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer} n
# @param {Integer} time
# @return {Integer}
def pass_the_pillow(n, time)
    # Calculate the number of complete rounds of pillow passing
    full_rounds = time / (n - 1)

    # Calculate the remaining time after complete rounds
    extra_time = time % (n - 1)

    # Determine the position of the person holding the pillow
    # If full_rounds is even, the pillow is moving forward.
    # If full_rounds is odd, the pillow is moving backward.
    if full_rounds % 2 == 0
        return extra_time + 1  # Position when moving forward
    else
        return n - extra_time  # Position when moving backward
    end    
end
```