# Python 2 liner solution with explanation

**Author:** saisasank25
**Votes:** 8
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1691186/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1691186/)

---

```
######################################################

#   Runtime: 168ms   -   100.00%
#   Memory: 14.8MB  -   73.29%

######################################################

class Solution:
    def countGoodRectangles(self, rectangles: List[List[int]]) -> int:
        # len_arr is a list where len_arr[i] is the max length of the square
        # that can be formed using rectangle[i] which will be min of length
        # and breadth of that rectangle
        len_arr = [min(rectangle) for rectangle in rectangles]
        # To find how many squares have max len, we first have to find the
        # max len. So, max(len_arr). Now, we need to count how many max len
        # are present in len_arr. So, len_arr.count(max(len_arr)) which is 
        # the required answer. so we return it
        return len_arr.count(max(len_arr))
```