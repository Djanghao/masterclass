# C++ | Golang | Sliding Window

**Author:** pikachuu
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3328574/](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet/solutions/3328574/)

---

# Code
```
// C++
class Solution {
public:
    int maximumWhiteTiles(vector<vector<int>>& tiles, int carpetLen) {
        sort(tiles.begin(), tiles.end());
        int ans = 0, total = 0;
        for(int start = 0, end = 0; end < tiles.size(); end++) {
            total += tiles[end][1] - tiles[end][0] + 1;
            while(tiles[start][1] < tiles[end][1] - carpetLen) {
                total -= tiles[start][1] - tiles[start][0] + 1;
                start++;
            } 
            // ans = max(ans, total - (tiles[start][1] - tiles[start][0] + 1) + (tiles[start][1] + 1 - max(tiles[start][0], tiles[end][1] - carpetLen + 1)));
            ans = max(ans, total + tiles[start][0] - max(tiles[start][0], tiles[end][1] - carpetLen + 1));
        }
        return ans;
    }
};


// Golang
func max(a, b int) int {
    if a > b {return a}
    return b
}

func maximumWhiteTiles(tiles [][]int, carpetLen int) int {
    sort.Slice(tiles, func(i, j int) bool {
        return tiles[i][0] < tiles[j][0]
    })
    var ans, total int = 0, 0
    for start, end := 0, 0; end < len(tiles); end++ {
        total += tiles[end][1] - tiles[end][0] + 1
        for tiles[start][1] < tiles[end][1] - carpetLen {
            total -= tiles[start][1] - tiles[start][0] + 1
            start++
        } 
        // ans = max(ans, total - (tiles[start][1] - tiles[start][0] + 1) + (tiles[start][1] + 1 - max(tiles[start][0], tiles[end][1] - carpetLen + 1)))
        ans = max(ans, total + tiles[start][0] - max(tiles[start][0], tiles[end][1] - carpetLen + 1))
    }
    return ans
}
```