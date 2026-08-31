# [Swift] - Dictionary based solution. O(n) - time. O(n) - space.

**Author:** slowsteady
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/1107183/](https://leetcode.com/problems/sum-of-unique-elements/solutions/1107183/)

---

***Explanation:***

1. Traverse an input array and fill the dictionary.
2. Traverse the dictionary's keys and check if the current key is unique.
3. Add a unique key to the total amount of values.

```
class Solution {
    func sumOfUnique(_ nums: [Int]) -> Int {
        
        var dictionary: [Int: Int] = [:]
        
        for num in nums {
            dictionary[num, default: 0] += 1
        }
        
        var sum = 0
        
        for key in dictionary.keys where dictionary[key] == 1 {
            sum += key
        }
        
        return sum
    }
}
```
***Analysis:***
*Time complexity: O(n).*
*Space complexity: O(n). O(n) is the worst case if all values in the input array are unique.*