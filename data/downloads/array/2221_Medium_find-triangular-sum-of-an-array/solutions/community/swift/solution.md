# Swift - Simple solution

**Author:** evkobak
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/2087414/](https://leetcode.com/problems/find-triangular-sum-of-an-array/solutions/2087414/)

---

```
class Solution {
    func triangularSum(_ nums: [Int]) -> Int {
        
        var answer = nums

        while answer.count > 1 {
            var temp = [Int]()

            for i in 0..<answer.count-1 {
                temp.append((answer[i]+answer[i+1])%10)
            }
			
            answer = temp
        }

        return answer.first!
    }
}
```