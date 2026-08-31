# Python 1-liner vs  Several C/C++ sols||19ms Beats 99.86%

**Author:** anwendeng
**Votes:** 42
**Link:** [https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717919/](https://leetcode.com/problems/find-first-palindromic-string-in-the-array/solutions/4717919/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Palindrome problem is the typical string problem.
# Approach
<!-- Describe your approach to solving the problem. -->
[Spoken in Mandarin,please turn on English subtitles if necessary]
[https://youtu.be/eXhdv8jDpao?si=QLhjD9g2kqR7UxND](https://youtu.be/eXhdv8jDpao?si=QLhjD9g2kqR7UxND)
This is the palindrome: __"Hualien Fountain Water Sprays Lotus"(Translation from Chinese \u300C\u82B1\u84EE\u5674\u6C34\u6C60\u6C34\u5674\u84EE\u82B1\u300D) "racecar"__. Leetcode has collected a bunch of questions related to palindromes. It should be said that palindrome questions are often asked in interviews at technology companies.

1. Python 1-liner uses a nested for-loop to find the palindromic string `s` in words & return the first found one. 
2. Other python 1-liner uses string reverse, i.e s[::-1] by slicing.
3.  1st C++ code compares chars which is fast
4.  2nd C++ code uses C++ reverse function. Use the fact `s` is Palindrome $\\iff$ `s=reverse(s)` ;but it needs string copying. 
5. C code is rare which runs in 16ms & written in 2 pointers way; later in film C++ code is made. (C code is revised so that there is no branch, thanks to comments of @Sergei)

|Method| elapsed time| Time record | Space |
|---|---|---|---|
|C++ comparing chars|23ms|99.80%|23.61MB|
|C++ reverse|33ms|97.82%|23.44MB|
|Python 1-liner|84ms|39.39%|16.72MB|
|Python 1-liner reverse|66ms|95.38%|16.60MB|
|C 2-pointers no branch|16ms|92.31%|9.42MB|
|C++ 2-pointers|19ms|99.86%|23.51MB|
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$ \\sum_{s \\in words}len(s)$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Python 1-liner check char
```
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        return next((s for s in words if all(s[i]==s[-(i+1)] for i in range(len(s)//2))), "")
```   
# Python 1-liner check s==s[::-1]   
```
class Solution:
    def firstPalindrome(self, words: List[str]) -> str:
        return next((s for s in words if s==s[::-1]), "")
        
```
#  C++ Code||23ms Beats 99.80%
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        for( string& s : words){
            int n=s.size(), n_2=n>>1;
            bool isPal=1;
            for(int i=0; i<n_2; i++)
                if(s[i]!=s[n-1-i]){
                    isPal=0;
                    break;
                }
            if (isPal) return s;
        }
        return "";
    }
};

auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```
# C++ using reverse ||33ms Beats 97.82%
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    string firstPalindrome(vector<string>& words) {
        string tmp;
        for(string& s : words){
            tmp=s;
            reverse(tmp.begin(), tmp.end());
            if (s==tmp) return s;
        }
        return "";
    }
};

```
# 2 pointers solution|| C 16ms|| C++ 19ms Beats 99.86%
```C []
#pragma GCC optimize("O3", "unroll-loops")
char* firstPalindrome(char** words, int wordsSize) {
    for (register int i=0; i<wordsSize; i++){
        bool isPal=1;
        char* s=words[i];
        for(register int l=0, r=strlen(s)-1; isPal&& l<r; l++, r--){
            isPal=(s[l]==s[r]);
        }
        if (isPal) return s;
    }
    return "";
}
```

```C++ []
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    static string firstPalindrome(vector<string>& words) {
        for( string& s: words){
            bool isPal=1;
            for(int l=0, r=s.size()-1; l<r; l++, r--){
                if (s[l]!=s[r]){
                    isPal=0;
                    break;
                }
            }
            if(isPal) return s;
        }
        return "";
    }
};

auto init = []()
{ 
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    return 'c';
}();
```

