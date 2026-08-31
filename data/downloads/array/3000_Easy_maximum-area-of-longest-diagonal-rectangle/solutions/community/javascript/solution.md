# ✅THE BEST EXPLANATION||Beats 100% Users

**Author:** harshal2024
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521815/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521815/)

---

---
# PLEASE UPVOTE IF YOU LIKE IT \u2705
---
![Screenshot (3221).png](./images/0.png)


---
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the rectangle with the longest diagonal. If there are multiple rectangles with the longest diagonal, the tiebreaker is the one with the maximum area.

---


# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize variables maxArea and maxDiag to keep track of the maximum area and diagonal encountered so far.
2. Iterate through each rectangle represented by dimensions[i].
3. For each rectangle, calculate the square of the diagonal length using the formula (l * l + w * w), where l is the length and w is the width. **Note that there is no need to calculate the square root, as comparing squared values maintains the order of the lengths.**
4. Compare the calculated diagonal length with the current maximum diagonal (maxDiag).
5. If the current diagonal is greater than the maximum diagonal encountered so far, or if it's equal but the area of the rectangle is greater, update maxDiag and maxArea accordingly.
6. Continue this process for all rectangles.
7. Return the final maximum area (maxArea) as the result.

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The **time complexity of the provided code is O(n)**, where n is the number of rectangles represented by dimensions. In the worst case, the code iterates through all the rectangles once, performing constant-time operations for each rectangle. Therefore, the overall time complexity is linear with respect to the number of rectangles.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The **space complexity is O(1)**, constant space. The code uses only a constant amount of additional space regardless of the input size. The space required for variables maxArea, maxDiag, and the loop variables does not depend on the number of rectangles. Hence, the space complexity is constant.

---

![download.jpeg](./images/1.jpeg)

---
# Code

---


## **C++**
```
class Solution {
public:
    // Function to calculate the area of the rectangle with the longest diagonal
    int areaOfMaxDiagonal(vector<vector<int>>& dimensions) {
        // Get the number of rectangles
        int n = dimensions.size();

        // Initialize variables to keep track of maximum area and diagonal
        int maxArea = 0, maxDiag = 0;

        // Iterate through each rectangle
        for (int i = 0; i < n; i++) {
            // Get the length and width of the current rectangle
            int l = dimensions[i][0];
            int w = dimensions[i][1];

            // Calculate the square of the diagonal length
            int currDiag = l * l + w * w;

            // Compare the current diagonal with the maximum diagonal encountered so far
            // If the current diagonal is greater, or if it's equal but the area is greater,
            // update maxDiag and maxArea accordingly
            if (currDiag > maxDiag || (currDiag == maxDiag && l * w > maxArea)) {
                maxDiag = currDiag;
                maxArea = l * w;
            }
        }

        // Return the maximum area of the rectangle with the longest diagonal
        return maxArea;
    }
};
```

---


### **Python3**
```
class Solution:
    def areaOfMaxDiagonal(self, dimensions: List[List[int]]) -> int:
        # Get the number of rectangles
        n = len(dimensions)

        # Initialize variables to keep track of maximum area and diagonal
        maxArea = 0
        maxDiag = 0

        # Iterate through each rectangle
        for i in range(n):
            # Get the length and width of the current rectangle
            l, w = dimensions[i]

            # Calculate the square of the diagonal length
            currDiag = l**2 + w**2

            # Compare the current diagonal with the maximum diagonal encountered so far
            # If the current diagonal is greater, or if it's equal but the area is greater,
            # update maxDiag and maxArea accordingly
            if currDiag > maxDiag or (currDiag == maxDiag and l * w > maxArea):
                maxDiag = currDiag
                maxArea = l * w

        # Return the maximum area of the rectangle with the longest diagonal
        return maxArea

```

---


### **Java**
```
class Solution {
    public int areaOfMaxDiagonal(int[][] dimensions) {
        // Get the number of rectangles
        int n = dimensions.length;

        // Initialize variables to keep track of maximum area and diagonal
        int maxArea = 0;
        int maxDiag = 0;

        // Iterate through each rectangle
        for (int i = 0; i < n; i++) {
            // Get the length and width of the current rectangle
            int l = dimensions[i][0];
            int w = dimensions[i][1];

            // Calculate the square of the diagonal length
            int currDiag = l * l + w * w;

            // Compare the current diagonal with the maximum diagonal encountered so far
            // If the current diagonal is greater, or if it's equal but the area is greater,
            // update maxDiag and maxArea accordingly
            if (currDiag > maxDiag || (currDiag == maxDiag && l * w > maxArea)) {
                maxDiag = currDiag;
                maxArea = l * w;
            }
        }

        // Return the maximum area of the rectangle with the longest diagonal
        return maxArea;
    }
}
```

---


### **JavaScript**
```
/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function(dimensions) {
    // Get the number of rectangles
    const n = dimensions.length;

    // Initialize variables to keep track of maximum area and diagonal
    let maxArea = 0;
    let maxDiag = 0;

    // Iterate through each rectangle
    for (let i = 0; i < n; i++) {
        // Get the length and width of the current rectangle
        const l = dimensions[i][0];
        const w = dimensions[i][1];

        // Calculate the square of the diagonal length
        const currDiag = l ** 2 + w ** 2;

        // Compare the current diagonal with the maximum diagonal encountered so far
        // If the current diagonal is greater, or if it's equal but the area is greater,
        // update maxDiag and maxArea accordingly
        if (currDiag > maxDiag || (currDiag === maxDiag && l * w > maxArea)) {
            maxDiag = currDiag;
            maxArea = l * w;
        }
    }

    // Return the maximum area of the rectangle with the longest diagonal
    return maxArea;
};
```

---

