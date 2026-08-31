# 🔥 [VIDEO] Finding the Peak of a Mountain Array: Binary Search to the Rescue! 🔥

**Author:** vanAmsen
**Votes:** 9
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3811906/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3811906/)

---

# Intuition
When first approaching this problem, the main challenge is to identify the peak of the mountain in the array. Since the array is guaranteed to be a mountain array, there exists a peak. The array is sorted in ascending order until it reaches the peak and then sorted in descending order. This property of the array leads to the intuition that binary search can be applied here. 

https://youtu.be/7LA4cNhmrO4

# Approach
The approach used to solve this problem is binary search. We start by setting `left` and `right` pointers to the start and end of the array, respectively. We then enter a while loop that continues until `left` is not less than `right`. Within this loop, we calculate the middle index, `mid`, of the current subarray. 

We check if the element at `mid` is less than the element at `mid + 1`. If it is, this means that we're still in the ascending part of the array, and hence, the peak is somewhere to the right of `mid`. So, we update `left` to `mid + 1`. 

If the element at `mid` is not less than the element at `mid + 1`, it means we've crossed the peak and are now in the descending part of the array. Hence, the peak is somewhere to the left of `mid`. So, we update `right` to `mid`.

This process continues, reducing the search space by half in each iteration, until `left` is not less than `right`. At this point, `left` will be pointing to the peak of the mountain, and that's what we return.

# Complexity
- Time complexity: The time complexity for this approach is \\(O(\\log n)\\), where \\(n\\) is the length of the array. This is because with each iteration, we are effectively reducing the search space by half, which is a characteristic of binary search.
  
- Space complexity: The space complexity is \\(O(1)\\), as we are using a constant amount of space to store our variables `left`, `right`, and `mid`.

# Code
``` Python []
class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        left, right = 0, len(arr) - 1
        while left < right:
            mid = (left + right) // 2
            if arr[mid] < arr[mid + 1]:
                left = mid + 1
            else:
                right = mid
        return left
```
``` C++ []
class Solution {
public:
    int peakIndexInMountainArray(vector<int>& arr) {
        int left = 0, right = arr.size() - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < arr[mid + 1])
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
};
```
``` Java []
class Solution {
    public int peakIndexInMountainArray(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < arr[mid + 1])
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
```
``` C# []
public class Solution {
    public int PeakIndexInMountainArray(int[] arr) {
        int left = 0, right = arr.Length - 1;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] < arr[mid + 1])
                left = mid + 1;
            else
                right = mid;
        }
        return left;
    }
}
```
``` JavaScript []
var peakIndexInMountainArray = function(arr) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (arr[mid] < arr[mid + 1])
            left = mid + 1;
        else
            right = mid;
    }
    return left;
};
```