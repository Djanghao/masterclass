# [Kotlin] Sort & Accumulate the Coins

**Author:** sapiah
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/2215120/](https://leetcode.com/problems/maximum-number-of-consecutive-values-you-can-make/solutions/2215120/)

---

Sort the input array & check for the small coins.


```
class Solution {
    fun quickSort(arr: List<Int>): List<Int> {
        if(arr.size < 2) {
            return arr
        }

        val pivot = arr[arr.size/2]
        val equal = arr.filter {it == pivot}
        val less = arr.filter {it < pivot}
        val greater = arr.filter {it > pivot}

        return quickSort(less) + equal + quickSort(greater)
    }
    
    fun getMaximumConsecutive(coins: IntArray): Int {
        val sortedCoins = quickSort(coins.toList())
        var res = 1
        
        for (coin in sortedCoins){
            if(coin > res) break
            res += coin
        }
		
        return res
    }    
}
```

Time : `O(nlogn)`
Space: `O(logn)`
