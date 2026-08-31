# [Java/Python 3] Simple code w/ analysis.

**Author:** rock
**Votes:** 45
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1823819/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/1823819/)

---



```java
    public List<String> cellsInRange(String s) {
        char c1 = s.charAt(0), c2 = s.charAt(3);
        char r1 = s.charAt(1), r2 = s.charAt(4);
        List<String> cells = new ArrayList<>();
        for (char c = c1; c <= c2; ++c) {
            for (char r = r1; r <= r2; ++r) {
                cells.add("" + c + r);
            }
        }
        return cells;
    }
```
```python
    def cellsInRange(self, s: str) -> List[str]:
        c1, c2 = ord(s[0]), ord(s[3])
        r1, r2 = int(s[1]), int(s[4])
        return [chr(c) + str(r) for c in range(c1, c2 + 1) for r in range(r1, r2 + 1)]
```
Python 3 Two liner: credit to **@stefan4trivia**:
```python
def cellsInRange(self, s: str) -> List[str]:
    c1, r1, _, c2, r2 = map(ord, s)
    return [chr(c) + chr(r) for c in range(c1, c2 + 1) for r in range(r1, r2 + 1)]
```
**Analysis:**

Time: `O((c2 - c1 + 1) * (r2 - r1 + 1))`, space: `O(1)` - excluding return space.