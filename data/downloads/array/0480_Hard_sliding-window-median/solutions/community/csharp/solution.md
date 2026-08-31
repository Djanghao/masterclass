# Sliding Window Median (C#)

**Author:** framebymahmud
**Votes:** 3
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/3515894/](https://leetcode.com/problems/sliding-window-median/solutions/3515894/)

---

Intuition:
The problem asks for the median of each sliding window of size k in an input array. One approach to solving this problem is to maintain a sorted list of the elements in the current window, and compute the median from this list. To slide the window, we remove the leftmost element and insert the rightmost element in its correct position in the list.

Approach:
The approach used in the code is as follows:

1. Initialize an empty list with the first k elements of the input array, sorted in increasing order.
2. Compute the median of the first window and store it in the result array.
3. Slide the window one element at a time, removing the leftmost element and inserting the rightmost element in the list in its correct position.
4. Compute the median of the current window and store it in the result array.

Complexity:
The time and space complexity of the sliding window median algorithm depend on the size of the input array and the size of the sliding window. Let n be the length of the input array and k be the size of the sliding window.

Time complexity: The time complexity of the algorithm is O(n log k), where the dominant factor is the time it takes to maintain the sorted list of size k. The insertion and removal of elements in the list take O(log k) time, and we do this n-k+1 times for each window, resulting in a total time complexity of O((n-k+1) log k).

Space complexity: The space complexity of the algorithm is O(k), which is the size of the sorted list we maintain. We also need O(n-k+1) space to store the result array, resulting in a total space complexity of O(n-k+1 + k) = O(n).

# Code
```
public class Solution {
    public double[] MedianSlidingWindow(int[] nums, int k) {
        int n = nums.Length;
        double[] res = new double[n - k + 1];
        List<int> list = new List<int>(nums.Take(k).OrderBy(x => x));
        res[0] = k % 2 == 0 ?
            ((double)list[k / 2 - 1] + (double)list[k / 2]) / 2 :
            (double)list[k / 2];
        for (int i = 1; i <= n - k; i++) {
            int left = nums[i - 1];
            int right = nums[i + k - 1];
            list.Remove(left);
            int j = list.BinarySearch(right);
            if (j < 0) j = ~j;
            list.Insert(j, right);
            res[i] = k % 2 == 0 ?
                ((double)list[k / 2 - 1] + (double)list[k / 2]) / 2 :
                (double)list[k / 2];
        }
        return res;
    }
}

```