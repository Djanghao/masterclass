# Golang & C++ DP 100% solution

**Author:** tjucoder
**Votes:** -1
**Link:** [https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1642738/](https://leetcode.com/problems/first-day-where-you-have-been-in-all-the-rooms/solutions/1642738/)

---

```go
func firstDayBeenInAllRooms(nextVisit []int) int {
	// reached i+1, reach all elem from 0 to i even times
	dp := make([]int, len(nextVisit))
	dp[1] = 2
	day := 2
	for i := 2; i < len(nextVisit); i++ {
		// we are in room[i-1] and one day passed
		day++
		curRoom := nextVisit[i-1]
		// back to room[i-1], cost dp[i-1] - dp[curRoom] day, next day, we will arrival root[i] first time
		// dp[i] may be less than dp[j] while j < i, so we add another 1000000007
		day = (day + dp[i-1] - dp[curRoom] + 1 + 1000000007) % 1000000007
		dp[i] = day
	}
	return dp[len(nextVisit)-1]
}
```

```c++
class Solution {
public:
    int firstDayBeenInAllRooms(vector<int>& nextVisit) {
        vector<long> dp(nextVisit.size());
        dp[1] = 2;
        for (int i = 2; i < nextVisit.size(); i++) {
            dp[i] = (dp[i-1] + dp[i-1] - dp[nextVisit[i-1]] + 1000000009) % 1000000007;
        }
        return static_cast<int>(dp[dp.size()-1]);
    }
};
```