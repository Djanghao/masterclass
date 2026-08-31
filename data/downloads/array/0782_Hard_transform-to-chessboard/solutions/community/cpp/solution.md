# c++ Solution

**Author:** SaurabhVikasTekam
**Votes:** 4
**Link:** [https://leetcode.com/problems/transform-to-chessboard/solutions/1488779/](https://leetcode.com/problems/transform-to-chessboard/solutions/1488779/)

---

```
class Solution 
{
public:
    int movesToChessboard(vector<vector<int>>& board) 
    {
        int n = board.size();
        int cnt1 = 1, cnt2 = 0;
        for (int i = 1; i < n; ++i) 
        {
            if (board[0][0] == board[i][0]) 
            {
                ++cnt1;
                for (int j = 0; j < n; ++j) 
                {
                  if (board[0][j] != board[i][j]) 
                  {
                      return -1;
                  }  
                }
            } 
            else 
            {
                ++cnt2;
                for (int j = 0; j < n; ++j) 
                {
                    if (board[0][j] == board[i][j]) 
                    {
                        return -1;
                    }
                }
            }
        }
        if (abs(cnt1 - cnt2) > 1) 
        {
            return -1;
        }
        cnt1 = 1, cnt2 = 0;
        for (int j = 1; j < n; ++j) 
        {
            if (board[0][0] == board[0][j]) 
            {
                ++cnt1;
                for (int i = 0; i < n; ++i) 
                {
                    if (board[i][0] != board[i][j]) 
                    {
                        return -1;
                    }
                }
            } 
            else 
            {
                ++cnt2;
                for (int i = 0; i < n; ++i) 
                {                      
                    if (board[i][0] == board[i][j]) 
                    {
                        return -1;
                    }
                }
            }
        }
        if (abs(cnt1 - cnt2) > 1) 
        {
            return -1;
        }
        int swapRow = 0, swapCol = 0;
        for (int i = 0; i < n; ++i)
        {
            if (board[i][0] != i % 2) 
            {
                ++swapRow;
            }
        }
        for (int j = 0; j < n; ++j) 
        {
            if (board[0][j] != j % 2) 
            {
                ++swapCol;
            }
        }
        int ans = 0;
        if (n & 1) 
        {
            if (swapRow & 1) 
            {
                swapRow = n - swapRow;
            }
            if (swapCol & 1) 
            {
                swapCol = n - swapCol;
            }
            ans += swapRow / 2;
            ans += swapCol / 2;
        } 
        else 
        {
            ans += min(swapRow, n - swapRow) / 2;
            ans += min(swapCol, n - swapCol) / 2;
        }
        return ans;
    }
};
```