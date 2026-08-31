# 💥☠️🔥 Easiest C++✅Python3✅C#✅Java✅Python🐍✅C✅👾 Explained🏆 Contest - 27/04/2024 ⚡💥🔥✨⭐

**Author:** Edwards310
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080181/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/5080181/)

---

# Intuition
![0ehh83fsnh811.jpg](./images/0.jpeg)
![th.jpeg](./images/1.jpeg)
![Screenshot 2024-04-27 220955.png](./images/2.png)
![Screenshot 2024-04-27 221108.png](./images/3.png)

<!-- Describe your first thoughts on how to solve this problem. -->
```C++ []
class Solution {
public:
    bool canMakeSquare(vector<vector<char>>& grid) {
        int cnt = 0, flag = 0;
        for(int i = 0; i < 2; i++){
            for(int j = 0; j < 2; j++){
                if(grid[i][j] == 'B'){
                    if(grid[i][j + 1] == 'W')
                        cnt++;
                    if(grid[i + 1][j] == 'W')
                        cnt++;
                    if(grid[i + 1][j + 1] == 'W')
                        cnt++;
                    if(cnt == 0)
                        cnt++;
                }
                if(grid[i][j] == 'W'){
                    if(grid[i][j + 1] == 'B')
                        cnt++;
                    if(grid[i + 1][j] == 'B')
                        cnt++;
                    if(grid[i + 1][j + 1] == 'B')
                        cnt++;
                    if(cnt == 0)
                        cnt++;
                }
                if(cnt == 1 or cnt == 3){
                    flag = 1;
                    break;
                }
                else
                    cnt = 0;
            }
        }
        if(flag == 1)
            return true;
        return false;
    }
};
```
```python3 []
class Solution:
    def canMakeSquare(self, grid: List[List[str]]) -> bool:
        for si in range(2):
            for sj in range(2):
                nb = 0
                for i in range(2):
                    for j in range(2):
                        if grid[si+i][sj+j] == 'B':
                            nb += 1
                if nb in {0,1,3,4}:
                    return True
        return False
        
```
```C []
bool canMakeSquare(char** grid, int gridSize, int* gridColSize) {
    int n = gridSize;
    int m = (*gridColSize);
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < m - 1; j++) {
            int b = 0, w = 0;
            for (int m1 = 0; m1 < 2; m1++) {
                for (int m2 = 0; m2 < 2; m2++) {
                    if (grid[i + m1][j + m2] == 'W')
                        w++;
                    else
                        b++;
                }
            }
            if (b >= 3 || w >= 3)
                return 1;
        }
    }
    return 0;
}
```

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
     O(n * m)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
     O(1)
# Code
```
class Solution {
public:
    bool canMakeSquare(vector<vector<char>>& grid) {
        int cnt = 0, flag = 0;
        for(int i = 0; i < 2; i++){
            for(int j = 0; j < 2; j++){
                if(grid[i][j] == 'B'){
                    if(grid[i][j + 1] == 'W')
                        cnt++;
                    if(grid[i + 1][j] == 'W')
                        cnt++;
                    if(grid[i + 1][j + 1] == 'W')
                        cnt++;
                    if(cnt == 0)
                        cnt++;
                }
                if(grid[i][j] == 'W'){
                    if(grid[i][j + 1] == 'B')
                        cnt++;
                    if(grid[i + 1][j] == 'B')
                        cnt++;
                    if(grid[i + 1][j + 1] == 'B')
                        cnt++;
                    if(cnt == 0)
                        cnt++;
                }
                if(cnt == 1 or cnt == 3){
                    flag = 1;
                    break;
                }
                else
                    cnt = 0;
            }
        }
        if(flag == 1)
            return true;
        return false;
    }
};
```
# Please upvote if it's useful for you all
![th.jpeg](./images/4.jpeg)
