# BIT vs. Binary Search

**Author:** votrubac
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1249860/](https://leetcode.com/problems/count-pairs-in-two-arrays/solutions/1249860/)

---

The problem condition can be rewritten as `(n1[i] - n2[i]) + (n1[j] - n2[j]) > 0`. 

We move right-to-left, and store all previous `n1[j] - n2[j]` values in a sorter order. Then, we can just search for a complement value higher than `-(n1[i] - n2[i])` to find out how many pairs on the right satisfy our criteria.

> Update: the second solution below uses a binary search, but it was a bit tricky for me to understand.

#### Binary Index Tree
Storing values in a set can provide a quick (O(log n)) insertions and search, but we need O(n) to count pairs on the right. Instead, we can use a binary index tree that can tell us how many elements are less or equal a certain value in O(log n). Then, we subtrack that number from total number of pairs on the right.

**C++**
```cpp
static constexpr int lim = 100000;
int bt[lim * 2 + 1] = {};
int bitSum(int i)
{
    int sum = 0;
    for (i = i + 1; i > 0; i -= i & (-i))
        sum += bt[i];
    return sum;
}
void bitUpdate(int n, int i, int val)
{
    for (i = i + 1; i <= n; i += i & (-i))
        bt[i] += val;
}
long long countPairs(vector<int>& n1, vector<int>& n2) {
    long res = 0;
    for (int i = n1.size() - 1, cnt = 0; i >= 0; --i, ++cnt) {
        int diff = n1[i] - n2[i];
        res += cnt - bitSum(lim - diff);
        bitUpdate(lim * 2, lim + diff, 1);
    }
    return res;
}
```
#### Binary Search
Let's subtract (the corresponding values) the second array from the first one (`n1[i] -= n2[i]`). After this, we need to find pairs like `n1[i] + n2[j] > 0`.
 
First, we can realize that we do not need to honor the `i < j` constraint, as the equation can be rewritten as `n1[j] + n2[i] > 0`. Therefore, we can sort the entire array, and for each `n1[i]`, count how many values are greater than ` -n1[i]`. We just need to make sure that we do not double-count our pairs by only considering values on the right side of `i`.

**C++**
```cpp
long long countPairs(vector<int>& n1, vector<int>& n2) {
    long res = 0;
    for (int i = 0; i < n1.size(); ++i)
        n1[i] -= n2[i];
    sort(begin(n1), end(n1));
    for (int i = 0; i < n1.size(); ++i)
        res += end(n1) - upper_bound(begin(n1) + i + 1, end(n1), -n1[i]);
    return res;
}
```