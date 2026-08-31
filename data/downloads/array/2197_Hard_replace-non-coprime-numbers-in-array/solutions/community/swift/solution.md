# Swift Solution

**Author:** windowcow
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/4830890/](https://leetcode.com/problems/replace-non-coprime-numbers-in-array/solutions/4830890/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Very similar to 
https://leetcode.com/problems/asteroid-collision/

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
class Solution {
    func gcd(_ a: Int, _ b: Int) -> Int {
        b == 0 ? a : gcd(b, a % b)
    }

    func lcm(_ a: Int, _ b: Int) -> Int {
        a * b / gcd(a, b)
    }

    func replaceNonCoprimes(_ nums: [Int]) -> [Int] {
        if nums.count == 1 { return nums }

        var nums = nums
        var stack: [Int] = []

        while let current = nums.popLast() {
            if let stackTop = stack.popLast() {
                if gcd(stackTop, current) != 1 {
                    nums.append(lcm(current, stackTop))
                } else {
                    stack.append(stackTop)
                    stack.append(current)
                }
            } else {
                stack.append(current)
            }
        }

        return stack.reversed()
    }
}
```