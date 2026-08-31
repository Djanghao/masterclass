# Swift O(n) Solution With Explaination

**Author:** iCodeForExcellence
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1030610/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1030610/)

---

```
class Solution {
    func maxSubArrayLen(_ nums: [Int], _ k: Int) -> Int {
        
        /*
        Basic idea is we keep history os sum we have seen, so that we can easily
        find if we saw (sum - k) before
        */
        var sum = 0
        /*
        This is added to take care of difference of array being index at 0, and human form we start at 1.
        For eg, if the range start all the way from zero index, we will subtract the current i th length at
        from index at sum 0. 
        */
        var preSumDict = [0:-1] 
        
        var maxLen = 0
        for i in 0..<nums.count {
            sum = sum + nums[i]
            if(preSumDict[sum] == nil) {
                preSumDict[sum] = i 
            }
            if let entry = preSumDict[sum - k] {
                maxLen = max(maxLen,i - entry)
            }
        }
        return maxLen
    }
}
```