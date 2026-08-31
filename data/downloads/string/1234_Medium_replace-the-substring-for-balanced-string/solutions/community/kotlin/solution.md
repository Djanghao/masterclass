# Flexible window

**Author:** CatInt
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4741076/](https://leetcode.com/problems/replace-the-substring-for-balanced-string/solutions/4741076/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use a flexible window query the string from left to right

# Complexity
- Time complexity: O(2N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    fun balancedString(s: String): Int {
        // count char, save to a counter
        val counter = mutableMapOf<Char, Int>(
            'Q' to 0, 'W' to 0, 'E' to 0, 'R' to 0
        )
        s.forEach{ counter[it] = counter[it]!! + 1 }

        // check the counter whether it is balanced
        val counterWeight = s.length / 4
        counter.forEach{ counter[it.key] = it.value - counterWeight }
        fun isBalanced() = counter.values.max() <= 0
        if (isBalanced()) return 0

        // the char either in the window or in the counter
        fun addToWindow(index: Int) { 
            counter[s[index]] = counter[s[index]]!! - 1
        }
        fun removeFromWindow(index: Int) {
             counter[s[index]] = counter[s[index]]!! + 1
        }
        
        // the max length to replace is length-1
        var result = s.length - 1
        // the min length is the sum of all values which is larger than 0
        val MIN = counter.values.sumBy{ Math.max(it, 0) }

        // use a flexible window query from start to end
        var leftIndex = 0
        var rightIndex = 0
        while (rightIndex < s.length && result > MIN && MIN <= (s.length - leftIndex))
        {
            // move char from the counter to the window
            addToWindow(rightIndex)
            while (isBalanced())
            {
                // when the counter is balanced, update the result by current window size
                result = Math.min(result, rightIndex - leftIndex + 1)
                // thrink the window from left boundary
                removeFromWindow(leftIndex)
                leftIndex++
            }
            // expand the window by increasing right boundary
            rightIndex++
        }
        return result
    }
}
```