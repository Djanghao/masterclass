# [C++] HashMap + Heap

**Author:** TopBaLiKeu
**Votes:** 4
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/943805/](https://leetcode.com/problems/design-a-leaderboard/solutions/943805/)

---

```
class Leaderboard {
public:
    unordered_map<int, int> players;
    
    Leaderboard() {
        
    }
    
    // O(1)
    void addScore(int playerId, int score) {
        players[playerId]+= score;
    }
    
    
    // O(N log N) N -> number of players
    int top(int K) {
        priority_queue<int> scores;
        
        for(auto pr:players){
            scores.push(pr.second);
        }
        
        int sum = 0;
        
        while(K-- && !scores.empty()){
            sum+=scores.top();
            scores.pop();
        }
        
        return sum;
    }
    
    // O(1)
    void reset(int playerId) {
        players.erase(playerId);
    }
};
```