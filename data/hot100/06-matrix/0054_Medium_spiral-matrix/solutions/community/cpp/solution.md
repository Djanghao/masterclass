# Python🔥Java🔥C++🔥Simple Solution🔥Easy to Understand

**Author:** techwired8
**Votes:** 341
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/3502600/](https://leetcode.com/problems/spiral-matrix/solutions/3502600/)

---

**!! BIG ANNOUNCEMENT !!**
I am currently Giving away my premium content well-structured assignments and study materials to clear interviews at top companies related to computer science and data science to my current Subscribers. I planned to give for next 10,000 Subscribers as well. If you're interested **DON'T FORGET** to Subscribe

# Search \uD83D\uDC49 `Tech Wired Leetcode` to Subscribe

# Video Solution 

# Search \uD83D\uDC49 `Spiral Matrix by Tech Wired `

# or

# Click the Link in my Profile

# Approach:

- We will use a while loop to traverse the matrix in a clockwise spiral order.
- We will define four variables: left, right, top, bottom to represent the four boundaries of the current spiral.
- We will use four for loops to traverse each edge of the current spiral in clockwise order and add the elements to the result list.
- We will update the boundaries of the current spiral and continue the process until all elements have been traversed.

# Intuition:

- We start with the outermost layer of the matrix and traverse it in a clockwise spiral order, adding the elements to the result list.
- Then we move on to the next inner layer of the matrix and repeat the process until we have traversed all layers.
- To traverse each layer, we need to keep track of the four boundaries of the current spiral.
- We start at the top-left corner of the current spiral and move right until we hit the top-right corner.
- Then we move down to the bottom-right corner and move left until we hit the bottom-left corner.
- Finally, we move up to the top-left corner of the next spiral and repeat the process until we have traversed all elements in the matrix.





```Python []
class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        if not matrix:
            return []

        rows, cols = len(matrix), len(matrix[0])
        top, bottom, left, right = 0, rows-1, 0, cols-1
        result = []
        
        while len(result) < rows * cols:
            for i in range(left, right+1):
                result.append(matrix[top][i])
            top += 1
            
            for i in range(top, bottom+1):
                result.append(matrix[i][right])
            right -= 1
            
            if top <= bottom:
                for i in range(right, left-1, -1):
                    result.append(matrix[bottom][i])
                bottom -= 1
            
            if left <= right:
                for i in range(bottom, top-1, -1):
                    result.append(matrix[i][left])
                left += 1
        
        return result

```
```Java []
class Solution {
    public List<Integer> spiralOrder(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        if (matrix == null || matrix.length == 0) {
            return result;
        }
        
        int rows = matrix.length, cols = matrix[0].length;
        int left = 0, right = cols-1, top = 0, bottom = rows-1;
        
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                result.add(matrix[top][i]);
            }
            top++;
            
            for (int i = top; i <= bottom; i++) {
                result.add(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    result.add(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    result.add(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
}

```
```C++ []
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> result;
        if (matrix.empty() || matrix[0].empty()) {
            return result;
        }
        
        int rows = matrix.size(), cols = matrix[0].size();
        int left = 0, right = cols-1, top = 0, bottom = rows-1;
        
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++) {
                result.push_back(matrix[top][i]);
            }
            top++;
            
            for (int i = top; i <= bottom; i++) {
                result.push_back(matrix[i][right]);
            }
            right--;
            
            if (top <= bottom) {
                for (int i = right; i >= left; i--) {
                    result.push_back(matrix[bottom][i]);
                }
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--) {
                    result.push_back(matrix[i][left]);
                }
                left++;
            }
        }
        
        return result;
    }
};

```

# An Upvote will be encouraging \uD83D\uDC4D