# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 19
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1941862/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1941862/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of the tokens.
    //   - space: O(n), where n is the length of the tokens.
    
    func evalRPN(_ tokens: [String]) -> Int {
        var stack = [Int]()

        for token in tokens {
            if let num = Int(token) { stack.append(num); continue }

            guard stack.count >= 2 else { fatalError("RPN expression isn't valid.") }

            let sec = stack.removeLast()
            let fir = stack.removeLast()

            switch token {
            case "+": stack.append(fir + sec)
            case "-": stack.append(fir - sec)
            case "*": stack.append(fir * sec)
            case "/": stack.append(fir / sec)
            default:
                fatalError("RPN expression isn't valid.")
            }
        }

        guard stack.count == 1 else { fatalError("RPN expression isn't valid.") }
        return stack[0]
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.