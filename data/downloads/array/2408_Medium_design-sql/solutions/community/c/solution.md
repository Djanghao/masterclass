# Do nothing in deleteRow

**Author:** votrubac
**Votes:** 8
**Link:** [https://leetcode.com/problems/design-sql/solutions/2578202/](https://leetcode.com/problems/design-sql/solutions/2578202/)

---

The expected behavior would change if we do nothing inside `deleteRow`. It simplifies the implementation quite a bit.

**C++**
```cpp
unordered_map<string, vector<vector<string>>> m;
void insertRow(string name, vector<string> row) {
    m[name].push_back(row);
}
void deleteRow(string name, int rowId) {}
string selectCell(string name, int rowId, int columnId) {
    return m[name][rowId - 1][columnId - 1];
}
```