# 9ms - fastest than 100%

**Author:** cakedev
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/5980261/](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/5980261/)

---

The code is quite ugly because I'm not great at C++. I first implemented this idea in Python using a lot of pythonic things and then I wanted to see how fast it could get if I tried to implement a very optimized C++ version. Turns out it's very fast - **9ms** - but painful to implement. 

See the [Python solution/code](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/solutions/5979805/python-300ms-beats-100-move-step-by-step-well-commented-code) if you want to understand my approach.

The main difference with the Python code is that here, I pass `positions` by reference in `dfs`, which enforces me to roll-back any update I apply. This allowed me to avoid $$O(n_{valid\\_combinations})$$ vector copies, and to drop the execution time from 30ms to 9ms.

# Complexity
- Time complexity: $$O(n_{pieces} \	imes n_{valid\\_combinations})$$

- Space complexity: hard to tell exactly but maybe $$O(n_{pieces} + n_{rows} + n_{columns})$$. Anyway, something very very small compared to the time complexity.

# Code
```cpp []
#include <iostream>
#include <ranges>
#include <tuple>
#include <vector>
#include <utility> // for std::pair

using pii = pair<int, int>;

class Solution {
public:


    int dfs(vector<pii> & positions, const vector<pii> & directions, int moving_pieces){
        if(moving_pieces == 0) return 1;
        int n = positions.size();
        bool valid = true;
        for(int i = 0; i < n; i++){
            auto & [x, y] = positions[i];
            if(moving_pieces & (1 << i)){
                x += directions[i].first;
                y += directions[i].second;
                if(x < 1 || x > 8 || y < 1 || y > 8){
                    move_back(positions, directions, moving_pieces, i + 1);
                    return 0;
                }
            }
            for(int j = 0; j < i; j++) if(x == positions[j].first && y == positions[j].second){
                move_back(positions, directions, moving_pieces, i + 1);
                return 0;
            }
        }
        int out = 0;
        for(int s = 0; s < (1 << n); s++){
            if((s & moving_pieces) == s) out += dfs(positions, directions, s);
        }
        move_back(positions, directions, moving_pieces, n);
        return out;
    }

    int cartesian_product_dfs(vector<pii> & positions, const vector<vector<pii>> & directions, vector<pii> & current){
        int n = current.size();
        if(n == directions.size()){
            int moving_pieces = 0;
            for(int i = 0; i < n; i++){
                if(current[i].first != 0 || current[i].second != 0) moving_pieces |= 1 << i;
            }
            return dfs(positions, current, moving_pieces);
        }
        else{
            current.push_back({0, 0});
            int out = 0;
            for(auto & dir: directions[n]){
                current[n] = dir;
                out += cartesian_product_dfs(positions, directions, current);
            }
            current.pop_back();
            return out;
        }
    }

    void move_back(vector<pii> & positions, const vector<pii> & directions, int moving_pieces, int n){
        for(int i = 0; i < n; i++){
            if(moving_pieces & (1 << i)){
                positions[i].first -= directions[i].first;
                positions[i].second -= directions[i].second;
            }
        }
    }


    int countCombinations(vector<string>& pieces, vector<vector<int>>& ps) {
        unordered_map<string, vector<pii>> directions = {
            {"rook", {{0, 1}, {0, -1}, {1, 0}, {-1, 0}}},
            {"bishop", {{1, 1}, {1, -1}, {-1, 1}, {-1, -1}}}
        };
        vector<pii> positions;
        for(auto& v: ps) positions.push_back({v[0], v[1]});
        directions["queen"] = directions["rook"];
        directions["queen"].insert(directions["queen"].end(), directions["bishop"].begin(), directions["bishop"].end());
        for (auto& kv : directions) {
            kv.second.push_back({0, 0});
        }

        vector<vector<pii>> pieces_directions;
        for(auto & p_name: pieces) pieces_directions.push_back(directions[p_name]);
        vector<pii> current;
        return cartesian_product_dfs(positions, pieces_directions, current);
    }
};

```