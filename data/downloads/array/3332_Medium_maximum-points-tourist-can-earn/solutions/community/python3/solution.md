# Python3 || 8 lines, dp  || T/S: 99% / 84%

**Author:** Spaulding_
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6063692/](https://leetcode.com/problems/maximum-points-tourist-can-earn/solutions/6063692/)

---

Here's the intuition:

We iterate backwards through time with a pseudo 2D dp. Because the potential states of *day* - 1 depend only upon the the states of *day*, we only need two 1D arrays to execute the dp, which we reuse for each iteration.

From there, the logic just follows the problem description.


```python3 []
class Solution:
    def maxScore(self, n: int, k: int, stayScore  : List[List[int]], 
                                       travelScore: List[List[int]]) -> int:

        curr, prev = [0] * n, [0] * n

        for day in range(k-1, -1, -1):

            for city in range(n):
                move = max(map(sum, zip(prev, travelScore[city])))
                stay = max(curr[city], prev[city] + stayScore[day][city])

                curr[city] = max(move, stay)

            prev, curr = curr, prev
 
        return max(prev)
```
```cpp []
class Solution {
public:
    int maxScore(int n, int k, vector<vector<int>>& stayScore, vector<vector<int>>& travelScore) {
        vector<int> curr(n, 0), prev(n, 0);

        for (int day = k - 1; day >= 0; --day) {
            for (int city = 0; city < n; ++city) {

                int move = 0;
                for (int i = 0; i < n; ++i) {
                    move = max(move, prev[i] + travelScore[city][i]);}

                int stay = max(curr[city], prev[city] + stayScore[day][city]);
                curr[city] = max(move, stay);}
                
            prev.swap(curr);}

        return *max_element(prev.begin(), prev.end());}
};
```
```java []
public class Solution {
    public int maxScore(int n, int k, int[][] stayScore, int[][] travelScore) {
        int[] curr = new int[n];
        int[] prev = new int[n];

        for (int day = k - 1; day >= 0; day--) {
            for (int city = 0; city < n; city++) {
                int move = 0;
                for (int i = 0; i < n; i++) {
                    move = Math.max(move, prev[i] + travelScore[city][i]);}

                int stay = Math.max(curr[city], prev[city] + stayScore[day][city]);
                curr[city] = Math.max(move, stay);}

            int[] temp = prev;
            prev = curr;
            curr = temp;}

        int maxScore = 0;
        for (int score : prev) {
            maxScore = Math.max(maxScore, score);}

        return maxScore;}
}
```

[https://leetcode.com/problems/maximum-points-tourist-can-earn/submissions/1457657830/](https://leetcode.com/problems/maximum-points-tourist-can-earn/submissions/1457657830/)



I could be wrong, but I think that time complexity is *O*(*K* * *N* ^2) and space complexity is *O*(*N*), in which *N* ~ `n` and *K* ~ `k`.



