# Clear and Easy to understand in Ruby

**Author:** nickdual
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/5526364/](https://leetcode.com/problems/valid-mountain-array/solutions/5526364/)

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
# @param {Integer[]} arr
# @return {Boolean}
def valid_mountain_array(arr)
    i = 0
    n = arr.size - 1
    j = n 
    while i < n and arr[i] < arr[i + 1]
        i += 1
    end
     while j > 0 and arr[j] < arr[j - 1]
        j -= 1
    end   
    i != 0 and j != n and j == i
end
```