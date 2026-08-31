# ✔Kotlin | Easy | Dynamic Programming

**Author:** hoangpht287
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-equal-subset-sum/solutions/2543651/](https://leetcode.com/problems/partition-equal-subset-sum/solutions/2543651/)

---

```
class Solution {
   fun canPartition(nums: IntArray): Boolean {
        val sum = nums.reduce { acc, i -> acc+i }
        if (sum%2 == 1) return false

        val partSum = sum/2
        val availableNums = IntArray(nums.size){-1}

        val cache = HashMap<Int, Boolean>()
        return findCanPart(nums,availableNums, partSum, cache)
    }
    fun findCanPart(nums: IntArray, availableNums: IntArray, partSum: Int, cache: HashMap<Int, Boolean>): Boolean{
         if (cache.get(partSum)!=null) return cache[partSum]!!

        if (partSum==0) return true
        if (partSum<0) return false

        nums.forEachIndexed { index, i ->
            if (availableNums[index]==-1){
                availableNums[index]=1
                if (findCanPart(nums,availableNums, partSum-i, cache)) {
                    cache[partSum-i]=true
                    return true
                }
                availableNums[index]=-1
            }
        }
        cache[partSum]=false
        return false
    }
}
```