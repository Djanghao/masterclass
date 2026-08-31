# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 35
**Link:** [https://leetcode.com/problems/plus-one/solutions/1915685/](https://leetcode.com/problems/plus-one/solutions/1915685/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of the digits.
    //   - space: O(n), where n is the length of the digits.

    func plusOne(_ digits: [Int]) -> [Int] {
        var digits = digits

        for i in (0..<digits.count).reversed() {
            guard digits[i] == 9 else {
                digits[i] += 1
                return digits
            }

            digits[i] = 0
        }

        digits.insert(1, at: 0)
        return digits
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.