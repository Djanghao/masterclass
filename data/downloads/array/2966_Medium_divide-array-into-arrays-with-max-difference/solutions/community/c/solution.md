# ✔️Beats 100% || 11 line Code || C++/Java/Python || With Explanation

**Author:** Inam_28_06
**Votes:** 31
**Link:** [https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4656935/](https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/solutions/4656935/)

---

Please **upvote** if you find the solution helpful.
## Explanation
1. **Initialization:**
   - Create an empty vector of vectors (`v`) to store the divided subarrays.
   - Sort the input vector `nums` in ascending order.

2. **Iteration:**
   - Iterate through the `nums` vector from index 0 to the second last element (allowing for groups of three).
   - For each index `i` that's a multiple of 3:

      3. **Check difference:**
         - Calculate the difference between the third and first elements in the potential subarray (`nums[i + 2] - nums[i]`).
         - If the difference is less than or equal to `k`:

           4. **Create subarray:**
               - Create a new vector containing the three elements (`nums[i]`, `nums[i + 1]`, `nums[i + 2]`).
               - Add this subarray to the `v` vector.

         - Otherwise (if the difference exceeds `k`):

           5. **Early return:**
               - Return an empty vector, indicating that the division is not possible.

3. **Return result:**
   - If all subarrays meet the condition, return the `v` vector containing all the divided subarrays.

**Time Complexity-O(n*logn)**

**C++**
```
class Solution {
public:
    vector<vector<int>> divideArray(vector<int>& nums, int k) {
        vector<vector<int>> v;                                              // Make 2d array to store the 1d array of size 3   
        sort(nums.begin(), nums.end());                                 // Sort the given array                
        for (int i = 0; i + 2 < nums.size(); ++i) {                    // Iterate through the array
            if (i % 3 == 0) {                                         // Check index is multiple of 3 because we store the element in array at index =0,3,6                  
                if (nums[i + 2] - nums[i] <= k) {                    // Difference between 3rd and 2nd elements in the triplet is <= k             
                    v.push_back({nums[i], nums[i + 1], nums[i + 2]});           // If true, push 3 element together form i to i+2
                } else {
                    return {};                                          // If false, return an empty vector- no array is possible
                }
            }
        }
        return v;      // Return the array
    }
};
```
**Python**
```
class Solution:
    def divideArray(self, nums, k):
        v = []
        nums.sort()
        for i in range(len(nums) - 2):
            if i % 3 == 0:
                if nums[i + 2] - nums[i] <= k:
                    v.append([nums[i], nums[i + 1], nums[i + 2]])
                else:
                    return []
        return v
```
**Java**
```
public class Solution {
    public int[][] divideArray(int[] nums, int k) {
        Arrays.sort(nums);
        int[][] result = new int[0][0];
        
        for (int i = 0; i + 2 < nums.length; ++i) {
            if (i % 3 == 0) {
                if (nums[i + 2] - nums[i] <= k) {
                    int[] triplet = {nums[i], nums[i + 1], nums[i + 2]};
                    result = Arrays.copyOf(result, result.length + 1);
                    result[result.length - 1] = triplet;
                } else {
                    return new int[0][0];
                }
            }
        }
        
        return result;
    }
}
```
![image](./images/0.jpeg)
