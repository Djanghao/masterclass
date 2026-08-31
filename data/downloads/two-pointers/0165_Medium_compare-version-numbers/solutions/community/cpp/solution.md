# String with numbers comparison||0ms Beats 100%

**Author:** anwendeng
**Votes:** 61
**Link:** [https://leetcode.com/problems/compare-version-numbers/solutions/5103982/](https://leetcode.com/problems/compare-version-numbers/solutions/5103982/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Convert the chars to int & compare the numbers x1 & x2
Use a nested loop to solve.

2nd approach uses strtok_r which is fast, runs 0ms & beats 100%. The method is old but works well!
# Approach
<!-- Describe your approach to solving the problem. -->
1. Use a nested loop with condition `i<n1 || j<n2`
2. The conversion of chars to int is using
```
while(i<n1 && v1[i]!='.'){
    x1=10*x1+(v1[i++]-'0');
}
```
the conversion to x2 is similar.
3.  At the end of this iteration in the loop 
```
if (x1<x2) return -1;
else if (x1>x2) return 1;
x1=0;
x2=0;
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code||C++ 0ms Beats 100%
```C++ []
class Solution {
public:
    static int compareVersion(string& v1, string& v2) {
        const int n1=v1.size(), n2=v2.size();
        int x1=0, x2=0;
        for(int i=0, j=0; i<n1 || j<n2; i++, j++){
            while(i<n1 && v1[i]!='.'){
                x1=10*x1+(v1[i++]-'0');
            }
            while(j<n2 && v2[j]!='.'){
                x2=10*x2+(v2[j++]-'0');
            }
            if (x1<x2) return -1;
            else if (x1>x2) return 1;
            x1=0;
            x2=0;
        }
        return 0;
    }
};


```
```C []
int compareVersion(char* v1, char* v2) {
    const int n1 = strlen(v1), n2 = strlen(v2);
    int x1 = 0, x2 = 0;
    for (int i = 0, j = 0; i < n1 || j < n2; i++, j++) {
        while (i < n1 && v1[i] != '.') {
            x1 = 10 * x1 + (v1[i++] - '0');
        }
        while (j < n2 && v2[j] != '.') {
            x2 = 10 * x2 + (v2[j++] - '0');
        }
        if (x1 < x2)
            return -1;
        else if (x1 > x2)
            return 1;
        x1 = 0;
        x2 = 0;
    }
    return 0;
}
```
# C using strtok_r||0ms Beats 100%
```
#pragma GCC optimize("O3", "unroll-loops")
int compareVersion(char* v1, char* v2) {
    const char* dot = ".";
    char *token1, *token2;
    char *ptr1, *ptr2;
    token1 = strtok_r(v1, dot, &ptr1);
    token2 = strtok_r(v2, dot, &ptr2);
    while(token1 != NULL || token2 != NULL){
        int x1 = token1 != NULL ? atoi(token1) : 0;
        int x2 = token2 != NULL ? atoi(token2) : 0;
        if (x1 <x2) return -1;
        else if (x1 > x2) return 1;
        token1 = strtok_r(NULL, dot, &ptr1);
        token2 = strtok_r(NULL, dot, &ptr2);
    }
    return 0;
}
```