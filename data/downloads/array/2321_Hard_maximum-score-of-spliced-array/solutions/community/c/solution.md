# C++ - Quick Kadane Solution - O(N)

**Author:** geekykant
**Votes:** 29
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198382/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2198382/)

---

**Kadane Solution**
* We basically check for the maximum subarray `running sum` difference of first array compared to second array so as to swap.

```cpp
int score(vector<int>& a, vector<int>& b) {
    int runningSum = 0, maxi = 0;
    int sum = accumulate(a.begin(), a.end(), 0);

    for (int i = 0; i < a.size(); i++) {
        runningSum += b[i] - a[i];
        if (runningSum < 0)
            runningSum = 0;
        maxi = max(maxi, runningSum);
    }

    return sum + maxi;
}

int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {
    return max(score(nums1, nums2), score(nums2, nums1));
}
```