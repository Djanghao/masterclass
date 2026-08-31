# Easy Video Solution 🔥 || Implement the requirements given in the question ✅ || Simple Logic

**Author:** ayushnemmaniwar12
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4673976/](https://leetcode.com/problems/find-the-grid-of-region-average/solutions/4673976/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Understand the question clearly and breakdown it into diffrent concepts. Then you can see the logic coming from you \uD83D\uDD25

# ***Easy Video Explanation***

https://youtu.be/b1X4jbhDabs




# Approach
<!-- Describe your approach to solving the problem. -->
Basic
The code processes a 2D grid, calculates the average of each 3x3 subgrid excluding elements with differences greater than 'k'. The results are stored in a new grid.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*N*9)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N*N)
    

# Code


```C++ []
class Solution {
public:
    vector<vector<int>> resultGrid(vector<vector<int>>& v, int k) {
        int r=v.size(),c=v[0].size();
        map<pair<int,int>,pair<int,int>>m;
        for(int i=0;i<r-2;i++) {
            for(int j=0;j<c-2;j++) {
                int s=0;
                int f=0;
                for(int x=i;x<i+3;x++) {
                    for(int y=j;y<j+3;y++) {
                        s=s+v[x][y];
                        if(x+1<i+3) {
                            if(abs(v[x][y]-v[x+1][y])>k) {
                                f=1;
                                break;
                            }
                        }
                        if(y+1<j+3) {
                            if(abs(v[x][y]-v[x][y+1])>k) {
                                f=1;
                                break;
                            }
                        }
                            
                    }
                    if(f==1)
                        break;
                }
                if(f==1) {
                    continue;
                }
                s=s/9;
                for(int x=i;x<i+3;x++) {
                    for(int y=j;y<j+3;y++) {
                        if(m.find({x,y})!=m.end()) {
                            pair<int,int>p=m[{x,y}];
                            m[{x,y}]={p.first+s,p.second+1};
                        }
                        else {
                            m[{x,y}]={s,1};
                        }
                        
                    }
                }
            }
        }
        
        vector<vector<int>>ans(r,vector<int>(c,0));
        for(int i=0;i<r;i++) {
            for(int j=0;j<c;j++) {
                if(m.find({i,j})==m.end()) {
                    ans[i][j]=v[i][j];
                    continue;
                }
                pair<int,int>p=m[{i,j}];
                int s=p.first/p.second;
                ans[i][j]=s;
            }
        }
        return ans;
    }
};
```
```python []
from collections import defaultdict

class Solution:
    def resultGrid(self, v, k):
        r, c = len(v), len(v[0])
        m = defaultdict(lambda: [0, 0])

        for i in range(r - 2):
            for j in range(c - 2):
                s, f = 0, 0

                for x in range(i, i + 3):
                    for y in range(j, j + 3):
                        s += v[x][y]

                        if x + 1 < i + 3 and abs(v[x][y] - v[x + 1][y]) > k:
                            f = 1
                            break

                        if y + 1 < j + 3 and abs(v[x][y] - v[x][y + 1]) > k:
                            f = 1
                            break

                    if f == 1:
                        break

                if f == 1:
                    continue

                s = s // 9

                for x in range(i, i + 3):
                    for y in range(j, j + 3):
                        m[x, y][0] += s
                        m[x, y][1] += 1

        ans = [[0] * c for _ in range(r)]

        for i in range(r):
            for j in range(c):
                if (i, j) in m:
                    s, count = m[i, j]
                    ans[i][j] = s // count
                else:
                    ans[i][j] = v[i][j]

        return ans

```
```Java []
import java.util.*;

public class Solution {
    public ArrayList<ArrayList<Integer>> resultGrid(ArrayList<ArrayList<Integer>> v, int k) {
        int r = v.size(), c = v.get(0).size();
        HashMap<Pair<Integer, Integer>, Pair<Integer, Integer>> m = new HashMap<>();

        for (int i = 0; i < r - 2; i++) {
            for (int j = 0; j < c - 2; j++) {
                int s = 0;
                int f = 0;

                for (int x = i; x < i + 3; x++) {
                    for (int y = j; y < j + 3; y++) {
                        s += v.get(x).get(y);

                        if (x + 1 < i + 3 && Math.abs(v.get(x).get(y) - v.get(x + 1).get(y)) > k) {
                            f = 1;
                            break;
                        }

                        if (y + 1 < j + 3 && Math.abs(v.get(x).get(y) - v.get(x).get(y + 1)) > k) {
                            f = 1;
                            break;
                        }
                    }
                    if (f == 1)
                        break;
                }

                if (f == 1)
                    continue;

                s = s / 9;

                for (int x = i; x < i + 3; x++) {
                    for (int y = j; y < j + 3; y++) {
                        Pair<Integer, Integer> key = new Pair<>(x, y);

                        if (m.containsKey(key)) {
                            Pair<Integer, Integer> p = m.get(key);
                            m.put(key, new Pair<>(p.getKey() + s, p.getValue() + 1));
                        } else {
                            m.put(key, new Pair<>(s, 1));
                        }
                    }
                }
            }
        }

        ArrayList<ArrayList<Integer>> ans = new ArrayList<>();

        for (int i = 0; i < r; i++) {
            ArrayList<Integer> row = new ArrayList<>();

            for (int j = 0; j < c; j++) {
                Pair<Integer, Integer> key = new Pair<>(i, j);

                if (!m.containsKey(key)) {
                    row.add(v.get(i).get(j));
                    continue;
                }

                Pair<Integer, Integer> p = m.get(key);
                int s = p.getKey() / p.getValue();
                row.add(s);
            }

            ans.add(row);
        }

        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00