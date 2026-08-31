# O(n) 2 pointers

**Author:** votrubac
**Votes:** 144
**Link:** [https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198709/](https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/solutions/1198709/)

---

Since our arrays are sorted, we can advance `i` while `n1[i]` is bigger than `n2[j]`, and increment `j` otherwise.

**Java**
```java
public int maxDistance(int[] n1, int[] n2) {
    int i = 0, j = 0, res = 0;
    while (i < n1.length && j < n2.length)
        if (n1[i] > n2[j])
            ++i;
        else
            res = Math.max(res, j++ - i);
    return res;
}
```
**C++**
```cpp
int maxDistance(vector<int>& n1, vector<int>& n2) {
    int i = 0, j = 0, res = 0;
    while (i < n1.size() && j < n2.size())
        if (n1[i] > n2[j])
            ++i;
        else
            res = max(res, j++ - i);
    return res;
}
```
**Python 3**
```python
class Solution:
    def maxDistance(self, n1: List[int], n2: List[int]) -> int:
        i = j = res = 0
        while i < len(n1) and j < len(n2):
            if n1[i] > n2[j]:
                i += 1
            else:
                res = max(res, j - i)
                j += 1
        return res
```