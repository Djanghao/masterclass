# [C++] Commented O(4MN) time, O(MN) space BFS solution

**Author:** tinfu330
**Votes:** 5
**Link:** [https://leetcode.com/problems/the-maze-ii/solutions/1669486/](https://leetcode.com/problems/the-maze-ii/solutions/1669486/)

---

I didn't quite understand why LC solution stated that the BFS solution has a best time complexity of O(M*N*max(M,N)), did I missed something in my analysis?

```
class Solution {
private:
    const int8_t dirS = 5;
    const int8_t dirR = 0;
    const int8_t dirD = 1;
    const int8_t dirL = 2;
    const int8_t dirU = 3;
    
    const int8_t dir[5] = {0, 1, 0, -1, 0};
    
    int rSize, cSize;
    
    bool outOfBound(int r, int c) {
        if (r < 0 || c < 0 || r >= rSize || c >= cSize) return true;
        return false;
    }

public:
    // Complexity analysis:
	// Time: For each space, we at most travel through it in 4 directions, thus O(4MN)
	// Space: Delared memo to mark travelled directions, thus O(4MN), optimize to O(MN) by bit manip
    int shortestDistance(vector<vector<int>>& maze, vector<int>& start, vector<int>& des) {
        rSize = maze.size();
        cSize = maze[0].size();
        
        int dist = 0;
        
        vector<vector<uint8_t>> memo (rSize, vector<uint8_t>(cSize, 0)); // directions travelled
        queue<pair<pair<int, int>, int8_t>> bfsQ; // {r, c} : dir
        
        bfsQ.emplace(make_pair(start[0], start[1]), dirS);
        
        while (!bfsQ.empty()) {
            
            int currQSize = bfsQ.size();
            
            while (currQSize-- > 0) {
                int currR = bfsQ.front().first.first;
                int currC = bfsQ.front().first.second;
                int8_t currDir = bfsQ.front().second;

                int nextR, nextC;
                
                bfsQ.pop();

                if (outOfBound(currR, currC) || maze[currR][currC] == 1) continue;
				
				// Previously travelled the same direction for this slot
                if (currDir != dirS && memo[currR][currC] & (0x01 << currDir)) continue;
                
                // check if next Slot wall, if so, we stop the ball, if it is goal, return result
                if (currDir != dirS) {
                    nextR = currR + dir[currDir];
                    nextC = currC + dir[currDir + 1];
                    if (outOfBound(nextR, nextC) || maze[nextR][nextC] == 1) {
                        if (currR == des[0] && currC == des[1]) return dist;
                        currDir = dirS;
                        memo[currR][currC] = 0x0F; // ball stop here, we will BFS all 4 directions later
                    }
                } else {
                    memo[currR][currC] |= (0x01 << currDir); // mark the direciton passing this slot
                }
                
                // if ball is stopped, push 4 directions
                if (currDir == dirS) {
                    for (int8_t i = 0; i < 4; i++) {
                        bfsQ.emplace(make_pair(currR + dir[i], currC + dir[i + 1]), i);
                    }
                } else { // keep the current direction and progress
                    bfsQ.emplace(make_pair(nextR, nextC), currDir);
                }
            }
            
            dist++;
        }
        return -1;
    }
};
```