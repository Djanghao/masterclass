# Two stack approach | Beats 100% Swift solutions

**Author:** rajmanikush
**Votes:** 3
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/4985761/](https://leetcode.com/problems/valid-parenthesis-string/solutions/4985761/)

---


# Approach
Take two separate stack for the left parenthesis and another stack for *, once the right parenthesis is found 
- If both stack is empty then -> Not valid
- If left stack is not empty, pop last and continue
- If left stack empty but * stack is not empty then last start can treat as left parenthesis, pop last and continue

Once the traversal is finished, then need to check the if any left parenthesis came after star then it can not make valid pair.


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func checkValidString(_ s: String) -> Bool {
        var leftStack: [Int] = []
        var starStack: [Int] = []
        var array = Array(s)

        for index in 0..<array.count {
            let char = array[index]
            if char == "(" {
                leftStack.append(index)
            } else if char == ")" {
                if leftStack.isEmpty && starStack.isEmpty {
                    return false
                } else if !leftStack.isEmpty {
                    leftStack.removeLast()
                } else if !starStack.isEmpty {
                    starStack.removeLast()
                }
            } else {
                starStack.append(index)
            }
        }

        while !leftStack.isEmpty, !starStack.isEmpty {
            let leftIndex = leftStack.removeLast()
            let rightIndex = starStack.removeLast()
            if leftIndex > rightIndex {
                return false
            }
        }

        return leftStack.isEmpty
    }
}
```