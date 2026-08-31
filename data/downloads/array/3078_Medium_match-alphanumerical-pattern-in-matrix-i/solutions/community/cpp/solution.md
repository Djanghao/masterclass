# MOST OPTIMIZED C++ CODE || BEGINNER FRIENDLY

**Author:** tin_le
**Votes:** 0
**Link:** [https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5132627/](https://leetcode.com/problems/match-alphanumerical-pattern-in-matrix-i/solutions/5132627/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    vector<int> findPattern(vector<vector<int>>& board, vector<string>& pattern) {
        ios_base::sync_with_stdio(false);
        cin.tie(nullptr);
        cout.tie(nullptr);
        int m1 = board.size(), n1 = board[0].size(), m2 = pattern.size(), n2 = pattern[0].size(), first[36], second[10];
        for(int i = 0; i <= m1 - m2; i++)
        {
            for(int j = 0; j <= n1 - n2; j++)
            {
                bool found = true;
                memset(first, -1, sizeof(first));
                memset(second, -1, sizeof(second));
                for(int k = 0; k < m2; k++)
                {
                    for(int l = 0; l < n2; l++)
                    {
                        int boardChar = board[i + k][j + l];
                        int patternChar = pattern[k][l] - '0';
                        if(patternChar > 9) patternChar -= 39;
                        if(boardChar <= 9 && patternChar <= 9)
                        {
                            if(boardChar != patternChar)
                            {
                                found = false;
                                break;
                            }
                        }
                        else
                        {
                            if(first[patternChar] == -1) first[patternChar] = boardChar;
                            else if(first[patternChar] != boardChar)
                            {
                                found = false;
                                break;
                            }
                            if(second[boardChar] == -1) second[boardChar] = patternChar;
                            else if(second[boardChar] != patternChar) 
                            {
                                found = false;
                                break;
                            }
                        }
                        
                    }
                }
                if(found) return {i, j};
            }
        }
        return {-1, -1};
    }
};
```