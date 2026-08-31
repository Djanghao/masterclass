# Binary Search + Sliding Window

**Author:** votrubac
**Votes:** 26
**Link:** [https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1309749/](https://leetcode.com/problems/kth-smallest-subarray-sum/solutions/1309749/)

---

We can use two pointers to calculate the number of subarrays with sum less or equal than a particular value (`floor`). This takes O(n).

Then, we use binary search to find the minimum value when the number of subarrays equals `k`. This takes log (n ^ 2) - or 2 log n - assuming the sum of all elements is n * n.

**Java**
```java
public int kthSmallestSubarraySum(int[] nums, int k) {
    int l = 1, r = 20000 * 50000, n = nums.length;
    while (l < r) {
        int m = (l + r) / 2, floor = 0;
        for (int i = 0, j = 0, sum = 0; i < n; )
            if (sum + nums[i] <= m) {
                sum += nums[i++];
                floor += i - j;
            }
            else
                sum -= nums[j++];
        if (floor < k)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```
**C++**
```cpp
int kthSmallestSubarraySum(vector<int>& nums, int k) {
    int l = 1, r = 20000 * 50000, n = nums.size();
    while (l < r) {
        int m = (l + r) / 2, floor = 0;
        for (int i = 0, j = 0, sum = 0; i < n; )
            if (sum + nums[i] <= m) {
                sum += nums[i++];
                floor += i - j;
            }
            else
                sum -= nums[j++];
        if (floor < k)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```
**Complexity Analysis**
- Time: O(n log n)
- Memory: O(1)