# [C++] Explained why Trapping water solution doesn't work

**Author:** cryptx_
**Votes:** 198
**Link:** [https://leetcode.com/problems/trapping-rain-water-ii/solutions/2016151/](https://leetcode.com/problems/trapping-rain-water-ii/solutions/2016151/)

---

```
/*
    https://leetcode.com/problems/trapping-rain-water-ii/
    
    If you are thinking of converting the classic trapping rain water to this,
    then it might not work as expected. Lets say, for each position, you compute the
    horizontal blocking height and the vertical blocking height. Now that you know the
    blocking heights for all 4 dirs, you might think the volume computation from min of these
    blocking heights will give the answer, but it won't give optimal answer.
    
    Reason being, that we are not considering the case when any of the connecting horizontal or
    vertical blocks might have a way to drain the water.
    
    4 4 4 4
    4 3 3 4
    4 4 3 4,
    Here as we can see even though horizontal and vertical blocking height logic seems to give ans = 1 (at (1, 1) block), in reality
    it is 0. The block at (1, 2) will spill the water via (2, 2) and won't be able to hold any water, so the block at
    (1, 1) won't be able to hold any water as well no matter what.
    
    Now how do we find the solution ?
    What if we are able to find a way to approach a block via its min height blocking cell and then just check if the height of min block
    cell is greater than curr. If it is greater, then curr cell can hold water, this is because we were able to reach the current cell via
    the min height blocking cell and that means remaining blocking cells are all greater in height than this path cell. So if this path cell
    is greater than current, then all other blocking cells are greater as well.
    
    Now to actually do this in practice, we make use of min heap. We add the initial border cells to heap. Then slowly start reaching the inner
    cells via the shortest height boundary cells, while keeping track of tallest cell boundary in the path.
    Each time we reach an inner cell, there are 2 possibilities:
    1. Inner cell is greater, then we add this to heap as well. This can act as a blocking height for more inner cells.
    2. Inner cell is smaller, then we know that this inner call can hold water = path_cell - inner_cell. Add this to heap as well
    
    While adding new elements to heap, make sure to add the max height of that path, since that is the actual boundary in that path.
    
    TC: O(MNlog(MN))
    SC: O(MN)
*/
class Solution {
public:

    int trapRainWater(vector<vector<int>>& heights) {
        int vol = 0;
        const int M = heights.size(), N = heights[0].size();
        vector<vector<bool>> visited(M, vector<bool>(N, false));
        vector<vector<int>> directions = {{0, 1}, {0, -1}, {1, 0}, {-1, 0}};
        
        auto comp = [&](const array<int, 3>& a, const array<int, 3>& b) { return a[0] >= b[0]; };
        
        // <height, row, col>
        priority_queue<array<int, 3>, vector<array<int, 3>>, decltype(comp)> min_heap(comp);
        
        // add all boundary cells
        // top and bottom cells
        for(int i = 0; i < N; i++) {
            min_heap.push({heights[0][i], 0, i}),
            min_heap.push({heights[M-1][i], M-1, i});
            visited[0][i] = true, visited[M-1][i] = true;
        }
        
        // right and left cells
        for(int i = 0; i < M; i++) {
            min_heap.push({heights[i][0], i, 0}),
            min_heap.push({heights[i][N-1], i, N-1});
            visited[i][0] = true, visited[i][N-1] = true;
        }
            
        while(!min_heap.empty()) {
            auto [height, row, col] = min_heap.top();
            min_heap.pop();
            
            // explore the neighbouring cells
            for(auto dir: directions) {
                int r = row + dir[0], c = col + dir[1];
                // process the inner cell
                if(r >= 0 && r < M && c >= 0 && c < N && !visited[r][c]) {
                    // mark current cell as visited
                    visited[r][c] = true;
                    // if current is smaller, it can store water
                    if(heights[r][c] < height)
                        vol += height - heights[r][c];
                    
                    min_heap.push({max(height, heights[r][c]), r, c});
                }
            }
        }
        return vol;
    }
};
```