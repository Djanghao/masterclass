# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473199/](https://leetcode.com/problems/minimum-cost-for-cutting-cake-i/solutions/5473199/)

---

```Explanation []
authorslog.vercel.app/blog/DpdfUnckH4
```

# Code

```cpp []
class Solution {
public:
    int minimumCost(int m, int n, vector<int>& hCut, vector<int>& vCut) {
        sort(hCut.begin(), hCut.end(), greater<int>());
        sort(vCut.begin(), vCut.end(), greater<int>());

        int i1 = 0, i2 = 0;
        int res = 0;

        while (i1 < m - 1 && i2 < n - 1) {
            if (hCut[i1] > vCut[i2]) res += hCut[i1++] * (i2 + 1);
            else res += vCut[i2++] * (i1 + 1);
        }

        while (i1 < m - 1) res += hCut[i1++] * (i2 + 1);
        while (i2 < n - 1) res += vCut[i2++] * (i1 + 1);

        return res;
    }
};
```

```python []
class Solution:
    def minimumCost(self, m: int, n: int, hCut: List[int], vCut: List[int]) -> int:
        hCut.sort()
        vCut.sort()

        i1, i2 = 0, 0
        res = 0

        while i1 < m - 1 and i2 < n - 1:
            if hCut[i1] > vCut[i2]:
                res += hCut[i1] * (i2 + 1)
                i1 += 1
            else:
                res += vCut[i2] * (i1 + 1)
                i2 += 1

        while i1 < m - 1:
            res += hCut[i1] * (i2 + 1)
            i1 += 1

        while i2 < n - 1:
            res += vCut[i2] * (i1 + 1)
            i2 += 1

        return res
```

```java []
class Solution {
    public int minimumCost(int m, int n, int[] hCut, int[] vCut) {
        Arrays.sort(hCut);
        Arrays.sort(vCut);

        int i1 = 0, i2 = 0;
        int res = 0;

        while (i1 < m - 1 && i2 < n - 1) {
            if (hCut[i1] > vCut[i2]) res += (long) hCut[i1++] * (i2 + 1);
            else res += (long) vCut[i2++] * (i1 + 1);
        }

        while (i1 < m - 1) res += hCut[i1++] * (i2 + 1);
        while (i2 < n - 1) res += vCut[i2++] * (i1 + 1);

        return res;
    }
}
```

```javascript []
var minimumCost = function (m, n, hCut, vCut) {
  hCut.sort((a, b) => b - a);
  vCut.sort((a, b) => b - a);

  var i1 = 0;
  var i2 = 0;
  var res = 0;

  while (i1 < m - 1 && i2 < n - 1) {
    if (hCut[i1] > vCut[i2]) res += hCut[i1++] * (i2 + 1);
    else res += vCut[i2++] * (i1 + 1);
  }
  while (i1 < m - 1) res += hCut[i1++] * (i2 + 1);
  while (i2 < n - 1) res += vCut[i2++] * (i1 + 1);

  return res;
};
```