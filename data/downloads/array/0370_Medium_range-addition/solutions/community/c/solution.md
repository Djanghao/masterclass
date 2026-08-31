# C++ brute-force (TLE) and difference array (Accept)

**Author:** whyisyoung
**Votes:** 2
**Link:** [https://leetcode.com/problems/range-addition/solutions/1841717/](https://leetcode.com/problems/range-addition/solutions/1841717/)

---

# Solution 1: Brute force --> TLE

```

        /*
            Time: O(nm), n is size of updates, m is the average size of each update, in our case, it could be 10^4 * 10^4 = 10^8, that's why it got TLE
            Space: O(1), we didn't use extra space
        */
class Solution {
public:
    vector<int> getModifiedArray(int length, vector<vector<int>>& updates) {
        int n = updates.size();
        vector<int> ans (length, 0);
        for (int i = 0; i < n; ++i) {
            for (int j = updates[i][0]; j <= updates[i][1]; ++j) {
                ans[j] += updates[i][2];
            }
        }
        return ans;
	}
};
```

# Solution 2: Difference Array
https://codeforces.com/blog/entry/78762
Allows range update in `O(1)` time.

```
class Solution {
public:
    vector<int> getModifiedArray(int length, vector<vector<int>>& updates) {
        
        // Solution 2: difference array
        /*
            Time: O(n + length), n is the size of updates
            Space: O(1), we didn't use extra space
        */
        
        int n = updates.size();
        // edge case
        if (n == 0)
            return vector<int>(length, 0);
        
        vector<int> diff (length, 0); // since the original array is all 0, we don't need to generate the difference array, it's all 0
        /*
        // assuming original array is nums, then we can generate difference array:
        
        diff[0] = nums[0];
        for (int i = 1; i < length; ++i)
            diff[i] = nums[i] - nums[i - 1]; 
            // we also see how to restore it: nums[i] = nums[i - 1] + diff[i];
        */
        
        // for each update between [i, j], we only need to 
        // 1. increment diff[i] --> which means all the numbers after i (included) will be incremented
        // 2. minus diff[j+1] --> we will stop the increment at j+1, so just revoke it using -=
        for (int i = 0; i < n; ++i) {
            diff[updates[i][0]] += updates[i][2];
            int j = updates[i][1];
            if (j < length - 1) // be careful with this edge check, if j is length-1 (NOT n-1), we don't need to stop the increment
                diff[j + 1] -= updates[i][2];
        }
        
		// restore the original array from the difference array
        for (int i = 1; i < length; ++i)
            diff[i] += diff[i - 1];
        
        return diff;
    }
};
```