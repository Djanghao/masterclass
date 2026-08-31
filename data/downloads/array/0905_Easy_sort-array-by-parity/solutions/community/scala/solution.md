# scala break your brain

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/5757500/](https://leetcode.com/problems/sort-array-by-parity/solutions/5757500/)

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
```scala []
object Solution {
    def sortArrayByParity(nums: Array[Int]): Array[Int] = {
       var par_nums =nums.filter(a => a %2 ==0).toList
       var odd_nums =nums.filter(a => a %2 !=0).toList
       return( par_nums ::: odd_nums ).toArray
       
    }
}
```