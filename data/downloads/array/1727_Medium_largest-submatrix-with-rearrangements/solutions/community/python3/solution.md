# 【Video】Give me 10 minutes - how we think about a solution

**Author:** niits
**Votes:** 86
**Link:** [https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331142/](https://leetcode.com/problems/largest-submatrix-with-rearrangements/solutions/4331142/)

---

# Intuition
Using sort for width.

---

# Solution Video

https://youtu.be/odAv92zWKqs

These days, many people watch my video more than 70% of whole time, which is good to my channel reputation. Thank you!

I'm creating this video or post with the goal of ensuring that viewers, whether they read the post or watch the video, won't waste their time. I'm confident that if you spend 10 minutes watching the video, you'll grasp the understanding of this problem.

\u25A0 Timeline of the video

`0:05` How we can move columns
`1:09` Calculate height
`2:48` Calculate width
`4:10` Let's make sure it works
`5:40` Demonstrate how it works
`7:44` Coding
`9:59` Time Complexity and Space Complexity
`10:35` Summary of the algorithm with my solution code

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,225
My first goal is 10,000 (It's far from done \uD83D\uDE05)
Thank you for your support!

**My channel reached 3,000 subscribers these days. Thank you so much for your support!**

---

# Approach
## How we think about a solution

We should return the largest square in the metrix. Simply formula is

```
height * width
```
Let's think about this.
```
Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
```
Since we can rearrange the matrix by entire columns, we can consider entire columns as a height.

### How can we rearrange the matrix?

For example, we can move entire columns at index 2 to left.
```
     \u2193       \u2193
[0,0,1]   [0,1,0]
[1,1,1] \u2192 [1,1,1]
[1,0,1]   [1,1,0]
```
We can't move part of columns like this.
```
[0,0,1]   [0,0,1]
[1,1,1] \u2192 [1,1,1]
[1,0,1]   [1,1,0]\u2190
```
### Calculate height at each column.
```
At column index 0

[0,0,1]   [0,0,1]
[1,1,1] \u2192 [1,1,1]
[1,0,1]   [2,0,1]

matrix[0][0] is 0 height.
matrix[1][0] is 1 height.
matrix[2][0] is 2 height.(= from matrix[1][0] to matrix[2][0])
```
```
At column index 1

[0,0,1]   [0,0,1]
[1,1,1] \u2192 [1,1,1] 
[2,0,1]   [2,0,1]

matrix[0][1] is 0 height.
matrix[1][1] is 1 height.
matrix[2][1] is 0 height.
```
```
At column index 2

[0,0,1]   [0,0,1]
[1,1,1] \u2192 [1,1,2] 
[2,0,1]   [2,0,3]

matrix[0][2] is 1 height.
matrix[1][2] is 2 height. (= from matrix[0][2] to matrix[1][2])
matrix[2][2] is 3 height. (= from matrix[0][2] to matrix[2][2])
```
In the end
```
Original
[0,0,1]   [0,0,1]
[1,1,1] \u2192 [1,1,2]
[1,0,1].  [2,0,3]
```
In my solution code, we iterate through each row one by one, then calculate heights. It's not difficult. When current number is `1`, add height from above row to current place. You can check it later in my solution code.

### Calculate width at each row.

Next, we need to think about width. We know that if each number is greater than `0`, it means that there is at least `1` in each position, so we can consider non zero position as `1` length for width.

Since we can rearrange the matrix by entire columns, we can sort each row to move zero position to small index(left side).

In the solution code, we sort each row one by one but image of entire matrix after sorting is like this.
```
[0,0,1]   [0,0,1]
[1,1,2] \u2192 [1,1,2]
[2,0,3]   [0,2,3]
```
After sorting, all zeros in each row move to left side, that means we have some numbers on the right side, so we can consider right side as part of width.

Calculation of each postion
Height is each number.
Width is length of row - current column index
```
[0,0,1]
[1,1,2]
[0,2,3]

              h w a
matrix[0][0]: 0 3 0
matrix[0][1]: 0 2 0
matrix[0][2]: 1 1 1
matrix[1][0]: 1 3 3
matrix[1][1]: 1 2 3
matrix[1][2]: 2 1 3
matrix[2][0]: 0 3 3
matrix[2][1]: 2 2 4
matrix[2][2]: 3 1 4

h: height
w: width
a: max area so far
```
```
Output: 4
```
### Are you sure sorting works?
 
Somebody is wondering "Are you sure sorting works?"

Let's focus on `[0,2,3]`. This means at `column index 1`, there is `2` heights and at `column index 2`(different column index from `column index 1`), there are `3` heights.

So we are sure that we can create this matrix.
```
[0,0,1]   
[1,1,1]
[0,1,1]
   \u2191 \u2191
   2 3
```
That's why at `matrix[2][1]`, we calculate `2`(= height from `matrix[1][1]` to `matrix[2][1]`) * `2`(= width from `matrix[2][1]` to `matrix[2][2]`).

Sorting enables the creation of heights from right to left in descending order. In other words, we are sure after `column index 1`, we have `at least 2 height or more`(in this case, we have `3 heights`), so definitely we can calculate size of the square(in this case, `2 * 2`).

Thank you sorting algorithm!
Let's wrap up the coding part quickly and grab a beer! lol

---



### Algorithm Overview:

1. Calculate Heights:
2. Calculate Maximum Area:

### Detailed Explanation:

1. **Calculate Heights:**
```python
class Solution:
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        row, col = len(matrix), len(matrix[0])

        # Calculate Heights for Each Column
        for i in range(1, row):
            for j in range(col):
                if matrix[i][j] == 1:
                    matrix[i][j] += matrix[i - 1][j]
```

**Explanation:**
- This part iterates through each row (starting from the second row) and each column.
- If the current element is 1 (`matrix[i][j] == 1`), it adds the value from the previous row to the current element.
- This creates a cumulative sum of heights for each column, forming a "height matrix."


2. **Calculate Maximum Area:**

```python
        res = 0

        # Calculate Maximum Area
        for i in range(row):
            # Sort the heights in ascending order
            matrix[i].sort()

            # Iterate through the sorted heights
            for j in range(col):
                height = matrix[i][j]
                width = col - j

                # Calculate the area using the current height and remaining width
                res = max(res, height * width)
```

**Explanation:**
- This part initializes `res` to 0, which will store the maximum area.
- It then iterates through each row of the matrix.
- For each row, it sorts the heights in ascending order. This is crucial for calculating the maximum area.
- It iterates through the sorted heights and calculates the area for each height and its corresponding width.
- The maximum area is updated in the variable `res` if a larger area is found.


---



# Complexity
- Time complexity: $$O(row * col * log(col))$$
Sort each row and each row has length of col.

- Space complexity: $$O(log col)$$ or $$O(col)$$
Except matrix. The sort() operation on the heights array utilizes a temporary working space, which can be estimated as $$O(log col)$$ or $$O(col)$$ in the worst case.

```python []
class Solution:
    def largestSubmatrix(self, matrix: List[List[int]]) -> int:
        row, col = len(matrix), len(matrix[0])

        # Calculate heights for each column
        for i in range(1, row):
            for j in range(col):
                if matrix[i][j] == 1:
                    matrix[i][j] += matrix[i - 1][j]

        res = 0
        for i in range(row):
            # Sort the heights in ascending order
            matrix[i].sort()

            # Iterate through the sorted heights
            for j in range(col):
                height = matrix[i][j]
                width = col - j
                res = max(res, height * width)

        return res
```
```javascript []
var largestSubmatrix = function(matrix) {
    const row = matrix.length;
    const col = matrix[0].length;

    // Calculate heights for each column
    for (let i = 1; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] === 1) {
                matrix[i][j] += matrix[i - 1][j];
            }
        }
    }

    let res = 0;
    for (let i = 0; i < row; i++) {
        // Sort the heights in ascending order
        matrix[i].sort((a, b) => a - b);

        // Iterate through the sorted heights
        for (let j = 0; j < col; j++) {
            const height = matrix[i][j];
            const width = col - j;
            res = Math.max(res, height * width);
        }
    }

    return res;    
};
```
```java []
class Solution {
    public int largestSubmatrix(int[][] matrix) {
        int row = matrix.length;
        int col = matrix[0].length;

        // Calculate heights for each column
        for (int i = 1; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (matrix[i][j] == 1) {
                    matrix[i][j] += matrix[i - 1][j];
                }
            }
        }

        int res = 0;
        for (int i = 0; i < row; i++) {
            // Sort the heights in ascending order
            Arrays.sort(matrix[i]);

            // Iterate through the sorted heights
            for (int j = 0; j < col; j++) {
                int height = matrix[i][j];
                int width = col - j;
                res = Math.max(res, height * width);
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    int largestSubmatrix(vector<vector<int>>& matrix) {
        int row = matrix.size();
        int col = matrix[0].size();

        // Calculate heights for each column
        for (int i = 1; i < row; i++) {
            for (int j = 0; j < col; j++) {
                if (matrix[i][j] == 1) {
                    matrix[i][j] += matrix[i - 1][j];
                }
            }
        }

        int res = 0;
        for (int i = 0; i < row; i++) {
            // Sort the heights in ascending order
            sort(matrix[i].begin(), matrix[i].end());

            // Iterate through the sorted heights
            for (int j = 0; j < col; j++) {
                int height = matrix[i][j];
                int width = col - j;
                res = max(res, height * width);
            }
        }

        return res;         
    }
};
```

---

Thank you for reading my post.
\u2B50\uFE0F Please upvote it and don't forget to subscribe to my channel!

\u25A0 Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u25A0 Twitter
https://twitter.com/CodingNinjaAZ

### My next daily coding challenge post and video.

post
https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/4340183/video-give-me-7-minutes-how-we-think-about-a-solution/

video
https://youtu.be/DF9NXNW0G6E

\u25A0 Timeline of the video

`0:05` Return 0
`0:38` Think about a case where we can put dividers
`4:44` Coding
`7:18` Time Complexity and Space Complexity
`7:33` Summary of the algorithm with my solution code

### My previous daily coding challenge post and video.

post
https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array/solutions/4329227/video-give-me-10-minutes-how-we-think-about-a-solution/

video
https://youtu.be/bwQh44GWME8

\u25A0 Timeline of the video

`0:05` How we can solve this question
`1:56` Calculate left total
`6:32` Calculate right total
`11:12` Create answers
`11:51` Coding
`14:14` Time Complexity and Space Complexity
`14:39` Summary of the algorithm with my solution code

