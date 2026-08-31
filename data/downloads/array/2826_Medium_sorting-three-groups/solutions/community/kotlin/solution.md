# Very Simple and elegant solution || O(n) solution

**Author:** anonymous_now
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/6018848/](https://leetcode.com/problems/sorting-three-groups/solutions/6018848/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n*3) ==> O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```kotlin []
class Solution {
    val hm = hashMapOf<Pair<Int,Int>,Int>()
    fun minimumOp(i:Int, nums: List<Int>, last :Int):Int {
        if(i>=nums.size) return 0
        if(hm.contains(Pair(i,last))){
            return (hm[Pair(i,last)]?:0)
        }
        var ans = nums.size
        if(nums[i] >= last) {
            ans = min(ans, 1+minimumOp(i+1,nums,last)) // remove current
            ans = min(ans, minimumOp(i+1,nums,nums[i])) // Dont remove  current
        } else {
             ans = min(ans, 1+minimumOp(i+1,nums,last)) // remove current
        }
        hm[Pair(i,last)]= ans
        return ans
    }
    fun minimumOperations(nums: List<Int>): Int {
        return minimumOp(0,nums,0)
    }
}
// At every pos
// either remove  or dont remove
// have last element in the list
// decide based on last element 

// Time --> O(N*3)
```