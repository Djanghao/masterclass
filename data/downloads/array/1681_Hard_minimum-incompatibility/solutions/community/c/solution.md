# [C++] Clean, with detailed explanation

**Author:** shivankacct
**Votes:** 31
**Link:** [https://leetcode.com/problems/minimum-incompatibility/solutions/965432/](https://leetcode.com/problems/minimum-incompatibility/solutions/965432/)

---

**General idea**
Evaluate every valid subset of the given array (where a valid subset is one with no duplicates and has the correct number of elements). For each valid subset, find its range (where range = maximum - minimum) + the sum of ranges of all other subsets (precomputed via dp)

**Implementation**
* Pre-generate the range (max - min) for each subset of nums that doesn't have any duplicates
* Note: to find each subset, you can use bitmasks (i.e. iterate from 1 to (1 << n) - 1, and find how many bits of each bitmask are set to 1, etc.)
* Then take each subset of nums and apply DP to it as follows:
	* Take every sub-subset of this subset and see if it has the right number of elements (== n / k)
	* If it does, then dp[subset] = range[sub-subset] + dp[all other elements in subset excluding those in sub-subset]

For further implementation details, check out the comments in the code. 

**Example**
* Take the example of [1,1,2,3,4,5,5,6] and k = 4. I.e., you need to split the given array into 4 groups of 2 elements each.
* Consider every subset. Say we are looking at the first 4 elements [1,1,2,3] - which corresponds to a mask of 00001111 (or 11110000 - shouldn't matter).
* Now consider every submask of this mask that has exactly 2 elements. That would correspond to [1,1], [1,2], [1,3], [2, 3]. 
* [1,1] will be rejected as it has duplicates. 
* Next, we take [1,2] (note that [1,2] is a submask of 1010 on the 4 element array [1,1,2,3] from the prior step). dp[[1,1,2,3]] = range[[1,2]] + dp[[1,3]]. Here, range[1,2] = 2 - 1 = 1 and dp[1,3] would have been calculated already since our DP is being built incrementally.

```
const int INF = 1e9;

class Solution {
public:
    int minimumIncompatibility(vector<int>& nums, int k) {
        int i, n = nums.size(), subset_size = n / k;
        sort(nums.begin(), nums.end());
        
        // Pre-calculate the range (max - min) for each subset of nums
		// Note that there are (1 << n) subsets (i.e. 2 ^ n subsets) of an array of size n
        vector<int> range(1 << n, INF);
        
        // Each mask represents every possible subset of elements in num (so, "mask" == "subset")
		// Specifically, if the bit at position i of mask is set to 1, then we include that number in the subset
        for(int mask = 1; mask < (1 << n); mask++) {
            int small = -1, big = -1;
            bool dup = false;
            
            // Identify elements that belong to this subset, find the largest & smallest, check for duplicates
			// Recall that this array was sorted in the beginning of the function
            for(i=0; i<n && !dup; i++)
                if(mask & (1 << i)) {
                    if(small == -1)
                        small = nums[i];
                    if(big == nums[i])
                        dup = true;
                    big = nums[i];
                }
            
            // If no duplicates were found, then calculate and store the range for this subset
            if(!dup)
                range[mask] = big - small;
        }
        
        vector<int> dp(1 << n, INF);
        dp[0] = 0;

        // Iterate over every mask (i.e. subset) and calculate its minimum sum
        for(int mask = 1; mask < (1 << n); mask++) {
            
            // Iterate over every submask for current mask
            for(int submask = mask; submask; submask = (submask - 1) & mask) {
                
                // Check that submask has the right number of elements
                if(__builtin_popcount(submask) == subset_size) 
                    // Note that      mask = submask + (mask ^ submask)
                    // ==> i.e.,      mask ^ submask = mask - submask
                    // In other words, (mask ^ submask) represents those elements in mask that are not in submask
                    dp[mask] = min(dp[mask], range[submask] + dp[mask ^ submask]);
            }
        }
		// dp.back() == dp[(1 << n) - 1];
        return dp.back() >= INF ? -1 : dp.back();
    }
};
```