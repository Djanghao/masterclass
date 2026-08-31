# Very Easy 100% (Fully Explained)(Java, C++, Python, JavaScript, C, Python3)

**Author:** PratikSen07
**Votes:** 116
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/2415500/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/2415500/)

---

Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
			Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements. At last return k after placing the final result in the first k slots of nums.
# **Java Solution:**
Runtime: 1 ms, faster than 96.73% of Java online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 41.8 MB, less than 87.33% of Java online submissions for Remove Duplicates from Sorted Array II.
```
class Solution {
    public int removeDuplicates(int[] nums) {
        // Special case...
        if (nums.length <= 2)
            return nums.length;
        int prev = 1;       // point to previous
        int curr = 2;       // point to current
        // Traverse all elements through loop...
        while (curr < nums.length) {
            // If the curr index matches the previous two elements, skip it...
            if (nums[curr] == nums[prev] && nums[curr] == nums[prev - 1]) {
                curr++;
            }
            // Otherwise, count that element and update...
            else {
                prev++;
                nums[prev] = nums[curr];
                curr++;
            }
        }
        return prev + 1;     // Return k after placing the final result in the first k slots of nums...
    }
}
```

# **C++ Solution:**
Runtime: 4 ms, faster than 83.16% of C++ online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 7.7 MB, less than 99.73% of C++ online submissions for Remove Duplicates from Sorted Array II.
```
class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        // Special case...
        if(nums.size() <= 2) {
            return nums.size();
        }
        // Initialize an integer k that updates the kth index of the array...
        // only when the current element does not match either of the two previous indexes...
        int k = 2;
        // Traverse elements through loop...
        for(int i = 2; i < nums.size(); i++){
            // If the index does not match the (k-1)th and (k-2)th elements, count that element...
            if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]){
                nums[k] = nums[i];
                k++;
            // If the index matches the (k-1)th and (k-2)th elements, we skip it...
            }
        }
        return k;       //Return k after placing the final result in the first k slots of nums...
    }
};
```

# **Python Solution:**
Runtime: 24 ms, faster than 74.03% of Python online submissions for Remove Duplicates from Sorted Array II.
```
class Solution(object):
    def removeDuplicates(self, nums):
        # Initialize an integer k that updates the kth index of the array...
        # only when the current element does not match either of the two previous indexes. ...
        k = 0
        # Traverse all elements through loop...
        for i in nums:
            # If the index does not match elements, count that element and update it...
            if k < 2 or i != nums[k - 2]:
                nums[k] = i
                k += 1
        return k       # Return k after placing the final result in the first k slots of nums...
```
                    
# **JavaScript Solution:**
Runtime: 88 ms, faster than 76.14% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
Memory Usage: 43.5 MB, less than 98.04% of JavaScript online submissions for Remove Duplicates from Sorted Array II.
```
var removeDuplicates = function(nums) {
    // Special case...
    if(nums.length <= 2) {
        return nums.length;
    }
    // Initialize an integer k that updates the kth index of the array...
    // only when the current element does not match either of the two previous indexes...
    let k = 2;
    // Traverse elements through loop...
    for(let i = 2; i < nums.length; i++){
        // If the index does not match the (k-1)th and (k-2)th elements, count that element...
        if(nums[i] != nums[k - 2] || nums[i] != nums[k - 1]){
            nums[k] = nums[i];
            k++;
        // If the index matches the (k-1)th and (k-2)th elements, we skip it...
        }
    }
    return k;       //Return k after placing the final result in the first k slots of nums...
};
```

# **C Language:**
```
int removeDuplicates(int* nums, int numsSize){
    // Special case...
    if (numsSize <= 2)
        return numsSize;
    int prev = 1;       // point to previous
    int curr = 2;       // point to current
    // Traverse all elements through loop...
    while (curr < numsSize) {
        // If the curr index matches the previous two elements, skip it...
        if (nums[curr] == nums[prev] && nums[curr] == nums[prev - 1]) {
            curr++;
        }
        // Otherwise, count that element and update...
        else {
            prev++;
            nums[prev] = nums[curr];
            curr++;
        }
    }
    return prev + 1;     // Return k after placing the final result in the first k slots of nums...
}
```

# **Python3 Solution:**
```
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        # Initialize an integer k that updates the kth index of the array...
        # only when the current element does not match either of the two previous indexes. ...
        k = 0
        # Traverse all elements through loop...
        for i in nums:
            # If the index does not match elements, count that element and update it...
            if k < 2 or i != nums[k - 2]:
                nums[k] = i
                k += 1
        return k       # Return k after placing the final result in the first k slots of nums...
```
**I am working hard for you guys...
Please upvote if you find any help with this code...**