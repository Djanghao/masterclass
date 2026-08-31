# Beats 100% of users with C++ || Using Add String Alternative Approach || Best Solution ||

**Author:** abhirajpratapsingh
**Votes:** 5
**Link:** [https://leetcode.com/problems/reformat-the-string/solutions/4436894/](https://leetcode.com/problems/reformat-the-string/solutions/4436894/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

if you like the approach please upvote it



![image.png](./images/0.png)


if you like the approach please upvote it


# Approach
<!-- Describe your approach to solving the problem. -->
1-
first we create two string first is for alphabet then second one  is for digit 

2-
then we check if the both length absolute difference is greater than 1 then we return false

3-
then we check if alphabet length is greater then digit length string then we first we set alphabet then digit alternatively

4-
then we check if digit length is greater then alphabet length string then we first we set digit then alphabet alternatively

5-
return the string

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O ( N )

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    string reformat(string s) 
    {
        int alpha_len=0;
        int digit_len=0;
        string alphaStr="";
        string digitStr="";
        for(int i=0;i<s.length();i++)
        {
            if(s[i]>='a' && s[i]<='z')
                alphaStr=alphaStr+s[i];
            else if(s[i]>='0' && s[i]<='9')
                digitStr=digitStr+s[i];
        }
        alpha_len=alphaStr.length();
        digit_len=digitStr.length();
        if(abs(alpha_len-digit_len)>1)
            return "";
        if(alpha_len>digit_len)
        {
            int i=0;
            int j=0;
            string ans="";
            while(i<alpha_len && j<digit_len)
            {
                ans=ans+alphaStr[i]+digitStr[j];
                i++;
                j++;
            }
            ans=ans+alphaStr[i];
            return ans;
        }
        else
        {
            int i=0;
            int j=0;
            string ans="";
            while(i<digit_len && j<alpha_len)
            {
                ans=ans+digitStr[i]+alphaStr[j];
                i++;
                j++;
            }
            if(digit_len!=alpha_len)
                ans=ans+digitStr[i];
            return ans;
        }
    }
};
```