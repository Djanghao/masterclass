# Kotlin: Unbounded Knapsack solution with comments

**Author:** mahrezz
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/2296610/](https://leetcode.com/problems/ones-and-zeroes/solutions/2296610/)

---

```
class Solution {
    
    // This problem is a simple "unbounded knapsack 0/1 problem" we need check the combinations with including and excluding the current element
    fun findMaxForm(strs: Array<String>, m: Int, n: Int): Int {
    
        // create cache for our intermediate results to hold them to not calculate again
        val cache = Array(m + 1) { Array(n + 1) { IntArray(strs.size) { 0 } } }
        

        fun dfs(currentIndx: Int, zeroCount: Int, oneCount: Int): Int{
            
            // base case to terminate the recursion
            if(currentIndx == strs.size || zeroCount + oneCount == 0) return 0
            
            
            // if it is available in the cache, return it immediately
            if(cache[zeroCount][oneCount][currentIndx] > 0) return cache[zeroCount][oneCount][currentIndx]
            
            // we need count the zeros and ones in the giving string, simple used a intarray with size 2 to hold 0s and 1s
            var count: IntArray = countZeroAndOnes(strs[currentIndx]) 
            
            // include the current element
            var include = 0
            if(zeroCount >= count[0] && oneCount >= count[1])
                        // increment by 1 since we already included it and also do not forget the extract the counts of the zeros and ones from the zeroCount and oneCount
                include = 1 + dfs(currentIndx + 1, zeroCount - count[0], oneCount - count[1])
        
            // exclude here, since we will not consider this just increment current index and continue
            var exclude = dfs(currentIndx + 1, zeroCount, oneCount)
            
            var res = Math.max(include,exclude) // max of include and exclude will be our answer and also cache it to be used later
            
            cache[zeroCount][oneCount][currentIndx] = res
            
            return cache[zeroCount][oneCount][currentIndx]
        }
  
        return dfs(0,m,n)

    }
    
    
    
    
    // helper method to count the zeros and ones of a given string
    fun countZeroAndOnes(s: String ): IntArray{
        
        val res = IntArray(2)
        for(binary in s.toCharArray()){
            res[binary - '0']++
        }
        return res
    }
}
```