# [Java/C++/Python] Prefix, O(n)

**Author:** lee215
**Votes:** 49
**Link:** [https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3994985/](https://leetcode.com/problems/count-of-interesting-subarrays/solutions/3994985/)

---

# **Intuition**
We don't care the value of `A[i]`,
we care if `A[i] % mod == k`.

So if `A[i] % mod == k`,
we take `A[i]` as 1,
otherwise 0.
<br>

# **Explanation**
we calculate the prefix sum `acc` of `A`,
then `acc` mean the number of `A[i] % mod == k` in `i + 1` first elements.

`count` is a hashmap,
where `count[v]` means the number of prefix array that have `acc % mod == k`.
and we initial `count[0] = 1` for empty prefix subarray.

Then we iterate `a` in `A`,
and we update prefix sum `acc`,
and update increment `res` by `count[(acc - k) % mod]`.

Finally return `res`
<br>

# **Complexity**
Time `O(n)`
Space `O(mod)`
<br>

**Java**
```java
    public long countInterestingSubarrays(List<Integer> A, int mod, int k) {
        long res = 0;
        int acc = 0;
        HashMap<Integer, Integer> map = new HashMap<>(Map.of(0, 1));
        for (int a : A) {
            acc = (acc + (a % mod == k ? 1 : 0)) % mod;
            res += map.getOrDefault((acc - k + mod) % mod, 0);
            map.put(acc, map.getOrDefault(acc, 0) + 1);
        }
        return res;
    }
```
**C++**
```cpp
    long long countInterestingSubarrays(vector<int>& A, int mod, int k) {
        long long res = 0;
        int acc = 0;
        unordered_map<int, int> count;
        count[0] = 1;
        for (int a : A) {
            acc = (acc + (a % mod == k ? 1 : 0)) % mod;
            res += count[(acc - k + mod) % mod];
            count[acc]++;
        }
        return res;
    }
```
**Python**
```py
    def countInterestingSubarrays(self, A: List[int], mod: int, k: int) -> int:
        res = acc = 0
        count = Counter({0: 1})
        for a in A:
            acc = (acc + (1 if a % mod == k else 0)) % mod
            res += count[(acc - k) % mod]
            count[acc] += 1
        return res
```