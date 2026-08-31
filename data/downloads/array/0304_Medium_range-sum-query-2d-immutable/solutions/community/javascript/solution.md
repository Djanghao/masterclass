# JS, Python, Java, C++ | Easy 4 Rectangles DP Solution w/ Explanation

**Author:** sgallivan
**Votes:** 59
**Link:** [https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/1204168/](https://leetcode.com/problems/range-sum-query-2d-immutable/solutions/1204168/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This problem brings up one of the characteristics of a **2D matrix**: the sum of the elements in any rectangular range of a matrix (**M**) can be defined mathematically by the overlap of four other rectangular ranges that originate at **M[0][0]**.

The sum of the rectangle **(0,0)->(i,j)** is equal to the cell **(i,j)**, plus the rectangle **(0,0)->(i,j-1)**, plus the rectangle **(0,0)->(i-1,j)**, minus the rectangle **(0,0)->(i-1,j-1)**. We subtract the last rectangle because it represents the overlap of the previous two rectangles that were added.

![Visual 1](https://i.imgur.com/tmTpvF5.gif)

With this information, we can use a **dynamic programming** (**DP**) approach to build a **prefix sum** matrix (**dp**) from **M** iteratively, where **dp[i][j]** will represent the sum of the rectangle **(0,0)->(i,j)**. We'll add an extra row and column in order to prevent out-of-bounds issues at **i-1** and **j-1** (similar to a prefix sum array), and we'll fill **dp** with **0**s.

At each cell, we'll add its value from **M** to the **dp** values of the cell on the left and the one above, which represent their respective rectangle sums, and then subtract from that the top-left diagonal value, which represents the overlapping rectangle of the previous two additions.

Then, we just reverse the process for **sumRegion()**: We start with the sum at **dp[R2+1][C2+1]** (due to the added row/column), then subtract the left and top rectangles before adding back in the doubly-subtracted top-left diagonal rectangle.

_(**Note:** Even though the test cases will pass when using an int matrix for **dp**, the values of **dp** can range from **-4e9** to **4e9** per the listed constraints, so we should use a data type capable of handling more than **32 bits**.)_

 - _**Time Complexity:**_
    - _**constructor: O(M * N)** where **M** and **N** are the dimensions of the input matrix_
    - _**sumRegion: O(1)**_
 - _**Space Complexity:**_
    - _**constructor: O(M * N)** for the **DP** matrix_
    - _**constructor: O(1)** if you're able to modify the input and use an **in-place DP** approach_
    - _**sumRegion: O(1)**_

---

#### ***Javascript Code:***

The best result for the code below is **92ms / 43.3MB** (beats 100% / 70%).
```javascript
class NumMatrix {
    constructor(M) {
        let ylen = M.length + 1, xlen = M[0].length + 1
        this.dp = Array.from({length: ylen}, () => new Array(xlen).fill(0))
        for (let i = 1; i < ylen; i++)
            for (let j = 1; j < xlen; j++)
                this.dp[i][j] = M[i-1][j-1] + this.dp[i-1][j] + this.dp[i][j-1] - this.dp[i-1][j-1]
    }
    
    sumRegion(R1, C1, R2, C2) {
        return this.dp[R2+1][C2+1] - this.dp[R2+1][C1] - this.dp[R1][C2+1] + this.dp[R1][C1]
    }
};
```

---

#### ***Python Code:***

The best result for the code below is **100ms / 17.1MB** (beats 96% / 73%).
```python
class NumMatrix:
    def __init__(self, M: List[List[int]]):
        ylen, xlen = len(M) + 1, len(M[0]) + 1
        self.dp = [[0] * xlen for _ in range(ylen)]
        for i in range(1, ylen):
            for j in range(1, xlen):
                self.dp[i][j] = M[i-1][j-1] + self.dp[i-1][j] + self.dp[i][j-1] - self.dp[i-1][j-1]

    def sumRegion(self, R1: int, C1: int, R2: int, C2: int) -> int:
        return self.dp[R2+1][C2+1] - self.dp[R2+1][C1] - self.dp[R1][C2+1] + self.dp[R1][C1]
```

---

#### ***Java Code:***

The best result for the code below is **10ms / 44.1MB** (beats 100% / 100%).
```java
class NumMatrix {
    long[][] dp;
    
    public NumMatrix(int[][] M) {
        int ylen = M.length + 1, xlen = M[0].length + 1;
        dp = new long[ylen][xlen];
        for (int i = 1; i < ylen; i++)
            for (int j = 1; j < xlen; j++)
                dp[i][j] = M[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
    }
    
    public int sumRegion(int R1, int C1, int R2, int C2) {
        return (int)(dp[R2+1][C2+1] - dp[R2+1][C1] - dp[R1][C2+1] + dp[R1][C1]);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **8ms / 15.4MB** (beats 100% / 40%).
```c++
class NumMatrix {
    vector<vector<long>> dp;
    
public:
    NumMatrix(vector<vector<int>>& M) {
        int ylen = M.size() + 1, xlen = M[0].size() + 1;
        dp = vector<vector<long>>(ylen, vector<long>(xlen, 0));
        for (int i = 1; i < ylen; i++)
            for (int j = 1; j < xlen; j++)
                dp[i][j] = M[i-1][j-1] + dp[i-1][j] + dp[i][j-1] - dp[i-1][j-1];
    }
    
    int sumRegion(int R1, int C1, int R2, int C2) {
        return (int)(dp[R2+1][C2+1] - dp[R2+1][C1] - dp[R1][C2+1] + dp[R1][C1]);
    }
};
```