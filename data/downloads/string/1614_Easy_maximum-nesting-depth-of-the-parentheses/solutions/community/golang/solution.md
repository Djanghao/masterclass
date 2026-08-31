# [Go/Python] Simple Stack Solution For Begginers With Explanation || Beats 100%

**Author:** vltvdnl
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4660388/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4660388/)

---

# Approach
- First we need to realize that we are not interested in numbers at all in this problem, that is:
```
(1+(2*3)+((8)/4))+1 == (()(()))
(1)+((2))+(((3))) == ()(())((()))
```
- Then we need to understand what a stack is in general. A stack is a data structure with FIFO (first in - first out) principle. That is, a primitive stack has only two functions: add a new element or delete the last one (we don't need more than that in this task). 
- The condition specifies that the string will be valid, i.e. all brackets will be closed. It means that we need to track only "(". We will add "(" to the stack, and when we see the first ")" we will find ourselves in this situation:
```
(() -> stack = ["(", "("]
((() -> stack = ["(", "(", "("]
...
```
- Since the string is always valid, we can measure the depth by the stack size at the moment when ")" appears, writing the result in mx:
```
mx = max(mx, len(current_stack))
```
### Time complexity:
$$O(n)$$ - we just traverse "s"

### Space complexity:
$$O(n)$$ - stack size depends on the size of the string


```python []
class Solution:
    def maxDepth(self, s: str) -> int:
        stack = []
        mx=0
        for symb in s:
            if symb =="(":
                stack.append(symb)
            elif symb == ")":
                mx = max(mx, len(stack))
                stack.pop()
            else:
                continue
        return mx
```
```Go []
func maxDepth(s string) int {
    stack := []rune{}
    mx := 0
    for _, val := range s{
        switch val{
            case '(':
                stack = append(stack, val)
            case ')':
                mx = max(mx, len(stack))
                stack = stack[:len(stack)-1]
            default:
                continue
        }
    }
    return mx
}
```
# If you hava any question, feel free to ask. If you like the solution or the explaination, Please UPVOTE!
