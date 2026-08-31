# Easy to understand and simple to implement

**Author:** PawanRoy1997
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/4224961/](https://leetcode.com/problems/convert-to-base-2/solutions/4224961/)

---

# Intuition
The problem can be solved via old school way. As described on the [post](https://www.tutorialspoint.com/computer_logical_organization/number_system_conversion.htm).

# Approach
This can be handled through the old school way:

*Step-1* : Initialize vaiable with number want to convert
*Step-2* : Divide the number by Base
*Step-3* : Add the remainder into the result
*Step-4* : Now replace the initial variable with the quotent
*Step-5* : Keep on repeating from *Step-2* to *Step-4* till quotent is greater than 1

# Complexity
- Time complexity: O(log|n|)

- Space complexity: O(log|n|)

# Solution
To checkout my solution to all leet code solutions, check out this [repository](https://github.com/PawanRoy1997/leetcode_studyplan/blob/master/src/main/kotlin/pawanroy/leetcode/1017-convert-to-base-2/Solution.kt)

# Code
```
class Solution {

    fun baseNeg2(n: Int): String {
        if (n == 0) return "0"
        val stack = Stack<Int>()
        var number = n
        val result = StringBuilder()
        while (number != 1) {
            if (number % 2 != 0) stack.push(1) else stack.push(0)
            if (number < 0 && number % 2 != 0) number--
            number /= (-2)
        }
        stack.push(1)
        while (!stack.isEmpty()) {
            result.append(stack.pop())
        }
        return result.toString()
    }
}
```