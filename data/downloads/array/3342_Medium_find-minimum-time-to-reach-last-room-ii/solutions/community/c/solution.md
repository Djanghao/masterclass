# Dijkstra with one extra state | c++

**Author:** karna001
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6000399/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6000399/)

---

I hope you are clear with 1st part of the problem where this move_made part was not there and rest was the same problem
link to my editorial for that problem - https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/discuss/6000326/Dijkstra-or-Graph-or-c%2B%2B

so here the extra catch is :
**Moving between adjacent rooms takes one second for one move and two seconds for the next, alternating between the two.**
we can simply have one more state which will store number of moves mode so far so that we can check if even then 1 if odd then 2, rest everything is same , the code goes like
```
class Solution {
public:
    int minTimeToReach(vector<vector<int>>& mt) {
        int n = mt.size();
        int m = mt[0].size();
    vector<vector<int>> dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
    
   
    priority_queue<tuple<int, int, int, int>, vector<tuple<int, int, int, int>>, greater<>> pq;
    pq.push({0, 0, 0, 0});
    
   
    vector<vector<int>> time_taken(n, vector<int>(m, INT_MAX));
    time_taken[0][0] = 0;
    
    while (!pq.empty()) {
        auto [time, x, y, moves_made] = pq.top();
        pq.pop();
      
        if (x == n - 1 && y == m - 1) {
            return time;
        }
        
        for (auto& dir : dirs) {
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
               
                int move_duration = (moves_made % 2 == 0) ? 1 : 2; 
           
                int wait_time = max(time+move_duration, mt[nx][ny] + move_duration);
             
                if (wait_time < time_taken[nx][ny]) {
                    time_taken[nx][ny] = wait_time;
                    pq.push({wait_time, nx, ny, moves_made + 1});
                }
            }
        }
    }
    
    return -1; 
    }
};
```
since we had one extra constraint we added one more state to check and redefined our edges , everything else remains same.

I have solved CSES graph problems , you can check that out here if you face issues in implementing graph algorithms
https://www.youtube.com/watch?v=6owaCOCWLu0&list=PLQr1KWjS3pAGRjsSp3kcULieEgogfOGj9
