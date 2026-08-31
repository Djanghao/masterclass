# Kotlin | Dynamic Programming with run time O(n^2)

**Author:** jeffreyntue
**Votes:** 0
**Link:** [https://leetcode.com/problems/increment-submatrices-by-one/solutions/5454785/](https://leetcode.com/problems/increment-submatrices-by-one/solutions/5454785/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This question is easy in one dimension. Just add create an array and add 1 to the beginning of an interval and -1 to the end. To get the solution you just sweep the array and add the differences together.

For 2 Dimensions it is now a bit trickier. Of course there is a possibility to just make the Matrix into n one dimensional intervals, but this takes O(n) time. The trick is to do the same with the one dimensional in the other dimesion too. The left top corner gets a 1 added and the right top corner a -1. The left bottom corner gets a -1 added and the right bottom corner a 1. We now technically added an interval and added a negation interval at the bottom, which results in cancelation after the bottom of the rectangle has reached.

# Approach
<!-- Describe your approach to solving the problem. -->
Define a help matrix with size of n + 1 (This means we don't need to check for numbers equals n). Iterate through the array of queries and do the operations described above. 

Then define the solution array. Loop through the matrix from top to bottom and left to right. Update the help matrix with the value above and add it to the solution matrix + the previous value of the matrix.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n^2)$$

# Code
```
class Solution {
    fun rangeAddQueries(n: Int, queries: Array<IntArray>): Array<IntArray> {
        val dp:Array<IntArray> = Array(n+1){IntArray(n+1){0}}

        for(query:IntArray in queries){
            dp[query[0]][query[1]] += 1
            dp[query[0]][query[3]+1] -= 1
            dp[query[2]+1][query[1]] -= 1
            dp[query[2]+1][query[3]+1] += 1
        }

        val sol:Array<IntArray> = Array(n){IntArray(n){0}}
        var a:Int = 0

        for(i:Int in 0..n-1){
            for(j:Int in 0..n-1){
                if(i > 0)
                    dp[i][j] += dp[i-1][j]

                if(j > 0)
                    sol[i][j] = sol[i][j-1]
                
                sol[i][j] += dp[i][j]
            }
        }

        return sol
    }
}
```