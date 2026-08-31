# Swift Solution using extension (GCD)

**Author:** aayushkumar20
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/3089730/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/3089730/)

---

# Approach
1. We have two numbers, x and y.
2. We want to know if the greatest common divisor of x and y is 1.
3. We start off with a variable v that stores the greatest common divisor of x and y.
4. We repeatedly divide v by 2 until it is odd.
5. If v is 1, then the greatest common divisor of x and y is 1. If v is not 1, then the greatest common divisor of x and y is not 1

# Complexity
- Time complexity: O(log(max(x, y)))

- Space complexity: O(1)

# Code
```
class Solution {
    func isReachable(_ x: Int, _ y: Int) -> Bool {
        var v = x.gcd(y)
        while v % 2 == 0 {
            v /= 2
        }
        return v == 1
    }
}

extension Int {
    func gcd(_ other: Int) -> Int {
        var a = self
        var b = other
        while b != 0 {
            let t = b
            b = a % b
            a = t
        }
        return a
    }
}
```
# Please UpVote if you like it...