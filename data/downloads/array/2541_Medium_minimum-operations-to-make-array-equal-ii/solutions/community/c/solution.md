# Greedy

**Author:** votrubac
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082588/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-ii/solutions/3082588/)

---

If `n1[i] < n2[i]`, we need to increase it using `n2[i] - n1[i]) / k` operations. Otherwise, we need to decrease it.

We sum the number of `inc` and `dec` operations. 

If the number of both operations is the same, we can make the array equal using `inc` operations.

**C++**
```cpp
long long minOperations(vector<int>& n1, vector<int>& n2, int k) {
    long long inc = 0, dec = 0;
    for (int i = 0; i < n1.size(); ++i)
        if (n1[i] != n2[i]) {
            if (k == 0 || abs(n1[i] - n2[i]) % k != 0)
                return -1;
            inc += max(0, (n2[i] - n1[i]) / k);
            dec += max(0, (n1[i] - n2[i]) / k);
        }
    return inc != dec ? -1 : inc;
}
```