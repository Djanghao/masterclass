# Simple 0ms , 100% faster , 3liner c++ solution

**Author:** NextThread
**Votes:** 7
**Link:** [https://leetcode.com/problems/construct-the-rectangle/solutions/1736489/](https://leetcode.com/problems/construct-the-rectangle/solutions/1736489/)

---

```
class Solution {
public:
    vector<int> constructRectangle(int area) {
        int m = sqrt(area);
        while (area % m != 0){
            m--;
        }
        return {area/m,m};
    }
};
```