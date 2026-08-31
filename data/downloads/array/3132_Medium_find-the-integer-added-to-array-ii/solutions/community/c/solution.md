# 2-Pass

**Author:** votrubac
**Votes:** 37
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082086/](https://leetcode.com/problems/find-the-integer-added-to-array-ii/solutions/5082086/)

---

**Intuition:** the value is either:
1. `n2[0] - n1[2]` if we remove first 2 elements, or
2. `n2[0] - n1[1]` if we remove the first element, or
3. `n2[0] - n1[0]`.

Because both arrays are sorted, the smallest value is for option 1. So, for the first two options, we match the rest of the array.

If there is a mismatch, we skip that element, incrementing `skip`. If we match the entire array and `skip < 3`, we return the value.

If we could not match the array for option 1 and option 2, the result is option 3.

**C++**
```cpp
int minimumAddedInteger(vector<int>& n1, vector<int>& n2) {
    sort(begin(n1), end(n1));
    sort(begin(n2), end(n2));
    for (int i = 2; i > 0; --i) {
        int skip = i;
        for (int j = i + 1; skip < 3 && j - skip < n2.size(); ++j)
            skip += n2[j - skip] - n1[j] != n2[0] - n1[i];
        if (skip < 3)
            return n2[0] - n1[i];
    }
    return n2[0] - n1[0];
}
```
**Complexity Analysis**
- Time: O(sort)
- Memory: O(sort)