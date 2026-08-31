# LIS in Disguise

**Author:** votrubac
**Votes:** 96
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1634969/](https://leetcode.com/problems/minimum-operations-to-make-the-array-k-increasing/solutions/1634969/)

---

We have `k` independent subarrays in our array, and we need to make those subarrays non-decreasing.

For each subarray, we need to find the longest non-decreasing subsequence. We keep numbers in that subsequence as-is, and change the rest. We can use the approach from [300. Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/).

Because `n` is quite large, a quadratic solution would be too slow. So, we should use the O(n log n) solution: monostack with binary search.

**Python 3**
```python
class Solution:       
    def kIncreasing(self, arr: List[int], k: int) -> int:
        def LNDS(arr: List[int]) -> int:
            mono = []
            for n in arr:
                if not mono or mono[-1] <= n:
                    mono.append(n)
                else:
                    mono[bisect_right(mono, n)] = n
            return len(mono)         
        return len(arr) - sum(LNDS(arr[i::k]) for i in range(k))
```

**Java**
We need to implement `upperBound` by hand, because `binarySearch` in Java is not guaranteed to return the smallest index in case of duplicates.

```java
public int kIncreasing(int[] arr, int k) {
    int longest = 0;
    for (int i = 0; i < k; ++i) {
        List<Integer> mono = new ArrayList<>();
        for (int j = i; j < arr.length; j += k)
            if (mono.isEmpty() || mono.get(mono.size() - 1) <= arr[j])
                mono.add(arr[j]);
            else
                mono.set(upperBound(mono, arr[j]), arr[j]);
        longest += mono.size();
    }
    return arr.length - longest;
}
private int upperBound(List<Integer> mono, int val) {
    int l = 0, r = mono.size() - 1;
    while (l < r) {
        int m = (l + r) / 2;
        if (mono.get(m) <= val)
            l = m + 1;
        else
            r = m;
    }
    return l;
}
```

**C++**
```cpp
int kIncreasing(vector<int>& arr, int k) {
    int longest = 0;
    for (int i = 0; i < k; ++i) {
        vector<int> mono;
        for (int j = i; j < arr.size(); j += k)
            if (mono.empty() || mono.back() <= arr[j])
                mono.push_back(arr[j]);
            else
                *upper_bound(begin(mono), end(mono), arr[j]) = arr[j];
        longest += mono.size();
    }
    return arr.size() - longest;
}
```