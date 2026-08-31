# C#, simple solution using binary search

**Author:** edevyatkin
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/548013/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/548013/)

---

```
public class Solution {
    public int FindTheDistanceValue(int[] arr1, int[] arr2, int d) {
        Array.Sort(arr2);
        int result = 0;
        foreach (int x in arr1) {
            int index = ClosestBinarySearch(arr2, x);
            if (Math.Abs(x - arr2[index]) > d)
                result++;
        }
        return result;
    }
    
    private int ClosestBinarySearch(int[] arr, int x) {
        int i = 0;
        int j = arr.Length - 1;
        while (i <= j) {
            int mid = i + (j - i) / 2;
            if (arr[mid] > x)
                j = mid - 1;
            else if (arr[mid] < x)
                i = mid + 1;
            else
                return mid;
        }
        if (j < 0)
            return i;
        if (i == arr.Length)
            return j;
        return Math.Abs(arr[i] - x) < Math.Abs(arr[j] - x) ? i : j;
    }
}
```