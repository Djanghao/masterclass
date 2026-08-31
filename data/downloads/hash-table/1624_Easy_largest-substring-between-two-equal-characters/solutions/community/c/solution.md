# Just array 1 pass O(n)||0ms beats 100%

**Author:** anwendeng
**Votes:** 10
**Link:** [https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4480475/](https://leetcode.com/problems/largest-substring-between-two-equal-characters/solutions/4480475/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It needs a container to store the position for the first occurrence of every letter. An array is enough, no need for hash table (C++ unordered_map, Python dict).

Pure C is rare which is also implemented & runs in 0ms beating 100%!
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn English subtitles if necessary]
[https://youtu.be/5PWd-fXVRr8?si=XC1W5R8JGDvWGfa0](https://youtu.be/5PWd-fXVRr8?si=XC1W5R8JGDvWGfa0)

Iterate the loop & find the max length
```
int idx = s[i]-'a';
    if (alpha[idx]!= -1){
        maxLen= max(maxLen, i-alpha[idx]-1);
    }
    else alpha[idx]=i;
```
|Method|Elasped Time|speed record|Memory|
|---|---|---|---|
|C++ `vector<int>` loop|0ms| 100%|6.78MB|
|C  array loop| 0ms|100%|6.97MB|
|Python3 list loop|23ms|99.76%|17.36MB|
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(26)$$
# Codes of  C & C++ 0ms beat 100%
```C []
#pragma GCC optimize("O3", "unroll-loops")
int maxLengthBetweenEqualCharacters(char* s) {
    int alpha[26];
    memset(alpha, -1, sizeof(alpha));
    int maxLen=-1;
    for(register int i=0; s[i]!='\\0'; i++){
        int idx=s[i]-'a';
        int newLen=i-alpha[idx]-1;
        if (alpha[idx]!=-1 && newLen>maxLen) maxLen=newLen;
        else if (alpha[idx]==-1) alpha[idx]=i;
    }
    return maxLen;
}
```
```C++ []

#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    int maxLengthBetweenEqualCharacters(string& s) {
        vector<int> alpha(26, -1);
        int n=s.size(), maxLen=-1;
         for (int i = 0; i < n; i++) {
            int idx = s[i]-'a';
            if (alpha[idx]!= -1){
            //    cout<<s[i]<<":"<<maxLen<<endl;
                maxLen= max(maxLen, i-alpha[idx]-1);
            }
            else alpha[idx]=i;
        } 
        return maxLen;    
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
# Python code with Explanation in comments

```
class Solution:
    def maxLengthBetweenEqualCharacters(self, s: str) -> int:
        n=len(s)
        alpha=[-1]*26 #initial position for every letter
        maxLen=-1 
        for i, c in enumerate(s):
            if alpha[ord(c)-ord('a')]!=-1: # letter c already found
                maxLen =max(maxLen, i-alpha[ord(c)-ord('a')]-1)
            else: # first found for the letter c
               alpha[ord(c)-ord('a')]=i
        return maxLen 
        
```