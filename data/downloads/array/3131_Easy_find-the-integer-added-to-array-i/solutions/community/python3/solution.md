# Min Element

**Author:** votrubac
**Votes:** 19
**Link:** [https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082129/](https://leetcode.com/problems/find-the-integer-added-to-array-i/solutions/5082129/)

---

**Python 3**
```python
class Solution:
    def addedInteger(self, n1: List[int], n2: List[int]) -> int:
        return min(n2) - min(n1)
```
**C++**
```
int addedInteger(vector<int>& n1, vector<int>& n2) {
    return *min_element(begin(n2), end(n2)) - *min_element(begin(n1), end(n1));
}
```

**Complexity Analysis**
- Time: O(n)
- Memory: O(1)