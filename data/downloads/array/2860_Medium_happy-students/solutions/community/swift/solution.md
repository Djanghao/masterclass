# Swift Solution

**Author:** JUNGYUN-Daegu
**Votes:** 0
**Link:** [https://leetcode.com/problems/happy-students/solutions/4226243/](https://leetcode.com/problems/happy-students/solutions/4226243/)

---



# Code
```
class Solution {
    func countWays(_ nums: [Int]) -> Int {
        var n: [Int] = nums.sorted() 
        var cnt: Int = 0
        
        // none is selected
        if n[0] != 0 { 
            cnt += 1 
        }

        // to handle last position
        n.append(Int.max)   
        // some are selected
        for i in 0..<n.count {
            if n[i] < i + 1, i + 1 < n[i + 1] {
                cnt += 1
            }
        }

        return cnt
    }
}
```