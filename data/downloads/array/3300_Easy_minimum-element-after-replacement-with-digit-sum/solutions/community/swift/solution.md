# Swift💯

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5854010/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5854010/)

---

**Good Interview Answer (accepted answer)**
```
class Solution {
    func minElement(_ nums: [Int]) -> Int {
        var smallest = Int.max
        for var num in nums {
            var digitSum = 0
            while num > 0 {
                digitSum += num % 10
                num /= 10
            }
            smallest = min(smallest, digitSum)      
        }
        return smallest
    }
}
```

**BONUS: Rewritten as one-liner (accepted answer)**
```
class Solution {
    func minElement(_ nums: [Int]) -> Int {
        nums.map{num in [1,10,100,1000,10000].map{(num/$0) % 10}.reduce(0,+)}.min()!
    }
}
```