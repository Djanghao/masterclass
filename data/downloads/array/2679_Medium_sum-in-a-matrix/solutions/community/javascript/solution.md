# Very simple solution 🔥|| 100% fast || Sorting✔

**Author:** shakya_kr_02
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-in-a-matrix/solutions/3520683/](https://leetcode.com/problems/sum-in-a-matrix/solutions/3520683/)

---

# Intuition
- Sort each row of the matrix in ascending order. This ensures that the largest number in each row is at the end.

- Iterate over each column and find the maximum number among all the elements in that column. Since the rows are sorted, the largest number in each column will be at the last index of that column.

- Add the maximum number found in step 2 to the score. This represents the highest number among all the numbers removed from the matrix.

- Repeat steps 2-3 until all the numbers in the matrix are removed. This means performing steps 2-3 for each column until there are no more numbers left in the matrix.

- Return the final score, which represents the sum of the highest numbers from each column.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The approach is to first sort each row to ensure that the largest number is at the end. Then, by iterating over each column, we find the maximum number and add it to the score. This process is repeated until all numbers are removed from the matrix. The final score is returned as the result.
<!-- Describe your approach to solving the problem. -->

# Complexity
- **Time complexity:** Sorting each row: O(n * m * log(m)), where n is the number of rows and m is the number of columns.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- **Space complexity:** The given solution has a space complexity of O(1) since it does not use any additional data structures
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# C++
```
class Solution {
public:
    int matrixSum(vector<vector<int>>& nums) {
        int sum=0;
        for(int i=0;i<nums.size();i++)
            sort(nums[i].begin(), nums[i].end());
    
        for(int i=0;i<nums[0].size();i++){
            int maxi=0;
            for(int j=0;j<nums.size();j++){
                maxi=max(nums[j][i],maxi);
            }
            sum+=maxi;
        }
        return sum;
    }
};
```

# Java
```
import java.util.Arrays;

class Solution {
    public int matrixSum(int[][] nums) {
        int sum = 0;
        
        for (int i = 0; i < nums.length; i++)
            Arrays.sort(nums[i]);
        
        for (int i = 0; i < nums[0].length; i++) {
            int maxi = 0;
            for (int j = 0; j < nums.length; j++) {
                maxi = Math.max(nums[j][i], maxi);
            }
            sum += maxi;
        }
        
        return sum;
    }
}

```

# Python
```
class Solution:
    def matrixSum(self, nums: List[List[int]]) -> int:
        total_sum = 0
        
        for row in nums:
            row.sort()
        
        for i in range(len(nums[0])):
            maxi = 0
            for j in range(len(nums)):
                maxi = max(nums[j][i], maxi)
            total_sum += maxi
        
        return total_sum


```

# JavaScript
```
/**
 * @param {number[][]} nums
 * @return {number}
 */
var matrixSum = function(nums) {
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        nums[i].sort((a, b) => a - b);
    }
    
    for (let i = 0; i < nums[0].length; i++) {
        let maxi = 0;
        for (let j = 0; j < nums.length; j++) {
            maxi = Math.max(nums[j][i], maxi);
        }
        sum += maxi;
    }
    
    return sum;
};

```