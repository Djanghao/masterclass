# Easy Swift solution

**Author:** vikasvaish21
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3659324/](https://leetcode.com/problems/minimum-deletions-to-make-array-beautiful/solutions/3659324/)

---



# Code
```
class Solution {
  func minDeletion(_ nums: [Int]) -> Int {
    var length = nums.count
    var count = 0
    for i in 0..<length-1{
        if (i-count) % 2 == 0 && nums[i] == nums[i+1]{
            count += 1
        }
    }
    if (length - count)%2 != 0{
        count+=1
    }
    return count
}
}
```