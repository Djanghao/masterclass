# Intuitive approach

**Author:** bekzhan_omirzakov
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/3254104/](https://leetcode.com/problems/maximum-nesting-depth-of-two-valid-parentheses-strings/solutions/3254104/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Just alternate group every position belongs to 

# Approach
<!-- Describe your approach to solving the problem. -->
All you have to do is to make sure that you're not repeating the group you've used before.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
fun maxDepthAfterSplit(seq: String): IntArray {

    val stack = Stack<ParentEle>()
    var group = 1
    val answer = IntArray(seq.length) { -1 }
    for (i in 0 until seq.length) {
        if (seq[i] == '(') {
            stack.push(ParentEle(i, '('))
            group = if (group == 1) 0 else 1
        } else if (stack.peek().char == '(') {
            val prev = stack.pop()
            answer[prev.pos] = group
            answer[i] = group
            group = if (group == 1) 0 else 1
        }
    }
    return answer
}

data class ParentEle(val pos: Int, val char: Char)

}
```