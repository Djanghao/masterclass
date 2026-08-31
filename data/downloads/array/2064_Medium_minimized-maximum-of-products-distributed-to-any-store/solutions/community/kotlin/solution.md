# Binary Search Week | Bs on min of maxs

**Author:** sanskarpatidar
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6042696/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6042696/)

---

# Code
```kotlin []
class Solution {
    private fun isPossible(mid: Int, n: Int, quantites: IntArray): Boolean{
        //this fun is to check if it is possible to have mid as maximum if we do the distribution among n stores
        //if it is not Possible then return false else that will be our possible answer
        var stores = n
        for(quan in quantites){
            stores -= (ceil(quan.toDouble()/mid.toDouble())).toInt()
        }
        if(stores<0)return false//means there were no stores left to further distribute our products
        return true
        //stores == 0 means we properly distributed all products between all stores
        //stores > 0 means we already distributed the products before and there were some stores left
    }
    fun minimizedMaximum(n: Int, quantities: IntArray): Int {
        var low = 1
        var high = 1e5.toInt()
        while(low<=high){
            var mid = low + ((high-low) shr 1)
            if(isPossible(mid, n, quantities))high = mid-1
            else low = mid+1
        }
        return low        
    }
}
```