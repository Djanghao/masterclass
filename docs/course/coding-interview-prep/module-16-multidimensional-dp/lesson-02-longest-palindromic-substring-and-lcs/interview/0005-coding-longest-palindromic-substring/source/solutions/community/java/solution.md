# ✅ Beats 96.49% 🔥 || 5 Different Approaches 💡 || Brute Force || EAC || DP || MA || Recursion ||

**Author:** Gourav-2002
**Votes:** 3101
**Link:** [https://leetcode.com/problems/longest-palindromic-substring/solutions/4212564/](https://leetcode.com/problems/longest-palindromic-substring/solutions/4212564/)

---

### It takes a lot of efforts to write such long explanatinon, so please UpVote \u2B06\uFE0F if this helps you.

# Approach 1: Brute Force

![image.png](./images/0.png)

# Intuition :

**The obvious brute force solution is to pick all possible starting and ending positions for a substring, and verify if it is a palindrome. There are a total of n^2 such substrings (excluding the trivial solution where a character itself is a palindrome). Since verifying each substring takes O(n) time, the run time complexity is O(n^3).**

# Algorithm :
1. Pick a starting index for the current substring which is every index from 0 to n-2.
2. Now, pick the ending index for the current substring which is every index from i+1 to n-1.
3. Check if the substring from ith index to jth index is a palindrome.
4. If step 3 is true and length of substring is greater than maximum length so far, update maximum length and maximum substring. 
5. Print the maximum substring.

# Complexity Analysis
- Time complexity : ***O(n^3)***. Assume that n is the length of the input string, there are a total of C(n, 2) = n(n-1)/2 substrings (excluding the trivial solution where a character itself is a palindrome). Since verifying each substring takes O(n) time, the run time complexity is O(n^3).

- Space complexity : ***O(1)***.

# Code
``` Python []
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        
        Max_Len=1
        Max_Str=s[0]
        for i in range(len(s)-1):
            for j in range(i+1,len(s)):
                if j-i+1 > Max_Len and s[i:j+1] == s[i:j+1][::-1]:
                    Max_Len = j-i+1
                    Max_Str = s[i:j+1]

        return Max_Str
```
``` C++ []
class Solution {
public:
    std::string longestPalindrome(std::string s) {
        if (s.length() <= 1) {
            return s;
        }
        
        int max_len = 1;
        std::string max_str = s.substr(0, 1);
        
        for (int i = 0; i < s.length(); ++i) {
            for (int j = i + max_len; j <= s.length(); ++j) {
                if (j - i > max_len && isPalindrome(s.substr(i, j - i))) {
                    max_len = j - i;
                    max_str = s.substr(i, j - i);
                }
            }
        }

        return max_str;
    }

private:
    bool isPalindrome(const std::string& str) {
        int left = 0;
        int right = str.length() - 1;
        
        while (left < right) {
            if (str[left] != str[right]) {
                return false;
            }
            ++left;
            --right;
        }
        
        return true;
    }
};
```
``` Java []
public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) {
            return s;
        }

        int maxLen = 1;
        String maxStr = s.substring(0, 1);

        for (int i = 0; i < s.length(); i++) {
            for (int j = i + maxLen; j <= s.length(); j++) {
                if (j - i > maxLen && isPalindrome(s.substring(i, j))) {
                    maxLen = j - i;
                    maxStr = s.substring(i, j);
                }
            }
        }

        return maxStr;
    }

    private boolean isPalindrome(String str) {
        int left = 0;
        int right = str.length() - 1;

        while (left < right) {
            if (str.charAt(left) != str.charAt(right)) {
                return false;
            }
            left++;
            right--;
        }

        return true;
    }
}
```
# Approach 2: Expand Around Center
![Screenshot 2023-10-27 at 8.15.36\u202FAM.png](./images/1.png)

# Intuition :

**To enumerate all palindromic substrings of a given string, we first expand a given string at each possible starting position of a palindrome and also at each possible ending position of a palindrome and keep track of the length of the longest palindrome we found so far.**

# Approach :
1. We observe that a palindrome mirrors around its center. Therefore, a palindrome can be expanded from its center, and there are only 2n - 1 such centers.
2. You might be asking why there are 2n - 1 but not n centers? The reason is the center of a palindrome can be in between two letters. Such palindromes have even number of letters (such as "abba") and its center are between the two 'b's.'
3. Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n^2).

# Algorithm :
1. At starting we have maz_str = s[0] and max_len = 1 as every single character is a palindrome.
2. Now, we will iterate over the string and for every character we will expand around its center.
3. For odd length palindrome, we will consider the current character as the center and expand around it.
4. For even length palindrome, we will consider the current character and the next character as the center and expand around it.
5. We will keep track of the maximum length and the maximum substring.
6. Print the maximum substring.

# Complexity Analysis
- Time complexity : ***O(n^2)***. Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n^2).

- Space complexity : ***O(1)***.

# Code

``` Python []
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s

        def expand_from_center(left, right):
            while left >= 0 and right < len(s) and s[left] == s[right]:
                left -= 1
                right += 1
            return s[left + 1:right]

        max_str = s[0]

        for i in range(len(s) - 1):
            odd = expand_from_center(i, i)
            even = expand_from_center(i, i + 1)

            if len(odd) > len(max_str):
                max_str = odd
            if len(even) > len(max_str):
                max_str = even

        return max_str
```
``` C++ []
class Solution {
public:
    std::string longestPalindrome(std::string s) {
        if (s.length() <= 1) {
            return s;
        }

        auto expand_from_center = [&](int left, int right) {
            while (left >= 0 && right < s.length() && s[left] == s[right]) {
                left--;
                right++;
            }
            return s.substr(left + 1, right - left - 1);
        };

        std::string max_str = s.substr(0, 1);

        for (int i = 0; i < s.length() - 1; i++) {
            std::string odd = expand_from_center(i, i);
            std::string even = expand_from_center(i, i + 1);

            if (odd.length() > max_str.length()) {
                max_str = odd;
            }
            if (even.length() > max_str.length()) {
                max_str = even;
            }
        }

        return max_str;
    }
};
```
``` Java []
public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) {
            return s;
        }

        String maxStr = s.substring(0, 1);

        for (int i = 0; i < s.length() - 1; i++) {
            String odd = expandFromCenter(s, i, i);
            String even = expandFromCenter(s, i, i + 1);

            if (odd.length() > maxStr.length()) {
                maxStr = odd;
            }
            if (even.length() > maxStr.length()) {
                maxStr = even;
            }
        }

        return maxStr;
    }

    private String expandFromCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return s.substring(left + 1, right);
    }
}

```
# Approach 3: Dynamic Programming



# Intuition :
![image.png](./images/2.png)

**To improve over the brute force solution, we first observe how we can avoid unnecessary re-computation while validating palindromes. Consider the case "ababa". If we already knew that "bab" is a palindrome, it is obvious that "ababa" must be a palindrome since the two left and right end letters are the same.**

# Algorithm :
1. We initialize a boolean table dp and mark all the values as false.
2. We will use a variable max_len to keep track of the maximum length of the palindrome.
3. We will iterate over the string and mark the diagonal elements as true as every single character is a palindrome.
4. Now, we will iterate over the string and for every character we will expand around its center.
5. For odd length palindrome, we will consider the current character as the center and expand around it.
6. For even length palindrome, we will consider the current character and the next character as the center and expand around it.
7. We will keep track of the maximum length and the maximum substring.
8. Print the maximum substring.

# Complexity Analysis
- Time complexity : ***O(n^2)***. This gives us a runtime complexity of O(n^2).

- Space complexity : ***O(n^2)***. It uses O(n^2) space to store the table.
# Code
``` Python []
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        
        Max_Len=1
        Max_Str=s[0]
        dp = [[False for _ in range(len(s))] for _ in range(len(s))]
        for i in range(len(s)):
            dp[i][i] = True
            for j in range(i):
                if s[j] == s[i] and (i-j <= 2 or dp[j+1][i-1]):
                    dp[j][i] = True
                    if i-j+1 > Max_Len:
                        Max_Len = i-j+1
                        Max_Str = s[j:i+1]
        return Max_Str
```
``` C++ []
class Solution {
public:
    std::string longestPalindrome(std::string s) {
        if (s.length() <= 1) {
            return s;
        }
        
        int max_len = 1;
        int start = 0;
        int end = 0;
        std::vector<std::vector<bool>> dp(s.length(), std::vector<bool>(s.length(), false));
        
        for (int i = 0; i < s.length(); ++i) {
            dp[i][i] = true;
            for (int j = 0; j < i; ++j) {
                if (s[j] == s[i] && (i - j <= 2 || dp[j + 1][i - 1])) {
                    dp[j][i] = true;
                    if (i - j + 1 > max_len) {
                        max_len = i - j + 1;
                        start = j;
                        end = i;
                    }
                }
            }
        }
        
        return s.substr(start, end - start + 1);
    }
};

```
``` Java []
public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) {
            return s;
        }

        int maxLen = 1;
        int start = 0;
        int end = 0;
        boolean[][] dp = new boolean[s.length()][s.length()];

        for (int i = 0; i < s.length(); ++i) {
            dp[i][i] = true;
            for (int j = 0; j < i; ++j) {
                if (s.charAt(j) == s.charAt(i) && (i - j <= 2 || dp[j + 1][i - 1])) {
                    dp[j][i] = true;
                    if (i - j + 1 > maxLen) {
                        maxLen = i - j + 1;
                        start = j;
                        end = i;
                    }
                }
            }
        }

        return s.substring(start, end + 1);
    }
}

```

# Approach 4: Manacher's Algorithm
![image.png](./images/3.png)

# Intuition :

**To avoid the unnecessary validation of palindromes, we can use Manacher's algorithm. The algorithm is explained brilliantly in this article. The idea is to use palindrome property to avoid unnecessary validations. We maintain a center and right boundary of a palindrome. We use previously calculated values to determine if we can expand around the center or not. If we can expand, we expand and update the center and right boundary. Otherwise, we move to the next character and repeat the process. We also maintain a variable max_len to keep track of the maximum length of the palindrome. We also maintain a variable max_str to keep track of the maximum substring.**

# Algorithm :
1. We initialize a boolean table dp and mark all the values as false.
2. We will use a variable max_len to keep track of the maximum length of the palindrome.
3. We will iterate over the string and mark the diagonal elements as true as every single character is a palindrome.
4. Now, we will iterate over the string and for every character we will expand around its center.
5. For odd length palindrome, we will consider the current character as the center and expand around it.
6. For even length palindrome, we will consider the current character and the next character as the center and expand around it.
7. We will keep track of the maximum length and the maximum substring.
8. Print the maximum substring.

# Complexity Analysis
- Time complexity : ***O(n)***. Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n).

- Space complexity : ***O(n)***. It uses O(n) space to store the table.

# Code
``` Python []
class Solution:
    def longestPalindrome(self, s: str) -> str:
        if len(s) <= 1:
            return s
        
        Max_Len=1
        Max_Str=s[0]
        s = '#' + '#'.join(s) + '#'
        dp = [0 for _ in range(len(s))]
        center = 0
        right = 0
        for i in range(len(s)):
            if i < right:
                dp[i] = min(right-i, dp[2*center-i])
            while i-dp[i]-1 >= 0 and i+dp[i]+1 < len(s) and s[i-dp[i]-1] == s[i+dp[i]+1]:
                dp[i] += 1
            if i+dp[i] > right:
                center = i
                right = i+dp[i]
            if dp[i] > Max_Len:
                Max_Len = dp[i]
                Max_Str = s[i-dp[i]:i+dp[i]+1].replace('#','')
        return Max_Str
```
``` C++ []
class Solution {
public:
    std::string longestPalindrome(std::string s) {
        if (s.length() <= 1) {
            return s;
        }
        
        int maxLen = 1;
        std::string maxStr = s.substr(0, 1);
        s = "#" + std::regex_replace(s, std::regex(""), "#") + "#";
        std::vector<int> dp(s.length(), 0);
        int center = 0;
        int right = 0;
        
        for (int i = 0; i < s.length(); ++i) {
            if (i < right) {
                dp[i] = std::min(right - i, dp[2 * center - i]);
            }
            
            while (i - dp[i] - 1 >= 0 && i + dp[i] + 1 < s.length() && s[i - dp[i] - 1] == s[i + dp[i] + 1]) {
                dp[i]++;
            }
            
            if (i + dp[i] > right) {
                center = i;
                right = i + dp[i];
            }
            
            if (dp[i] > maxLen) {
                maxLen = dp[i];
                maxStr = s.substr(i - dp[i], 2 * dp[i] + 1);
                maxStr.erase(std::remove(maxStr.begin(), maxStr.end(), '#'), maxStr.end());
            }
        }
        
        return maxStr;
    }
};

```
``` Java []
public class Solution {
    public String longestPalindrome(String s) {
        if (s.length() <= 1) {
            return s;
        }

        int maxLen = 1;
        String maxStr = s.substring(0, 1);
        s = "#" + s.replaceAll("", "#") + "#";
        int[] dp = new int[s.length()];
        int center = 0;
        int right = 0;

        for (int i = 0; i < s.length(); i++) {
            if (i < right) {
                dp[i] = Math.min(right - i, dp[2 * center - i]);
            }

            while (i - dp[i] - 1 >= 0 && i + dp[i] + 1 < s.length() && s.charAt(i - dp[i] - 1) == s.charAt(i + dp[i] + 1)) {
                dp[i]++;
            }

            if (i + dp[i] > right) {
                center = i;
                right = i + dp[i];
            }

            if (dp[i] > maxLen) {
                maxLen = dp[i];
                maxStr = s.substring(i - dp[i], i + dp[i] + 1).replaceAll("#", "");
            }
        }

        return maxStr;
    }
}
```

# Approach 5: Recursive TLE(Time Limit Exceeded)

# Intuition :

**The obvious brute force solution is to pick all possible starting and ending positions for a substring, and verify if it is a palindrome. There are a total of n^2 such substrings (excluding the trivial solution where a character itself is a palindrome). Since verifying each substring takes O(n) time, the run time complexity is O(n^3). But in this approach we will use recursion to solve the problem. We will check if the string is a palindrome or not. If it is a palindrome, we will return the string. Otherwise, we will recursively call the function for the string excluding the first character and for the string excluding the last character. We will check the length of the returned strings and return the string with the maximum length.**

# Algorithm :
1. If the string is a palindrome, we will return the string.
2. Otherwise, we will recursively call the function for the string excluding the first character and for the string excluding the last character.
3. We will check the length of the returned strings and return the string with the maximum length.

# Complexity Analysis   
- Time complexity : ***O(n^3)***. Assume that n is the length of the input string, there are a total of C(n, 2) = n(n-1)/2 substrings (excluding the trivial solution where a character itself is a palindrome). Since verifying each substring takes O(n) time, the run time complexity is O(n^3).

- Space complexity : ***O(n)***. The recursion stack may go up to n levels deep.
# Code
``` Python []
class Solution:
    def longestPalindrome(self, s: str) -> str:

        if s==s[::-1]: 
            return s
        left = self.longestPalindrome(s[1:])
        right = self.longestPalindrome(s[:-1])

        if len(left)>len(right):
            return left
        else:
            return right
```
``` C++ []
class Solution {
public:
    string longestPalindrome(string s) {
        if (s == string(s.rbegin(), s.rend())) {
            return s;
        }

        string left = longestPalindrome(s.substr(1));
        string right = longestPalindrome(s.substr(0, s.size() - 1));

        if (left.length() > right.length()) {
            return left;
        } else {
            return right;
        }
    }
};

```
``` Java []
public class Solution {
    public String longestPalindrome(String s) {
        if (s.equals(new StringBuilder(s).reverse().toString())) {
            return s;
        }

        String left = longestPalindrome(s.substring(1));
        String right = longestPalindrome(s.substring(0, s.length() - 1));

        if (left.length() > right.length()) {
            return left;
        } else {
            return right;
        }
    }
}
```

![image.png](./images/4.png)
