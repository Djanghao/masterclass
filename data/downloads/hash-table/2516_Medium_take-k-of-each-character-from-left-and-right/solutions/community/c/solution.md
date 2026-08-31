# C++ | Two pointer solution | O(n)

**Author:** pbmessi
**Votes:** 87
**Link:** [https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/2947980/](https://leetcode.com/problems/take-k-of-each-character-from-left-and-right/solutions/2947980/)

---

Here we use the two pointer technique - i and j represents the characters we take from left and right respectively.
First , we count number of 'a','b','c' in the string to check whether solution is possible or not. Now, as we decrease i pointer, we keep check of count of different alphabets and if any of these count becomes less than k, we start j pointer until the condition is satisfied. 
Time complexity - O(n)
Space complxity -O(1)
```
class Solution {
public:
    int takeCharacters(string s, int k) {
        int ca=0,cb=0,cc=0;
        int n=s.size();
        int ans=n;
        for(int i=0;i<n;i++){
            if(s[i]=='a') ca++;
            if(s[i]=='b') cb++;
            if(s[i]=='c') cc++;
        }
        if(ca<k||cb<k||cc<k) return -1;
        int i=n-1,j=n-1;
        while(i>=0){
            if(s[i]=='a') ca--;
            if(s[i]=='b') cb--;
            if(s[i]=='c') cc--;
            while(ca<k||cb<k||cc<k){
            if(s[j]=='a') ca++;
            if(s[j]=='b') cb++;
            if(s[j]=='c') cc++;
                j--;
            }
            ans=min(ans,i+n-1-j); i--;
        }
        return ans;
    }
};
```