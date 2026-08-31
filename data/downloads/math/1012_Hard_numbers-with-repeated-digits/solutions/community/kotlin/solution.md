# Kotlin DP digit and Bit Masking

**Author:** regxl
**Votes:** 0
**Link:** [https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3947545/](https://leetcode.com/problems/numbers-with-repeated-digits/solutions/3947545/)

---



# Code
```
class Solution {

    private fun solve(i: Int, mask: Int, isRepeat: Int, isLast: Int, str: String, dp: Array<Array<Array<Array<Int>>>>): Int{
        if(i==str.length){
            return isRepeat;
        }
        if(dp[i][mask][isRepeat][isLast]!=-1){
            return dp[i][mask][isRepeat][isLast]
        }
        val till = if(isLast==1) str[i]-'0' else 9
        var ans= 0
        for(j in 0..till){
            val newIsLast = if(isLast==1 && j==till) 1 else 0
            if(mask==0 && j==0){
                ans += solve(i+1, mask, isRepeat, newIsLast, str, dp);
            }
            else if((mask and (1 shl j )) > 0){
                ans += solve(i+1, mask, 1, newIsLast, str, dp);
            }
            else if((mask and (1 shl j ))==0){
                ans += solve(i+1, mask or (1 shl j), isRepeat, newIsLast, str, dp)
            }
        }
        dp[i][mask][isRepeat][isLast] = ans
        return ans
    }

    fun numDupDigitsAtMostN(n: Int): Int {
        val dp = Array(10) { Array(1 shl 10) { Array(2) { Array(2) { -1 } } } }
        val str = n.toString();
        return solve(0,0,0,1,str,dp);
    }
}
```