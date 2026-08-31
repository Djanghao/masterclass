# Backtracking: same as in Editorial, in Swift

**Author:** CaptainAmazing
**Votes:** 0
**Link:** [https://leetcode.com/problems/factor-combinations/solutions/6027439/](https://leetcode.com/problems/factor-combinations/solutions/6027439/)

---

# Intuition
This solution matches that of the LeetCode Editorial solution for `Backtracking` at time of submission, written in Swift.

# Code
```swift []
class Solution {

    func getFactors(_ n: Int) -> [[Int]] {
        var factors: [Int] = [n]
        var answer: [[Int]] = []

        func backtracking() {

            // We completed a valid list of factors
            if factors.count > 1 {
                answer.append(factors)
            }

            let lastFactor: Int = factors.removeLast()
            var index: Int = factors.isEmpty ? 2 : factors[factors.count - 1] 
            while true {

                // Exit loop
                guard index <= lastFactor/index else { break }

                if lastFactor % index == 0 {
                    factors.append(index)
                    factors.append(lastFactor/index)
                    backtracking()
                    factors.popLast()
                    factors.popLast()
                }

                // Increment factor candidate
                index += 1
            }
            factors.append(lastFactor)
        }

        backtracking()
        return answer
    }
}
```