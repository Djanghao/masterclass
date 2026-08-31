# 8 Lines

**Author:** ashotmuradian
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-iterator/solutions/5414573/](https://leetcode.com/problems/zigzag-iterator/solutions/5414573/)

---

```csharp
public class ZigzagIterator(IList<int> v1, IList<int> v2, int i = 0, int j = 0) {
    public bool HasNext() => i < v1.Count || j < v2.Count;
    public int Next() => (i < v1.Count, j < v2.Count) switch {
        (true, true) => i == j ? v1[i++] : v2[j++],
        (true, false) => v1[i++],
        (false, true) => v2[j++]
    };
}
```
