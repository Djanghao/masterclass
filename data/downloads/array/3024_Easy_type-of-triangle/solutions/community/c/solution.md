# Sort

**Author:** votrubac
**Votes:** 12
**Link:** [https://leetcode.com/problems/type-of-triangle/solutions/4671757/](https://leetcode.com/problems/type-of-triangle/solutions/4671757/)

---

We sort the sides first to simplify the logic.

**C++**
```cpp
string triangleType(vector<int>& n) {
    sort(begin(n), end(n));
    if (n[2] >= n[0] + n[1])
        return "none";
    return n[0] == n[2] ? "equilateral" : n[0] == n[1] || n[1] == n[2] ? "isosceles" : "scalene";
}
```