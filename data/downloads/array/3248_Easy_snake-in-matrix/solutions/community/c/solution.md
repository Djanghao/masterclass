# Beats 100% ✅  || Easiest Logic✅

**Author:** Durjoybarua5327
**Votes:** 11
**Link:** [https://leetcode.com/problems/snake-in-matrix/solutions/5619432/](https://leetcode.com/problems/snake-in-matrix/solutions/5619432/)

---

# Python
```
class Solution:
    def finalPositionOfSnake(self, n: int, commands: List[str]) -> int:
        i,j=0,0
        d={
            "UP": (-1, 0),
            "DOWN": (1, 0),
            "LEFT": (0, -1),
            "RIGHT": (0, 1)
        }
        for c in commands:
            a, b = d[c]
            i+=a
            j+=b
        return i*n+j
```

# C++
```
class Solution {
public:
    int finalPositionOfSnake(int n, vector<string>& commands) {
        int i = 0, j = 0;
        
        // Mapping directions to their corresponding movements in the grid
        unordered_map<string, pair<int, int>> d = {
            {"UP", {-1, 0}},
            {"DOWN", {1, 0}},
            {"LEFT", {0, -1}},
            {"RIGHT", {0, 1}}
        };
        
        // Iterate through the commands and update the position
        for (const string& c : commands) {
            i += d[c].first;
            j += d[c].second;
        }
        
        // Return the final position as a single index in the n x n grid
        return i * n + j;
    }
};
```