# Simple Solution || Beginner Friendly || Easy to Understand ✅

**Author:** Anirban_Pramanik10
**Votes:** 85
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4151960/](https://leetcode.com/problems/minimum-number-of-operations-to-make-array-continuous/solutions/4151960/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
- Sort the input array `nums` in ascending order.
- Traverse the sorted array to remove duplicates and count unique elements in `uniqueLen`.
- Initialize `ans` to the length of the input array, representing the maximum operations initially.
- Iterate over unique elements using an outer loop.
- Use an inner while loop with two pointers to find subarrays where the difference between the maximum and minimum element is within the array's length.
- Calculate the number of operations needed to make all elements distinct within each subarray.
- Update `ans` with the minimum operations found among all subarrays.
- Return the minimum operations as the final result.
# Complexity
- Time complexity:  `O(N*lgN + N + N*lgN)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int minOperations(int[] nums) {
        Arrays.sort(nums);
        int uniqueLen = 1;
        for (int i = 1; i < nums.length; ++i) {
            if (nums[i] != nums[i - 1]) {
                nums[uniqueLen++] = nums[i];
            }
        }
        
        int ans = nums.length;
        for (int i = 0, j = 0; i < uniqueLen; ++i) {
            while (j < uniqueLen && nums[j] - nums[i] <= nums.length - 1) {
                ++j;
            }
            ans = Math.min(ans, nums.length - (j - i));
        }
        
        return ans;
    }
}
```
```python3 []
class Solution:
    def minOperations(self, nums: List[int]) -> int:
        n = len(nums)
        nums = sorted(set(nums))
		
        answer = float("+inf")
        for i, start in enumerate(nums):
            
            search = start + n - 1  # number to search
            start, end = 0, len(nums)-1
            
            while start <= end:
                mid = start + (end - start) // 2
                if nums[mid] <= search:
                    idx = mid
                    start = mid + 1
                else:
                    end = mid - 1
            
            changes = idx - i + 1
            answer = min(answer, n - changes)
        return answer
                
```
```python []
class Solution(object):
    def minOperations(self, nums):
        # Sort the input list in ascending order.
        nums.sort()
        
        # Initialize variables to keep track of unique elements and minimum operations.
        unique_len = 1
        ans = len(nums)
        
        # Traverse the sorted list to remove duplicates and count unique elements.
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:
                nums[unique_len] = nums[i]
                unique_len += 1
        
        # Initialize pointers for calculating operations within subarrays.
        i, j = 0, 0
        
        # Iterate over unique elements to find minimum operations.
        for i in range(unique_len):
            while j < unique_len and nums[j] - nums[i] <= len(nums) - 1:
                j += 1
            ans = min(ans, len(nums) - (j - i))
        
        return ans

```
```C++ []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        // Sort the vector in ascending order
        sort(nums.begin(), nums.end());

        // Initialize variables
        int n = nums.size(); // Number of elements in the vector
        int left = 0; // Left pointer for the sliding window
        int maxCount = 1; // Initialize the maximum count of distinct elements
        int currentCount = 1; // Initialize the count of distinct elements in the current window

        // Iterate through the vector to find the minimum operations
        for (int right = 1; right < n; ++right) {
            // Check if the current element is equal to the previous one
            if (nums[right] == nums[right - 1]) {
                continue; // Skip duplicates
            }

            // Check if the current window size is less than or equal to the difference between the maximum and minimum values
            while (nums[right] - nums[left] > n - 1) {
                // Move the left pointer to shrink the window
                if(left<n && nums[left+1]==nums[left]){
currentCount++;
}
                left++;
                currentCount--;
            }

            // Update the count of distinct elements in the current window
            currentCount++;

            // Update the maximum count
            maxCount = max(maxCount, currentCount);
        }

        // Calculate the minimum operations
        int minOps = n - maxCount;

        return minOps;
    }
};
```
```C []
// Function prototype for the comparison function
int compare(const void* a, const void* b);

int minOperations(int* nums, int numsSize) {
    // Define the maximum size of the sliding window
    int k = numsSize - 1;

    // Sort the array in ascending order
    qsort(nums, numsSize, sizeof(int), compare);

    // Remove adjacent duplicates
    int newLen = 1;
    for (int i = 1; i < numsSize; ++i) {
        if (nums[i] != nums[i - 1]) {
            nums[newLen++] = nums[i];
        }
    }

    int l = 0, r = 0, fin = 1;

    while (r < newLen) {
        if (l == r)
            r++;
        else if (nums[r] - nums[l] > k)
            l++;
        else {
            fin = (fin > r - l + 1) ? fin : r - l + 1;
            r++;
        }
    }

    return k - fin + 1;
}

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}
```
# If you like the solution please Upvote !!
![da69d522-8deb-4aa6-a4db-446363bf029f_1687283488.9528875.gif](./images/0.gif)

