# [Swift] Clean solution with bitmasking

**Author:** GV1506
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/2095117/](https://leetcode.com/problems/maximum-good-people-based-on-statements/solutions/2095117/)

---

```
class Solution {
    func maximumGood(_ statements: [[Int]]) -> Int {
        let n = statements.count
        var ans = 0
        let maxMask = 1 << n

        func getBit(_ num: Int, _ index: Int) -> Int {
            return ((num & (1 << index)) >> index) & 1
        }

        // 0 is bad, 1 is good
        func check(_ curMask: Int) -> Bool {
            for i in 0..<n {
                let iStatus = getBit(curMask, i)
                
                // if person i is bad, ignore
                if iStatus == 0 { continue }
                
                // here: i is good, i tells the truth
                for j in 0..<n {
                    if statements[i][j] == 2 { continue }
                    let jStatus = getBit(curMask, j)
                    if statements[i][j] != jStatus { return false }
                }
            }
            return true
        }

        for mask in 0..<maxMask {
            let bitCount = mask.nonzeroBitCount
            if bitCount > ans, check(mask){
                ans = bitCount
            }
        }

        return ans
    }
}
```