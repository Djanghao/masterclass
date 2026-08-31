# [c++][o(n)][2 approaches][ faster than 100.00%][easy understanding][include stack based]

**Author:** rajat_gupta_
**Votes:** 46
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/903258/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/903258/)

---

**1.TC: O(n) [faster than 100.00%]**
```
class Solution {
public:
    int maxDepth(string s) {
        int maxi=0,curr=0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='('){
                maxi=max(maxi,++curr);
            }else if(s[i]==')'){
                curr--;
            }
        }
        return maxi;
    }
};
```
**2. TC: O(n) [stack-based] [faster than 100.00%]**
```
class Solution {
public:
    int maxDepth(string s) {
        stack<char> st;
        int maxi=0;
        for(int i=0;i<s.size();i++){
            if(s[i]=='('){
                st.push('(');
            }else if(s[i]==')'){
                int x=st.size();
                maxi=max(maxi,x);
                st.pop();
            }
        }
        return maxi;
    }
};
```
**Feel free to ask any question in the comment section.**
I hope that you've found the solution useful.
In that case, **please do upvote and encourage me** to on my quest to document all leetcode problems\uD83D\uDE03
Happy Coding :)
