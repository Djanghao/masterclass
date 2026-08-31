# Ruby: Map, max, count.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1169956/](https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/solutions/1169956/)

---

## Leetcode: 1725. Number Of Rectangles That Can Form The Largest Square.

**Ruby: Map, max, count.**

Map array from array of pairs into array of pair minumums, find maximum value of this array, count number of maximum value matches. That's it.


Ruby code:
```Ruby
# Leetcode: 1725. Number Of Rectangles That Can Form The Largest Square.
# https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
# Runtime: 68 ms, faster than 57.14% of Ruby online submissions for Number Of Rectangles That Can Form The Largest Square.
# Memory Usage: 210.6 MB, less than 61.90% of Ruby online submissions for Number Of Rectangles That Can Form The Largest Square.
# Thanks God!
# @param {Integer[][]} rectangles
# @return {Integer}
def count_good_rectangles(rectangles)
    squares = rectangles.map(&:min)
    max = squares.max
    squares.count(max)
end
```

