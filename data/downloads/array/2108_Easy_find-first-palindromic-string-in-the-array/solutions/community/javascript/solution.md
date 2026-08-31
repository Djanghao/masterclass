# ✅☑Beats 100% Users || [C++/Java/Python/JavaScript] || 2 Approaches || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 36
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717921/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717921/)

---

# PLEASE UPVOTE IF IT HELPED

---
![Screenshot 2024-02-13 053546.png](./images/0.png)

---


# Approaches
(Also explained in the code)

#### ***Approach 1(2 pointer)***


1. \uD83C\uDFAF We're on a mission to find that elusive palindromic string! But remember, we only need one to solve the puzzle. Once we catch it, we're outta here! \uD83C\uDFC3\u200D\u2642\uFE0F

1. \uD83D\uDD75\uFE0F\u200D\u2642\uFE0F First up, we've got our trusty detective function named check(). It's on the lookout for any suspicious non-palindromic behavior in each string.

1. \uD83E\uDDD0 Now, we're rolling up our sleeves for some two-pointer action! We're gonna compare the first and last characters of each string using the classic "good cop, bad cop" routine. \uD83D\uDC6E\u200D\u2642\uFE0F\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F

1. \uD83D\uDD75\uFE0F\u200D\u2642\uFE0F\uD83D\uDD0D If our check function finds a non-matching pair, it raises the alarm and returns false. But if it gives the all-clear, we know we're onto something good, and it signals true! \uD83D\uDEA8\u2705

1. \uD83C\uDF89 With true in hand, we've got our palindromic suspect in custody! We're gonna proudly present it as the answer. And if false is the verdict, we'll keep sleuthing until we crack the case! \uD83D\uDD0D\uD83D\uDD13

**This way, we'll nail that first palindromic string without breaking a sweat! \uD83D\uDCAA\uD83D\uDE0E**




# Complexity
- Time complexity:
   $$O(N.M)$$
*(N is the number of words in the input array and M is the maximum length of a word.)*
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []

class Solution {
public:
    bool check(string s){
        int i=0,j=s.size()-1;
        while(i<=j){
            if(s[i]==s[j])i++,j--;
            else return false;
        }
        return true;
    }
    string firstPalindrome(vector<string>& words) {
        for(int i=0;i<words.size();i++){
            if(check(words[i]))return words[i];
        }
        return "";
    }
};





```
```Java []
public class Solution {
    public boolean check(String s) {
        int i = 0, j = s.length() - 1;
        while (i <= j) {
            if (s.charAt(i) == s.charAt(j)) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
    
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            if (check(word)) {
                return word;
            }
        }
        return "";
    }
}



```
```python3 []
class Solution:
    def check(self, s: str) -> bool:
        i, j = 0, len(s) - 1
        while i <= j:
            if s[i] == s[j]:
                i += 1
                j -= 1
            else:
                return False
        return True
    
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if self.check(word):
                return word
        return ""



```
```javascript []
class Solution {
    check(s) {
        let i = 0, j = s.length - 1;
        while (i <= j) {
            if (s[i] === s[j]) {
                i++;
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
    
    firstPalindrome(words) {
        for (let word of words) {
            if (this.check(word)) {
                return word;
            }
        }
        return "";
    }
}



```
---

#### ***Approach 2(Reverse)***


1. As we stroll through the array, we're like magicians pulling off a reverse trick \uD83D\uDD04! We flip each string upside down using the `reverse()` function. \uD83E\uDDD9\u200D\u2642\uFE0F
1. \uD83D\uDD0DOnce we've got our reversed string, we peek at both the original and reversed versions. 
If they are equal, \uD83C\uDFB0 We proudly present the palindromic string as our answer. \uD83C\uDFC6
1. But if the strings play hide and seek and refuse to match, we just shrug and continue our stroll through the array. We're determined detectives, and we won't stop until we've cracked the case! \uD83D\uDD0D\uD83D\uDD75\uFE0F\u200D\u2642\uFE0F



# Complexity
- Time complexity:
   $$O(N.M)$$
*(N is the number of words in the input array and M is the maximum length of a word.)*
    

- Space complexity:
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    
    string firstPalindrome(vector<string>& words) {
        for(int i=0;i<words.size();i++){
            string s = words[i];
            reverse(s.begin(),s.end());
            if(words[i] == s)return words[i];
        }
        return "";
    }
};






```
```Java []


class Solution {
    public String firstPalindrome(String[] words) {
        for (String word : words) {
            StringBuilder sb = new StringBuilder(word);
            if (word.equals(sb.reverse().toString())) {
                return word;
            }
        }
        return "";
    }
}




```
```python3 []
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        for word in words:
            if word == word[::-1]:
                return word
        return ""


```
```javascript []
class Solution {
    firstPalindrome(words) {
        for (const word of words) {
            if (word === word.split("").reverse().join("")) {
                return word;
            }
        }
        return "";
    }
}




```
---



# PLEASE UPVOTE IF IT HELPED

---
---


---