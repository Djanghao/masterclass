# C++ Python sum of  n(n+1)/2 ||0 ms Beats 100%

**Author:** anwendeng
**Votes:** 16
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266521/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4266521/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
One pass to find out all longest homogenous substrings in `s` , and store the lengths in a container `len_homo`.

C code is rare & implemented & runs in 0 ms & beats 100%
# Approach
<!-- Describe your approach to solving the problem. -->

A longest homogenous substring in `s` is the substring with all the same alphabets which is not extendible.

Let `h` be a longest homogenous substring in `s` with length `sz`.
There are `sz(sz+1)/2` homogeous substrings in `h`.
sz  homogenous substrings of length 1
sz-1 homogenous substrings of length 2
sz-2 homogenous substrings of length 3
....
1   homogenous substrings of length sz

Summing them up
$$
ans=\\sum_{h:s, len(h)=sz}\\frac{sz(sz+1)}{2}\\pmod{ 10^9+7}
$$
2nd approach does not use the container `len_homo`, and is fast in 12 ms , SC : O(1).

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n+m)$$ where n=len(s) m=len(len_homo)
$O(n)$ for optimized code
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m)\	o O(1)$$
# Code
```
#pragma GCC optimize("O3")
class Solution {
public:
    const long long mod=1e9+7;
    int countHomogenous(string s) {
        vector<int> len_homo;
        char prev='X';
        int count=0;

        #pragma unroll
        for(char c: s){
            if (c!=prev){
                len_homo.push_back(count);
                count=1;
            }
            else count++;
            prev=c;// update prev
        }
        len_homo.push_back(count);// last one

        long long ans=0;

        #pragma unroll
        for(int sz: len_homo)
            ans=(ans+(long long)sz*(sz+1)/2)%mod;
        return ans;
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
# optimized Code runs in 12 ms
```
#pragma GCC optimize("O3")
class Solution {
public:
    const long long mod=1e9+7;
    int countHomogenous(string s) {
        char prev='X';
        int count=0;
        long long ans=0;
        for(char c: s){
            if (c!=prev){
                ans=(ans+(long long)count*(count+1)/2%mod);
                count=1;
            }
            else count++;
            prev=c;// update prev
        }
        ans=(ans+(long long)count*(count+1)/2%mod);// last one
        return ans;
    }
};
```
# Python code 
```
class Solution:
    def countHomogenous(self, s: str) -> int:
        mod=10**9+7
        prev='X'
        count=0
        ans=0
        for c in s:
            if c!=prev:
                ans=(ans+count*(count+1)//2)% mod
                count=1
            else:
                count+=1
            prev=c
        ans=(ans+count*(count+1)//2)% mod
        return ans
        
```
![100.png](./images/0.png)

# C code runs in 0 ms beats 100%
```
#pragma GCC optimize("O3")
const long long mod=1e9+7;

int countHomogenous(char * s){
    int n=strlen(s);
    char prev='X';
    int count=0;
    long long ans=0;
    for(register i=0; i<n; i++){
        if (s[i]!=prev){
            ans=(ans+(long long)count*(count+1)/2%mod);
            count=1;
        }
        else count++;
        prev=s[i];
    }
    ans=(ans+(long long)count*(count+1)/2%mod);// last one
    return ans;
}
```
