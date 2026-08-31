# [Java/C++/Python] Sort by Profit

**Author:** lee215
**Votes:** 97
**Link:** [https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3869920/](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/solutions/3869920/)

---

# **Intuition**
Sort `items` by decresed `profiti`,
and we take `k` first items.
This is biggest `total_profit` we can have.
<br>

# **Explanation**
Continue to iterate the remaining `n - k` items.
We can try to take them,
if this is a new `category` and not in `seen` set.

But we already have `k` items,
so we replace one item with smallest `profit`
which has a duplicate `category`.

We continue doing this,
until every category has no two items.

Finally return the max result.
<br>

# **Complexity**
Time `O(nlogn)`
Space `O(n)`
<br>

**Java**
```java
    public long findMaximumElegance(int[][] A, int k) {
        Arrays.sort(A, (a, b) -> b[0] - a[0]);
        long res = 0, cur = 0;
        List<Integer> dup = new ArrayList<>();
        Set<Integer> seen = new HashSet<>();
        for (int i = 0; i < A.length; ++i) {
            if (i < k) {
                if (seen.contains(A[i][1])) {
                    dup.add(A[i][0]);
                }
                cur += A[i][0];
            } else if (!seen.contains(A[i][1])) {
                if (dup.isEmpty()) break;
                cur += A[i][0] - dup.remove(dup.size() - 1);
            }
            seen.add(A[i][1]);
            res = Math.max(res, cur + 1L * seen.size() * seen.size());
        }
        return res;
    }
```
**C++**
```cpp
    long long findMaximumElegance(vector<vector<int>>& A, int k) {
        sort(A.begin(), A.end(), [](const vector<int>& a, const vector<int>& b) {
            return a[0] > b[0];
        });
        long long res = 0, cur = 0;
        vector<int> dup;
        unordered_set<int> seen;
        for (int i = 0; i < A.size(); ++i) {
            if (i < k) {
                if (seen.count(A[i][1])) {
                    dup.push_back(A[i][0]);
                }
                cur += A[i][0];
            } else if (seen.find(A[i][1]) == seen.end()) {
                if (dup.empty()) break;
                cur += A[i][0] - dup.back();
                dup.pop_back();
            }
            seen.insert(A[i][1]);
            res = fmax(res, cur + 1L * seen.size() * seen.size());
        }
        return res;
    }
```

**Python**
```py
    def findMaximumElegance(self, items: List[List[int]], k: int) -> int:
        items = sorted(items, key=lambda v: -v[0])
        res = cur = 0
        A = []
        seen = set()
        for i, (p, c) in enumerate(items):
            if i < k:
                if c in seen:
                    A.append(p)
                cur += p
            elif c not in seen:
                if not A: break
                cur += p - A.pop()
            seen.add(c)
            res = max(res, cur + len(seen) * len(seen))
        return res
```
