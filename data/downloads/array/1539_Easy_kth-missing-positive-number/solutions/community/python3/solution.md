# [C++, Java, Python3] 1 line O(logn)

**Author:** tojuna
**Votes:** 55
**Link:** [https://leetcode.com/problems/kth-missing-positive-number/solutions/3262163/](https://leetcode.com/problems/kth-missing-positive-number/solutions/3262163/)

---

# Intuition
* Number of missing numbers can be calculated by comparing `arr[i]` and `i`. 
* If `arr[i] = 5` and `i = 3`, `arr = [1,2,3,5]`, we can say that `arr[i] - i - 1 = 1` numbers are missing.
* After finding the index where `arr[i] - i > k`, add k to i (i + k) to find the missing number. 
* For the abovementioned example if `k = 1`, `arr[i] - i > k` at `i = 3`. 
`5 - 3 > 1`. Answer is `i + k = 3 + 1 = 4`, thus 4 is missing

# Approach
We use a binary search approach for this problem since we want time complexity to be better than O(n). Binary search over `arr` and try to find the first index where `arr[mid] - mid > k`.

# Complexity
- Time complexity: `O(logn)`

- Space complexity: `O(1)`

# Code
**Python3**:
```
def findKthPositive(self, arr: List[int], k: int) -> int:
    return bisect_right(range(len(arr)), k, key= lambda x: arr[x] - x) + k
```

*Extended version*:
```
def findKthPositive(self, arr: List[int], k: int) -> int:
    lo, hi = 0, len(arr)
    while lo < hi:
        mid = lo + (hi - lo) // 2
        if arr[mid] - mid > k: hi = mid
        else: lo = mid + 1
    return lo + k
```

**C++**:
```
int findKthPositive(vector<int>& arr, int k) {
    int lo = 0, hi = arr.size();
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] - mid > k) hi = mid;
        else lo = mid + 1;
    }
    return lo + k;
}
```

Java:
```
public int findKthPositive(int[] arr, int k) {
    int lo = 0, hi = arr.length;
    while (lo < hi) {
        int mid = lo + (hi - lo) / 2;
        if (arr[mid] - mid > k) hi = mid;
        else lo = mid + 1;
    }
    return lo + k;
}
```
