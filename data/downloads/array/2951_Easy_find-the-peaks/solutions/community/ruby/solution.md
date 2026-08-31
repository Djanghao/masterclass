# Beats 100.00% of users with Ruby (2 Array Pointers)

**Author:** Josiassejod1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/5146610/](https://leetcode.com/problems/find-the-peaks/solutions/5146610/)

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
# @param {Integer[]} mountain
# @return {Integer[]}
def find_peaks(mountain)
    peaks = []
    i = 0

    
    length = mountain.length - 1

    while i <= length && i + 1 <= length
       if mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1] && (i != 0 || i == length)
            peaks.push(i)
        end
        i += 1
    end
    peaks
end
```