# [C++] Linear time DP with explanation

**Author:** rh137
**Votes:** 172
**Link:** [https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1802444/](https://leetcode.com/problems/minimum-time-to-finish-the-race/solutions/1802444/)

---

This problem seems very hard at first glance, but would be way easier with just one observation.

# Observation
- Given `changeTime <= 10^5`, it won't be optimal if we use any tire consecutively without change for larger than `18` laps.
- Let's consider the extreme case, when `f_i == 1` and `r_i == 2`

| consecutive laps  | 1  | 2  |  3 | 4  | 5  | 6  |  7 | 8  | 9  | 10
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  time on the last lap |  1 | 2  | 4  | 8  | 16| 32| 64|128|256| 512

| consecutive laps  | 11 | 12  | 13|14|15|16|17|18|
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  time on the last lap |1024|2048|4096|8192|16384|32768|65536|**131072**|

- it is obvious that at the `18-th` consecutive lap, it is alway better to change a tire (even when `f_i` and `r_i` are given their smallest possible values).
- this observation leads to two lemmas
##### Lemma 1.
- If `numLaps >= 18`, we must change tire in some point of time in any optimal way.
##### Lemma 2.
- After changing a tire, an optimal way won't have the tire running for more than `18` consecutive laps.

### Algorithm
- from the above discussion, we can form a dp like:
	- `dp[x] :=` the minimum time to finish `x` laps
	- base case: `dp[1]` = `min(f_i)` among all tires
	- transition: `dp[x] = min(dp[j] + changeTime + dp[x-j])` among all *possible `j`s*
		- meaning: the minimum time to finish `x` laps is the minimum time to finish `j` laps first **and change a tire at the end of `j`-th lap**, plus the minimum time to finish the last `x-j` laps.
		- which `j`s are *possible* ?
			- from **Lemma 2.** we know `j >= x-18` must hold.
			- It leads to a constant time transition.
	- note that if `x < 18`, it's possible that an optimal solution never changes a tire.
- code
```
class Solution {
public:
    int minimumFinishTime(vector<vector<int>>& tires, int changeTime, int numLaps) {
        int n = tires.size();
        // to handle the cases where numLaps is small
		// without_change[i][j]: the total time to run j laps consecutively with tire i
        vector<vector<int>> without_change(n, vector<int>(20, 2e9));
        for (int i = 0; i < n; i++) {
            without_change[i][1] = tires[i][0];
            for (int j = 2; j < 20; j++) {
                if ((long long)without_change[i][j-1] * tires[i][1] >= 2e9)
                    break;
                without_change[i][j] = without_change[i][j-1] * tires[i][1];
            }
            // since we define it as the total time, rather than just the time for the j-th lap
			// we have to make it prefix sum
            for (int j = 2; j < 20; j++) {
                if ((long long)without_change[i][j-1] + without_change[i][j] >= 2e9)
                    break;
                without_change[i][j] += without_change[i][j-1];
            }
        }
        
		// dp[x]: the minimum time to finish x laps
        vector<int> dp(numLaps+1, 2e9);
        for (int i = 0; i < n; i++) {
            dp[1] = min(dp[1], tires[i][0]);
        }
        for (int x = 1; x <= numLaps; x++) {
            if (x < 20) {
				// x is small enough, so an optimal solution might never changes tires!
                for (int i = 0; i < n; i++) {
                    dp[x] = min(dp[x], without_change[i][x]);
                }
            }
            for (int j = x-1; j > 0 && j >= x-18; j--) {
                dp[x] = min(dp[x], dp[j] + changeTime + dp[x-j]);
            }
        }
        
        return dp[numLaps];
    }
};
```
- Time Complexity: (let `n := tires.size()`)
	- preprocess `without_change`: **O(n)**
	- `dp`: **O(18 * numLaps + 20 * n)** -> **O(numLaps + n)**
- Space Complexity:
	- `without_change`: **O(n)**
	- `dp`: **O(numLaps)**

### Another Observation
- if `f_i <= f_j` and `r_i <= r_j`, it is always "not worse" to pick tire `i` over tire `j`. So we can do some preprocess to remove all such tires.
- won't be better in time complexity (since we now have to sort `tires`), but might improve the runtime (and space allocated)
- code
```
class Solution {
private:
    vector<vector<int>> preprocess(vector<vector<int>>& tires) {
        sort(tires.begin(), tires.end());
        vector<vector<int>> new_tires;
        for (auto& t : tires) {
            if (new_tires.empty() || new_tires.back()[1] > t[1]) {
                new_tires.push_back(t);
            }
        }
        return new_tires;
    }
public:
    int minimumFinishTime(vector<vector<int>>& tires, int changeTime, int numLaps) {
        // remove those will never be used
        tires = preprocess(tires);
        int n = tires.size();
		
		// ... (rest are the same)
		
		return dp[numLaps];
	}
}
```
# Similar Problems
- it reminds me of the following problems
	- [LC 1105 - Filling Bookcase Shelves](https://leetcode.com/problems/filling-bookcase-shelves/) (challenge: solve this in **O(n lg n)** time.)
	- [LC 1687 - Delivering Boxes from Storage to Ports](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports/)