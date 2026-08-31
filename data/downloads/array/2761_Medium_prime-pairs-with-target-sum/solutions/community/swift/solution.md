# Swift Solution | Beats 100% in Both Time & Space....

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/4246706/](https://leetcode.com/problems/prime-pairs-with-target-sum/solutions/4246706/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func findPrimePairs(_ n: Int) -> [[Int]] {
        var primeArray = Array(repeating: 1, count: n + 1)
        var sqrtN = Int(sqrt(Double(n)))
        // print("sqrtN is: \\(sqrtN)")
        primeArray[1] = 0
        var ans = [[Int]]()

        var index = 2
        while index <= sqrtN {
            // print("entered for loop....")
            var startValue = index
            var counter = 2
            // print("startValue is: \\(startValue)")
            var number = startValue * counter 
            while number <= n {
                // print("value of counter is: \\(counter)")
                primeArray[number] = 0
                counter = counter + 1
                number = startValue * counter
            }

            // print("startValue is: \\(startValue) and breaking point is: \\(counter) ")
            index = index + 1
        }
        // print("reached here")
        var index2 = 2
        while index2 <= n/2 {
            var secondNumber = n - index2
            if primeArray[index2] == 1 && primeArray[secondNumber] == 1 {
                var tempArray = [Int]()
                tempArray.append(index2)
                tempArray.append(secondNumber)
                ans.append(tempArray)
            }
            index2 = index2 + 1
        }

        return ans
    }
}
```