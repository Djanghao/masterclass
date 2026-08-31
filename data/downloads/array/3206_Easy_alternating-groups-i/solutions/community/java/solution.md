# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 7
**Link:** [https://leetcode.com/problems/alternating-groups-i/solutions/5428958/](https://leetcode.com/problems/alternating-groups-i/solutions/5428958/)

---

```Explanation []
authorslog.vercel.app/blog/k4tR9x5rgu
```

# Code

```cpp []
class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors) {
        int res = 0;
        int n = colors.size();
        for (int i = 0; i < n; ++i) {
            int pre = colors[i];
            int cur = colors[(i + 1) % n];
            int nxt = colors[(i + 2) % n];
            if (pre != cur && cur != nxt) ++res;
        }
        return res;
    }
};
```

```python []
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int]) -> int:
        res = 0
        n = len(colors)
        for i in range(n):
            pre = colors[i]
            cur = colors[(i + 1) % n]
            nxt = colors[(i + 2) % n]
            if pre != cur and cur != nxt:
                res += 1
        return res
```

```java []
class Solution {
    public int numberOfAlternatingGroups(int[] colors) {
        int res = 0;
        int n = colors.length;
        for (int i = 0; i < n; ++i) {
            int pre = colors[i];
            int cur = colors[(i + 1) % n];
            int nxt = colors[(i + 2) % n];
            if (pre != cur && cur != nxt) ++res;
        }
        return res;
    }
}
```

```javascript []
/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors) {
    var res = 0;
    var n = colors.length;
    for (var i = 0; i < colors.length; ++i) {
        var pre = colors[i];
        var cur = colors[(i + 1) % n];
        var nxt = colors[(i + 2) % n];
        if (pre !== cur && cur !== nxt) ++res;
    }
    return res;
};
```