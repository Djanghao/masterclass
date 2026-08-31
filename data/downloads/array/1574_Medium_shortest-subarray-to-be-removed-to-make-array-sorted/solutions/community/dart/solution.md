# 🔥SIMPILL💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6088966/](https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/solutions/6088966/)

---



## Intuition
The problem asks us to find the shortest subarray that can be removed such that the remaining array is sorted in non-decreasing order. The key insight is to consider the sorted left and right parts of the array and then determine how they can be connected.

---

## Approach
1. Find the longest non-decreasing subarray from the left (`left`) and the longest non-decreasing subarray from the right (`right`).
2. If the entire array is already sorted, return `0`.
3. Use a two-pointer technique to determine the minimum length of the subarray that can be removed:
   - One pointer starts at the end of the `left` subarray.
   - Another pointer starts at the beginning of the `right` subarray.
   - Check the possibility of connecting the `left` and `right` while minimizing the length of the subarray removed.
4. Return the minimum length of the subarray to remove.

---

## Complexity
- **Time Complexity**: \\(O(n)\\)  
   Traversing the array to find `left` and `right` boundaries takes \\(O(n)\\). The two-pointer approach also takes \\(O(n)\\), resulting in an overall time complexity of \\(O(n)\\).
- **Space Complexity**: \\(O(1)\\)  
   The solution uses a constant amount of extra space.

---


```dart []
class Solution {
  int findLengthOfShortestSubarray(List<int> arr) {
    int n = arr.length;
    int left = 0;

    // Find the left sorted part
    while (left < n - 1 && arr[left] <= arr[left + 1]) left++;
    if (left == n - 1) return 0;

    int right = n - 1;

    // Find the right sorted part
    while (right > 0 && arr[right - 1] <= arr[right]) right--;

    // Case 1: Remove all elements between left and right
    int result = min(n - left - 1, right);

    // Case 2: Merge left and right parts
    int start = 0, end = right;
    while (start <= left && end < n) {
      if (arr[start] <= arr[end]) {
        result = min(result, end - start - 1);
        start++;
      } else {
        end++;
      }
    }
    return result;
  }
}
```


```java []
class Solution {
    public int findLengthOfShortestSubarray(int[] arr) {
        int n = arr.length;
        int left = 0;

        while (left < n - 1 && arr[left] <= arr[left + 1]) left++;
        if (left == n - 1) return 0;

        int right = n - 1;
        while (right > 0 && arr[right - 1] <= arr[right]) right--;

        int result = Math.min(n - left - 1, right);

        int start = 0, end = right;
        while (start <= left && end < n) {
            if (arr[start] <= arr[end]) {
                result = Math.min(result, end - start - 1);
                start++;
            } else {
                end++;
            }
        }
        return result;
    }
}
```


```javascript []
var findLengthOfShortestSubarray = function (arr) {
    let n = arr.length;
    let left = 0;

    while (left < n - 1 && arr[left] <= arr[left + 1]) left++;
    if (left === n - 1) return 0;

    let right = n - 1;
    while (right > 0 && arr[right - 1] <= arr[right]) right--;

    let result = Math.min(n - left - 1, right);

    let start = 0, end = right;
    while (start <= left && end < n) {
        if (arr[start] <= arr[end]) {
            result = Math.min(result, end - start - 1);
            start++;
        } else {
            end++;
        }
    }
    return result;
};
```


```python []
class Solution:
    def findLengthOfShortestSubarray(self, arr):
        n = len(arr)
        left = 0

        while left < n - 1 and arr[left] <= arr[left + 1]:
            left += 1
        if left == n - 1:
            return 0

        right = n - 1
        while right > 0 and arr[right - 1] <= arr[right]:
            right -= 1

        result = min(n - left - 1, right)

        start, end = 0, right
        while start <= left and end < n:
            if arr[start] <= arr[end]:
                result = min(result, end - start - 1)
                start += 1
            else:
                end += 1
        return result
```


```cpp []
class Solution {
public:
    int findLengthOfShortestSubarray(vector<int>& arr) {
        int n = arr.size();
        int left = 0;

        while (left < n - 1 && arr[left] <= arr[left + 1]) left++;
        if (left == n - 1) return 0;

        int right = n - 1;
        while (right > 0 && arr[right - 1] <= arr[right]) right--;

        int result = min(n - left - 1, right);

        int start = 0, end = right;
        while (start <= left && end < n) {
            if (arr[start] <= arr[end]) {
                result = min(result, end - start - 1);
                start++;
            } else {
                end++;
            }
        }
        return result;
    }
};
```


```go []
func findLengthOfShortestSubarray(arr []int) int {
    n := len(arr)
    left := 0

    for left < n-1 && arr[left] <= arr[left+1] {
        left++
    }
    if left == n-1 {
        return 0
    }

    right := n - 1
    for right > 0 && arr[right-1] <= arr[right] {
        right--
    }

    result := min(n-left-1, right)

    start, end := 0, right
    for start <= left && end < n {
        if arr[start] <= arr[end] {
            result = min(result, end-start-1)
            start++
        } else {
            end++
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

![image.png](./images/0.png) {:style='width:250px'}