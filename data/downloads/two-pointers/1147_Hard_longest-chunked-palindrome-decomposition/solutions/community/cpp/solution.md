# CPP || Two pointer solution

**Author:** Sanket_Jadhav
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/2534801/](https://leetcode.com/problems/longest-chunked-palindrome-decomposition/solutions/2534801/)

---

```
class Solution {
public:
    int longestDecomposition(string text) {
        int ans=0,i=0,j=text.size()-1;
        string s="",t="";
        
        while(i<j){
            s+=text[i];
            t+=text[j];
            string rev=t;
            reverse(rev.begin(),rev.end());
            
            if(s==rev){
                ans++;
                t="";
                s="";
            }
            
            i++;
            j--;
        }
        ans*=2;
        
        if(i==j || s.size()!=0)ans++;
        return ans;
    }
};