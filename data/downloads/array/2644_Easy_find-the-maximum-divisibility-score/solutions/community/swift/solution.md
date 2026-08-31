# Swift | Functional Approach

**Author:** OrchidHunter
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3436628/](https://leetcode.com/problems/find-the-maximum-divisibility-score/solutions/3436628/)

---

**Functional Approach (accepted answer)**
```
class Solution {
    func maxDivScore(_ nums: [Int], _ divisors: [Int]) -> Int {
        divisors.reduce((maxScore: -1, minDivisor: 0)) { result, divisor in
            let score = nums.reduce(0) { score, num in score + (num % divisor == 0 ? 1: 0) }
            let update = score > result.maxScore || (score == result.maxScore && divisor < result.minDivisor)
            return update ? (maxScore: score, minDivisor: divisor) : result
        }.minDivisor
    }
}
```