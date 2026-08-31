# Best and Easiest Solution ✅✅ | C++ | Java | Python

**Author:** jay_singla
**Votes:** 41
**Link:** [https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991071/](https://leetcode.com/problems/delete-characters-to-make-fancy-string/solutions/5991071/)

---

# Intuition 
1) Tracking Consecutive Characters:

- The problem requires us to limit each character to appear at most twice consecutively.
- To achieve this, we can keep a count (cnt) of how many times the current character has appeared consecutively so far. This count lets us decide if the next character should be added or skipped.
2) Building the Result Incrementally:

- By starting with the first character of the input string s and iterating through the rest, we can build the result string (ans) one character at a time.
- This incremental approach allows us to check each character as it arrives, only adding it if it maintains the "fancy" requirement of no three consecutive identical characters.

3) Switching Between Characters:

- Whenever a new character (different from the previous one) is encountered, the consecutive count (cnt) is reset, allowing us to add the new character freely.
- This reset is crucial because a different character means there\u2019s no longer a risk of exceeding two consecutive characters.

# Approach
1) Initialize Variables:

- ans : This string (or string builder in Java) will store the final result.
- cnt : This integer counter tracks how many times the current character has appeared consecutively in the result string.
- n : Length of the input string s.

2) Initial Setup:

- The code first adds the first character of s to ans since there's no need to check it (as there\u2019s nothing before it), and sets cnt to 1 because there is only one instance of this character so far.

3) Iterate Through the String:

- The loop iterates from the second character to the end of the string.
- For each character:
  -   If the current character matches the last character of ans:
        - This means there\u2019s a consecutive repetition.
        - Increment cnt to count this occurrence.
        - Check if cnt is less than 3. If it is, add this character to ans, allowing it to appear twice consecutively.
        - If cnt is 3 or more, skip adding this character, effectively preventing more than two consecutive occurrences.
    - If the current character is different from the last character in ans:
        - Reset cnt to 1, as we\u2019re now dealing with a new character.
        - Add this character to ans since it\u2019s not consecutive with the last one.
4) Return the Result:

- After the loop completes, ans will contain the "fancy" version of the input string, which is then returned.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) // space used for answer string otherwise O(1) 

# Code
```cpp []
class Solution {
public:
    string makeFancyString(string s) {
        string ans = "";
        ans.push_back(s[0]);
        int n = s.size(),cnt = 1;
        for(int i=1;i<n;i++){
            if(s[i] == ans.back()){
                cnt++;
                if(cnt < 3)ans.push_back(s[i]);
            }
            else{
                cnt = 1;
                ans.push_back(s[i]);
            }
        }
        return ans;
    }
};
```
```java []
class Solution {
    public String makeFancyString(String s) {
        StringBuilder ans = new StringBuilder();
        ans.append(s.charAt(0));
        int n = s.length(), cnt = 1;
        for (int i = 1; i < n; i++) {
            if (s.charAt(i) == ans.charAt(ans.length() - 1)) {
                cnt++;
                if (cnt < 3) {
                    ans.append(s.charAt(i));
                }
            } else {
                cnt = 1;
                ans.append(s.charAt(i));
            }
        }
        return ans.toString();
    }
}

```
```python []
class Solution:
    def makeFancyString(self, s: str) -> str:
        ans = s[0]
        cnt = 1
        for i in range(1, len(s)):
            if s[i] == ans[-1]:
                cnt += 1
                if cnt < 3:
                    ans += s[i]
            else:
                cnt = 1
                ans += s[i]
        return ans
```

