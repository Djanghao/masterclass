# Forced solution, uses list of lists of vertices

**Author:** Andrey_Bukreev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5562297/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/5562297/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minimumSum(nums: IntArray): Int {
        val n = nums.size - 1
        val list = mutableListOf<List<Int>>()
        for(i in 0..n){
            for(j in i+1..n){
                if(nums[j] > nums[i]){
                    for(y in j+1..n){
                        if(nums[y] < nums[j]){
                            list.add(listOf(nums[i],nums[j],nums[y]))
                        }
                    }
                }
            }
        }
        if(list.isEmpty()) return -1
        var minSum = Int.MAX_VALUE
        list.forEach{ l->
            val sum = l[0] + l[1] + l[2]
            minSum = min(minSum, sum)
        }
        return minSum
    }
}
```