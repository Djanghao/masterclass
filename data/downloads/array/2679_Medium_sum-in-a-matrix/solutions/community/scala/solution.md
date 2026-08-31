# Code easy to understand

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/5895854/](https://leetcode.com/problems/sum-in-a-matrix/solutions/5895854/)

---

# Intuition
first i try brude force but i failed after that i go read again maybe i can found something 

# Approach
i read the hints and its easy became ,sort first all rows after that we get each column and get max value without any remove operation or while many loop 
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
 O(n*log(n*m))
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```scala []
object Solution {
    def matrixSum(nums: Array[Array[Int]]): Int = {
        var matrix = nums
        var score = 0
        for(i <- matrix.indices){
            matrix(i)=matrix(i).sortBy(-_)
        }
        
        var i = 0
        for(j <- matrix(i).indices){
            var max = 0 
            for(i <- matrix.indices){
                if (matrix(i)(j) > max) max = matrix(i)(j)
            }
            i+=1
            score+=max
        }
        return score
    }
}
```