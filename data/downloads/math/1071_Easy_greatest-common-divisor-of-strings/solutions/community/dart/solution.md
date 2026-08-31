# Simplest way to solve and 100% beat Greatest Common Divisor of Strings

**Author:** patel_jaimin
**Votes:** 3
**Link:** [https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/6041719/](https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/6041719/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about finding the largest possible substring that can divide two strings such that both strings are composed by repeatedly concatenating that substring. To solve this, we need to:

1. Check if both strings can be constructed by repeating a common substring. This is validated by checking if `str1 + str2` is the same as `str2 + str1`.
2. Once validated, the length of the common substring will be the greatest common divisor (GCD) of the lengths of the two strings. This is because the longest substring that can divide both strings evenly will have a length equal to the GCD of the two string lengths.
3. The substring with this GCD length will be the solution.


# Approach
<!-- Describe your approach to solving the problem. -->
Validate if both strings can be divided by a common substring:
First, concatenate the two strings in both possible orders (`str1 + str2` and `str2 + str1`). If the two concatenated strings are not equal, return an empty string since no common substring can divide both strings.

Find the GCD of the lengths of the two strings:
Using the Euclidean algorithm, calculate the greatest common divisor (GCD) of the lengths of `str1` and `str2`. This will give us the length of the largest substring that can divide both strings.

Return the common substring:
The substring of `str1` from the beginning up to the GCD length will be the result.

# Complexity
- Time complexity: $$O(len(str1) + len(str2))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(len(str1) + len(str2))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```python3 []
class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        len1, len2 = len(str1), len(str2)

        def isDivisor(l):
            if len1 % l or len2 % l:
                return False
            f1, f2 = len1 // l, len2 // l
            return str1[:l] * f1 == str1 and str1[:l] * f2 == str2

        for l in range(min(len1, len2), 0, -1):
            if isDivisor(l):
                return str1[:l]
        return ""

```
```python []
def gcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a
class Solution(object):
    def gcdOfStrings(self, str1, str2):
        """
        :type str1: str
        :type str2: str
        :rtype: str
        """
        if str1 + str2 != str2 + str1:
            return ""
        max_length = gcd(len(str1), len(str2))
        return str1[:max_length]
```
```java []
class Solution {
    public String gcdOfStrings(String str1, String str2) {
        return ((str2 + str1).equals((str1 + str2)))
                ? str1.substring(0, gcd(str1.length(), str2.length()))
                : "";

    }

    int gcd(int a, int b) {
        while (b != 0) {
            int temp = a;
            a = b;
            b = temp % b;
        }
        return a;
    }
}
```
```javascript []
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const maxLength = myFunction(str1.length, str2.length);
    return str1.substring(0, maxLength);
};

function myFunction(a, b) {
    if (b === 0) {
        return a;
    }
    return myFunction(b, a % b);
}
```
```typescript []
function gcdOfStrings(str1: string, str2: string): string {
    if (str1 + str2 !== str2 + str1) {
        return "";
    }
    const maxLength = myFunction(str1.length, str2.length);
    return str1.substring(0, maxLength);
};

function myFunction(a, b) {
    if (b === 0) {
        return a;
    }
    return myFunction(b, a % b);
}
```
```csharp []
public class Solution {
    public string GcdOfStrings(string str1, string str2) {
        return ((str2 + str1).Equals((str1 + str2)))? str1.Substring(0, gcd(str1.Length, str2.Length)): "";

    }

    int gcd(int a, int b) {
        if (b == 0) {
            return a;
        }
        return gcd(b, a % b);
    }
}
```
```c []

char* gcdOfStrings(char* str1, char* str2) {
    int len1 = strlen(str1);
    int len2 = strlen(str2);

    char combined1[len1 + len2 + 1];
    char combined2[len1 + len2 + 1];

    strcpy(combined1, str2);
    strcat(combined1, str1);

    strcpy(combined2, str1);
    strcat(combined2, str2);

    if (strcmp(combined1, combined2) != 0) {
        return ""; 
    }

    int gcdLength = gcd(len1, len2);

    static char result[2004]; 

    strncpy(result, str1, gcdLength);
    result[gcdLength] = '\\0'; 

    return result;
}

int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}
```
```cpp []
class Solution {
public:
    string gcdOfStrings(string str1, string str2) {
        return (str1 + str2 == str2 + str1)
                   ? str1.substr(0, gcd(size(str1), size(str2)))
                   : "";
    }
};
```
```Go []
func gcdOfStrings(str1 string, str2 string) string {
    if str2+str1 != str1+str2 {
		return ""
	}
	gcdLength := gcd(len(str1), len(str2))
	return str1[:gcdLength]
}
func gcd(a, b int) int {
	if b == 0 {
		return a
	}
	return gcd(b, a%b)
}
```
```Dart []
class Solution {
  String gcdOfStrings(String str1, String str2) {
	// Function to compute the GCD of two numbers
    int gcd(int a, int b) {
        if (b == 0) {
        return a;
        }
        return gcd(b, a % b);
    }

    // Check if concatenating str2 + str1 is equal to str1 + str2
    if (str2 + str1 != str1 + str2) {
        return "";
    }

    // Find the greatest common divisor of the lengths of the two strings
    int gcdLength = gcd(str1.length, str2.length);

    // Return the substring of str1 with length equal to gcdLength
    return str1.substring(0, gcdLength);
}
}
```