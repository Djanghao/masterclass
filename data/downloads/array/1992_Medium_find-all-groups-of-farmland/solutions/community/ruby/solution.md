# 💯Greedy Approach🎯✅ | 95.63%🔥| 4 Easy Steps :  🎯| Simple (10 line) to understand💯Explained

**Author:** Prathamesh18X
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5048057/](https://leetcode.com/problems/find-all-groups-of-farmland/solutions/5048057/)

---

# Intuition
Fast, unique, Greedy Approch, Just 4 steps to Understand !!.... \uD83D\uDD25
![Screenshot 2024-04-09 141332.png](./images/0.png)

Don't Forget to vote\u2B06\uFE0F !! 
{Me\uD83D\uDE43 &&  world's Largest democracy \uD83C\uDDEE\uD83C\uDDF3  }
# Code\uD83C\uDFAF
```javascript []
var findFarmland = function(land) {
    const m = land.length;
    const n = land[0].length;
    const res = [];
    
    const exploreFarmland = (r1, c1) => {
        let r2 = r1;
        let c2 = c1;
        
        while (r2 < m && land[r2][c1] === 1) {
            c2 = c1;
            while (c2 < n && land[r2][c2] === 1) {
                land[r2][c2] = 0;
                c2++;
            }
            r2++;
        }
        
        return [r1, c1, r2 - 1, c2 - 1];
    };
    
    for (let r1 = 0; r1 < m; r1++) {
        for (let c1 = 0; c1 < n; c1++) {
            if (land[r1][c1] === 1) {
                const coordinates = exploreFarmland(r1, c1);
                res.push(coordinates);
            }
        }
    }
    
    return res;
};
```
```Java []
import java.util.*;

public class Solution {
    public List<int[]> findFarmland(int[][] land) {
        int m = land.length;
        int n = land[0].length;
        List<int[]> res = new ArrayList<>();
        
        int[] exploreFarmland(int r1, int c1) {
            int r2 = r1;
            int c2 = c1;
            
            while (r2 < m && land[r2][c1] == 1) {
                c2 = c1;
                while (c2 < n && land[r2][c2] == 1) {
                    land[r2][c2] = 0;
                    c2++;
                }
                r2++;
            }
            
            return new int[] {r1, c1, r2 - 1, c2 - 1};
        }
        
        for (int r1 = 0; r1 < m; r1++) {
            for (int c1 = 0; c1 < n; c1++) {
                if (land[r1][c1] == 1) {
                    int[] coordinates = exploreFarmland(r1, c1);
                    res.add(coordinates);
                }
            }
        }
        
        return res;
    }
}
```
```CPP []
#include <vector>

class Solution {
public:
    std::vector<std::vector<int>> findFarmland(std::vector<std::vector<int>>& land) {
        int m = land.size();
        int n = land[0].size();
        std::vector<std::vector<int>> res;
        
        auto exploreFarmland = [&](int r1, int c1) {
            int r2 = r1;
            int c2 = c1;
            
            while (r2 < m && land[r2][c1] == 1) {
                c2 = c1;
                while (c2 < n && land[r2][c2] == 1) {
                    land[r2][c2] = 0;
                    c2++;
                }
                r2++;
            }
            
            return std::vector<int>{r1, c1, r2 - 1, c2 - 1};
        };
        
        for (int r1 = 0; r1 < m; r1++) {
            for (int c1 = 0; c1 < n; c1++) {
                if (land[r1][c1] == 1) {
                    auto coordinates = exploreFarmland(r1, c1);
                    res.push_back(coordinates);
                }
            }
        }
        
        return res;
    }
};
```
```Python []
class Solution:
    def findFarmland(self, land: list[list[int]]) -> list[list[int]]:
        m = len(land)
        n = len(land[0])
        res = []
        
        def exploreFarmland(r1, c1):
            r2, c2 = r1, c1
            
            while r2 < m and land[r2][c1] == 1:
                c2 = c1
                while c2 < n and land[r2][c2] == 1:
                    land[r2][c2] = 0
                    c2 += 1
                r2 += 1
                
            return [r1, c1, r2 - 1, c2 - 1]
        
        for r1 in range(m):
            for c1 in range(n):
                if land[r1][c1] == 1:
                    coordinates = exploreFarmland(r1, c1)
                    res.append(coordinates)
        
        return res
```
```ruby []
class Solution
  def find_farmland(land)
    m = land.length
    n = land[0].length
    res = []
    
    explore_farmland = lambda do |r1, c1|
      r2 = r1
      c2 = c1
      
      while r2 < m && land[r2][c1] == 1
        c2 = c1
        while c2 < n && land[r2][c2] == 1
          land[r2][c2] = 0
          c2 += 1
        end
        r2 += 1
      end
      
      [r1, c1, r2 - 1, c2 - 1]
    end
    
    (0...m).each do |r1|
      (0...n).each do |c1|
        if land[r1][c1] == 1
          coordinates = explore_farmland.call(r1, c1)
          res.push(coordinates)
        end
      end
    end
    
    res
  end
end
```
```kotlin []
class Solution {
    fun findFarmland(land: Array<Array<Int>>): List<List<Int>> {
        val m = land.size
        val n = land[0].size
        val res = mutableListOf<List<Int>>()
        
        fun exploreFarmland(r1: Int, c1: Int): List<Int> {
            var r2 = r1
            var c2 = c1
            
            while (r2 < m && land[r2][c1] == 1) {
                c2 = c1
                while (c2 < n && land[r2][c2] == 1) {
                    land[r2][c2] = 0
                    c2++
                }
                r2++
            }
            
            return listOf(r1, c1, r2 - 1, c2 - 1)
        }
        
        for (r1 in 0 until m) {
            for (c1 in 0 until n) {
                if (land[r1][c1] == 1) {
                    val coordinates = exploreFarmland(r1, c1)
                    res.add(coordinates)
                }
            }
        }
        
        return res
    }
}
```

# Approach\u2705\uD83D\uDCAF


Here's are `4 Steps` of explanation for the approach:

1. **Step 1 : Initialize Variables**: 
    - `m` - row wise lenght of matrix
    - `m` - cols wise length of matrix
    - `res` -  contains the top-left and bottom-right coordinates of a group.

2. **Step 2 : Define `exploreFarmland` Function**: A Helper function with Greedy approch Pass `(r1, c1)` as parameters.
    - Initializes variables `r2` and `c2` to represent the current row and column during the exploration.
    - Next iterates downward from `r1` while the current cell contains farmland (`1`).
        - Remember!..... for each row, it iterates to the right from `c1` while the cells contain farmland (`1`).
        - For each cell, it marks it as visited by setting the value to `0`.
    - The function returns the coordinates of the group: `[r1, c1, r2 - 1, c2 - 1]`.

3. **Step 3 : Iterate Through the Matrix**: Now iterates through each cell in the matrix using nested loops (`for` loops for rows and columns).
    - For each cell `(r1, c1)`, if it contains farmland (`1`), it calls the `exploreFarmland` function to explore the group and get the coordinates.
    - The function adds the coordinates returned by `exploreFarmland` to the `res` list.

4. **Step 4 : Return Result**: Once all cells have been checked and all groups have been identified, the function returns the `res` list, which contains the coordinates of each identified group of farmland.

# Complexity
- Time complexity:`O(N.M)`


