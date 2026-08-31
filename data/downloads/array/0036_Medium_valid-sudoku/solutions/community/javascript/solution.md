# 【Video】Keep number we found and find duplicate

**Author:** niits
**Votes:** 306
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/5272799/](https://leetcode.com/problems/valid-sudoku/solutions/5272799/)

---

# Intuition
Keep number we found and find duplicate.

---

# Solution Video

https://youtu.be/RdakO1_niYE

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,510

---

# Approach
We can't have duplicate numbers at each row, column and box(3 * 3), so it's good idea to have data of each row, column and box whether we check current number is duplicate.

For example,
```
rows[0] - 5,7,8,9
    [1] - 1,2
    [2] - 4,8
    .
    .
    .

cols[0] - 1,2
    [1] - 3,4
    .
    .
    .
```

That means
```
- We have `5,7,8,9` at row `0`.
- We have `1`,`2` at row `1`.
- We have `4`,`8` at row `2`.
- We have `1`,`2` at column `0`.
- We have `3`,`4` at column `1`. 
```
Let's say we have row 0 like this.

```
      0 1 2 3 4 5 6 7 8 (column number)
row0: 5,6,8,9,x,x,x,x,9
row1: x,x,x,x,x,x,x,x,x,
```
At board[0][0], we have `5`
At board[0][1], we have `6`
At board[0][2], we have `8`
At board[0][3], we have `9`

Now we have
```
rows[0] - 5,7,8,9
```
Look at the `board[0][8]`. We have `9` at row `0`. That `9` is duplicate because we already have `9` at row `0`, so we should return `False`.

We apply the same idea to column direction and box. But let me explain box position.

We should have the same data for box whether we check current number is duplicate or not. But problem is size of one box is `3 * 3`, so we can't keep data like rows and columns. We are not allowed to have the same number in box which is size of `3 * 3`.

How do you deal with the problem?

My strategy is to use tuple as a key. For example, left top box should be from index `0` to index `2` of rows and columns.

We know that size of one box is `3 * 3`, so if we divide index number by `3`, we can point to the target box.

For example, if we are now at board[2][1] and find `7`, box should be
```
2 // 3 = 0
1 // 3 = 0
```
so, the target box should be
```
boxes[(0, 0)] - 7
```
if we are now at board[8][6] and find `5`,
```
8 // 3 = 2
6 // 3 = 2
```
so, the target box should be
```
boxes[(2, 2)] - 5
```
We have nine 3 * 3 boxes.

```
     012  345  678 \u2192 column number
012 (0,0)(0,1)(0,2)
345 (1,0)(1,1)(1,2)
678 (2,0)(2,1)(2,2)
\u2193
row number

each box is 3 * 3
We are not allowed to have duplicate number in each box.
```

Easy!\uD83D\uDE04
Let's see real algorithm!

---

https://youtu.be/bU_dXCOWHls

---
`code`
# Complexity
- Time complexity: $$O(81)$$ \u2192 $$O(1)$$
$$rows(9) * columns(9) = 81$$

- Space complexity: $$O(243)$$ \u2192 $$O(1)$$
$$rows(81) + columns(81) + boxes(81) = 243$$

```python []
class Solution:
    def isValidSudoku(self, board: List[List[str]]) -> bool:
        rows = defaultdict(set)
        cols = defaultdict(set)
        boxes = defaultdict(set)
        
        for r in range(9):
            for c in range(9):
                if board[r][c] == ".":
                    continue
                
                if board[r][c] in rows[r] or board[r][c] in cols[c] or board[r][c] in boxes[(r // 3, c // 3)]:
                    return False
                
                rows[r].add(board[r][c])
                cols[c].add(board[r][c])
                boxes[(r // 3, c // 3)].add(board[r][c])
        
        return True
```
```javascript []
var isValidSudoku = function(board) {
    let rows = Array.from({ length: 9 }, () => new Set());
    let cols = Array.from({ length: 9 }, () => new Set());
    let boxes = Array.from({ length: 9 }, () => new Set());

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            if (board[r][c] === '.') {
                continue;
            }

            let value = board[r][c];
            let boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

            if (rows[r].has(value) || cols[c].has(value) || boxes[boxIndex].has(value)) {
                return false;
            }

            rows[r].add(value);
            cols[c].add(value);
            boxes[boxIndex].add(value);
        }
    }

    return true;    
};
```
```java []
class Solution {
    public boolean isValidSudoku(char[][] board) {
        HashSet<Character>[] rows = new HashSet[9];
        HashSet<Character>[] cols = new HashSet[9];
        HashSet<Character>[] boxes = new HashSet[9];

        for (int i = 0; i < 9; i++) {
            rows[i] = new HashSet<>();
            cols[i] = new HashSet<>();
            boxes[i] = new HashSet<>();
        }

        for (int r = 0; r < 9; r++) {
            for (int c = 0; c < 9; c++) {
                if (board[r][c] == '.') {
                    continue;
                }

                char value = board[r][c];
                int boxIndex = (r / 3) * 3 + (c / 3);

                if (rows[r].contains(value) || cols[c].contains(value) || boxes[boxIndex].contains(value)) {
                    return false;
                }

                rows[r].add(value);
                cols[c].add(value);
                boxes[boxIndex].add(value);
            }
        }

        return true;        
    }
}
```
```C++ []
class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        unordered_set<char> rows[9];
        unordered_set<char> cols[9];
        unordered_set<char> boxes[9];

        for (int r = 0; r < 9; ++r) {
            for (int c = 0; c < 9; ++c) {
                if (board[r][c] == '.') {
                    continue;
                }

                char value = board[r][c];
                int boxIndex = (r / 3) * 3 + (c / 3);

                if (rows[r].count(value) || cols[c].count(value) || boxes[boxIndex].count(value)) {
                    return false;
                }

                rows[r].insert(value);
                cols[c].insert(value);
                boxes[boxIndex].insert(value);
            }
        }

        return true;        
    }
};
```

# Step by Step Algorithm
Please wait.


---

Thank you for reading my post.
Please upvote it and don't forget to subscribe to my channel!

##### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

##### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

##### \u2B50\uFE0F My previous post and video
#35 Search Insert Position

video
https://youtu.be/NermHA7VkEc

