# Swift solution

**Author:** mkim1030
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1838200/](https://leetcode.com/problems/most-frequent-number-following-key-in-an-array/solutions/1838200/)

---

* use a dictionary to track count of numbers that occur one index AFTER key
* track max count
* return most frequently seen number

```
// ~ O(n) time
// ~ O(n) space

class Solution {
    func mostFrequent(_ nums: [Int], _ key: Int) -> Int {
        var numToReturn = Int.min
        var maxCount = Int.min
        
        var numAfterKeyCount = [Int: Int]()
        for i in 0 ..< nums.count - 1 {
            let num = nums[i]
            if num == key {
                let numAfterKey = nums[i+1]
                var updatedCount = 1
                if let count = numAfterKeyCount[numAfterKey] {
                    updatedCount = count + 1
                }
                numAfterKeyCount[numAfterKey] = updatedCount
                
                if updatedCount > maxCount {
                    maxCount = updatedCount
                    numToReturn = numAfterKey
                }
            }
        }
        
        return numToReturn
    }
}