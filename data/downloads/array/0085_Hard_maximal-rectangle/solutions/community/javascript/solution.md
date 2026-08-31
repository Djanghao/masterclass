# 【Video】Simple Solution

**Author:** niits
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximal-rectangle/solutions/3407011/](https://leetcode.com/problems/maximal-rectangle/solutions/3407011/)

---

---

# Solution Video

https://youtu.be/A-yig8nSmT0

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,382
Thank you for your support!

---



# Approach
1. Check if the input matrix is empty, if it is return 0.

2. Determine the number of columns in the matrix (n) by getting the length of the first row of the matrix.

3. Create a list called heights, with n+1 elements, and initialize each element to 0.

4. Create a variable called max_area and initialize it to 0.

5. For each row in the matrix, do the following:
    - Iterate through each column in the row, and update the corresponding height in the "heights" list.
    - If the character in the matrix is "1", increment the corresponding height in the "heights" list by 1, otherwise set it to 0.

6. Create an empty stack and add -1 to it.

7. For each element in the "heights" list, do the following:
    - Compare the current height to the height of the top element in the stack.
    - If the current height is less than the height of the top element of the stack, do the following:
        - Pop the top element of the stack and calculate the area of the rectangle formed by the popped height.
        - Calculate the width of the rectangle by subtracting the index of the current element from the index of the new top element of the stack.
        - Calculate the area of the rectangle by multiplying the height and width.
        - Update the maximum area seen so far if the area of the current rectangle is larger than the current maximum.
    - Append the index of the current element to the stack.

8. Return the maximum area seen so far.

# Complexity
- Time complexity:  O(m*n)
m is the number of rows in the input matrix and n is the number of columns. This is because we have to iterate through each element in the matrix at least once, and the time it takes to process each element is constant.

- Space complexity: O(n)
n is the number of columns in the matrix. This is because we are creating a "heights" list with n+1 elements, and a stack that could have up to n+1 elements. The rest of the variables used in the algorithm are constants and do not contribute significantly to the space complexity.

# Python
```
class Solution:
    def maximalRectangle(self, matrix: List[List[str]]) -> int:
        if not matrix:
            return 0
        
        n = len(matrix[0])
        heights = [0] * (n + 1)
        max_area = 0

        for row in matrix:
            for i in range(n):
                heights[i] = heights[i] + 1 if row[i] == "1" else 0
            
            stack = [-1]
            for i in range(n + 1):
                while heights[i] < heights[stack[-1]]:
                    h = heights[stack.pop()]
                    w = i - stack[-1] - 1
                    max_area = max(max_area, h * w)
                
                stack.append(i)
        
        return max_area
```

# JavaScript
```
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length) {
        return 0;
    }
    
    const n = matrix[0].length;
    const heights = new Array(n + 1).fill(0);
    let maxArea = 0;
    
    for (let row of matrix) {
        for (let i = 0; i < n; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        
        const stack = [-1];
        for (let i = 0; i < n + 1; i++) {
            while (heights[i] < heights[stack[stack.length - 1]]) {
                const h = heights[stack.pop()];
                const w = i - stack[stack.length - 1] - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
    }
    
    return maxArea;    
};
```

# Java
```
class Solution {
    public int maximalRectangle(char[][] matrix) {
        if (matrix == null || matrix.length == 0) {
            return 0;
        }
        
        int n = matrix[0].length;
        int[] heights = new int[n + 1];
        int maxArea = 0;
        
        for (char[] row : matrix) {
            for (int i = 0; i < n; i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            
            Stack<Integer> stack = new Stack<>();
            stack.push(-1);
            for (int i = 0; i < n + 1; i++) {
                while (stack.peek() != -1 && heights[i] < heights[stack.peek()]) {
                    int h = heights[stack.pop()];
                    int w = i - stack.peek() - 1;
                    maxArea = Math.max(maxArea, h * w);
                }
                stack.push(i);
            }
        }
        
        return maxArea;        
    }
}
```

# C++
```
class Solution {
public:
    int maximalRectangle(vector<vector<char>>& matrix) {
        if (matrix.empty()) {
            return 0;
        }
        
        int n = matrix[0].size();
        vector<int> heights(n + 1);
        int maxArea = 0;
        
        for (auto row : matrix) {
            for (int i = 0; i < n; i++) {
                heights[i] = row[i] == '1' ? heights[i] + 1 : 0;
            }
            
            stack<int> st;
            st.push(-1);
            for (int i = 0; i < n + 1; i++) {
                while (st.top() != -1 && heights[i] < heights[st.top()]) {
                    int h = heights[st.top()];
                    st.pop();
                    int w = i - st.top() - 1;
                    maxArea = max(maxArea, h * w);
                }
                st.push(i);
            }
        }
        
        return maxArea;        
    }
};
```