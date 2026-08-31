# C++ | Golang | Map

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/node-with-highest-edge-score/solutions/3308758/](https://leetcode.com/problems/node-with-highest-edge-score/solutions/3308758/)

---

# Code
```
// C++
class Solution {
public:
    int edgeScore(vector<int>& edges) {
        int n = edges.size();
        int maxScore = INT_MIN, ans = INT_MAX;
        vector<long> score(n, 0);
        for(int i = 0; i < n; i++) {
            score[edges[i]] += i;
            if(score[edges[i]] > maxScore) {
                ans = edges[i];
                maxScore = score[edges[i]];
            }
            else if(score[edges[i]] == maxScore) {
                ans = min(ans, edges[i]);
            }
        }
        return ans;
    }
};


// Golang
func edgeScore(edges []int) int {
    var maxScore int64 = math.MinInt64
    var ans int = math.MaxInt
    score := make([]int64, len(edges))
    for i := 0; i < len(edges); i++ {
        score[edges[i]] += int64(i)
        if score[edges[i]] > maxScore {
            ans = edges[i]
            maxScore = score[edges[i]]
        } else if score[edges[i]] == maxScore {
            if edges[i] < ans {ans = edges[i]}
        }
    }
    return ans
}
```