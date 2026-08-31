# [Java/C++/Python] Bottom Up and Follow Up

**Author:** lee215
**Votes:** 78
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3494915/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3494915/)

---

# Solution: Bottom Up
Bottom up iterate the whole tree.
For each node `i`, compare its two children `left` and `right`.
The smaller child needs to catch up the bigger child,
so we increment `res += abs(A[left] - A[right])`,
then we update `A[i] += max(A[left], A[right]`,
and `A[i]` present minimum cost from node `i` to any leaf.

We continue iterate the whole tree and finally return result `res`
<br>

# **Complexity**
Time `O(n)`
Space `O(1)`

Actually space `O(n)`,
since needs to save result for each node,
I overwrite the input in the solutions.
DFS recursion requires only `O(logn)` space.
<br>

**Java**
```java
    public int minIncrements(int n, int[] A) {
        int res = 0;
        for (int i = n / 2 - 1; i >= 0; --i) {
            int l = i * 2 + 1, r = i * 2 + 2;
            res += Math.abs(A[l] - A[r]);
            A[i] += Math.max(A[l], A[r]);
        }
        return res;
    }
```

**C++**
```cpp
    int minIncrements(int n, vector<int>& A) {
        int res = 0;
        for (int i = n / 2 - 1; i >= 0; --i) {
            int l = i * 2 + 1, r = i * 2 + 2;
            res += abs(A[l] - A[r]);
            A[i] += max(A[l], A[r]);
        }
        return res;
    }
```

**Python**
```py
    def minIncrements(self, n: int, A: List[int]) -> int:
        res = 0
        for i in range(n // 2 - 1, -1, -1):
            l, r = i * 2 + 1, i * 2 + 2
            res += abs(A[l] - A[r])
            A[i] += max(A[l], A[r])
        return res
```
<br>


# **Follow up**
You are allowed to both **increment** or **decrement**
the cost of any node by 1 any number of times.
What the result now?

In the previous,
we only record the lower bound path value of each node,
now it will be a range.
If left path cost is 5,
and path cost is 10,
then we can make them equal in `[5, 10]`.

If left path cost is in range `[2,4]`,
and path cost is in range `[10, 15]`,
then we can make them equal in range `[4, 10]`,
extra steps is `10 - 4 = 6`


If left path cost is `[2, 10]`,
and path cost is `[4, 15]`,
then we can make them equal in `[4, 10]`,
no extra steps.

