# [Java/C++/Python] Pow of 2

**Author:** lee215
**Votes:** 99
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3201897/](https://leetcode.com/problems/minimum-impossible-or/solutions/3201897/)

---

# **Intuition**
If 1 not in A, we return 1.
If 2 not in A, we return 2.
<br>

# **Explanation**
If 1 not in `A`,
we return 1,
otherwise we can have x = 1.

If 2 not in `A`,
we return 2.
otherwise we can have x = 2.

Since we can have x = 1 and x = 2,
then we can have x = 1 | 2 = 3.

If 4 not in `A`,
we return 4,
otherwise we have x = 4

Since we can have x = 1 and x = 4, then we can have x = 1 | 4 = 5.
Since we can have x = 2 and x = 4, then we can have x = 2 | 4 = 6.
Since we can have x = 1,2,4, then we can have x = 1 | 2 | 4 = 7.

So we can find the rule here,
find out the minimum pow of 2,
which is not in `A`.

The process of prove is same as above.
<br>

# **Complexity**
Time `O(32n)`
Space `O(32n)`
<br>

**Java**
```java
    public int minImpossibleOR(int[] A) {
        Set<Integer> s = new HashSet<>();
        for (int a : A)
            s.add(a);
        int a = 1;
        while (s.contains(a))
            a <<= 1;
        return a;
    }
```

**C++**
```cpp
    int minImpossibleOR(vector<int>& A) {
        unordered_set<int> s(A.begin(), A.end());
        int a = 1;
        while (s.count(a))
            a <<= 1;
        return a;
    }
```

**Python**
```py
    def minImpossibleOR(self, A):
        A = set(A)
        return next(1 << i for i in range(32) if (1 << i) not in A)
```
