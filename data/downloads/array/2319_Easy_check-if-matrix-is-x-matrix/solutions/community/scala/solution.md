# i am the best scala eng

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/5888407/](https://leetcode.com/problems/check-if-matrix-is-x-matrix/solutions/5888407/)

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
    def checkXMatrix(grid: Array[Array[Int]]): Boolean = {
       var i = 0
       val n = grid.length-1
       var set = Set[(Int,Int)]()
       while(i < grid.length){
        if(grid(i)(i) == 0 || grid(i)(n-i)==0 ) return false
        set+=(i,i)
        set+=(i,n-i)
        i+=1
       }
       i=0
       while(i < n+1){
        var j = 0
        while(j < grid(i).length){
            if(!set.contains((i,j)) && grid(i)(j) != 0 ) return false
            j+=1

        }
        i+=1
       }
       return true
    }
}
```