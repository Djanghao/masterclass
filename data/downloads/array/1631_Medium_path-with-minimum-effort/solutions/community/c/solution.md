# Problem Understanding and Simple Solution Explanation | Dijstra

**Author:** kaushik8511
**Votes:** 122
**Link:** [https://leetcode.com/problems/path-with-minimum-effort/solutions/910495/](https://leetcode.com/problems/path-with-minimum-effort/solutions/910495/)

---

Problem is we have to find a **path in which we have max difference between two adjacent cells is minimum for all adjacent cells in path.**
Ex. 
Let's say path is `2->5->8->6->10->1`
so differences of adjacent cells are `(5-2, 8-5, 6-8, 10-6, 1-10) => (3, 3, 2, 4, 9)` take absolute difference.
maximum difference is `9`. 
If may paths exist we have to `minimize this maximum difference.`
let's say we have another path `10->21->3`. Max adjacent difference is `max(11, 18) => 18`. 
So we'll choose first path and not second one.

Idea:
At any time for next cell we choose path which results in **minimum max difference**. And update max difference for next cell.

//please upvote if it helps


```
#define pii pair<int, pair<int,int>>

class Solution {
public:
    //Directions (top, right, bottom, left)
    const int d4x[4] = {-1,0,1,0}, d4y[4] = {0,1,0,-1};
    
    int minimumEffortPath(vector<vector<int>>& h) {
        int n = h.size(), m = h[0].size();
        //min-heap
        priority_queue <pii, vector<pii>, greater<pii>> pq;
        //to store distances from (0,0)
        vector<vector<int>> dis(n, vector<int>(m, INT_MAX));
        dis[0][0] = 0;
        pq.push({0, {0, 0}});
        
        //Dijstra algorithm
        while(!pq.empty()) {
            pii curr = pq.top(); pq.pop();
            int d = curr.first, r = curr.second.first, c = curr.second.second;
            // bottom right position
            if(r==n-1 && c==m-1) return d;
            for(int i=0; i<4; ++i) {
                int nx = r + d4x[i], ny = c + d4y[i];
                //check if new position is invalid
                if(nx < 0 || nx >= n || ny < 0 || ny >= m)continue;
				//nd => new distance: which is max of distance till now(d) and curr distance (difference between heights of current cells)
                int nd = max(d, abs(h[nx][ny] - h[r][c]));
                if (nd < dis[nx][ny]) {
                    dis[nx][ny] = nd;
                    pq.push({nd, {nx, ny}});
                }
            }
        }
        return 0;
        //please upvote
    }
};