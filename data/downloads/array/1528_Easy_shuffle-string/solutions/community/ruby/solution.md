# easy solution

**Author:** Anant70007
**Votes:** 0
**Link:** [https://leetcode.com/problems/shuffle-string/solutions/4366823/](https://leetcode.com/problems/shuffle-string/solutions/4366823/)

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
# @param {Integer[]} indices
# @return {String}
def restore_string(s, indices)
    source = s.chars
    destination = []
    for i in 0...indices.length
      destination[indices[i]] = source[i]
    end
    return destination.join

      
end

```