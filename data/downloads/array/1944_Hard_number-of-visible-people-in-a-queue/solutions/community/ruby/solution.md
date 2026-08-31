# monostack

**Author:** hkassow
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/2296206/](https://leetcode.com/problems/number-of-visible-people-in-a-queue/solutions/2296206/)

---

using a mono stack from the back.



```
# @param {Integer[]} heights
# @return {Integer[]}
def can_see_persons_count(heights)
    n = heights.length
    ans = Array.new(n, 0)
    
    stack = []
    
    i = n - 1
    until i < 0
        count = 0
        until (stack.length == 0) || ( heights[i] < heights[stack[-1]])
            stack.pop
            count += 1
        end
        
        if (stack.length != 0) && (heights[i] < heights[stack[-1]])
            count += 1
            #every minion except the furtherst right can see their 'local max' minion => top of stack
        end
        ans[i] = count
        stack.push(i)
        i -= 1
    end
    ans
end
```