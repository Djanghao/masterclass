# Ruby: Combinations, map by the formula, select max.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/largest-triangle-area/solutions/949819/](https://leetcode.com/problems/largest-triangle-area/solutions/949819/)

---

##### Leetcode: 812. Largest Triangle Area.

Get all combination of tree elements of the input array, calculate an area of an every triangle by the formula, select maximum value. https://www.mathopenref.com/coordtrianglearea.html url that stores the formula.


Ruby code:
```Ruby
# Leetcode: 812. Largest Triangle Area.
# https://leetcode.com/problems/largest-triangle-area/
# Runtime: 136 ms, faster than 100.00% of Ruby online submissions for Largest Triangle Area.
# Memory Usage: 210.5 MB, less than 100.00% of Ruby online submissions for Largest Triangle Area.
# @param {Integer[][]} points
# @return {Float}
def largest_triangle_area(points)
   points.combination(3)
    .map{|((ax,ay),(bx,by),(cx,cy))| ((ax*(by-cy)+bx*(cy-ay)+cx*(ay-by)).fdiv(2)).abs}.max
end
```