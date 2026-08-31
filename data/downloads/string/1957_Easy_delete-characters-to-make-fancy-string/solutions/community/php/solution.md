# 🌟 Beats 100% | ✅ Easiest solution | Step-by-Step Breakdown 💯🔥

**Author:** iambandirakesh
**Votes:** 3
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991040/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991040/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Beats 100%
![image.png](./images/0.png)

# Approach
<!-- Describe your approach to solving the problem. -->
### Problem Statement
The goal of this function is to take a string s and modify it such that any character appearing three or more consecutive times is reduced to only two occurrences. For example, the string "aaabaaa" would be transformed into "aabaa".

### Explanation of the Approach

1. *Initialization*:
   - We start by initializing an empty string ans to hold the result.
   - A variable count is set to 1, which will be used to count consecutive characters.
   - We also obtain the length of the input string s and store it in n.

2. *Adding the First Character*:
   - We add the first character of the string s to the result string ans, as there's no previous character to compare it with.

3. *Iterating Through the String*:
   - We loop through the string starting from the second character (index 1) to the last character (index n-1).
   - For each character, we check if it is the same as the previous character:
     - If it is the same, we increment the count by 1.
     - If it is different, we reset the count to 1.
   
4. *Conditionally Adding Characters*:
   - After updating count, we check if it is less than 3:
     - If count < 3, we append the current character s[i] to the result string ans.
     - This ensures that we only allow a maximum of two consecutive characters in the result.

5. *Returning the Result*:
   - Finally, we return the modified string ans which contains the fancy version of the original string.

### Example
- Input: "leeetcode"
- Processing:
  - Start with ans = "l".
  - Append e (count becomes 2, ans = "le").
  - Append the next e (count becomes 3, skip adding).
  - Append t, c, o, d, e (all get added).
- Output: "leetcode".

### Time Complexity
- The time complexity of this solution is O(n), where n is the length of the string s. This is because we are iterating through the string once.

### Space Complexity
- The space complexity is O(n) in the worst case, as we might need to store the entire modified string in ans.

This function efficiently constructs the desired output while maintaining clarity and simplicity in the logic.


# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let ans=''
    let count=1;
    let n=s.length
    ans+=s[0]
    for(let i=1;i<n;i++){
        if(s[i]===s[i-1]){
            count+=1
        }
        else{
            count=1
        }
        if(count<3){
            ans+=s[i]
        }
    }
    return ans
};
```
``` python []
class Solution:
    def makeFancyString(self, s: str) -> str:
        ans = ""
        count = 1
        n = len(s)
        ans += s[0]
        
        for i in range(1, n):
            if s[i] == s[i - 1]:
                count += 1
            else:
                count = 1
            if count < 3:
                ans += s[i]
        
        return ans

```
``` c++ []
class Solution {
public:
    string makeFancyString(string s) {
        string ans;
        int count = 1;
        ans += s[0];  // Add the first character to the result
        
        for (int i = 1; i < s.length(); i++) {
            if (s[i] == s[i - 1]) {
                count++;
            } else {
                count = 1;  // Reset count if the current character is different
            }
            if (count < 3) {
                ans += s[i];  // Append character only if count is less than 3
            }
        }
        
        return ans;
    }
};
```
``` java []
class Solution {
    public String makeFancyString(String s) {
        StringBuilder ans = new StringBuilder();
        int count = 1;
        ans.append(s.charAt(0)); // Add the first character to the result
        
        for (int i = 1; i < s.length(); i++) {
            if (s.charAt(i) == s.charAt(i - 1)) {
                count++;
            } else {
                count = 1; // Reset count if the current character is different
            }
            if (count < 3) {
                ans.append(s.charAt(i)); // Append character only if count is less than 3
            }
        }
        
        return ans.toString();
    }
}
```
``` c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* makeFancyString(char* s) {
    int n = strlen(s);
    if (n == 0) return "";

    // Allocate memory for the result, ensuring enough space
    char* result = (char*)malloc((n + 1) * sizeof(char));
    int resIndex = 0;
    int count = 1;

    // Initialize by adding the first character to the result
    result[resIndex++] = s[0];

    for (int i = 1; i < n; i++) {
        // Check for consecutive identical characters
        if (s[i] == s[i - 1]) {
            count++;
        } else {
            count = 1;
        }

        // Only add character if count is less than 3
        if (count < 3) {
            result[resIndex++] = s[i];
        }
    }

    // Null-terminate the result string
    result[resIndex] = '\\0';
    return result;
}
```
``` php []
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function makeFancyString($s) {
        $n = strlen($s);
        if ($n == 0) return "";

        $ans = $s[0];
        $count = 1;

        for ($i = 1; $i < $n; $i++) {
            if ($s[$i] == $s[$i - 1]) {
                $count++;
            } else {
                $count = 1;
            }

            if ($count < 3) {
                $ans .= $s[$i];
            }
        }

        return $ans;
    }
}
```
