# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 6
**Link:** [https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3394861/](https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/solutions/3394861/)

---


```C# []
public class Solution {
    public IList<string> CellsInRange(string s) {
        List<string> res=new List<string>();
    for (char c = s[0]; c <= s[3]; ++c)
        for (char r = s[1]; r <= s[4]; ++r)
            res.Add($"{c}{r}");
    return res;
    }
}
```
```C++ []
class Solution {
public:
    vector<string> cellsInRange(string s) {
    vector<string> res;
    for (char c = s[0]; c <= s[3]; ++c)
        for (char r = s[1]; r <= s[4]; ++r)
            res.push_back({c, r});
    return res;
    }     
};
```

