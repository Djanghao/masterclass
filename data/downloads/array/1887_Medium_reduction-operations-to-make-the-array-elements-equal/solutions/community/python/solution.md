# 🔥 Beats 80% - Simple Sorting Approach - O(N log N)

**Author:** millenium103
**Votes:** 31
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305540/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/4305540/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to make all elements in the array equal by following a set of operations. The operations involve finding the largest value, determining the next largest value smaller than the current largest, and reducing the corresponding element to the next largest value. The task is to calculate the total number of operations required.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Sort the array in non-decreasing order.
2. Iterate through the sorted array from the end.
3. For each unique value encountered, add the difference between the total length of the array and the current index to the result.
   - This accounts for the number of times the current value needs to be reduced to reach the smallest value.
   - Update the total number of operations accordingly.

# Complexity
- Sorting the array takes O(n log n) time, where n is the length of the array.
- Iterating through the array once takes O(n) time.
- Overall time complexity: O(n log n)
- Space complexity: O(1) (since the sorting is done in-place)

# Code
## Java
```
class Solution {
    public int reductionOperations(int[] nums) {
        Arrays.sort(nums);
        int si=nums.length;
        int ans=0;
        for(int i=nums.length-1;i>0;i--){
            if(nums[i-1]!=nums[i]){
                ans+=si-i;
            }
        }
        return ans;
    }
}
```
## C++
```
class Solution {
public:
    int reductionOperations(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int size = nums.size();
        int ans = 0;
        for (int i = size - 1; i > 0; --i) {
            if (nums[i - 1] != nums[i]) {
                ans += size - i;
            }
        }
        return ans;
    }
};
```
## Python
```
class Solution(object):
    def reductionOperations(self, nums):
        nums.sort()
        size = len(nums)
        ans = 0
        for i in range(size - 1, 0, -1):
            if nums[i - 1] != nums[i]:
                ans += size - i
        return ans
        
```
### Summary:
The approach efficiently utilizes the sorted nature of the array to calculate the number of operations needed to make all elements equal. The time complexity is reasonable, making it a practical solution for the given problem.

---

![upvote.png](./images/0.png)
