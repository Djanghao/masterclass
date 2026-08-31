# C++ Multiset + Map Solution

**Author:** imfing
**Votes:** 11
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/845866/](https://leetcode.com/problems/design-a-leaderboard/solutions/845866/)

---

Another simple C++ solution, using `unordered_map` and `multiset`

```cpp
class Leaderboard {
public:
    Leaderboard() {}
    
    void addScore(int playerId, int score) {
        if (board.find(playerId) != board.end()) {
            score += board[playerId];
            reset(playerId);
        }
        board[playerId] = score;
        scores.insert(score);
    }
    
    int top(int K) {
        int res = 0;
        for (auto it = scores.rbegin(); K > 0; K--, ++it)
            res += *it;
        return res;
    }
    
    void reset(int playerId) {
        auto it = scores.find(board[playerId]);
        scores.erase(it);
        board.erase(playerId);
    }
    
private:
    unordered_map<int, int> board;
    multiset<int> scores;
};
```