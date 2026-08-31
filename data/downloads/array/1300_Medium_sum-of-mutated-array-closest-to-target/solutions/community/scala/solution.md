# Scala - simple binary search

**Author:** AnishKumar5811
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/5253581/](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/solutions/5253581/)

---


```
object Solution {
    def findBestValue(arr: Array[Int], target: Int): Int = {
    
        def getSum(i: Int): Int = {
            arr.map(x => if(x > i) i else x).sum
        }

        var lo , ans= 0
        var hi = arr.max
        var minDiff = Int.MaxValue

        while(lo <= hi) {
            val mid = lo + (hi-lo)/2

            val sum = getSum(mid)
            val diff = (sum - target).abs

            if(diff < minDiff || (diff == minDiff && mid < ans )){
                minDiff = diff
                ans = mid
            }

            if(sum < target) lo = mid+1
            else hi = mid - 1
        }

        ans
    }
}
```