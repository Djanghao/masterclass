# Simple code in Swift | Beats 100.00% of users with Swift in (Runtime + memory)

**Author:** RakeshYadavLeetcode
**Votes:** 6
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313572/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313572/)

---



# Code
```
class Solution {
    func countNicePairs(_ nums: [Int]) -> Int {
        var nicePair: Int = 0
        var num1: Int = 0
        var nicePairDict: [Int: Int] = [:]
        var mod : Int = 1000000000+7;
        
        while num1 < nums.count {
            let reverseNum1: Int = self.reverseNumber(number: nums[num1])
            let diffrence: Int = nums[num1] - reverseNum1
            if let count = nicePairDict[diffrence] {
                nicePairDict[diffrence]! += 1
                nicePair += count
                nicePair = nicePair % mod;
            } else {
                nicePairDict[diffrence] = 1
            }
            
            num1 += 1
        }
        return nicePair
    }

    func reverseNumber(number: Int) -> Int {
        var remainder: Int = Int()
        var reverse: Int = 0
        var number: Int = number
        
        while number != 0 {
            remainder = number % 10
            reverse = reverse * 10 + remainder
            number /= 10
        }
        return reverse
         
    }
}
```