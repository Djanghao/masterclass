# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3408220/](https://leetcode.com/problems/prime-in-diagonal/solutions/3408220/)

---

```
class Solution {

    private static func isp(_ n: Int) -> Bool {

        while n >= prs.count {

            let m = prs.count
            prs.append(true)
            
            for i in 2...Int(Double(m).squareRoot())
                where m % i == 0 {
                    prs[m] = false
                    break
                }
        }

        return prs[n]
    }

    private static var prs = [false, false, true, true, false, true]

    func diagonalPrime(_ nums: [[Int]]) -> Int {

        var res = 0

        for i in nums.indices
            where Self.isp(nums[i][i]) {
                res = max(res, nums[i][i])
            }
        
        for i in nums.indices
            where Self.isp(nums[i][nums.count - i - 1]) {
                res = max(res, nums[i][nums.count - i - 1])
            }

        return res
    }
}
```