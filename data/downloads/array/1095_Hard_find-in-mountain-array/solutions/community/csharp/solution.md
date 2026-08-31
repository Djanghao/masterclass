# C# | Runtime beats 100.00%, Memory beats 69.57% [EXPLAINED]

**Author:** r9n
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-in-mountain-array/solutions/5795854/](https://leetcode.com/problems/find-in-mountain-array/solutions/5795854/)

---

# Intuition
I have to find a target number in a mountain array, which is an array that increases to a peak and then decreases. The key here is that the target could either be in the increasing or decreasing part of the array. So, I need to first find the peak and then use binary search in both the ascending and descending parts to locate the target efficiently.

# Approach
Find the peak: I perform a binary search to locate the peak element, where the array switches from increasing to decreasing.

Search both sides: Once I have the peak, I use binary search in the left (increasing) part of the array. If the target isn\u2019t found there, I search the right (decreasing) part.

# Complexity
- Time complexity:
The peak search is O(log n), and each binary search is also O(log n). So the total time complexity is O(log n).

- Space complexity:
The space complexity is O(1) because we only use a few variables, no extra space.

# Code
```csharp []
class Solution {
    // Main function to find the target in the Mountain Array
    public int FindInMountainArray(int target, MountainArray mountainArr) {
        int peak = FindPeak(mountainArr);  // Find the peak index
        int result = BinarySearch(mountainArr, target, 0, peak, false);  // Search in ascending part
        return result != -1 ? result : BinarySearch(mountainArr, target, peak + 1, mountainArr.Length() - 1, true); // If not found, search in descending part
    }

    // Binary search with the option for ascending or descending order
    private int BinarySearch(MountainArray arr, int target, int start, int end, bool isDesc) {
        while (start <= end) {
            int mid = (start + end) / 2;
            int midVal = arr.Get(mid);
            if (midVal == target) return mid;
            if (isDesc ? midVal > target : midVal < target) start = mid + 1;
            else end = mid - 1;
        }
        return -1; // Target not found
    }

    // Function to find the peak index using binary search
    private int FindPeak(MountainArray arr) {
        int start = 0, end = arr.Length() - 1;
        while (start < end) {
            int mid = (start + end) / 2;
            if (arr.Get(mid) < arr.Get(mid + 1)) start = mid + 1;
            else end = mid;
        }
        return start; // Peak index
    }
}

```