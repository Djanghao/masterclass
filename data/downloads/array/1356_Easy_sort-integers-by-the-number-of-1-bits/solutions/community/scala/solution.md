# Using BinaryString & sortWith

**Author:** yusu0090
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4280423/](https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/solutions/4280423/)

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
    def sortByBits(arr: Array[Int]): Array[Int] = {

        arr.map(_.toBinaryString).map(p => p.count(c => c == '1')).zip(arr)
        .sortWith((a,b) => if(a._1 == b._1) a._2 < b._2 else a._1 < b._1  ).map(_._2)
        
    }
}
```