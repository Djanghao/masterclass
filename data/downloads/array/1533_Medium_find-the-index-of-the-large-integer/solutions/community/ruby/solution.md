# [Ruby] Binary search

**Author:** user0350bU
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3956245/](https://leetcode.com/problems/find-the-index-of-the-large-integer/solutions/3956245/)

---

# Approach
Use a binary search to eliminate the left or right of the array until the element is found.

# Complexity
- Time complexity: O(log n)
- Space complexity: O(1)

# Code
```
def get_index(reader)
  left = 0 
  right = reader.length - 1
  
  while left < right
    l = left
    r = ((left+right) / 2).floor
    x = ((left+right + 1) / 2).floor
    y = right 
    res = reader.compare_sub(l, r, x, y)

    if res == -1 # right is greater than left
      left = x
    else
      right = r
    end 
  end
  left
end
```