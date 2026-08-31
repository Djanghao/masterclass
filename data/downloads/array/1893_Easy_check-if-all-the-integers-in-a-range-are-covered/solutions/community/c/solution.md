# Line Sweep O(n + m)

**Author:** votrubac
**Votes:** 88
**Link:** [https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/1267923/](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered/solutions/1267923/)

---

The range is this problem is limited to 50, so it did not matter much. But with larger `n` and more ranges, we will need a linear line sweep solution.


**C++**
```cpp
bool isCovered(vector<vector<int>>& ranges, int left, int right) {
    int line[52] = {};
    for (auto &r : ranges) {
        line[r[0]] += 1;
        line[r[1] + 1] -= 1;
    }
    for (int i = 1, overlaps = 0; i <= right; ++i) {
        overlaps += line[i];
        if (i >= left && overlaps == 0)
            return false;
    }
    return true;
}
```
**Java**
```java
public boolean isCovered(int[][] ranges, int left, int right) {
    int[] line = new int[52];
    for (var r : ranges) {
        line[r[0]] += 1;
        line[r[1] + 1] -= 1;
    }
    for (int i = 1, overlaps = 0; i <= right; ++i) {
        overlaps += line[i];
        if (i >= left && overlaps == 0)
            return false;
    }
    return true;
}
```
**Complexity Analysis**
- Time: O(n + m), where `m` is the number of ranges.
- Memory: (n)