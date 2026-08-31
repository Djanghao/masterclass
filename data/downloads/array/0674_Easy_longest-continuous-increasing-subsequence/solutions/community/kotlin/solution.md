# Kotlin - Greedy is good

**Author:** idiotleon
**Votes:** 1
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/879766/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/879766/)

---

Solution - [github](https://github.com/An7One/leetcode-solutions-kotlin-an7one/tree/main/src/main/kotlin/com/an7one/leetcode/lvl2/lc0674)

<b>By Tag</b>
#Subsequence - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_algorithm/dynamic_programming/by_topic/subsequence)

```
/**
 * @author: Leon
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/
 *
 * Time Complexity:     O(`nNums`)
 * Space Complexity:    O(1)
 *
 * Reference:
 * https://leetcode.com/problems/longest-continuous-increasing-subsequence/discuss/107365/JavaC%2B%2BClean-solution
 */
class Solution {
    fun findLengthOfLCIS(nums: IntArray): Int {
        // sanity check
        if(nums.isEmpty()) return 0
        
        val nNums = nums.size
        
        var longest = 1
        var len = 1
        
        for(i in 1 until nNums){
            if(i == 0 || nums[i - 1] < nums[i]){
                longest = maxOf(longest, ++len)
            }else{
                len = 1
            }
        }
        
        return longest
    }
}
```