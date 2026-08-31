# Sort and Count

**Author:** votrubac
**Votes:** 170
**Link:** [https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1253877/](https://leetcode.com/problems/reduction-operations-to-make-the-array-elements-equal/solutions/1253877/)

---

We sort the array, and go right-to-left, from largest to smallest.

If the current number is the same as the one before it, we do nothing. If the number before is different, we need to update all numbers on the right (`sz - j`).

**C++**
```cpp
int reductionOperations(vector<int>& n) {
    int res = 0, sz = n.size();
    sort(begin(n), end(n));
    for (int j = sz - 1; j > 0; --j)
        if (n[j - 1] != n[j])
            res += sz - j;
    return res;
}
```
**Java**
```java
public int reductionOperations(int[] n) {
    int res = 0, sz = n.length;
    Arrays.sort(n);
    for (int j = sz - 1; j > 0; --j)
        if (n[j - 1] != n[j])
            res += sz - j;
    return res;
}
```