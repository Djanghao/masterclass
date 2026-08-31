# Solution By Dare2Solve | Detailed Explanation | Clean Code

**Author:** Dare2Solve
**Votes:** 5
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5473223/](https://leetcode.com/problems/lexicographically-smallest-string-after-a-swap/solutions/5473223/)

---

```Explanation []
authorslog.vercel.app/blog/hsAf5HGauX
```

# Code

```cpp []
class Solution {
public:
    string getSmallestString(string s) {
        for (int i = 1; i < s.length(); ++i) {
            if ((s[i - 1] & 1) == (s[i] & 1) && s[i - 1] > s[i]) {
                swap(s[i], s[i - 1]);
                break;
            }
        }
        return s;
    }
};
```

```python []
class Solution:
    def getSmallestString(self, s: str) -> str:
        arr = list(s)
        for i in range(1, len(arr)):
            if (int(arr[i - 1]) & 1 == int(arr[i]) & 1) and int(arr[i - 1]) > int(arr[i]):
                arr[i], arr[i - 1] = arr[i - 1], arr[i]
                break
        return "".join(arr)
```

```java []
class Solution {
    public String getSmallestString(String s) {
        char[] arr = s.toCharArray();
        for (int i = 1; i < arr.length; ++i) {
            if ((arr[i - 1] & 1) == (arr[i] & 1) && arr[i - 1] > arr[i]) {
                char temp = arr[i];
                arr[i] = arr[i - 1];
                arr[i - 1] = temp;
                break;
            }
        }
        return new String(arr);
    }
}
```

```javascript []
var getSmallestString = function (s) {
    var arr = s.split("").map(Number);
    for (var i = 1; i < arr.length; ++i) {
        if ((arr[i - 1] & 1) === (arr[i] & 1) && arr[i - 1] > arr[i]) {
            [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
            break;
        }
    }
    return arr.join("");
};
```