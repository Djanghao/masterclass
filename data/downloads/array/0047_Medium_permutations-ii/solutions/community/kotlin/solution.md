# kotlin solution

**Author:** shibuiwilliam
**Votes:** 1
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/380635/](https://leetcode.com/problems/permutations-ii/solutions/380635/)

---

```kotlin
class Solution {
    fun permuteUnique(nums: IntArray): List<List<Int>> {
        val ans = MutableList(0){MutableList<Int>(0){0}}
        dfs(ans, nums, 0)
        return ans
    }
    fun dfs(ans: MutableList<MutableList<Int>>, nums: IntArray, index: Int): Unit{
        if (index == nums.size){
            val ls = MutableList<Int>(0){0}
            for (i in 0 until nums.size){
                ls.add(nums[i])
            }
            if (!ans.contains(ls)){
                ans.add(ls)
            }
            return
        }
        for (i in index until nums.size){
            swap(nums, i, index)
            dfs(ans, nums, index+1)
            swap(nums, i, index)
        }
    }
    fun swap(nums: IntArray, i: Int, j: Int):Unit{
        val tmp = nums[i]
        nums[i] = nums[j]
        nums[j] = tmp
    }
}
```