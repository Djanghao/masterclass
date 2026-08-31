# 🚀 Beats 100% | Binary Search | Most Optimal Approach 🔥

**Author:** The_Sanket_Deshmukh
**Votes:** 53
**Link:** [https://leetcode.com/problems/4sum/solutions/4533150/](https://leetcode.com/problems/4sum/solutions/4533150/)

---

\uD83E\uDD14 **Intuition:**
The code aims to find all unique quadruplets in an array that sum up to a given target. To achieve this, it employs a nested loop structure with pointers, sorting the array first to simplify the search process.

\uD83D\uDEE0\uFE0F **Approach:**
1. **Sorting:** The array is sorted in ascending order, allowing us to efficiently explore combinations and eliminate duplicates.
2. **Nested Loops:** Two outer loops iterate through unique pairs (i, j), avoiding duplicates by skipping identical elements.
3. **Two Pointers:** Two pointers (start and end) are used to navigate through the remaining elements while checking for quadruplet sums.
4. **Checking Sums:** The sum of four elements is calculated, and based on the comparison with the target, the pointers are adjusted accordingly.
5. **Avoiding Duplicates:** Duplicates are avoided by incrementing or decrementing pointers when equal elements are encountered.
6. **Building Result:** Valid quadruplets are added to the result vector.

\u23F0 **Time Complexity:**
- Sorting the array takes O(n log n) time.
- The triple nested loop structure has an overall time complexity of O(n^3).
- The inner while loop can be considered as O(n) in the worst case.

Combining these, the overall time complexity is O(n log n) + O(n^3), which simplifies to O(n^3).

\uD83D\uDCBE **Space Complexity:**
- The space complexity is primarily dominated by the result vector, which stores the quadruplets.
- Additional space is used for variables like `sum`, `start`, `end`, etc., but they are constant in nature.
- Therefore, the space complexity is O(n) for the result vector.

# Code
```
class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        sort(nums.begin(),nums.end());
        vector<vector<int>> ans;

        int n = nums.size();
        for(int i = 0; i < n; i++)
        {
            if(i > 0 and nums[i] == nums[i - 1]) continue;
            for(int j = i + 1; j < n; j++)
            {
                if(j > (i + 1) and nums[j] == nums[j - 1]) continue;
                
                int start = j + 1;
                int end = n - 1;

                while(start < end)
                {
                    long long sum = nums[i];
                    sum += nums[j];
                    sum += nums[start];
                    sum += nums[end];

                    if(sum == target)
                    {
                        ans.push_back({nums[i] , nums[j] , nums[start] , nums[end]});
                        int low = nums[start];
                        int high = nums[end];
                        start++,end--;
                        while(start < end and nums[start] == low) start++;
                        while(start < end and nums[end] == high) end--;
                    }
                    else if(sum > target) end--;
                    else start++;
                }
            }
        }
        return ans;
    }
};
```
![lc1.png](./images/0.png)
