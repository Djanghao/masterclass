# 🔥🔥🔥🔥🔥Beats 100% | JS | TS | Java | C++ | C# | C | PHP | Python | python3 | Kotlin | 🔥🔥🔥🔥🔥

**Author:** 20Sunny
**Votes:** 10
**Link:** [https://leetcode.com/problems/repeated-substring-pattern/solutions/3938585/](https://leetcode.com/problems/repeated-substring-pattern/solutions/3938585/)

---

---
![header_.png](./images/0.png)

---
**Approach**
To solve this problem, you can use a sliding window approach to check if the string `s` can be constructed by repeating a substring. Here's an approach to solve this problem:

1. Start with a window size of 1 and try to find a repeated substring within the given string `s`. Increase the window size until you reach half the length of the string. The reason for considering only half the length is that if the repeated substring is longer than half of the string, it cannot be repeated multiple times to form the original string.

2. For each window size, check if the string `s` can be formed by repeating the substring of that size. If it can, return `true`.

3. If you can't find a repeated substring for all window sizes, return `false`.

**Time Complexity**:
In the worst case, you would need to check for repeated substrings for all possible window sizes from 1 to n/2. For each window size, you are comparing the substring with the original string, which takes O(n) time. Therefore, the overall time complexity of this approach is O(n^2).

- Keep in mind that this is not the most efficient approach, but it's simple and works within the given constraints. There are more optimized algorithms that can solve this problem in linear time complexity, but they are more complex to implement.

---
```Javascript []
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const substring = s.slice(0, len);
            let repeated = '';
            
            for (let i = 0; i < n / len; i++) {
                repeated += substring;
            }
            
            if (repeated === s) {
                return true;
            }
        }
    }
    
    return false;
};
```
```Typescript []
function repeatedSubstringPattern(s: string): boolean {
    const n = s.length;
    
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const repeatedSubstring = s.slice(0, len);
            let formedString = "";
            
            for (let i = 0; i < n / len; i++) {
                formedString += repeatedSubstring;
            }
            
            if (formedString === s) {
                return true;
            }
        }
    }
    
    return false;
}
```
```Python3 []
class Solution:
    def repeatedSubstringPattern(self, s: str) -> bool:
        n = len(s)
        
        for length in range(1, n // 2 + 1):
            if n % length == 0:  # Check only if length divides n
                substring = s[:length]
                times = n // length
                if substring * times == s:
                    return True
                
        return False
```
```Python []
class Solution(object):
    def repeatedSubstringPattern(self, s):
        n = len(s)
        for length in range(1, n // 2 + 1):  # Possible substring lengths
            if n % length == 0:  # Check if it's a valid length for repetition
                substring = s[:length]
                if substring * (n // length) == s:  # Check if repetition works
                    return True
        return False
```
```Kotlin []
class Solution {
    fun repeatedSubstringPattern(s: String): Boolean {
        val n = s.length
        
        for (i in 1..n / 2) {
            if (n % i == 0) {
                val substring = s.substring(0, i)
                val repeatedString = buildString { repeat(n / i) { append(substring) } }
                
                if (repeatedString == s) {
                    return true
                }
            }
        }
        
        return false
    }
}
```
```Java []
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int n = s.length();

        for (int len = 1; len <= n / 2; len++) {
            if (n % len == 0) {
                String substring = s.substring(0, len);
                StringBuilder repeated = new StringBuilder();

                for (int i = 0; i < n / len; i++) {
                    repeated.append(substring);
                }

                if (repeated.toString().equals(s)) {
                    return true;
                }
            }
        }

        return false;
    }
}
```
```PHP []
class Solution {
    function repeatedSubstringPattern($s) {
        $n = strlen($s);
        
        // Iterate through possible substring lengths
        for ($len = 1; $len <= $n / 2; $len++) {
            if ($n % $len == 0) {  // Check if the length is a divisor of n
                $sub = substr($s, 0, $len);  // Get the current potential substring
                
                // Construct the new string using the current substring
                $newString = "";
                for ($i = 0; $i < $n / $len; $i++) {
                    $newString .= $sub;
                }
                
                // If the new string is equal to the original string, return true
                if ($newString == $s) {
                    return true;
                }
            }
        }
        
        return false;  // If no such substring found
    }
}
```
```C []
#include <stdbool.h>
#include <string.h>

bool repeatedSubstringPattern(char *s) {
    int n = strlen(s);
    
    // Check divisors of n
    for (int i = 1; i <= n / 2; i++) {
        if (n % i == 0) {
            int numRepeats = n / i;
            
            // Create the potential substring
            char substring[i + 1];
            strncpy(substring, s, i);
            substring[i] = '\\0';
            
            // Construct the repeated string
            char repeatedString[n + 1];
            repeatedString[0] = '\\0';
            for (int j = 0; j < numRepeats; j++) {
                strcat(repeatedString, substring);
            }
            
            // Check if the constructed string matches the original string
            if (strcmp(repeatedString, s) == 0) {
                return true;
            }
        }
    }
    
    return false;
}
```
```C++ []
class Solution {
public:
    bool repeatedSubstringPattern(string s) {
        int n = s.length();
        
        for (int len = 1; len <= n / 2; len++) {
            if (n % len == 0) {
                string substring = s.substr(0, len);
                string constructed = "";
                
                for (int i = 0; i < n / len; i++) {
                    constructed += substring;
                }
                
                if (constructed == s) {
                    return true;
                }
            }
        }
        
        return false;
    }
};
```
```C# []
public class Solution {
    public bool RepeatedSubstringPattern(string s) {
        int n = s.Length;
        
        for (int len = 1; len <= n / 2; len++) {
            if (n % len == 0) {
                string substring = s.Substring(0, len);
                StringBuilder sb = new StringBuilder();

                for (int i = 0; i < n / len; i++) {
                    sb.Append(substring);
                }

                if (sb.ToString() == s) {
                    return true;
                }
            }
        }
        
        return false;
    }
}
```
---
![download.jpg](./images/1.jpeg)

---