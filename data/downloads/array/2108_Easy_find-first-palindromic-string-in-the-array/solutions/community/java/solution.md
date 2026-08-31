# Beat 100% || 2 Simple Solution || C++ || Java || Python || With Explanation

**Author:** Inam_28_06
**Votes:** 93
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717844/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717844/)

---

Please **upvote** if you find the solution helpful.  
![image](./images/0.png)
**Objective**: Find the first palindrome in a vector of strings.
**Method 1**
1. **For Loop**: Iterates through each string in the vector.

2. **String Reversal**: Reverses the string using the `reverse()` function.

3. **Palindrome Check**: Compares the reversed string with the original.

4. **Result Handling**: Returns the first palindrome or an empty string.

**Time Complexity-O(n\u22C5max_len)**
**n= size of vector**
**max_len=max len of the string**
**C++**
```
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        for(auto i:words){
            string s=i;  // store the string s 
            reverse(s.begin(),s.end());  //reverse it example string i=`aba` reverse it s='aba' is i and s is same then this is a palindrome
            if(s==i){
                return s;
            }
        }
        return "";
    }
};
```
**Java**
```
public class Solution {
    public static String firstPalindrome(String[] words) {
        for (String word : words) {
            StringBuilder reversed = new StringBuilder(word).reverse();
            if (word.equals(reversed.toString())) {
                return word;
            }
        }
        return "";
    }
}
```
**Python**
```
class Solution(object):
    def firstPalindrome(self, words):
        for word in words:
            if word == word[::-1]:
                return word
        return ""
```

**Method 2**
## Explanation

1. **Function - firstPalindrome**: Returns the first palindrome found in the vector.

2. **Function - isPalindrome**: Checks if a string is a palindrome.

3. **Checking Palindrome in Loop**: Calls "isPalindrome" for each word in the vector.

4. **Result Handling**: Returns the first palindrome found, or an empty string if none exists or the vector is empty.

**Time Complexity-O(n\u22C5max_len)**
**n= size of vector**
**max_len=max len of the string**
```
class Solution {
 public:
  string firstPalindrome(vector<string>& words) {
      for (auto word : words)  // iterate all the string 
      if (isPalindrome(word)) // check palindrome if true 
        return word;      // return the palindrome
    return "";
  }

 private:
  bool isPalindrome(string& s) {  // palindrome function to check
    int i = 0;
    int j = s.length() - 1;
    while (i < j)
      if (s[i++] != s[j--]){
        return false;
      }
    return true;
  }
};
```
**Java**
```
public class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            if (isPalindrome(word)) {
                return word;
            }
        }
        return "";
    }

    private boolean isPalindrome(String s) {
        int i = 0;
        int j = s.length() - 1;
        while (i < j) {
            if (s.charAt(i++) != s.charAt(j--)) {
                return false;
            }
        }
        return true;
    }
}

```
**Python**
```
class Solution:
    def firstPalindrome(self, words):
        """
        :type words: list of str
        :rtype: str
        """
        for word in words:
            if self.isPalindrome(word):
                return word
        return ""

    def isPalindrome(self, s):
        i, j = 0, len(s) - 1
        while i < j:
            if s[i] != s[j]:
                return False
            i += 1
            j -= 1
        return True

```
![image](./images/1.jpeg)