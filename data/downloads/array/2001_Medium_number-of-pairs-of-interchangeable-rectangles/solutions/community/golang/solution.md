# Most Easiest Solution

**Author:** akshay00747
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4967068/](https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/solutions/4967068/)

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
func interchangeableRectangles(rectangles [][]int) int64 {
    resMap := make(map[float64]int)
    var count int64
    for _,val := range rectangles {
       resMap[float64(val[0])/float64(val[1])]++
    }
    for _,val := range resMap {
       count += int64(((val-1)*(val))/2)
    }
    return count
}
```