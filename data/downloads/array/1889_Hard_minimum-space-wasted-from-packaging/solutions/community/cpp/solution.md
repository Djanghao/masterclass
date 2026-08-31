# Minimum Wasted Space in Packaging

**Author:** Malwareman007
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3622558/](https://leetcode.com/problems/minimum-space-wasted-from-packaging/solutions/3622558/)

---

# Intuition
To solve the problem, we need to iterate over each supplier and calculate the wasted space for each package. Then we choose the supplier that minimizes the total wasted space.

# Approach
The approach involves sorting the packages in non-decreasing order and sorting the box sizes for each supplier in non-decreasing order. We then iterate over each supplier and perform the following steps:

1. Check if the largest box size offered by the supplier is smaller than the largest package size. If so, skip the supplier since it's impossible to fit all packages in the boxes.
2. Initialize the current waste variable to 0 and set a pointer j to 0.
3. Iterate over each box size offered by the supplier:
    * Find the index k of the largest package that can fit in the current box using binary search.
    * Calculate the wasted space for the packages that fit in the current box by subtracting the sum of the package sizes from the product of the number of packages and the box size.
    * Update the pointer j to k+1.
    * Accumulate the calculated wasted space in the current waste variable.
4. Update the minimum waste variable if the current waste is smaller.
5. Return the minimum waste modulo 10^9 + 7. If the minimum waste is still LLONG_MAX, return -1.

# Complexity
- Time complexity:
 O(n * log(n) + m * log(n)), where n is the number of packages and m is the number of suppliers. The complexity arises from sorting the packages and performing binary search for each supplier.

- Space complexity:
O(n), where n is the number of packages. The space is used for the prefix sum array.

# Code
```
class Solution {
public:
    int minWastedSpace(vector<int>& packages, vector<vector<int>>& boxes) {
        int n = packages.size();
        int m = boxes.size();
        
        // Sort the packages array in non-decreasing order
        sort(packages.begin(), packages.end());
        
        // Calculate the prefix sum of the packages array
        vector<long long> prefixSum(n + 1);
        for (int i = 1; i <= n; i++) {
            prefixSum[i] = prefixSum[i - 1] + packages[i - 1];
        }
        
        long long minWaste = LLONG_MAX;
        
        for (int i = 0; i < m; i++) {
            // Sort the box sizes in non-decreasing order for each supplier
            sort(boxes[i].begin(), boxes[i].end());
            
            // Skip the supplier if the largest box size is smaller than the largest package size
            if (boxes[i].back() < packages.back()) {
                continue;
            }
            
            long long currWaste = 0;
            int j = 0;
            
            for (int boxSize : boxes[i]) {
                // Find the index of the largest package that can fit in the current box
                int k = upper_bound(packages.begin(), packages.end(), boxSize) - packages.begin() - 1;
                
                // Calculate the wasted space for the packages that fit in the current box
                currWaste += (long long)(k - j + 1) * boxSize - (prefixSum[k + 1] - prefixSum[j]);
                
                j = k + 1;
            }
            
            minWaste = min(minWaste, currWaste);
        }
        
        if (minWaste == LLONG_MAX) {
            return -1;
        }
        
        return minWaste % 1000000007;
    }
};

```