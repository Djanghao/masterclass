# Prefix sum and Index map || O(n) solution C++

**Author:** Gojo_28s
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4673187/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4673187/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
 To find the maximum sum of subarrays in a given vector (nums) such that the absolute difference between the **nums[i]** and **nums[j]**  in the subarray **nums[i,i+1,...j]**  is at most k. The approach used in the code involves maintaining a prefix sum array and a map to efficiently find the desired subarrays.

# Approach
<!-- Describe your approach to solving the problem. -->
The Approach consists of Five steps :-

**1. Prefix Sum Array (prefixSum):**
The code begins by creating a prefix sum array (prefixSum) to quickly calculate the sum of any subarray using the precomputed sums.

**2. Map for Index Storage (numIndexMap):**
The code uses a map (numIndexMap) to store the index of each encountered number in the array. This map is crucial for efficiently finding subarrays with the desired difference in maximum and minimum elements.

**3. Iterating through the Array:**
The code iterates through the array, and for each element, it calculates two potential targets (target1 and target2) that represent the maximum and minimum elements in the subarray.
It then checks if these targets exist in the map (numIndexMap). If they do, it calculates the sum of the corresponding subarray and updates the maximum sum accordingly.

**4. Update Map with Current Number and Index:**
After processing each element, the code updates the map with the current number and its index. 
If the number is already in the map, it compares the prefix sums to ensure that the current index is used for the maximum sum calculation.

**5. Result:**
Finally, if the maximum sum is not updated during the process (remains as the initialized value of -1e15), it returns 0. Otherwise, it returns the maximum sum found.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```

class Solution {
public:
    long long maximumSubarraySum(std::vector<int>& nums, int k) {
        int n = nums.size();
        long long maximumSum = -1e15; // Set initial maximum sum to a very small value
        
        map<int, int> numIndexMap; // Map to store the index of each number
        
        vector<long long> prefixSum(n); // Vector to store prefix sums
        prefixSum[0] = nums[0]; // Initialize the prefix sum
        
        // Calculate prefix sums
        for(int i = 1; i < n; i++) {
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }
        
        numIndexMap[nums[0]]=0;// Initialize the map
        
        // Iterate through the array
        for(int i = 1; i < n; i++) {
            long long target1 = nums[i] + k; // Define target 1
            long long target2 = nums[i] - k; // Define target 2
            
            // Check if target 1 exists in the map
            if(numIndexMap.find(target1) != numIndexMap.end()) {
                long long currentSum = prefixSum[i] - prefixSum[numIndexMap[target1]] + nums[numIndexMap[target1]];
                maximumSum = max(maximumSum, currentSum);
            }
            
            // Check if target 2 exists in the map
            if(numIndexMap.find(target2) != numIndexMap.end()) {
                long long currentSum = prefixSum[i] - prefixSum[numIndexMap[target2]] + nums[numIndexMap[target2]];
                maximumSum = max(maximumSum, currentSum);
            }
            
            // Update map with current number and its index
            if(numIndexMap.find(nums[i]) != numIndexMap.end()) {
                if(prefixSum[i] >= prefixSum[numIndexMap[nums[i]]]) continue;
            }
            numIndexMap[nums[i]] = i;
        }
        
        // If maximum sum is not updated, return 0
        if(maximumSum == -1e15) return 0;
        
        return maximumSum;
    }
};

```