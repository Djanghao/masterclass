# one liner scala code

**Author:** shu_sh
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-peaks/solutions/4704854/](https://leetcode.com/problems/find-the-peaks/solutions/4704854/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
filter the element where arr[i-1] and arr[i+1] is less than i 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findPeaks(mountain: Array[Int]): List[Int] = {
        (1 until mountain.size-1).filter(p => mountain(p-1) < mountain(p) && mountain(p+1) < mountain(p)).toList
    }
}
```