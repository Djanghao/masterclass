# Very Easy || 100% || Fully Explained || Java, C++, Python, JS, Python3

**Author:** PratikSen07
**Votes:** 910
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/2470014/](https://leetcode.com/problems/find-pivot-index/solutions/2470014/)

---

# **Java Solution:**
```
// Runtime: 1 ms, faster than 92.94% of Java online submissions for Find Pivot Index.
// Time Complexity : O(n)
class Solution {
    public int pivotIndex(int[] nums) {
        // Initialize total sum of the given array...
        int totalSum = 0;
        // Initialize 'leftsum' as sum of first i numbers, not including nums[i]...
        int leftsum = 0;
        // Traverse the elements and add them to store the totalSum...
        for (int ele : nums)
            totalSum += ele;
        // Again traverse all the elements through the for loop and store the sum of i numbers from left to right...
        for (int i = 0; i < nums.length; leftsum += nums[i++])
            // sum to the left == leftsum.
            // sum to the right === totalSum - leftsum - nums[i]..
            // check if leftsum == totalSum - leftsum - nums[i]...
            if (leftsum * 2 == totalSum - nums[i])
                return i;       // Return the pivot index...
        return -1;      // If there is no index that satisfies the conditions in the problem statement...
    }
}
```

# **C++ Solution:**
```
// Time Complexity : O(n)
class Solution {
public:
    int pivotIndex(vector<int>& nums) {
        // Initialize rightSum to store the sum of all the numbers strictly to the index's right...
        int rightSum = accumulate(nums.begin(), nums.end(), 0);
        // Initialize leftSum to store the sum of all the numbers strictly to the index's left...
        int leftSum = 0;
        // Traverse all elements through the loop...
        for (int idx = 0; idx < nums.size(); idx++) {
            // subtract current elements with from rightSum...
            rightSum -= nums[idx];
            // If the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right...
            if (leftSum == rightSum)
                return idx;     // Return the pivot index...
            // add current elements with leftSum...
            leftSum += nums[idx];
        }
        return -1;      // If there is no index that satisfies the conditions in the problem statement...
    }
};
```

# **Python/Python3 Solution:**
```
# Time Complexity : O(n)
# Space Complexity : O(1)
class Solution(object):
    def pivotIndex(self, nums):
        # Initialize leftSum & rightSum to store the sum of all the numbers strictly to the index's left & right respectively...
        leftSum, rightSum = 0, sum(nums)
        # Traverse elements through the loop...
        for idx, ele in enumerate(nums):
            rightSum -= ele
            # If the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right...
            if leftSum == rightSum:
                return idx      # Return the pivot index...
            leftSum += ele
        return -1       # If there is no index that satisfies the conditions in the problem statement...
```
# **JavaScript Solution:**
```
// Time Complexity : O(n)
var pivotIndex = function(nums) {
    // Initialize total sum of the given array...
    let totalSum = 0
    // Traverse the elements and add them to store the totalSum...
    for(let i = 0; i < nums.length; i++) {
        totalSum += nums[i]
    }
    // Initialize 'leftsum' as sum of first i numbers, not including nums[i]...
    let leftSum = 0
    // Again traverse all the elements through the for loop and store the sum of i numbers from left to right...
    for (let i = 0; i < nums.length; i++) {
        // sum to the left == leftsum.
        // sum to the right === totalSum - leftsum - nums[i]..
        // check if leftsum == totalSum - leftsum - nums[i]...
        if (leftSum * 2 == totalSum - nums[i])
            return i;       // Return the pivot index...
        leftSum += nums[i]
    }
    return -1      // If there is no index that satisfies the conditions in the problem statement...
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**