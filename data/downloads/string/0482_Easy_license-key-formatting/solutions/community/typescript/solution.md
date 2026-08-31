# Easy to understand solutions

**Author:** HendriLab
**Votes:** 0
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/6130864/](https://leetcode.com/problems/license-key-formatting/solutions/6130864/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public String licenseKeyFormatting(String s, int k) {
        s = s.toUpperCase();
        String[] temp = s.split("-");
        String sAll = String.join("", temp);

        String res = "";

        int leftOver = sAll.length()%k;
        for(int i = sAll.length(); i > leftOver; i -= k) {
            res = "-" + sAll.substring(i-k, i) + res;
        }

        if(leftOver == 0 && sAll.length() != 0) res = res.substring(1);
        else {
            res = sAll.substring(0, leftOver) + res;
        }

        return res;
    }
}
```

```python3 []
class Solution:
    def licenseKeyFormatting(self, s: str, k: int) -> str:
        s = s.upper()
        temp: List[str] = s.split("-")
        s_all: string = "".join(temp)

        res: str = ""

        left_over: int = len(s_all)%k
        for i in range(len(s_all), left_over, -k):
            res = "-" + s_all[i-k:i] + res
        
        if left_over == 0 and len(s_all) != 0: res = res[1:]
        else: res = s_all[0:left_over] + res

        return res
```

```javascript []
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    s = s.toUpperCase();
    const temp = s.split("-");
    const sAll = temp.join("");

    let res = "";

    const leftOver = sAll.length%k;
    for(let i = sAll.length; i > leftOver; i -= k) {
        res = "-" + sAll.substring(i-k, i) + res;
    }

    if (leftOver === 0 && sAll.length !== 0) res = res.substring(1);
    else res = sAll.substring(0, leftOver) + res;

    return res;
};
```

```typescript []
function licenseKeyFormatting(s: string, k: number): string {
    s = s.toUpperCase();
    const temp: string[] = s.split("-");
    const sAll: string = temp.join("");

    let res: string = "";

    const leftOver: number = sAll.length%k;
    for(let i = sAll.length; i > leftOver; i -= k) {
        res = "-" + sAll.substring(i-k, i) + res;
    }

    if (leftOver === 0 && sAll.length !== 0) res = res.substring(1);
    else res = sAll.substring(0, leftOver) + res;

    return res;
};
```

```golang []
func licenseKeyFormatting(s string, k int) string {
    s = strings.ToUpper(s)
    temp := strings.Split(s, "-")
    sAll := strings.Join(temp, "")

    res := ""
    leftOver := len(sAll)%k
    for i := len(sAll); i > leftOver; i -= k {
        res = "-" + sAll[i-k:i] + res
    }

    if leftOver == 0 && len(sAll) != 0 {
        res = res[1:]
    } else {
        res = sAll[0:leftOver] + res
    }

    return res
}
```