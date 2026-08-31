# Sqrt(x) using binary search

**Author:** ndrwkn2001
**Votes:** 3
**Link:** [https://leetcode.com/problems/sqrtx/solutions/4764767/](https://leetcode.com/problems/sqrtx/solutions/4764767/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n) = log(n)$$ or $$n*log(n)$$  
- Space complexity: $$O(n)$$

# Code
```
# @param {Integer} x
# @return {Integer}
def my_sqrt(x)
  left = 1 # left flag
  right = x # right flag

  # while flags not crossing
  while (left <= right) do
   # check midle of flags (using binary search)
    middle = (left + right) / 2
    square = middle * middle

    # check if exect match
    return middle if square == x

    # update flags
    if square < x
      # start from next
      left = middle + 1
    else
      # limit up to prev
      right = middle - 1
    end
  end

  # return left as after while 'left' is more than 'right' and
  # last action: right = middle - 1, so right + 1 (= middle) is more then x
  # so we need to return lesser flag
  return right
end
```