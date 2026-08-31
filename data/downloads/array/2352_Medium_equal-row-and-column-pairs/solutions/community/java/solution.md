# Java✔ || C++✔ ||Python✔ ||  Easy To Understand

**Author:** Armorix13
**Votes:** 73
**Link:** [https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630812/](https://leetcode.com/problems/equal-row-and-column-pairs/solutions/3630812/)

---

# Guys Please Vote up )):
To solve this problem, we can iterate through each row and column of the grid and check if they contain the same elements in the same order. If they do, we increment a counter. Finally, we return the value of the counter.

# Approach
Here's the approach to solve the problem:

    Initialize a variable count to 0 to keep track of the number of equal row-column pairs.
    Iterate through each row ri from 0 to n-1:
    a. Iterate through each column cj from 0 to n-1:
    i. Check if the row ri and column cj are equal by comparing the corresponding elements.
    ii. If they are equal, increment the count variable by 1.
    Return the value of count.

# Complexity
- Time complexity:
The time complexity of this approach is O(n^3) because we have three nested loops: one for iterating through rows, one for iterating through columns, and one for comparing the elements. 

- Space complexity:
The space complexity is O(1) since we are using a constant amount of extra space.

# Java Code
```
class Solution {
    public int equalPairs(int[][] grid) {
        int pair=0;
        int temp=0;
        int row=0;
        while(temp<=grid.length-1)
        {
            HashMap<Integer,Integer> map=new HashMap<>();
            for(int j=0;j<grid.length;j++)
            {
                map.put(j,grid[row][j]);
            }
            for(int i=0;i<grid.length;i++)
            {
                int curr=0;
                for(int k=0;k<grid.length;k++)
                {
                    if(map.get(k)!=grid[k][i])
                    {
                        curr=0;
                        break;
                    }
                    else
                        curr=1;
                }
                pair+=curr;
            }
            row++;
            temp++;
        }
        return pair;
    }
}
```
# C++ Code
```

class Solution {
public:
    int equalPairs(vector<vector<int>>& grid) {
        map<vector<int>, int> hashmap;
        int ans = 0;
        int row = grid.size();
        int col = grid[0].size();
        for (int i=0; i<row; i++) {
            hashmap[grid[i]]++;
        }
        for (int j=0; j<col; j++) {
            vector<int> curr;
            for (int i=0; i<row; i++) {
                curr.emplace_back(grid[i][j]);
            }
            ans += hashmap[curr];
        }
        return ans;
    }
};
```
# Python3 Code
```
class Solution:
    def equalPairs(self, grid: List[List[int]]) -> int:
        m = defaultdict(int)
        cnt = 0

        for row in grid:
            m[str(row)] += 1
        
        for i in range(len(grid[0])):
            col = []
            for j in range(len(grid)):
                col.append(grid[j][i])
            cnt += m[str(col)]
        return cnt

```
