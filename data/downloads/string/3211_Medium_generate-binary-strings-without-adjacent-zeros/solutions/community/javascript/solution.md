# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** deleted_user
**Votes:** 2
**Link:** [https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431803/](https://leetcode.com/problems/generate-binary-strings-without-adjacent-zeros/solutions/5431803/)

---

```Explanation []
authorslog.vercel.app/blog/gyhUu8Bs9g
```

# Code

```cpp []
class Solution {
public:
    vector<string> validStrings(int n) {
        vector<string> res = {"0", "1"};
        vector<string> tmp;
        
        for (int i = 1; i < n; ++i) {
            for (string x : res) {
                tmp.push_back(x + "1");
                if (x.back() == '1') tmp.push_back(x + "0");
            }
            res = tmp;
            tmp.clear();
        }
        
        return res;
    }
};
```

```python []
class Solution:
    def validStrings(self, n: int) -> List[str]:
        res = ["0", "1"]
        tmp = []
        
        for i in range(1, n):
            for x in res:
                tmp.append(x + "1")
                if x.endswith("1"):
                    tmp.append(x + "0")
            
            res, tmp = tmp, res
            tmp.clear()
        
        return res
```

```java []
class Solution {
    public List<String> validStrings(int n) {
        List<String> res = new ArrayList<>();
        res.add("0");
        res.add("1");
        List<String> tmp = new ArrayList<>();
        
        for (int i = 1; i < n; ++i) {
            for (String x : res) {
                tmp.add(x + "1");
                if (x.endsWith("1")) {
                    tmp.add(x + "0");
                }
            }
            List<String> temp = res;
            res = tmp;
            tmp = temp;
            tmp.clear();
        }
        
        return res;
    }
}
```

```javascript []
/**
 * @param {number} n
 * @return {string[]}
 */
var validStrings = function (n) {
  var res = ["0", "1"];
  var tmp = [];
  for (var i = 1; i < n; ++i) {
    for (var x of res) {
      tmp.push(x + "1")
      if (x.endsWith("1")) tmp.push(x + "0");
    }
    [res, tmp] = [tmp, res];
    tmp.length = 0;
  }
  return res;
};
```