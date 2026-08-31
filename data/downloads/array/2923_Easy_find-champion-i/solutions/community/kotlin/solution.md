# Kotlin Easy Solution

**Author:** saidurcse
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-i/solutions/4583692/](https://leetcode.com/problems/find-champion-i/solutions/4583692/)

---

# Intuition
Easy Solution just checking the frequency and keeping index number.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I am using here fequecy of the count. if(grid[i][j] == 1) count is increasing and keep index value. Maximum count and index number is saved that index returned as ouput.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(N^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun findChampion(grid: Array<IntArray>): Int {
        
        var count = 0
        var max = 0
        var index = 0
        
       for(i in 0 until grid.size) {

           count = 0

           for(j in 0 until grid.size) {
               if(grid[i][j] == 1)
                    count++
               
               if(max < count) {
                   max = count
                   index = i
               }
           }
       }
       
       return index
    }
}
```