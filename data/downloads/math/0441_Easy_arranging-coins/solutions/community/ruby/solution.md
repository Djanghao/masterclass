# An iterative binary search

**Author:** lreynl
**Votes:** 1
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/2328836/](https://leetcode.com/problems/arranging-coins/solutions/2328836/)

---

```
# Start with the triangle area formula, area = 1/2*base*height
# We want to find the area of the greatest triangle with base=x, height=x,
# (plus the half-squares that would be cut off), which is less than 'n':
# (if there's a partial row, the binary search will stop one past the triangle side)

#
# #

# 1/2 * 2**2 + 2/2

#
# #
# # #

# 1/2 * 3**2 + 3/2

#
# #
# # # 
# # # #

# 1/2 * 4**2 + 4/2

#
# #
# # # 
# # # #
# # # # #

# 1/2 * 5**2 + 5/2

# See the pattern?
def arrange_coins(n)
  left = 1
  right = n
  while left <= right do
    mid = (left + right) / 2
    area = 0.5 * mid**2 + mid / 2.0
    if area == n
      return mid
    elsif area < n
      left = mid + 1
    else
      right = mid - 1
    end
  end
  left - 1
end
```