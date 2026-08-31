# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 42
**Link:** [https://leetcode.com/problems/alternating-groups-ii/solutions/5428918/](https://leetcode.com/problems/alternating-groups-ii/solutions/5428918/)

---

```Explanation []
authorslog.vercel.app/blog/CB5AJHUJFs
```

# Code

```cpp []
class Solution {
public:
    int numberOfAlternatingGroups(vector<int>& colors, int k) {
        for (int i = 0; i < k - 1; ++i) colors.push_back(colors[i]);
        int res = 0;
        int cnt = 1;
        for (int i = 1; i < colors.size(); ++i) {
            if (colors[i] != colors[i - 1]) ++cnt;
            else cnt = 1;
            if (cnt >= k) ++res;
        }
        return res;
    }
};
```

```python []
class Solution:
    def numberOfAlternatingGroups(self, colors: List[int], k: int) -> int:
        n = len(colors)
        colors += colors[:k - 1]
        res = 0
        cnt = 1
        for i in range(1, len(colors)):
            if colors[i] != colors[i - 1]:
                cnt += 1
            else:
                cnt = 1
            if cnt >= k:
                res += 1
        return res
```

```java []
class Solution {
    public int numberOfAlternatingGroups(int[] colors, int k) {
        int n = colors.length;
        int[] extendedColors = new int[n + k - 1];
        System.arraycopy(colors, 0, extendedColors, 0, n);
        System.arraycopy(colors, 0, extendedColors, n, k - 1);
        int res = 0;
        int cnt = 1;
        for (int i = 1; i < extendedColors.length; ++i) {
            if (extendedColors[i] != extendedColors[i - 1]) ++cnt;
            else cnt = 1;
            if (cnt >= k) ++res;
        }     
        return res;
    }
}
```

```javascript []
/**
 * @param {number[]} colors
 * @param {number} k
 * @return {number}
 */
var numberOfAlternatingGroups = function (colors, k) {
    for (var i = 0; i < k - 1; ++i) colors.push(colors[i]);
    var res = 0;
    var cnt = 1;
    for (var i = 1; i < colors.length; ++i) {
        if (colors[i] !== colors[i - 1]) ++cnt;
        else cnt = 1;
        if (cnt >= k) ++res;
    }
    return res;
};
```