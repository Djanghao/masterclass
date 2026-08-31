# [Java/C++/Python] Sieve

**Author:** lee215
**Votes:** 9
**Link:** [https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5882106/](https://leetcode.com/problems/sorted-gcd-pair-queries/solutions/5882106/)

---

# **Explanation**

1. Counting Frequencies

`cnt` counts the frequency of `A[i]`

2. Calculating GCD

Iterates through all possible numbers `a`,
from the `max(A)` down to `1`.

Count the number of multiplers of `a`,
`mul = cnt[a] + cnt[2a] + ...`

The gcd of a-multiplers, will still be a-multipler.
There will be `mul * (mul - 1) / 2` pairs.
then we exclude the count of gcd that are a-multiplers.

`gcd[a] = mul * (mul - 1) / 2 - gcd[2a] - gcd[3a] ...`

3. Prefix Sum

It calculates the prefix sum of the GCD counts.
This allows for quick lookup
of the accumulated count of GCDs
(less than or equal to a given value).

4. Binary Search

For each query `q`,
use binary search on the prefix sum.
<br>

# **Summary by gpt**
In essence, the solution avoids explicitly
generating and sorting all the GCD pairs,
which would be inefficient.

Instead, it cleverly uses frequency counting,
divisor analysis, prefix sums, and binary search
to achieve a more optimized solution.

**Upvote it to learn it!**
<br>

# **Complexity**
Time `O(mlogm + qlogm)`
Space `O(m + q)`
<br>

**Python**
```py
    def gcdValues(self, A: List[int], queries: List[int]) -> List[int]:
        m = max(A)
        cnt = Counter(A)
        gcd = [0] * (m + 1)

        for a in range(m, 0, -1):
            mul = sum(cnt[b] for b in range(a, m + 1, a))
            gcd[a] = mul * (mul - 1) // 2
            gcd[a] -= sum(gcd[b] for b in range(a * 2, m + 1, a))

        gcd = list(accumulate(gcd))
        return [bisect_right(gcd, q) for q in queries]
```

**Java**
```java
    public int[] gcdValues(int[] A, long[] queries) {
        int m = Arrays.stream(A).max().getAsInt();
        Map<Integer, Integer> cnt = new HashMap<>();
        for (int a : A) {
            cnt.put(a, cnt.getOrDefault(a, 0) + 1);
        }

        long[] gcd = new long[m + 1];
        for (int a = m; a > 0; --a) {
            long mul = 0;
            for (int b = a; b <= m; b += a) {
                mul += cnt.getOrDefault(b, 0);
            }
            gcd[a] = mul * (mul - 1) / 2;
            for (int b = a * 2; b <= m; b += a) {
                gcd[a] -= gcd[b];
            }
        }

        for (int i = 1; i <= m; ++i) {
            gcd[i] += gcd[i - 1]; // Prefix sum
        }

        int qn = queries.length, res[] = new int[qn];
        for (int i = 0; i < qn; i++) {
            res[i] = upper_bound(gcd, queries[i]); // find upper bound;
        }
        return res;
    }

    private int upper_bound(long[] arr, long target) {
        int left = 0, right = arr.length;
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] <= target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
```

**C++**
```cpp
    vector<int> gcdValues(vector<int>& A, vector<long long>& queries) {
        int m = *max_element(A.begin(), A.end());
        unordered_map<int, int> cnt;
        for (int a : A) {
            cnt[a]++;
        }

        vector<int> gcd(m + 1);
        for (int a = m; a > 0; --a) {
            long long mul = 0;
            for (int b = a; b <= m; b += a) {
                mul += cnt[b];
            }
            gcd[a] = mul * (mul - 1) / 2;
            for (int b = a * 2; b <= m; b += a) {
                gcd[a] -= gcd[b];
            }
        }

        partial_sum(gcd.begin(), gcd.end(), gcd.begin()); // prefix sum
        vector<int> res;
        for (int q : queries) {
            res.push_back(upper_bound(gcd.begin(), gcd.end(), q) - gcd.begin());
        }
        return res;
    }
```
