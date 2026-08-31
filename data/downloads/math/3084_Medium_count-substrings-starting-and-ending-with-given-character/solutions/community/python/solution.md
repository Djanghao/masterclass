# Very simple code easy to understand o(1) solution best and optimal

**Author:** Have-To-Do-Every-Thing
**Votes:** 4
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5422246/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/5422246/)

---

# Intuition
The main idea is to count all the substrings that start and end with a given character c. We can achieve this by leveraging the positions of the character c in the string s.

## Approach
Initialization:

1. We initialize a variable res to store the total number of valid substrings.
2. We use another variable prevSeen to keep track of how many times the character c has been seen so far in the string.
Iteration through the String:
3. We iterate through each character in the string s.
4. Whenever we encounter the character c, we do the following:

5. Increment res by 1 to account for the substring consisting of just this character.
6. Add prevSeen to res to count all substrings ending at this position that start from any previous occurrence of c.
7. Increment prevSeen by 1 to update the count of seen c.
 
#### This method ensures that for each occurrence of c, we efficiently count all valid substrings starting and ending with c.

### Complexity
##### Time complexity: 
\uD835\uDC42( \uD835\uDC5B )
O(n), where n is the length of the string s. This is because we traverse the string once.
## Space complexity: 
\uD835\uDC42( 1 )
O(1), as we are using a fixed amount of extra space irrespective of the input size.

``` C++ []
class Solution {
public:
    long long countSubstrings(string s, char c) {
        long long res = 0;
        int prevSeen = 0;
        for(int i = 0; i < s.length(); i++) {
            if(s[i] == c) {
                res += 1;         // Count the single character substring
                res += prevSeen;  // Count substrings ending at current position
                prevSeen++;       // Increment the count of seen 'c'
            }
        }
        return res;
    }
};

```
``` Java []
class Solution {
    public long countSubstrings(String s, char c) {
        long res = 0;
        int prevSeen = 0;
        for (int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == c) {
                res += 1;         // Count the single character substring
                res += prevSeen;  // Count substrings ending at current position
                prevSeen++;       // Increment the count of seen 'c'
            }
        }
        return res;
    }
}

```

``` Python []
class Solution:
    def countSubstrings(self, s: str, c: str) -> int:
        res = 0
        prevSeen = 0
        for char in s:
            if char == c:
                res += 1         # Count the single character substring
                res += prevSeen  # Count substrings ending at current position
                prevSeen += 1    # Increment the count of seen 'c'
        return res


```

``` JavaScript []
var countSubstrings = function(s, c) {
    let res = 0;
    let prevSeen = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            res += 1;         // Count the single character substring
            res += prevSeen;  // Count substrings ending at current position
            prevSeen++;       // Increment the count of seen 'c'
        }
    }
    return res;
};

```




