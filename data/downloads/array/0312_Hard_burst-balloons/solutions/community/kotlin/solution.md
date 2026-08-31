# just 2 steps

**Author:** raghurambtechit
**Votes:** 0
**Link:** [https://leetcode.com/problems/burst-balloons/solutions/4782006/](https://leetcode.com/problems/burst-balloons/solutions/4782006/)

---

since , out of bounds of left most and right most are added by us , we need not want to inclide them for solving.

iterate through each element , calculate coins like : "what if i burst this ith ballon last ? . if so , we need to calculate  coins for that i . As i mentioned , we are bursting the i last. so left and right ballons are already should've bursted, so we need to calculate coins the left sub array and right subArray  of i added with i'th ballon coins.



# Code
```
class Solution {
     val dp = Array(301) { Array(301) { -1 } }

    fun maxCoins(nums: IntArray): Int {

        val arrayList = nums.toMutableList()
        arrayList.add(1) 
        arrayList.add(0, 1)
        return solve(arrayList.toIntArray(), 1, nums.size)

    }


    fun solve(array: IntArray, i: Int, j: Int): Int {
        if (i > j) return 0
        if (dp[i][j] != -1) return dp[i][j]
        var ans = -1
    
        for (indx in i..j) {

            val cost = array[i - 1] * array[indx] * array[j + 1] +
                    solve(array, i, indx - 1) +
                    solve(array, indx + 1, j)

            ans = Math.max(ans, cost)

        }

        dp[i][j] = ans

        return ans

    }
}
```