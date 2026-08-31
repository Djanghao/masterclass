# [c++][2 approches][easy understanding]

**Author:** rajat_gupta_
**Votes:** 19
**Link:** [https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/903204/](https://leetcode.com/problems/split-two-strings-to-make-palindrome/solutions/903204/)

---

**1. TC:O(n^2) [Brute-force] [TLE] [68 / 105 test cases passed]**
```
class Solution {
public:
    int n;
    bool isPalindrome(string s) {
        int i=0,j=s.size()-1;
        while (i < j && s[i] == s[j])
            ++i, --j;
        return i >= j;
    }
    bool checkPalindromeFormation(string a, string b) {
        n=a.size();
        for(int i=0;i<n;i++){
            if((isPalindrome(a.substr(0,i)+b.substr(i))) || (isPalindrome(b.substr(0,i)+a.substr(i))))
               return true;
        }
        return false;
    }
};
```
**2. TC: O(n)**
```
class Solution {
public:
    int n;
    bool isPalindrome(string s,int i,int j) {
        while (i < j && s[i] == s[j])
            i++, j--;
        return i >= j;
    }
    bool checkPalindrome(string a, string b){
        int i=0,j=a.size()-1;
        while(i<j && a[i]==b[j])
            i++,j--;
        return isPalindrome(a,i,j) || isPalindrome(b,i,j);
    }
    bool checkPalindromeFormation(string a, string b) {
        return checkPalindrome(a,b) ||checkPalindrome(b,a);
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
