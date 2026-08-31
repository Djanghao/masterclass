# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-nice-subarray/solutions/2558172/](https://leetcode.com/problems/longest-nice-subarray/solutions/2558172/)

---

**Java**
```
class Solution {
    public int longestNiceSubarray(int[] nums) {
        int count = 0, startidx = 0, val = 0;
        for(int i=0; i<nums.length; i++){
            while((val & nums[i]) != 0){
                val ^= nums[startidx++];
            }
            val |= nums[i];
            count = Math.max(count, i - startidx + 1);
        }
        return count;
    }
}
```
**JavaScript**
```
var longestNiceSubarray = function(nums) {
    let count = 0, startidx = 0, val = 0
    for(let i=0; i<nums.length; i++){
        while((val & nums[i]) != 0){
            val ^= nums[startidx++]
        }
        val |= nums[i]
        count = Math.max(count, i - startidx + 1)
    }
    return count
};
```
**Python**
```
class Solution(object):
    def longestNiceSubarray(self, nums):
        count = startidx = val = 0
        for i in range(len(nums)):
            while (val & nums[i]) != 0:
                val ^= nums[startidx]
                startidx += 1
            val |= nums[i]
            count = max(count, i - startidx + 1)
        return count
```