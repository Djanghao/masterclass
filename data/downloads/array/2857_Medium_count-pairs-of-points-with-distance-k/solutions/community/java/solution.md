# [Java/C++/Python] One Pass + Hash Map

**Author:** lee215
**Votes:** 62
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052113/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4052113/)

---

# **Intuition**
Imaging a simpler version of this quesiton:
Given an array A, find the pair that `A[i] ^ A[j] = k`.

Can you solve it?
Then the same approach for this problem.
<br>

# **Explanation**
In the base question,
we can one pass the input array `A`,
count the frequency of seen `A[i]`,
and for each `A[i]`,
find it's pair `A[i] ^ k`,
and update `res += count[A[i] ^ k]`,
then update `count[A[i]] += 1`.

Exactly same process for this problem,
though this time the xor sum is `k`.
Notice `0 <= k <= 100` is a small range,
we can enumerate the xor on `x` and `y`,
then we transform this question to the base one.
<br>

# **Complexity**
Time `O(kn)`
Space `O(n)`
<br>

**Java**
```java
    public int countPairs(List<List<Integer>> coordinates, int k) {
        Map<Integer, Map<Integer, Integer>> count = new HashMap<>();
        int res = 0;
        for (List<Integer> c : coordinates) {
            int x1 = c.get(0), y1 = c.get(1);
            for (int x = 0; x <= k; x++) {
                int x2 = x1 ^ x, y2 = y1 ^ (k - x);
                if (count.containsKey(x2) && count.get(x2).containsKey(y2))
                    res += count.get(x2).get(y2);
            }
            count.computeIfAbsent(x1, x -> new HashMap<>()).put(y1, count.get(x1).getOrDefault(y1, 0) + 1);
        }
        return res;
    }
```

**C++**
```cpp
    int countPairs(vector<vector<int>>& coordinates, int k) {
        unordered_map<int, unordered_map<int, int>> count;
        int res = 0;
        for (auto& c : coordinates) {
            for (int x = 0; x <= k; x++)
                if (count[c[0] ^ x].count(c[1] ^ (k - x)))
                    res += count[c[0] ^ x][c[1] ^ (k - x)];
            count[c[0]][c[1]]++;
        }
        return res;
    }
```

**Python**
```py
    def countPairs(self, coordinates: List[List[int]], k: int) -> int:
        count = Counter()
        res = 0
        for x1, y1 in coordinates:
            for x in range(k + 1):
                res += count[x1 ^ x, y1 ^ (k - x)]
            count[x1, y1] += 1
        return res
```
