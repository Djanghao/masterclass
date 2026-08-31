# ✅ Linear count | Easy and Clean Code (C++ / Java / C#) Beats 100% ✅✅✅

**Author:** Sayan98
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6023776/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/6023776/)

---

# Intuition
Iterate through the string and keep track of the previous character. Whenever the current character is different from the previous one, we increment the count.

# Approach
- Initialize a count variable to keep track of the number of consecutive characters.
- Initialize a prev variable to store the previous character.
- Iterate through the string starting from the second character:
- If the current character is the same as the previous character, increment the count.
- Otherwise, update the prev variable to the current character.
- Return count + 1, as the final count includes the last consecutive character.

# Complexity
- Time complexity: **O(n)**
- Space complexity: **O(1)**


```java []
class Solution {
    public int possibleStringCount(String word) {
        
        int count = 0;
        char prev = word.charAt(0);

        for (int i = 1; i < word.length(); i++)
            if (prev == word.charAt(i)) count++;
            else prev = word.charAt(i);

        return count + 1;
    }
}
```
```C++ []
class Solution {
public:
    int possibleStringCount(string word) {

        int count = 0;
        char prev = word[0];

        for (int i = 1; i < word.size(); i++)
            if (prev == word[i]) count++;
            else prev = word[i];

        return count + 1;
    }
};
```
```C# []
public class Solution {
    public int PossibleStringCount(string word) {

        var count = 0;
        var prev = word[0];

        for (int i = 1; i < word.Length; i++)
            if (prev == word[i]) count++;
            else prev = word[i];

        return count + 1;
    }
}
```
