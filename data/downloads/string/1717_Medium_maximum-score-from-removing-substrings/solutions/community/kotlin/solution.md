# Kotlin linear explained

**Author:** skulagin
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5464042/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5464042/)

---

# Intuition
Let\u2019s use a greedy approach with two passes: the first pass to get the most valuable substrings and the second to get the others.

# Approach
1.	Determine Priority:
    -	Identify which pair removal yields the higher score. If x > y, prioritize removing \u201Cab\u201D; otherwise, prioritize removing \u201Cba\u201D.
    -	Set first to the character of the higher scoring pair that comes first alphabetically ('a' or 'b'), and second to the character that follows it in the pair.
2.	Initialize Stacks:
    -	Use two stacks: stack1 and stack2 to help manage the characters in the string.
3.	First Pass through String:
    -	If the current character, combined with the top of stack1, forms the higher scoring pair, pop from stack1 and add the corresponding score (maxOf(x, y)) to the result.
    -	Otherwise, push the current character onto stack1.
4.	Second Pass through Stack:
    -	After the first pass, stack1 contains characters that couldn\u2019t form the higher scoring pair.
    -	Process these remaining characters similarly using stack2.
    -	If the top of stack2 forms the lower scoring pair with the current character, pop from stack2 and add the lower score (minOf(x, y)) to the result.
    -	Otherwise, push the current character onto stack2.
5.	Return result.

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```
class Solution {
    fun maximumGain(s: String, x: Int, y: Int): Int {
        val stack1 = Stack<Char>()
        val stack2 = Stack<Char>()
        val first = if (x > y) 'a' else 'b'
        val second = if (x > y) 'b' else 'a'
        var result = 0

        s.forEach { char ->
            if (stack1.isNotEmpty() && stack1.peek() == first && char == second) {
                stack1.pop()
                result += maxOf(x, y)
            } else stack1.push(char)
        }

        while (stack1.isNotEmpty()) {
            val char = stack1.pop()
            if (stack2.isNotEmpty() && stack2.peek() == first && char == second) {
                stack2.pop()
                result += minOf(x, y)
            } else stack2.push(char)
        }

        return result
    }
}
```