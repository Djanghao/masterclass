# Kotlin Dp Beats 100%

**Author:** shubhammaheshwariy
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-v/solutions/5790148/](https://leetcode.com/problems/jump-game-v/solutions/5790148/)

---

# Intuition
Suboptimal solutions,can find max steps for i index and reuse it, as we have a clear direction which is downwards

# Approach
We can only go downwards,so we dont have to worry about visited elements 
# Complexity
O(n * d)

- Space complexity:
O(n)
# Code
```kotlin []
class Solution {
    fun maxJumps(arr: IntArray, d: Int): Int {
        val n = arr.size

        val dp = IntArray(n,{_ -> - 1})
        fun maxJump(index:Int):Int{
            if(dp[index] != -1)return dp[index]
            val cur = arr[index]
            var max = 0
            for(i in index-1 downTo Math.max(0, index - d)){
                if(arr[i] < cur){
                    max = Math.max(max,maxJump(i))
                }else{
                    break
                }
            }

            for(i in index+1..Math.min(index+d,n - 1)){
                if(arr[i] < cur){
                    max = Math.max(max,maxJump(i))
                }else{
                    break
                }
            }
            dp[index] = 1 + max
            return 1 + max
        }
        var max = 0
        for(i in 0..n - 1){
            max = Math.max(max,maxJump(i))
        }
        return max
    }
}
```