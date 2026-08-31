# Very Easy || 0 ms || 100% || Fully Explained || Java, C++, Python, JS, Python3

**Author:** PratikSen07
**Votes:** 201
**Link:** [https://leetcode.com/problems/running-sum-of-1d-array/solutions/2468388/](https://leetcode.com/problems/running-sum-of-1d-array/solutions/2468388/)

---

# **Java Solution:**
```
// Runtime: 0 ms, faster than 100.00% of Java online submissions for Running Sum of 1d Array.
// Time Complexity : O(n)
// Space Complexity : O(n)
class Solution {
    public int[] runningSum(int[] nums) {
        // Create an output array of size equal to given nums size...
        int[] output = new int[nums.length];
        // Base case: if the array is empty...
        if(nums.length == 0)
            return output;
        // Set output[0] = nums[0]...
        output[0] = nums[0];
        // Traverse all elements through the for loop...
        for(int idx = 1; idx < nums.length; idx++) {
            // Storing the running sum...
            output[idx] = output[idx-1]+ nums[idx];
        }
        return output;      // Return the running sum of nums...
    }
}
```

# **C++ Solution:**
```
// Time Complexity : O(n)
// Space Complexity : O(n)
class Solution {
public:
    vector<int> runningSum(vector<int>& nums) {
        // Create an output array of size equal to given nums size...
        vector<int> output(nums.size());
        // Base case: if the array is empty...
        if(nums.size() == 0)
            return output;
        // Set output[0] = nums[0]...
        output[0] = nums[0];
        // Traverse all elements through the for loop...
        for(int idx = 1; idx < nums.size(); idx++) {
            // Storing the running sum...
            output[idx] = output[idx-1] + nums[idx];
        } return output;     // Return the running sum of nums...
    }
};
```

# **Python/Python3 Solution:**
```
# Time Complexity : O(n)
# Space Complexity : O(n)
class Solution(object):
    def runningSum(self, nums):
        # Create an output array of size equal to given nums size...
        output = [0] * len(nums)
        # Set output[0] = nums[0]...
        output[0] = nums[0]
        # Traverse all elements through the for loop...
        for idx in range(1, len(nums)):
            # Storing the running sum...
            output[idx] = output[idx - 1] + nums[idx]
        return output       # Return the running sum of nums...
```
                
# **JavaScript Solution:**
```
// Time Complexity : O(n)
// Space Complexity : O(n)
var runningSum = function(nums) {
    // Create an output array of size equal to given nums size...
    let output = new Array(nums.length)
    // Set output[0] = nums[0]...
    output[0] = nums[0];
    // Traverse all elements through the for loop...
    for(let idx = 1; idx < nums.length; idx++) {
        // Storing the running sum...
        output[idx] = output[idx-1] + nums[idx];
    }
    return output;      // Return the running sum of nums...
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**