# [C++] With Explanation - Diagonal Sums

**Author:** sonalsk
**Votes:** 4
**Link:** [https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1240674/](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid/solutions/1240674/)

---

```
class Solution {
public:
    vector<int> getBiggestThree(vector<vector<int>>& grid) {
        
        vector <int> top3;
        priority_queue <int> pq;
        
        int r = grid.size();
        int c = grid[0].size();
        
        // adding all the elements in priority queue
        // for rhombus with an area of 0
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                pq.push(grid[i][j]);
            }
        }
        
        // height of the rhombus
        int h = 1;
        int height = (2 * h) + 1;
        
        // find sum for all heights
        while (height <= r && height <= c) {
            
            for (int i = 0; i < r && (r - i) >= height; i++) {
                for (int j = h; j < c - h; j++) {
                    
                    int s = 0;
                    
                    int top = grid[i][j];
                    s += top;
                    
                    // top left diagonal elements of rhombus
                    for (int li = 1; li <= h; li++) {
                        s += grid[i + li][j - li];
                    }
                    
                    // top right diagonal elements of rhombus
                    for (int ri = 1; ri <= h; ri++) {
                        s += grid[i + ri][j + ri];
                    }
                    
                    int bottom = grid[i + height - 1][j];
                    // change the i co-ordinate
                    int bi = i + height - 1;
                    
                    // bottom left diagonal elements of rhombus
                    for (int bl = 1; bl <= (h - 1); bl++) {
                        s += grid[bi - bl][j - bl];
                    }
                    
                    // bottom right diagonal elements of rhombus
                    for (int br = 1; br <= (h - 1); br++) {
                       s += grid[bi - br][j + br]; 
                    }
                    
                    s += bottom;
                    
                    // push the sum of each rhombus to priority queue
                    pq.push(s);
                }
            }
            
            // increase height
            h += 1;
            height = (2 * h) + 1;
        }
        
        // get top 3 distinct sums
        unordered_set <int> top;
        int k = 3;
        
        while (k > 0 && !pq.empty()) {
            int el = pq.top(); pq.pop();
            if (top.find(el) == top.end()) {
                top.insert(el);
                k--;
            }
        }
        
        for (auto i: top) {
            top3.push_back(i);
        }
        
        // sort them in decreasing order
        sort(top3.begin(), top3.end(), greater <int>());
        
        return top3;
    }
};
```