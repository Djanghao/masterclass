# Swift - simple solution using .intersection

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2176429/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/2176429/)

---

```
class Solution {
    func intersection(_ nums: [[Int]]) -> [Int] {
        
        var answer = Set(nums[0])

        for i in 1..<nums.count {
            answer = answer.intersection(Set(nums[i]))
        }

        return Array(answer).sorted()
    }
}
```