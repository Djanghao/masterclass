# 2 method|| Very easy solution is 0ms. 🔥️️🔥️️🔥️️🔥️️

**Author:** ataboyevich
**Votes:** 13
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5256703/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5256703/)

---

```Java []
class Solution {
    public static int minimumChairs(String s) {
        int res = 0, max = 0;
        for (char i : s.toCharArray()) {
            if (i == 'E') {
                res++;
            } else {
                max = Math.max(res, max);
                res--;
            }
        }
        max = Math.max(res, max);
        return max;
    }
}
```
```C++ []
class Solution {
public:
    int minimumChairs(string s) {
        int res = 0, max_chairs = 0;
        for (char i : s) {
            if (i == 'E') {
                res++;
            } else {
                max_chairs = std::max(res, max_chairs);
                res--;
            }
        }
        max_chairs = std::max(res, max_chairs);
        return max_chairs;
    }
};
```
```python []
class Solution(object):
    def minimumChairs(self, s):
        """
        :type s: str
        :rtype: int
        """
        res = 0
        max_chairs = 0
        for i in s:
            if i == 'E':
                res += 1
            else:
                max_chairs = max(res, max_chairs)
                res -= 1
        max_chairs = max(res, max_chairs)
        return max_chairs
        
```
```javascript []
/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let res = 0, max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'E') {
            res++;
        } else {
            max = Math.max(res, max);
            res--;
        }
    }
    max = Math.max(res, max);
    return max;
};
```

Method 2:

``` Java
class Solution {
    public int minimumChairs(String s) {
        while(s.contains("LE"))
          s=s.replace("LE","");

        s=s.replace("L","");
        return s.length();

    }
}
```
Do upvote if it helps :)