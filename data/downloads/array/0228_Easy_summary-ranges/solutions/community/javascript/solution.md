# Very Easy || 100% || Fully Explained || Java, C++, Python, Javascript, Python3

**Author:** PratikSen07
**Votes:** 27
**Link:** [https://leetcode.com/problems/summary-ranges/solutions/2467583/](https://leetcode.com/problems/summary-ranges/solutions/2467583/)

---

# **Java Solution:**
```
// Runtime: 3 ms, faster than 92.99% of Java online submissions for Summary Ranges.
// Time Complexity : O(N)
// Space Complexity : O(1)
class Solution {
    public List<String> summaryRanges(int[] nums) {
        // Create a list of string to store the output result...
        List<String> output = new ArrayList<String>();
        // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
        int idx = 0;
        while(idx < nums.length) {
            // Initialize beg and last index for identifying the continuous element in the array...
            int beg, last;
            // Mark the number at current index as beginning element of the range...
            beg = nums[idx];
            // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
            while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
                idx++;
            // Set this element as last element of the range...
            last = nums[idx];
            // If continuous element isn't present...
            if(beg == last)
                output.add(beg + "");
            // If present...
            else
                output.add( beg + "->" + last );
            idx++;          
        }
        return output;      // Return the output result list...
    }
}
```

# **C++ Solution:**
```
// Runtime: 2 ms, faster than 81.97% of C++ online submissions for Summary Ranges.
// Time Complexity : O(N)
// Space Complexity : O(1)
class Solution {
public:
    vector<string> summaryRanges(vector<int>& nums) {
        // Create a list of string to store the output result...
        vector<string> output;
        // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
        int idx = 0;
        while(idx < nums.size()) {
            // Initialize beg and last index for identifying the continuous element in the array...
            int beg, last;
            // Mark the number at current index as beginning element of the range...
            beg = nums[idx];
            // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
            while(idx+1 < nums.size() && nums[idx+1] == nums[idx] + 1)
                idx++;
            // Set this element as last element of the range...
            last = nums[idx];
            // If continuous element isn't present...
            if(beg == last)
                output.push_back(to_string(beg));
            // If present...
            else
                output.push_back(to_string(beg) + "->" + to_string(last));
            idx++;
        }
        return output;      // Return the output result list
    }
};
```

# **Python/Python3 Solution:**
```
# Runtime: 11 ms, faster than 98.68% of Python online submissions for Summary Ranges.
# Memory Usage: 13.4 MB, less than 82.54% of Python online submissions for Summary Ranges.
# Time Complexity : O(N)
# Space Complexity : O(1)
class Solution(object):
    def summaryRanges(self, nums):
        # Create a list of string to store the output result...
        output = []
        # Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
        idx = 0
        while idx < len(nums):
            # Mark the number at current index as beginning element of the range...
            beg = nums[idx]
            # Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
            while idx+1 < len(nums) and nums[idx+1] == nums[idx] + 1:
                idx += 1
            # Set this element as last element of the range...
            last = nums[idx]
            # If continuous element isn't present...
            if beg == last:
                output.append(str(beg))
            # If present...
            else:
                output.append(str(beg) + "->" + str(last))
            idx += 1
        return output;      # Return the output result list...
```
            
# **JavaScript Solution:**
```
// Runtime: 46 ms, faster than 86.21% of JavaScript online submissions for Summary Ranges.
// Time Complexity : O(N)
// Space Complexity : O(1)
var summaryRanges = function(nums) {
    // Create a list of string to store the output result...
    const output = [];
    // Start traversing the array from idx = 0 till idx < sizeofarray in a while loop.
    let idx = 0;
    while(idx < nums.length) {
        // Initialize beg and last index for identifying the continuous element in the array...
        let beg, last;
        // Mark the number at current index as beginning element of the range...
        beg = nums[idx];
        // Traverse the array beggining from current index & find the last element whose difference from previous element is exactly 1, i.e. nums[idx + 1] == nums[idx] + 1...
        while(idx+1 < nums.length && nums[idx+1] == nums[idx] + 1) 
            idx++;
        // Set this element as last element of the range...
        last = nums[idx];
        // If continuous element isn't present...
        if(beg == last)
            output.push(beg + "");
        // If present...
        else
            output.push( beg + "->" + last );
        idx++;          
    }
    return output;      // Return the output result list...
};
```
**I am working hard for you guys...
Please upvote if you found any help with this code...**