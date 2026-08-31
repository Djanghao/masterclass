# ✅Beats 100% - Explained with [ Video ] - Check Row and Column - C++/Java/Python/JS  - Visualized

**Author:** lancertech6
**Votes:** 81
**Link:** [https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397677/](https://leetcode.com/problems/special-positions-in-a-binary-matrix/solutions/4397677/)

---

![Screenshot 2023-12-13 073649.png](./images/0.png)

# YouTube Video Explanation:

[https://youtu.be/GI7EWjkXLnY](https://youtu.be/GI7EWjkXLnY)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 800 Subscribers*
*Current Subscribers: 754*

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the special positions in the binary matrix, we need to iterate through each row and column and check if the current position (i, j) is special. A position is considered special if the element at that position is 1, and all other elements in its row and column are 0.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through each row of the matrix.
2. For each row, check if there is exactly one element with the value 1. If found, remember its column index.
3. After scanning the row, check the corresponding column for the remembered index. If the element is 1 and there are no other 1s in that column, it's a special position.
4. Repeat this process for all rows.
5. Count and return the number of special positions.

# Complexity
- Time Complexity: O(m * n), where m is the number of rows and n is the number of columns in the matrix.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space Complexity: O(1) as we use constant space.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int numSpecial(int[][] mat) {
        
        int specials = 0;

        for (int i = 0; i < mat.length; i++) {
            int index = checkRow(mat, i);
            if (index >= 0 && checkColumn(mat, i, index))
                specials++;
        }

        return specials;
    }

    private int checkRow(int[][] mat, int i) {
        int index = -1;
        for (int j = 0; j < mat[0].length; j++) {
            if (mat[i][j] == 1) {
                if (index >= 0)
                    return -1;
                else
                    index = j;
            }
        }
        return index;
    }

    private boolean checkColumn(int[][] mat, int i, int index) {
        for (int j = 0; j < mat.length; j++) {
            if (mat[j][index] == 1 && j != i)
                return false;
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    int numSpecial(std::vector<std::vector<int>>& mat) {
        int specials = 0;

        for (int i = 0; i < mat.size(); i++) {
            int index = checkRow(mat, i);
            if (index >= 0 && checkColumn(mat, i, index))
                specials++;
        }

        return specials;
    }

private:
    int checkRow(std::vector<std::vector<int>>& mat, int i) {
        int index = -1;
        for (int j = 0; j < mat[0].size(); j++) {
            if (mat[i][j] == 1) {
                if (index >= 0)
                    return -1;
                else
                    index = j;
            }
        }
        return index;
    }

    bool checkColumn(std::vector<std::vector<int>>& mat, int i, int index) {
        for (int j = 0; j < mat.size(); j++) {
            if (mat[j][index] == 1 && j != i)
                return false;
        }
        return true;
    }
};
```
```Python []
class Solution(object):
    def numSpecial(self, mat):
        specials = 0

        for i in range(len(mat)):
            index = self.checkRow(mat, i)
            if index >= 0 and self.checkColumn(mat, i, index):
                specials += 1

        return specials

    def checkRow(self, mat, i):
        index = -1
        for j in range(len(mat[0])):
            if mat[i][j] == 1:
                if index >= 0:
                    return -1
                else:
                    index = j
        return index

    def checkColumn(self, mat, i, index):
        for j in range(len(mat)):
            if mat[j][index] == 1 and j != i:
                return False
        return True
        
```
```JavaScript []
/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let specials = 0;

    for (let i = 0; i < mat.length; i++) {
        let index = checkRow(mat, i);
        if (index >= 0 && checkColumn(mat, i, index))
            specials++;
    }

    return specials;

    function checkRow(mat, i) {
        let index = -1;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 1) {
                if (index >= 0)
                    return -1;
                else
                    index = j;
            }
        }
        return index;
    }

    function checkColumn(mat, i, index) {
        for (let j = 0; j < mat.length; j++) {
            if (mat[j][index] === 1 && j !== i)
                return false;
        }
        return true;
    }
};
```
---
![upvote.png](./images/1.png)
