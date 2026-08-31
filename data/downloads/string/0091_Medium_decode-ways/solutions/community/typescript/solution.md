# [C/C++/Python/TS] Short, readable, fast and constant space. What more could you want?

**Author:** ChrisTrompf
**Votes:** 4
**Link:** [https://leetcode.com/problems/decode-ways/solutions/2644295/](https://leetcode.com/problems/decode-ways/solutions/2644295/)

---

If you work from the back you only need to remember two things.
1. The number of ways s[i + 1] can be decoded
2. The number of ways s[i + 2] can be decoded

There is only two things we need to check.
1. Whether s[i] is '0', in which case there is no valid ways
2. Whether s[i] + s[i + 1] creates a string less than "27"

This allows for a simple, constant space, dynamic programming solution.

After each loop, `dp` will record our state as follows;
* `dp[0]` is the number of ways for s[i + 1]
* `dp[1]` is the number of ways for s[i + 2]

## **Python**
```python
def numDecodings(self, s: str) -> int:
  dp = [1, 0]
  for i in range(len(s) - 1, -1, -1):
    using_two = dp[1] if s[i:i+2] < "27" else 0
    dp[1] = dp[0]
    dp[0] = (dp[0] + using_two) if '0' != s[i] else 0
  return dp[0]
```
Or `dp` can be assigned in a single step, but I don't think it is as readable;
```python
def numDecodings(self, s: str) -> int:
  dp = [1, 0]
  for i in range(len(s) - 1, -1, -1):
    using_two = dp[1] if s[i:i+2] < "27" else 0
    dp = [(dp[0] + using_two) if '0' != s[i] else 0, dp[0]]
  return dp[0]
```
Or do away with `using_two` too, but even more unreadable
```python
def numDecodings(self, s: str) -> int:
  dp = [1, 0]
  for i in range(len(s) - 1, -1, -1):
    dp = [(dp[0] + (dp[1] if (s[i:i + 2] < "27") else 0)) if '0' != s[i] else 0, dp[0]]
  return dp[0]
```
## **TypeScript**
```
function numDecodings(s: string): number {
  var dp = [1, 0]
  for (var i = s.length - 1; 0 <= i; --i) {
    var using_two = (s.substring(i, i + 2) < "27") ? dp[1] : 0;
    dp[1] = dp[0];
    dp[0] = ('0' != s[i]) ? (dp[0] + using_two) : 0;
  }
  return dp[0];
};
```

## **C++**
```cpp
int numDecodings(string s) {
  int dp[2] = {1, 0};
  for (int i = s.size() - 1; 0 <= i; --i) {
    int using_two = dp[1] * (0 > memcmp(&s[i], "27", 2));
    dp[1] = dp[0];
    dp[0] = (dp[0] + using_two) * ('0' < s[i]);
  }
  return dp[0];
}
```
## **C**
```c
int numDecodings(char * s) {
  int dp[2] = {1, 0};
  for (int i = strlen(s) - 1; 0 <= i; --i) {
    int using_two = dp[1] * (0 > memcmp(&s[i], "27", 2));
    dp[1] = dp[0];
    dp[0] = (dp[0] + using_two) * ('0' < s[i]);
  }
  return dp[0];
}
```