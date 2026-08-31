# [Java/C++/Python] One line O(1)

**Author:** lee215
**Votes:** 188
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2357789/](https://leetcode.com/problems/maximum-number-of-groups-entering-a-competition/solutions/2357789/)

---

# **Explanation**
Sort all grades,
assign 1 student to the first group,
assign 2 student to the second group...
This can satify `i`th group < `i+1`th group for both size and sum.

So we need to find out the maximum result `k` that
`1 + 2 + ... + k <= n`

Prove:
Sort groups by size,
so the first group has size at least 1
so the second group has size at least 2
`k`th group has size at least k...

So we proved the upper bound of `k` and I gave a solution to achieve it.

# **Complexity**
Time `O(sqrt(n))`
Space `O(1)`
<br>

**Java**
```java
    public int maximumGroups(int[] grades) {
        int k = 0, total = 0, n = grades.length;
        while (total + k + 1 <= n)
            total += ++k;
        return k;
    }
```

**C++**
```cpp
    int maximumGroups(vector<int>& grades) {
        int k = 0, total = 0, n = grades.size();
        while (total + k + 1 <= n)
            total += ++k;
        return k;
    }
```

**Python**
```py
    def maximumGroups(self, A: List[int]) -> int:
        n = len(A)
        k = 0
        while n >= k + 1:
            k += 1
            n -= k
        return k
```
<br>


# Solution 2: Binary Search
`1 + 2 + ... + k <= n`
`k(k + 1) / 2 <= n`
We can binary search the biggest `k` that `k(k + 1) / 2 <= n`

Time `O(log1000)`
Space `O(1)`
**Java**
```java
    public int maximumGroups(int[] A) {
        int left = 0, right = 1000, n = A.length;
        while (left < right) {
            int k = (left + right + 1) / 2;
            if (k * (k + 1) / 2 > n) {
                right = k - 1;
            } else {
                left = k;
            }
        }
        return left;
    }
```
<br>

# Solution 3: Math
`1 + 2 + ... + k <= n`
`k(k + 1) / 2 <= n`
`(k + 0.5)(k + 0.5) <= n * 2 + 0.25`
`k + 0.5 <= sqrt(n * 2 + 0.25)`
`k <= sqrt(n * 2 + 0.25) - 0.5`

Time `O(1)`
Space `O(1)`
**Java**
```java
    public int maximumGroups(int[] A) {
        return (int)(Math.sqrt(A.length * 2 + 0.25) - 0.5);
    }
```
**C++**
```cpp
    int maximumGroups(vector<int>& A) {
        return (int)(sqrt(A.size() * 2 + 0.25) - 0.5);
    }
```
**Python**
```py
    def maximumGroups(self, A: List[int]) -> int:
        return (int)(sqrt(len(A) * 2 + 0.25) - 0.5)
```
