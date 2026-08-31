# [Java/C++/Python] max(max(A), (sum(A) + 1) / 2)

**Author:** lee215
**Votes:** 201
**Link:** [https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2261394/](https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/solutions/2261394/)

---

# **Explanation**
It's a brain-teaser.

**Necessary conditions (lower bound)**
1. `res >= max(A)`
Because each time,
one type can reduce at most 1 cup,
so the final result is bigger or equal to `max(A)`

2. `res >= ceil(sum(A) / 2)`
Because each time,
we can fill up to 2 cups,
so the final result is bigger or equal to `ceil(sum(A) / 2)`

**Sufficient considtion (realizeable)**
One strategy is to greedily fill up 2 cups with different types of water.
Each step, we pick the 2 types with the most number of cups, until there is only one kind.

**Conclusion**
The lower bound is realizable,
so it's proved as the minimum steps.
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`
<br>

**Java**
```java
    public int fillCups(int[] A) {
        int mx = 0, sum = 0;
        for(int a: A) {
            mx = Math.max(a, mx);
            sum += a;
        }
        return Math.max(mx, (sum + 1) / 2);
    }
```

**C++**
```cpp
    int fillCups(vector<int>& A) {
        int mx = 0, sum = 0;
        for(int& a: A) {
            mx = max(a, mx);
            sum += a;
        }
        return max(mx, (sum + 1) / 2);
    }
```

**Python**
```py
    def fillCups(self, A):
        return max(max(A), (sum(A) + 1) // 2)
```
