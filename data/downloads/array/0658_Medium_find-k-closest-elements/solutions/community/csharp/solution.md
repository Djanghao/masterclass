# C# 98% faster Solution with TC : Log(n)+k

**Author:** anujakklk
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/2652391/](https://leetcode.com/problems/find-k-closest-elements/solutions/2652391/)

---

# Intuition
Find the most closest element to 'x' in the given array using binary search and then find for the right position of start index of the result subarray of size 'k'


# Complexity
- Time complexity: O(Log(n)+k)

- Space complexity: O(1)

# Code
```
public class Solution {
    public IList<int> FindClosestElements(int[] arr, int k, int x) {
        int mid = findNumIdxBinarySearch(arr, x);
            int left = Math.Max(0, mid - k);
            int right = Math.Min(arr.Length - 1, mid + k);
            while (right - left >= k)
            {
                if (Math.Abs(arr[left] - x) <= Math.Abs(arr[right] - x))
                {
                    right--;
                }
                else if (Math.Abs(arr[right] - x) < Math.Abs(arr[left] - x))
                {
                    left++;
                }
            }
            return arr[left..(right + 1)];
        }
        public int findNumIdxBinarySearch(int[] arr, int target)
        {
            int start = 0, end = arr.Length - 1, mid = 0;
            while (start <= end)
            {
                mid = start + (end - start) / 2;
                if (arr[mid] == target) { return mid; }
                if (arr[mid] > target) { end = mid - 1; }
                else { start = mid + 1; }
            }
            return mid;
    }
}
```