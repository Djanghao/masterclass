# Swift | Prefix Sums

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/4032875/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/4032875/)

---

**Prefix Sums  (accepted answer)**
```
class Solution {
    func countInterestingSubarrays(_ nums: [Int], _ modulo: Int, _ k: Int) -> Int {
        var result = 0, sum = modulo, sums = [0:0]

        for num in nums {
            sums[sum % modulo, default:0] += 1
            sum += num % modulo == k ? 1 : 0
            result += sums[(sum-k) % modulo] ?? 0
        }
        
        return result
    }
}
```