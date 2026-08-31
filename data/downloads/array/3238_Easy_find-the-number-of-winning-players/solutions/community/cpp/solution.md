# Shortest One-Pass Solution | C++, Python, Java

**Author:** not_yl3
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5581866/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5581866/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We can use a 2D integer array of size n x 11 so that we can keep track of how many times each player chose each color. If the amount of times they've chosen any specific color excedes their player number, we add it to `res`. To make sure we don't add any player twice we use a boolean array `seen` to mark players when they win. This way we only need to go throuch `pick` once.
# Complexity
- Time complexity: $$O(m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int winningPlayerCount(int n, vector<vector<int>>& pick) {
        int players[10][11] = {}, res = 0;
        bool seen[10] = {};
        for (auto& p : pick){
            if (++players[p[0]][p[1]] > p[0] && !seen[p[0]]){
                res++;
                seen[p[0]] = true;
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def winningPlayerCount(self, n: int, pick: List[List[int]]) -> int:
        res = 0
        seen = set()
        players = [[0] * 11 for _ in range(n)]
        for x, y in pick:
            if players[x][y] == x and x not in seen:
                res += 1
                seen.add(x)
            players[x][y] += 1
        return res
```
```Java []
class Solution {
    public int winningPlayerCount(int n, int[][] pick) {
        int res = 0;
        int[][] players = new int[n][11];
        boolean[] seen = new boolean[n];
        for (int[] p : pick){
            if (++players[p[0]][p[1]] > p[0] && !seen[p[0]]){
                res++;
                seen[p[0]] = true;
            }
        }
        return res;
    }
}
```
