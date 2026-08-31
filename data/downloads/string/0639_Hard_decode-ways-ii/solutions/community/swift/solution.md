# [Swift] Readable Solution (Memoization)

**Author:** Legonaftik
**Votes:** 0
**Link:** [https://leetcode.com/problems/decode-ways-ii/solutions/1329191/](https://leetcode.com/problems/decode-ways-ii/solutions/1329191/)

---

```
class Solution {

    private let mod = Int(1E9+7)

    func numDecodings(_ s: String) -> Int {
        let chars = Array(s)
        var memo: [Int?] = Array(repeating: nil, count: s.count)

        func numDecodings(endIndex: Int) -> Int {
            if endIndex < 0 {
                return 1
            }
            if let cachedValue = memo[endIndex] {
                return cachedValue
            }

            let char = chars[endIndex]
            let answerPrev = { numDecodings(endIndex: endIndex-1) }
            let answerPrevPrev = { numDecodings(endIndex: endIndex-2) }

            var answer: Int
            if char == "*" {
                answer = 9 * answerPrev()
                if endIndex > 0 {
                    switch chars[endIndex-1] {
                    case "1":
                        answer += 9 * answerPrevPrev()
                    case "2":
                        answer += 6 * answerPrevPrev()
                    case "*":
                        answer += 15 * answerPrevPrev()
                    default:
                        break
                    }
                }
            } else {
                answer = char == "0" ? 0 : answerPrev()
                if endIndex > 0 {
                    switch chars[endIndex-1] {
                    case "1":
                        answer += answerPrevPrev()
                    case "2" where char <= "6":
                        answer += answerPrevPrev()
                    case "*":
                        answer += (char <= "6" ? 2 : 1) * answerPrevPrev()
                    default:
                        break
                    }
                }
            }
            answer %= mod
            memo[endIndex] = answer
            return answer
        }

        return numDecodings(endIndex: chars.endIndex-1)
    }
}
```