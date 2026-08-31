# ✅ Easy and understandable solution for beginners

**Author:** Alexandr_Novikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4402822/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/4402822/)

---


# Code
```
class Solution {
    func maximumTripletValue(_ nums: [Int]) -> Int {
        var answer = 0
        let count = nums.count

        for i in 0..<count{
            for j in i..<count{
                for k in j..<count{
                    if (nums[i] - nums[j]) * nums[k] > answer && i < j && j < k{
                        answer = (nums[i] - nums[j]) * nums[k]
                    }
                }
            }
        }

        return answer
    }
}
```