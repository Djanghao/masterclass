# Easy Scala Pattern Matching Solution .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/5256283/](https://leetcode.com/problems/type-of-triangle/solutions/5256283/)

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
object Solution {
    def triangleType(nums: Array[Int]): String = {
        nums.sorted match
        {
            case   Array(x,y,z)  if   x+y   <=   z   =>   "none"
            case Array(x,y,z)   if   x==y   &&   y==z   =>   "equilateral"
            case Array(x,y,z)   if   x==y   ||   y==z   =>   "isosceles"
            case _   =>   "scalene"
        }
    }
}
```