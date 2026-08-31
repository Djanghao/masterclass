# C++ Solution - Sliding Window

**Author:** skylawson
**Votes:** 62
**Link:** [https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052887/](https://leetcode.com/problems/count-the-number-of-good-subarrays/solutions/3052887/)

---

The idea is based on two observation:
1, If a subarray is considered good, all the subarrays containing it will be considered good (because the pair count will increase)
2, If a subarray is not good, all of its subarrays will not be good (the pair count will get smaller)

So we use a sliding window, first traversing the given array and find the first sub-array satisfies the conditions.
In the process, we keep a hash map to store the frequency of numbers to calculate the pairs.
If the pair count is greater than k, then pop out from the beginning of the subarray to see if there's any subarray also satisfy the conditons.
Once the pair count is smaller than k, keep adding from the end of the array.
# Code
```
class Solution {
public:
    long long countGood(vector<int>& nums, int k) {
        // the number of good subarrays
        long long res = 0;
        int n = nums.size();
        // Keep track of the starting index to pop
        int srt = 0;
        // Hash map
        map <int, int> hash;
        // The number of pairs in the current subarray
        int cur = 0;
        for (int i = 0; i < n; i++) {
            // Increase the pair count  
            // Consider it this way
            // There are currently {1, 1}
            // So adding another 1 would increase the pairs by 2
            // (pair it with each of the 1s)
            cur += hash[nums[i]];
            hash [nums[i]] ++;
            // If we found a good subarray
            while (cur >= k) {
                // All subarray containing it will be good
                res += (n - i);
                // Pop from the beginning
                //  decreasing pair count in the process 
                cur -= hash[nums[srt]] - 1;
                hash[nums[srt]] --;            
                srt ++;
            }
        }
        return res;
    }
};
```
If you found it helpful, please consider an upvote :3