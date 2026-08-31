# ✅Beats 100.00% 🔥 || C++ || Java || C# || Easy Explanation || Beginner Friendly🔥🔥🔥

**Author:** Sayan98
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5001855/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5001855/)

---

![image.png](./images/0.png)
# Intuition
Intuition:
The intuition behind this solution is to construct the smallest string lexicographically by replacing each non-'a' character with the character one step before it in the alphabetical order. If there are consecutive 'a' characters, they are kept as-is in the resulting string. If all characters after a certain point are 'a', the entire remaining substring is appended to the result.

# Approach
- Initialize an empty string **result** to store the constructed smallest string.
- Initialize a variable count to keep track of the number of 'a' characters encountered so far.
- Iterate through the input string s character by character.
- For each character **s[i]**: 
    - If **s[i]** is not 'a', append **(char)(s[i] - 1)** to the **result** string. 
    - If **s[i]** is '**a**', append '**a**' to the **result** string. 
    - Increment the **count** variable if **s[i]** is '**a**'. 
    - If **s[i]** is '**a**' and **count** is not equal to **result.size()**, it means that all the remaining characters in s are 'a' or does not need any manipulation. In this case, append the remaining substring **s.substr(i + 1, s.size() - i)** to the **result** string and return it.
- After the loop completes, if count is equal to **result.size()**, it means that all characters in s were '**a**'. In this case, replace the last character of **result** with '**z**'.
- Return the **result** string.

# Complexity
- Time complexity: **O(n)**
Where n is the length of the input string s. This is because we iterate through the string once, performing constant-time operations at each character.

- Space complexity: **O(n)**
Where **n** is the length of the input string **s**. This is because, in the worst case, we need to construct a new string result with the same length as s when all characters are non-'a' characters.

```C++ []
class Solution {
public:
    string smallestString(string s) {
        string result;
        int count = 0;

        for (int i = 0; i < s.size(); i++) {
            // If the current character is 'a', increment the counter
            count += s[i] == 'a' ? 1 : 0;
            
            // If the current character is not 'a', append the character one step before it
            // If the current character is 'a', append 'a'
            result += (s[i] != 'a' ? (char)(s[i] - 1): 'a');
            //Found the substing, append the remaining substring and return the result
            if(s[i] == 'a' && count != result.size())
               return result += s.substr(i + 1, s.size() - i);
        }
        //All characters in the input string were 'a'
        if(count == result.size())
            result[result.size() - 1] = 'z';
        return result;
    }
};
```
```Java []
class Solution {
    public String smallestString(String s) {
        var result = new StringBuilder();
        var count = 0;

        for (var i = 0; i < s.length(); i++) {

            count += s.charAt(i) == 'a' ? 1 : 0;
            result.append(s.charAt(i) != 'a' ? (char)(s.charAt(i) - 1) : 'a');
            if(s.charAt(i) == 'a' && count != result.length())
                return result.append(s.substring(i+1)).toString();
        }

        if(count == result.length())
           result.setCharAt(result.length() - 1, 'z');
        return result.toString();
    }
}
```
```C# []
using System.Text;

public class Solution {
    public string SmallestString(string s) {
        
        var result = new StringBuilder();
        var aCount = 0;

        for (var i = 0; i < s.Length; i++) {

            aCount += s[i] == 'a' ? 1 : 0;
            result.Append(s[i] != 'a' ? (char)(s[i] - 1): 'a');
            if(s[i] == 'a' && aCount != result.Length)
                return result.Append(s.AsSpan(i + 1, s.Length - i - 1)).ToString();
        }

        if(aCount == result.Length)
            result[^1] = 'z';
        return result.ToString();
    }
}
```
