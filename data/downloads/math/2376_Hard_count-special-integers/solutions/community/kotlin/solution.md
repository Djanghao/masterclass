# Kotlin : DP digit with bit masking

**Author:** regxl
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/3948722/](https://leetcode.com/problems/count-special-integers/solutions/3948722/)

---



# Code
```
class Solution {

    private fun solve(i: Int, isLast: Int, notRepeated: Int, mask: Int, str: String, dp: Array<Array<Array<Array<Int>>>>): Int{
        if(i==str.length){
            return notRepeated
        }
        if(dp[i][isLast][notRepeated][mask] != -1){
            return dp[i][isLast][notRepeated][mask]
        }
        val till = if(isLast==1) str[i]-'0' else 9
        var ans = 0
        for(j in 0..till){
            val newIsLast= if(isLast == 1 && j==till) 1 else 0
            // here im using mask as flag for checking leading zero
            // because if any value is not added it means mask value will be zero
            if(mask== 0 && j== 0){
                ans+= solve(i+1, newIsLast, notRepeated, mask, str,dp)
            }
            else if((mask and (1 shl j))>0){
                ans+= solve(i+1, newIsLast, 0, mask, str, dp)
            }
            else if((mask and (1 shl j))==0){
                ans+= solve(i+1, newIsLast, notRepeated and 1, (mask or (1 shl j)), str, dp)
            }
        }
        dp[i][isLast][notRepeated][mask]=ans
        return ans
    }

    fun countSpecialNumbers(n: Int): Int {
        val str = n.toString();
        val dp = Array(10){Array(2){Array(2){Array(1 shl 10){-1}}}}
        // subtracting 1 because it will count 0 in the answer
        return solve(0, 1, 1,0, str, dp)-1;
    }
}
```