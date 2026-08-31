# Swift Easy Clean Solution

**Author:** jfrsheriff
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2614688/](https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array/solutions/2614688/)

---

```
class Solution {
    func countPairs(_ nums: [Int], _ k: Int) -> Int {
        guard !nums.isEmpty else {return 0}
        var numIndexDict : [Int : [Int]] = [:]
        var count = 0
        for (i,num) in nums.enumerated(){
            var eArray = numIndexDict[num,default:[]]
            eArray.forEach{ 
                count = ($0 * i % k == 0) ? count + 1 : count
            }
            eArray.append(i)
            numIndexDict[num] = eArray
        }
        return count
    }
}
```