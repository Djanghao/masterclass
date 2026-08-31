# Video Explanation

**Author:** niits
**Votes:** 130
**Link:** [https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5378360/](https://leetcode.com/problems/largest-rectangle-in-histogram/solutions/5378360/)

---

# Solution Video

https://youtu.be/WTbLeCP8rwM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 6,001
Thank you for your support!

---

https://youtu.be/bU_dXCOWHls

---

```python []
class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        stack = [-1]
        max_area = 0

        for i in range(len(heights)):
            while stack[-1] != -1 and heights[i] <= heights[stack[-1]]:
                height = heights[stack.pop()]
                width = i - stack[-1] - 1
                max_area = max(max_area, height * width)
            stack.append(i)
        
        while stack[-1] != -1:
            height = heights[stack.pop()]
            width = len(heights) - stack[-1] - 1
            max_area = max(max_area, height * width)
        
        return max_area
```
```javascript []
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
        const stack = [-1];
        let max_area = 0;

        for (let i = 0; i < heights.length; i++) {
            while (stack[stack.length - 1] !== -1 && heights[i] <= heights[stack[stack.length - 1]]) {
                const height = heights[stack.pop()];
                const width = i - stack[stack.length - 1] - 1;
                max_area = Math.max(max_area, height * width);
            }
            stack.push(i);
        }

        while (stack[stack.length - 1] !== -1) {
            const height = heights[stack.pop()];
            const width = heights.length - stack[stack.length - 1] - 1;
            max_area = Math.max(max_area, height * width);
        }

        return max_area;
};
```
```java []
import java.util.Stack;

class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        stack.push(-1);
        int maxArea = 0;

        for (int i = 0; i < heights.length; i++) {
            while (stack.peek() != -1 && heights[i] <= heights[stack.peek()]) {
                int height = heights[stack.pop()];
                int width = i - stack.peek() - 1;
                maxArea = Math.max(maxArea, height * width);
            }
            stack.push(i);
        }

        while (stack.peek() != -1) {
            int height = heights[stack.pop()];
            int width = heights.length - stack.peek() - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        return maxArea;
    }
}
```
```C++ []
class Solution {
public:
    int largestRectangleArea(vector<int>& heights) {
        stack<int> stack;
        stack.push(-1);
        int max_area = 0;

        for (int i = 0; i < heights.size(); i++) {
            while (stack.top() != -1 && heights[i] <= heights[stack.top()]) {
                int height = heights[stack.top()];
                stack.pop();
                int width = i - stack.top() - 1;
                max_area = max(max_area, height * width);
            }
            stack.push(i);
        }

        while (stack.top() != -1) {
            int height = heights[stack.top()];
            stack.pop();
            int width = heights.size() - stack.top() - 1;
            max_area = max(max_area, height * width);
        }

        return max_area;        
    }
};
```

---

Thank you for reading my post.

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My recent video
#33 Search in Rotated Sorted Array

https://youtu.be/dO9OZJP_Hm8
