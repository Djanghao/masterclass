# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/3110597/](https://leetcode.com/problems/confusing-number-ii/solutions/3110597/)

---

# Intuition
Generate all numbers <n with whitelisted digits.

# Complexity
- Time complexity: ?

- Space complexity: O(log(n))

# Code
```
class Solution {
    var confusingMap: [Int: Int] = [
        0: 0,
        1: 1,
        6: 9,
        8: 8,
        9: 6,
    ]

    func confusingNumberII(_ n: Int) -> Int {
        return dfs(0, max: n)
    }

    func dfs(_ number: Int, max: Int) -> Int {
        if number > max { return 0 }

        var answer = 0
        if number != rotate(number) {
            answer += 1
        }

        for digit in confusingMap.keys {
            if number == 0 && digit == 0 { continue }

            answer += dfs(
                number * 10 + digit,
                max: max
            )
        }

        return answer
    }

    func rotate(_ number: Int) -> Int {
        var answer = 0

        var number = number
        while number > 0 {
            let digit = number % 10
            let rotatedDigit = confusingMap[digit]!
            answer = answer * 10 + rotatedDigit
            number /= 10
        }
        
        return answer
    }
}
```