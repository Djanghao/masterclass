# 🌟 Beats 100.00% 👏  ||  Easy and Step-by-Step Breakdown 💯🔥

**Author:** withaarzoo
**Votes:** 132
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046262/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6046262/)

---

![github_promotion_dark.png](./images/0.png)

## **\uD83C\uDF1F Access Daily LeetCode Solutions Repo :** [click here](https://github.com/withaarzoo/LeetCode-Solutions)

---

![image.png](./images/1.png)

---

# Intuition
When I first saw this problem, I noticed that the goal is to make the array sorted by removing the shortest possible subarray. This means:
1. We should look for any parts of the array that are already sorted and try to retain as much of that as possible.
2. If we have a long sorted prefix (from the start) and a long sorted suffix (from the end), we might only need to remove a small subarray in between to make the entire array sorted.

By focusing on these already sorted sections, we can potentially minimize the length of the subarray that needs to be removed.

---

# Approach
Here\u2019s the approach I used to solve this problem efficiently:

1. **Find the longest non-decreasing prefix** from the beginning of the array. Let's call this `left`. This gives us the starting part of the array that\u2019s already sorted.

2. **Find the longest non-decreasing suffix** from the end of the array. Let's call this `right`. This gives us the ending part of the array that\u2019s already sorted.

3. **Check if the entire array is sorted** by verifying if `left` spans the whole array. If so, the answer is `0` because we don't need to remove anything.

4. **Calculate minimum removal**:
   - Initially, consider removing either the entire suffix (`n - left - 1` elements) or the entire prefix (`right` elements).
   - Use a two-pointer technique to see if we can merge parts of the prefix and suffix by skipping the smallest possible middle section. This allows us to explore shorter subarrays to remove.

5. **Return the result** which is the minimum number of elements we need to remove.

---

# Complexity
- **Time complexity**: \\(O(n)\\), since we\u2019re only scanning the array a few times (once for the prefix, once for the suffix, and once for merging with two pointers).
- **Space complexity**: \\(O(1)\\), as we\u2019re only using a few extra variables for indices and result calculation.

---

# Code
```C++ []
class Solution {
public:
    int findLengthOfShortestSubarray(vector<int>& arr) {
        int n = arr.size();
        
        // Step 1: Find the longest non-decreasing prefix
        int left = 0;
        while (left + 1 < n && arr[left] <= arr[left + 1]) {
            left++;
        }
        
        // If the entire array is already sorted
        if (left == n - 1) return 0;
        
        // Step 2: Find the longest non-decreasing suffix
        int right = n - 1;
        while (right > 0 && arr[right - 1] <= arr[right]) {
            right--;
        }
        
        // Step 3: Find the minimum length to remove by comparing prefix and suffix
        int result = min(n - left - 1, right);
        
        // Step 4: Use two pointers to find the smallest middle part to remove
        int i = 0, j = right;
        while (i <= left && j < n) {
            if (arr[i] <= arr[j]) {
                result = min(result, j - i - 1);
                i++;
            } else {
                j++;
            }
        }
        
        return result;
    }
};

```
```Java []
class Solution {
    public int findLengthOfShortestSubarray(int[] arr) {
        int n = arr.length;
        
        // Step 1: Find the longest non-decreasing prefix
        int left = 0;
        while (left + 1 < n && arr[left] <= arr[left + 1]) {
            left++;
        }
        
        // If the entire array is already sorted
        if (left == n - 1) return 0;
        
        // Step 2: Find the longest non-decreasing suffix
        int right = n - 1;
        while (right > 0 && arr[right - 1] <= arr[right]) {
            right--;
        }
        
        // Step 3: Find the minimum length to remove by comparing prefix and suffix
        int result = Math.min(n - left - 1, right);
        
        // Step 4: Use two pointers to find the smallest middle part to remove
        int i = 0, j = right;
        while (i <= left && j < n) {
            if (arr[i] <= arr[j]) {
                result = Math.min(result, j - i - 1);
                i++;
            } else {
                j++;
            }
        }
        
        return result;
    }
}

```
```JavaScript []
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    const n = arr.length;
    
    // Step 1: Find the longest non-decreasing prefix
    let left = 0;
    while (left + 1 < n && arr[left] <= arr[left + 1]) {
        left++;
    }
    
    // If the entire array is already sorted
    if (left === n - 1) return 0;
    
    // Step 2: Find the longest non-decreasing suffix
    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) {
        right--;
    }
    
    // Step 3: Find the minimum length to remove by comparing prefix and suffix
    let result = Math.min(n - left - 1, right);
    
    // Step 4: Use two pointers to find the smallest middle part to remove
    let i = 0, j = right;
    while (i <= left && j < n) {
        if (arr[i] <= arr[j]) {
            result = Math.min(result, j - i - 1);
            i++;
        } else {
            j++;
        }
    }
    
    return result;
};

```
```Python []
class Solution:
    def findLengthOfShortestSubarray(self, arr: List[int]) -> int:
        n = len(arr)
        
        # Step 1: Find the longest non-decreasing prefix
        left = 0
        while left + 1 < n and arr[left] <= arr[left + 1]:
            left += 1
        
        # If the entire array is already sorted
        if left == n - 1:
            return 0
        
        # Step 2: Find the longest non-decreasing suffix
        right = n - 1
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1
        
        # Step 3: Find the minimum length to remove by comparing prefix and suffix
        result = min(n - left - 1, right)
        
        # Step 4: Use two pointers to find the smallest middle part to remove
        i, j = 0, right
        while i <= left and j < n:
            if arr[i] <= arr[j]:
                result = min(result, j - i - 1)
                i += 1
            else:
                j += 1
        
        return result

```
```Go []
func findLengthOfShortestSubarray(arr []int) int {
    n := len(arr)
    
    // Step 1: Find the longest non-decreasing prefix
    left := 0
    for left+1 < n && arr[left] <= arr[left+1] {
        left++
    }
    
    // If the entire array is already sorted
    if left == n-1 {
        return 0
    }
    
    // Step 2: Find the longest non-decreasing suffix
    right := n - 1
    for right > 0 && arr[right-1] <= arr[right] {
        right--
    }
    
    // Step 3: Find the minimum length to remove by comparing prefix and suffix
    result := min(n-left-1, right)
    
    // Step 4: Use two pointers to find the smallest middle part to remove
    i, j := 0, right
    for i <= left && j < n {
        if arr[i] <= arr[j] {
            result = min(result, j-i-1)
            i++
        } else {
            j++
        }
    }
    
    return result
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```

---

# Step-by-Step Detailed Explanation

Each step involves identifying portions of the array that are already sorted and strategically merging them to minimize the middle section that needs removal. This two-pointer technique ensures we find the optimal solution efficiently.

---

![upvote_cat.png](./images/2.png)
