# [Python3] 4 approaches

**Author:** ye15
**Votes:** 5
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/1411615/](https://leetcode.com/problems/design-a-leaderboard/solutions/1411615/)

---

**Approach 1 -- heap & hash table** (100ms, 23.15%)
```
class Leaderboard:

    def __init__(self):
        self.pq = []
        self.mp = defaultdict(int)

    def addScore(self, playerId: int, score: int) -> None:
        self.mp[playerId] += score
        heappush(self.pq, (-self.mp[playerId], playerId))

    def top(self, K: int) -> int:
        ans = 0 
        vals = []
        while self.pq and K: 
            score, playerId = heappop(self.pq)
            if self.mp[playerId] == -score: 
                K -= 1
                vals.append((score, playerId))
                ans -= score 
        for score, playerId in vals: heappush(self.pq, (score, playerId))
        return ans 

    def reset(self, playerId: int) -> None:
        self.mp[playerId] = 0 
```

**Approach 2 -- SortedList** (56ms, 86.93%)
```
from sortedcontainers import SortedList

class Leaderboard:

    def __init__(self):
        self.mp = {}
        self.data = SortedList()

    def addScore(self, playerId: int, score: int) -> None:
        if playerId in self.mp: 
            self.data.remove(self.mp[playerId])
            self.mp[playerId] += score 
        else: self.mp[playerId] = score
        self.data.add(self.mp[playerId])

    def top(self, K: int) -> int:
        return sum(self.data[-K:])

    def reset(self, playerId: int) -> None:
        self.data.remove(self.mp[playerId])
        self.mp.pop(playerId)
```

**Approach 3 -- insort** (48ms, 97.17%) 
```
class Leaderboard:

    def __init__(self):
        self.mp = {}
        self.data = []

    def addScore(self, playerId: int, score: int) -> None:
        if playerId in self.mp: 
            self.data.remove(self.mp[playerId])
            self.mp[playerId] += score 
        else: self.mp[playerId] = score
        insort(self.data, self.mp[playerId])

    def top(self, K: int) -> int:
        return sum(self.data[-K:])

    def reset(self, playerId: int) -> None:
        self.data.remove(self.mp[playerId])
        self.mp.pop(playerId)
```

**Approach 4 -- Counter** (90ms, 30.24%)
```
class Leaderboard:

    def __init__(self):
        self.data = Counter()

    def addScore(self, playerId: int, score: int) -> None:
        self.data[playerId] += score

    def top(self, K: int) -> int:
        return sum(v for _, v in self.data.most_common(K))

    def reset(self, playerId: int) -> None:
        self.data.pop(playerId)
```


Adding a C++ implementation 
```
class Leaderboard {
    multiset<int> scores; 
    unordered_map<int, int> mp; 
public:
    Leaderboard() {}
    
    void addScore(int playerId, int score) {
        if (mp.count(playerId)) scores.erase(scores.find(mp[playerId])); 
        mp[playerId] += score; 
        scores.insert(mp[playerId]); 
    }
    
    int top(int K) {
        int ans = 0; 
        auto it = scores.rbegin(); 
        while (K-- && it != scores.rend()) ans += *it++; 
        return ans; 
    }
    
    void reset(int playerId) {
        scores.erase(scores.find(mp[playerId])); 
        mp.erase(playerId); 
    }
};
```