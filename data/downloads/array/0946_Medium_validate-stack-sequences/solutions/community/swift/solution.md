# Accepted: Easy to understand solution O(n)

**Author:** teenuburi
**Votes:** 2
**Link:** [https://leetcode.com/problems/validate-stack-sequences/solutions/3411291/](https://leetcode.com/problems/validate-stack-sequences/solutions/3411291/)

---


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
class Solution {
    func validateStackSequences(_ pushed: [Int], _ popped: [Int]) -> Bool {
        var popIndex = 0
        var stack = [Int]()

        for item in pushed {
            stack.append(item) 
            while !stack.isEmpty && popIndex <  popped.count && popped[popIndex] == stack.last! {
                popIndex += 1
                stack.removeLast()
            }
        }
        return stack.isEmpty
    }
}
```