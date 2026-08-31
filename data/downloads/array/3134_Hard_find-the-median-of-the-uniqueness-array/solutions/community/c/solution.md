# [Java/C++/Python] Binary Search + Sliding Window

**Author:** lee215
**Votes:** 67
**Link:** [https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5081935/](https://leetcode.com/problems/find-the-median-of-the-uniqueness-array/solutions/5081935/)

---

# **Need to Know**
For sliding window, you can learn it from [992. Subarrays with K Different Integers(]https://leetcode.com/problems/subarrays-with-k-different-integers/discuss/523136/JavaC%2B%2BPython-Sliding-Window).

# **Explanation**
`atmost(k)` is sliding window algo,
to findout the number of subarray with at most `k` different numbers.

There are `n * (n + 1) // 2` subarrays in total,
We can binary search the smallest `k` that statify
`atmost(k) >= total - atmost(k)`,
then `k` in the median based on the definition.

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
class Solution {
    public int medianOfUniquenessArray(int[] A) {
        int n = A.length, left = 1, right = n;
        long total = (long) n * (n + 1) / 2;
        while (left < right) {
            int k = (left + right) / 2;
            if (atmost(A, k) * 2 >= total) {
                right = k;
            } else {
                left = k + 1;
            }
        }
        return left;
    }

    private long atmost(int[] A, int k) {
        long res = 0;
        Map<Integer, Integer> count = new HashMap<>();
        int i = 0;
        for (int j = 0; j < A.length; j++) {
            count.put(A[j], count.getOrDefault(A[j], 0) + 1);
            while (count.size() > k) {
                count.put(A[i], count.get(A[i]) - 1);
                if (count.get(A[i]) == 0) {
                    count.remove(A[i]);
                }
                i++;
            }
            res += j - i + 1;
        }
        return res;
    }
}
```
**C++**
```cpp
    int medianOfUniquenessArray(vector<int>& A) {
        int n = A.size();
        long long total = (long long) n * (n + 1) / 2;

        auto atmost = [&](int k) {
            long long res = 0;
            unordered_map<int, int> count;
            for (int i = 0, j = 0; j < n; j++) {
                count[A[j]]++;
                while (count.size() > k) {
                    if (--count[A[i]] == 0)
                        count.erase(A[i]);
                    i++;
                }
                res += j - i + 1;
            }
            return res;
        };

        int left = 1, right = unordered_set<int>(A.begin(), A.end()).size();
        while (left < right) {
            int k = (left + right) / 2;
            if (atmost(k) * 2 >= total)
                right = k;
            else
                left = k + 1;
        }
        return left;
    }
```
**Python**
```py
    def medianOfUniquenessArray(self, A: List[int]) -> int:
        n = len(A)
        total = n * (n + 1) // 2

        def atmost(k):
            res = 0
            count = Counter()
            i = 0
            for j in range(n):
                count[A[j]] += 1
                while len(count) > k:
                    count[A[i]] -= 1
                    if count[A[i]] == 0:
                        del count[A[i]]
                    i += 1
                res += j - i + 1
            return res


        left, right = 1, len(set(A))
        while left < right:
            k = (left + right) // 2
            if atmost(k) * 2 >= total:
                right = k
            else:
                left = k + 1
        return left
```
