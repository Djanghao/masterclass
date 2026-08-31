# O(n * n)

**Author:** votrubac
**Votes:** 68
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/1329149/](https://leetcode.com/problems/count-square-sum-triples/solutions/1329149/)

---

First, we mark all `i * i` in the `squares` array. We then loop `i` and `j` and check if the sum of their squares is in the `squares` array.

Note that the limit of the inner loop is to make sure that `i * i + j * j` won't exceed `n * n`. As another optimization, we run the inner loop from `i` (not from `0`), and we add 2 when we fing a matching triplet (one for {i, j}, and another - for {j, i}).

**C++**
```cpp
int countTriples(int n) {
    vector<bool> squares(n * n + 1);
    for (int i = 1; i <= n; ++i)
        squares[i * i] = true;
    int res = 0;
    for (int i = 1; i <= n; ++i)
        for (int j = i; i * i + j * j <= n * n; ++j)
            res += squares[i * i + j * j] * 2;
    return res;
}
```