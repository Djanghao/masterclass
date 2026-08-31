# SOLUTION JS | C++

**Author:** Nurliaidin
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5284702/](https://leetcode.com/problems/find-the-first-player-to-win-k-games-in-a-row/solutions/5284702/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Since we know this must be k times win in a row otherwise it gets to 0 when a player lost to its enemy.
- 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code
``` javascript []
var findWinningPlayer = function(skills, k) {
    let winner = skills[0], cur = 0, n = skills.length, res = 0;
    for(let i=1; i<n; i++) {
        if(skills[i] > winner) {
            winner = skills[i];
            cur = 0;
            res = i;
        }
        cur++;
        if(cur == k) break;
    }
    return res;
};
```
``` cpp []
class Solution {
public:
    int findWinningPlayer(vector<int>& skills, int k) {
        int winner = skills[0], cur = 0, res = 0, n = skills.size();
        for(int i=1; i<n; i++) {
            if(winner < skills[i]) {
                winner = skills[i];
                cur = 0;
                res = i;
            }
            cur++;
            if(cur == k) return res;
        }
        return res;
    }
};
```