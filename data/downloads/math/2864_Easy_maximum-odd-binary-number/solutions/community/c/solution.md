# C++2 line vs Python 1-line vs C++ 2-pointers in-place||0ms Beats 100%

**Author:** anwendeng
**Votes:** 51
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802356/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4802356/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Put 1 '1' at the last position, other '1' are put in the front. The rest is filled with '0'. C/C++/python codes are made.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn on English subtitles if necessary]
[https://youtu.be/_gwwsd9EoRA?si=LL85WedsBLmiWD4J](https://youtu.be/_gwwsd9EoRA?si=LL85WedsBLmiWD4J)
Python code can done by 1-line code.

2nd approach implemented by C++ uses 2 pointers method  which  is really a in-place solution.
|Method| elapsed time| Time record | Memory|
|---|---|---|---|
|C++ count 1 & refill|0ms|100%|9.10MB|
|python count 1 & refill|26ms|98.49%|16.68MB|
|C count 1 & refill|0ms|100%|5.94MB|
|C++ 2 pointers in place|0ms|100%|8.23MB|
|C++ 1-liner|0ms|100%|8.86MB|
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Extra space $O(1)$
# Code
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    string maximumOddBinaryNumber(string& s) {
        int n=s.size(), n1=count(s.begin(), s.end(), '1'), n0=n-n1;
        return string(n1-1, '1')+string(n0, '0')+string(1, '1');
        
    }
};

```
# 1-line codes Python, C++
```python []
class Solution:
    def maximumOddBinaryNumber(self, s: str) -> str:
        return "1"*(n1:=s.count('1')-1)+"0"*(len(s)-n1-1)+"1"
        
```
```C++ []
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    string maximumOddBinaryNumber(string& s) {
        return string(count(s.begin(), s.end(), '1')-1, '1')+string(count(s.begin(), s.end(), '0'), '0')+'1';
    }
};
```
# C counts 1 & refill||0ms beats 100%
```
#pragma GCC optimize("O3", "unroll-loops")
char* maximumOddBinaryNumber(char* s){
    int n, n1=0, n0;
    for(n=0; s[n]!='\\0'; n++){
        n1+=(s[n]=='1');
    }
    n0=n-n1;
//    s=(char*)malloc(sizeof(char)*(n+1));// no need
//    s[n]='\\0'; //keep string terminating char
    s[n-1]='1';
    memset(s, '1', n1-1 );
    memset(s+n1-1, '0', n0);
    return s;
}
```
 
# C++ using 2 pointer method||0ms Beats 100%
```
#pragma GCC optimize("O3", "unroll-loops")
class Solution {
public:
    string maximumOddBinaryNumber(string& s) {
        int n=s.size(), r=n-1, l=0;
        if (s[r]!='1') {// last bit must be 1
            while(s[l]!='1') l++;
            swap(s[l], s[r]);
        }
        l=0, r=n-2;//Rewind l, r
        while(l<r){
            while(l<n && s[l]=='1') l++;
            while(r>=0 && s[r]=='0') r--;
            if (l<r) swap(s[l], s[r]);
        }
        return s;
    }
};


```