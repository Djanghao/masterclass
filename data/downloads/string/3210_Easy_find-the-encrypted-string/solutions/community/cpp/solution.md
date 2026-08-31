# k = k%n; - easy to understand - 100% Beats - Detailed Explanation

**Author:** muhammadfarhankt
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-encrypted-string/solutions/5431672/](https://leetcode.com/problems/find-the-encrypted-string/solutions/5431672/)

---

# Intuition
- The goal is to shift each character in the string by k positions forward. If k is greater than the string's length, we only need to shift by k % n positions, where n is the length of the string. This is because shifting by the length of the string brings us back to the start.

# Approach
1. Calculate the effective shift as k % n to handle cases where k is larger than the length of the string n.
2. Create an array to hold the characters of the encrypted string.
3. Loop through each character in the string.
    - For each character at position i, find its new position as (i + k) % n.
    - Place the character in the new position in the result array.
4. Combine the characters in the result array to form the final encrypted string.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code

```Java []
class Solution {
    public String getEncryptedString(String s, int k) {
        int n = s.length();
        k = k % n;
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < n; ++i) {
            result.append(s.charAt((i + k) % n));
        }
        return result.toString();
    }
}
```
```C++ []
class Solution {
public:
    string getEncryptedString(string s, int k) {
        int n = s.size();
        k = k % n;

        string result;
        for (int i = 0; i < n; ++i) {
            int idx = (i + k) % n;
            result += s[idx];
        }
        return result;
    }
};
```
```Python []
class Solution:
    def getEncryptedString(self, s: str, k: int) -> str:
        n = len(s)
        k = k % n
        result = ""
        for i in range(n):
            res += s[(i + k) % n]
        return result
```
```javascript []
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    const n = s.length;
    k = k % n;
    let result = new Array(n);
    for (let i = 0; i < n; ++i) {
        let idx = (i + k) % n;
        result[idx] = s[i];
    }
    return result.join('');
};
```
```Golang []
func getEncryptedString(s string, k int) string {
    n := len(s)
    k = k % n
    result := make([]byte, n)
    for i := 0; i < n; i++ {
        idx := (i + k) % n
        result[i] = s[idx]
    }
    return string(result)
}
```
```Dart []

```
```C []
char* getEncryptedString(char* s, int k) {
    int n = strlen(s);
    k = k % n;
    char* result = (char*)malloc((n + 1) * sizeof(char));
    for (int i = 0; i < n; ++i) {
        int idx = (i + k) % n;
        result[idx] = s[i];
    }
    result[n] = '\\0';
    return result;
}
```