# Beginner Friendly 2 Methods || Similar Questions || BIT Mask || visited array  🔥

**Author:** imanishkumar7545
**Votes:** 89
**Link:** [https://leetcode.com/problems/special-permutations/solutions/3650420/](https://leetcode.com/problems/special-permutations/solutions/3650420/)

---


# Intuition
The Logic is to iterates over the array of numbers. For each iteration, We chooses an element based on the condition **(prevIndex == -1 || nums[prevIndex] % nums[j] == 0 || nums[j] % nums[prevIndex] == 0)**, where prevIndex represents the previously chosen index.

**If the condition is satisfied, it means the current number can be chosen.** To keep track of the chosen numbers, a bitmask (mask) is used. Each bit in the bitmask represents a number that has been chosen. **By setting the corresponding bit in the bitmask for the current index, we indicate that the number at that index has been chosen.**

After updating the bitmask, the code recursively calls itself, moving to the next index and incrementing the count. The recursion continues until all numbers have been chosen.

If, at the end of the recursion, all numbers have been chosen (i.e., all bits in the bitmask are set), **the count is incremented by 1. This means a valid permutation has been found.**


In summary, the code uses bitmasking to represent chosen numbers and recursively explores all possible permutations, incrementing the count whenever a valid permutation is found.

# Solve function

**nums**: The input array.

**prevIndex**: The index of the previous element chosen in the permutation
* **(prevIndex==-1 Means No Element is Choosen Till Now)***

**currentIndex:** CurrentIndex represents the number of set bits in the mask

**mask:** A bitmask that represents the chosen indices in the permutation

**Base case:** If the currentIndex reaches the end of the nums array (i.e., currentIndex == nums.size()), it means we have formed a complete permutation. In this case, the function returns 1 to indicate a valid permutation.

*We use a 2D DP array to store the values of permutations. When all bits in the mask are set, indicating that all elements have been chosen, we increment the count by 1 to account for a valid permutation.*

**Upvote if you like soln**
# Method 1
```
class Solution {
public:
    vector<vector<int>> dp;

    int solve(vector<int>& nums, int prevIndex, int currentIndex, int mask) {
        if (currentIndex == nums.size()) {
            return 1;
        }
        if (dp[prevIndex + 1][mask] != -1) {
            return dp[prevIndex + 1][mask];
        }
        int tot = 0;
        for (int j = 0; j < nums.size(); j++) {
            if (mask & (1 << j)) {
                continue;
            }
            if (prevIndex == -1 || nums[prevIndex] % nums[j] == 0 || nums[j] % nums[prevIndex] == 0) {
                tot += solve(nums, j, currentIndex + 1, mask | (1 << j));
                tot %= 1000000007;
            }
        }
        dp[prevIndex + 1][mask] = tot;
        return dp[prevIndex + 1][mask];
    }

    int specialPerm(vector<int>& nums) {
        dp.resize(20,vector<int>((1 << 14) + 5, -1));
        return solve(nums, -1, 0, 0);
    }
};

```
# Method 2 
Instead of using a bitmask to represent the chosen indices, an array (or set) is used to keep track of the selected indices.
During the recursive exploration of permutations, the code checks if an index is already present in the chosenIndices set before considering it for selection. If the index is found in the set, it is skipped to avoid duplicate selections.
```
class Solution {
public:
    vector<vector<int>> dp;
    int solve(vector<int>& nums, int previdx, vector<int>& chosenIndices) {
        if (chosenIndices.size() == nums.size()) 
            return 1;
        
        int mask = 0;
        for (int index : chosenIndices) 
            mask |= (1 << index);
        
        if (dp[previdx + 1][mask] != -1) 
            return dp[previdx + 1][mask];
    
        int tot = 0;
        for (int j = 0; j < nums.size(); j++) {
            if (find(chosenIndices.begin(), chosenIndices.end(), j) != chosenIndices.end()) 
            continue;
            if (previdx == -1 || nums[previdx] % nums[j] == 0 || nums[j] % nums[previdx] == 0) {
                chosenIndices.push_back(j);
                tot += solve(nums, j, chosenIndices);
                tot %= 1000000007;
                chosenIndices.pop_back();
            }
        }
        return  dp[previdx + 1][mask] = tot;
    }

    int specialPerm(vector<int>& nums) {
        dp.resize(20, vector<int>((1 << nums.size()) + 5, -1));
        vector<int> chosenIndices;
        return solve(nums, -1, chosenIndices);
    }
};
```
**Some Best question for BitMask**
1. [526. Beautiful Arrangement](https://leetcode.com/problems/beautiful-arrangement/description/)
2. [698. Partition to K Equal Sum Subsets
](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/)
3. [2572. Count the Number of Square-Free Subsets
](https://leetcode.com/problems/count-the-number-of-square-free-subsets/description/)
4. [2035. Partition Array Into Two Arrays to Minimize Sum Difference
](https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/)
5. [1659. Maximize Grid Happiness](https://leetcode.com/problems/maximize-grid-happiness/description/)
6. [1723. Find Minimum Time to Finish All Jobs
](https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/description/)
7. [1255. Maximum Score Words Formed by Letters
](https://leetcode.com/problems/maximum-score-words-formed-by-letters/description/)
