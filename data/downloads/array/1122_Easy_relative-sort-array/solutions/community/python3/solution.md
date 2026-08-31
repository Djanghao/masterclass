# [Java/Python 3] O(max(n2, N)) code, similar to 791 Custom Sort String.

**Author:** rock
**Votes:** 76
**Link:** [https://leetcode.com/problems/relative-sort-array/solutions/334570/](https://leetcode.com/problems/relative-sort-array/solutions/334570/)

---

Similar to [my solution](https://leetcode.com/problems/custom-sort-string/discuss/116615/JavaPython-3-5-ms-10-line-and-6-line-counting-solutions-w-comment) of [791. Custom Sort String](https://leetcode.com/problems/custom-sort-string/description/)


```
    public int[] relativeSortArray(int[] arr1, int[] arr2) {
        int k = 0;
        int[] cnt = new int[1001], ans = new int[arr1.length];
        for (int i : arr1)                      // Count each number in arr1.
            ++cnt[i];
        for (int i : arr2)                      // Sort the common numbers in both arrays by the order of arr2.
            while (cnt[i]-- > 0)
                ans[k++] = i;
        for (int i = 0; i < 1001; ++i)          // Sort the numbers only in arr1.
            while (cnt[i]-- > 0)
                ans[k++] = i;
        return ans;
    }
```
**Analysis:**
Time: O(max(n2, N)), space: O(N), where n2 = arr2.length, N = max(arr2).

----

**Python 3:**
```
    def relativeSortArray(self, arr1: List[int], arr2: List[int]) -> List[int]:
        ans, cnt = [], collections.Counter(arr1)         # Count each number in arr1
        for i in arr2:                                   # Sort the common numbers in both arrays by the order of arr2.
            for _ in range(cnt.pop(i)):
                ans.append(i)
        for i in range(min(arr1), max(arr1) + 1):        # Sort the numbers only in arr1.
            for _ in range(cnt.pop(i, 0)):
                ans.append(i)
        return ans
```

**Analysis:**

Time: O(max(n2, N)), space: O(n1).

The for loop in above code can be rewritten as:
```
        for i in range(min(arr1), max(arr1) + 1):
            if cnt[i]: ans.extend([i] * cnt.pop(i))      # Sort the numbers only in arr1.
```
and can also be rewritten as:
```
        ans.extend(sorted(cnt.elements()))               # Sort the numbers only in arr1.
```
However, the time will change from O(max(n2, N)) to O(n1logn1).