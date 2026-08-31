# C++ | binary search | easy understand | O(mlogm)

**Author:** k487237
**Votes:** 44
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778573/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4778573/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use binary search to find the earliest idx which can mark all indices in the given arrays.

In `binarySearch` fuction, we first find the last occurrence of `changeIndices[i]` in the array. This is because we need to make `nums[changeIndices[i]]` zero before this index.

And then, we check whether all the indices are present. If any are missing, it means that it is impossible to mark all the indices.

Next, we use `cnt` to record the number of times we can do reduce operations. If the current index is the last occurrence of `changeIndices[i]`, then we check if there is a way to make `nums[changeIndices[i] - 1]` (note the -1, since it is 1-indexed) zero.

If `nums[changeIndices[i] - 1] > cnt`, it means that it cannot be reduced to zero. In this case, we return False.

Finally, we can use binary search to find the earliest possible index that satisfies the requirements.

# Time Complexity: 
O(m logm), where m is the length of changeIndices

# Code
```
class Solution {
public:
    bool binarySearch(vector<int>& nums, vector<int>& changeIndices, int idx) {
        unordered_map<int, int> last;
        for (int i = 0; i < idx; i++) {
            last[changeIndices[i]] = i;
        }
        if (last.size() != nums.size()) return false;
        int cnt = 0; // record we can reduce how many number
        for (int i = 0; i < idx; i++) {
            // if it is last time we visit this idx, we must mark
            // so check whether this idx already reduce to zero, if not, then return false.
            if (i == last[changeIndices[i]]) {
                if (cnt < nums[changeIndices[i] - 1]) return false;
                else cnt -= nums[changeIndices[i] - 1];
            } else {
                cnt++;
            }
        }
        return true;
    }
    
    int earliestSecondToMarkIndices(vector<int>& nums, vector<int>& changeIndices) {
        int n = nums.size(), m = changeIndices.size();
        int l = 0, r = m + 1;
        while (l < r) {
            int mid = l + (r - l) / 2;
            if (binarySearch(nums, changeIndices, mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return r == m + 1? -1 : r;
    }
};

```