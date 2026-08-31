# [C++/Java/Python/C#/JavaScript/Rust/Go/Kotlin] Self explanatory short code

**Author:** rpn2eax
**Votes:** 3
**Link:** [https://leetcode.com/problems/decode-ways/solutions/4454215/](https://leetcode.com/problems/decode-ways/solutions/4454215/)

---

# Intuition
Dynamic Programming

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```C++ []
class Solution {
 public:
  int numDecodings(string s) {
    const int n = s.length();
    // dp[i] := the number of ways to decode s[i..n)
    vector<int> dp(n + 1);
    dp[n] = 1;  // ""
    dp[n - 1] = isValid(s[n - 1]);

    for (int i = n - 2; i >= 0; --i) {
      if (isValid(s[i]))
        dp[i] += dp[i + 1];
      if (isValid(s[i], s[i + 1]))
        dp[i] += dp[i + 2];
    }

    return dp[0];
  }

 private:
  bool isValid(char c) {
    return c != '0';
  }

  bool isValid(char c1, char c2) {
    return c1 == '1' || c1 == '2' && c2 < '7';
  }
};
```
```Java []
class Solution {
  public int numDecodings(String s) {
    final int n = s.length();
    // dp[i] := the number of ways to decode s[i..n)
    int[] dp = new int[n + 1];
    dp[n] = 1; // ""
    dp[n - 1] = isValid(s.charAt(n - 1)) ? 1 : 0;

    for (int i = n - 2; i >= 0; --i) {
      if (isValid(s.charAt(i)))
        dp[i] += dp[i + 1];
      if (isValid(s.charAt(i), s.charAt(i + 1)))
        dp[i] += dp[i + 2];
    }

    return dp[0];
  }

  private boolean isValid(char c) {
    return c != '0';
  }

  private boolean isValid(char c1, char c2) {
    return c1 == '1' || c1 == '2' && c2 < '7';
  }
}
```
```Python []
class Solution:
  def numDecodings(self, s: str) -> int:
    n = len(s)
    # dp[i] := the number of ways to decode s[i..n)
    dp = [0] * n + [1]

    def isValid(a: str, b=None) -> bool:
      if b:
        return a == '1' or a == '2' and b < '7'
      return a != '0'

    if isValid(s[-1]):
      dp[n - 1] = 1

    for i in reversed(range(n - 1)):
      if isValid(s[i]):
        dp[i] += dp[i + 1]
      if isValid(s[i], s[i + 1]):
        dp[i] += dp[i + 2]

    return dp[0]
```
```C# []
public class Solution {
    public int NumDecodings(string s) {
        int n = s.Length;
        int[] dp = new int[n + 1];
        dp[n] = 1;
        dp[n - 1] = isValid(s[n - 1]) ? 1 : 0;
        for(int i = n - 2; i >= 0; --i){
            if(isValid(s[i]))
                dp[i] += dp[i + 1];
            if(isValid(s[i], s[i + 1]))
                dp[i] += dp[i + 2];
        }
        return dp[0];
    }
    private bool isValid(char c){ return c != '0'; }
    private bool isValid(char c1, char c2){ return c1 == '1' || c1 == '2' && c2 < '7'; }
}
```
```JavaScript []
var numDecodings = function(s) {
        let dp = new Array(s.length + 1).fill(0);
        dp[s.length] = 1;
        if (s[s.length - 1] != '0'){
            dp[s.length - 1] = 1;
        }

        for (let i = s.length - 2; i >= 0; --i){
            if (s[i] !== '0'){
                dp[i] += dp[i + 1];
            }
            if (s[i] === '1' || s[i] === '2' && s[i + 1] < '7'){
                dp[i] += dp[i + 2];
            }
        }
        return dp[0];
};
```
```Rust []
impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let n = s.len();
        // dp[i] := the number of ways to decode s[i..n)
        let mut dp = vec![0; n + 1];
        dp[n] = 1;    // ""
        let s = s.as_bytes();
        if s[n - 1] != b'0'{
            dp[n - 1] = 1;
        }

        for i in (0..n - 1).rev(){
            if s[i] != b'0'{
                dp[i] += dp[i + 1];
            } 
            if s[i] == b'1' || s[i] == b'2' && s[i + 1] < b'7'{
                dp[i] += dp[i + 2];
            }
        }
        dp[0]
    }
}
```
```Go []
func numDecodings(s string) int {
    if s[0] == '0'{
        return 0
    }

    n := len(s)
    // dp[i] := the number of ways to decode s[i..n)
    dp := make([]int, n + 1)
    dp[n] = 1    // ""
    if s[n - 1] != '0'{
        dp[n - 1] = 1;
    }

    for i := n - 2; i >= 0; i--{
        if s[i] != '0'{
            dp[i] += dp[i + 1]
        }
        if s[i] == '1' || s[i] == '2' && s[i + 1] < '7'{
            dp[i] += dp[i + 2]
        } 
    }
    return dp[0]
}
```
``` Kotlin []
class Solution {
    fun numDecodings(s: String): Int {
        var dp = IntArray(s.length + 1);
        dp[s.length] = 1;
        if (s[s.length - 1] != '0'){
            dp[s.length - 1] = 1;
        }

        for (i in s.length - 2 downTo 0){
            if (s[i] != '0'){
                dp[i] += dp[i + 1];
            }
            if (s[i] == '1' || s[i] == '2' && s[i + 1] < '7'){
                dp[i] += dp[i + 2];
            }
        }
        return dp[0];
    }
}
```
