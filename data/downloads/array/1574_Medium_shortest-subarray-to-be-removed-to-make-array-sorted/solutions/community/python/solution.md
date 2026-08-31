# Easy & Simple Approach --> Shortest Subarray to be Removed to Make Array Sorted✅ || Beats 100 % 🔥

**Author:** Ashis2024
**Votes:** 8
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046585/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046585/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach identifies the longest sorted suffix at the end of the array and the longest sorted prefix at the start. By trying to merge these two sorted parts, we determine the shortest subarray in the middle that can be removed to make the array sorted. We adjust pointers from both ends to minimize the removal length, ensuring the array remains non-decreasing.
# Approach
<!-- Describe your approach to solving the problem. -->
1.	Step 1: Use a loop to determine the longest non-decreasing suffix, starting from the end and moving right leftward.
2.	Step 2: Initialize ans to the length of this suffix (right).
3.	Step 3: Expand left from the beginning, checking conditions for each left:
\u2022	While arr[left] > arr[right], increment right.
\u2022	Update ans to the minimum of ans and the current length of the subarray to remove (right - left - 1).
1.	Return ans, which holds the shortest length of subarray required for removal.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
        O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
        O(1)
# Code
```cpp []
class Solution {
public:
    int findLengthOfShortestSubarray(vector<int>& arr) {

        int n = arr.size();
        int left = 0, right = n - 1;
        while(right > 0 && arr[right - 1] <= arr[right])
        {
            right--;
        }
        int ans = right;
        while(left < right && (left == 0 || arr[left - 1] <= arr[left]))
        {
            while(right < n && arr[left] > arr[right])
            {
                right++;
            }
            ans = min(ans, right - left - 1);
            left++;
        }
        return ans;
    }
};
```
```Java []
class Solution {
    public int findLengthOfShortestSubarray(int[] arr) {       
        int n = arr.length;
        int left = 0, right = n - 1;
        
        // Find longest non-decreasing suffix
        while (right > 0 && arr[right - 1] <= arr[right]) {
            right--;
        }
        
        // If the entire array is already sorted
        if (right == 0) return 0;
        
        int ans = right;
        
        // Find the minimum length of subarray to remove
        while (left < right && (left == 0 || arr[left - 1] <= arr[left])) {
            while (right < n && arr[left] > arr[right]) {
                right++;
            }
            ans = Math.min(ans, right - left - 1);
            left++;
        }
        
        return ans;
    }
}

```
```python []
class Solution:
    def findLengthOfShortestSubarray(self, arr):
        n = len(arr)
        left, right = 0, n - 1
        
        # Find longest non-decreasing suffix
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1
        
        # If the entire array is already sorted
        if right == 0:
            return 0
        
        ans = right
        
        # Find the minimum length of subarray to remove
        while left < right and (left == 0 or arr[left - 1] <= arr[left]):
            while right < n and arr[left] > arr[right]:
                right += 1
            ans = min(ans, right - left - 1)
            left += 1
        
        return ans

```
```
```
![upvote.jpeg.jpg](./images/0.jpeg)

