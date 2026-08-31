# Easy C++ solution || commented fully

**Author:** saiteja_balla0413
**Votes:** 12
**Link:** [https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1317007/](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions/solutions/1317007/)

---

```
class Solution {
public:
    int minCharacters(string a, string b) {
        //calculate the opertions for each condition  and return the  min operations among the conditions
        
        int m=a.length();
        int n=b.length();
        
        //calculate the freq of every character in a and b
        vector<int> freq1(26,0);
        vector<int> freq2(26,0);
        for(int i=0;i<a.length();i++)
        {
            freq1[a[i]-'a']++;
        }
        for(int j=0;j<b.length();j++)
        {
            freq2[b[j]-'a']++;
        }
        
        int res=INT_MAX;
        //for every character in alphabets get the number of operations to satisfy each condition
        for(int i=0;i<26;i++)
        {
            //condition 3
            //change all the characters to i char in alphabets
            //the total characters in both the strings which are different should be changed
            res=min(res,m+n-freq1[i]-freq2[i]);
            if(i>0)
            {
                freq1[i]+=freq1[i-1];
                freq2[i]+=freq2[i-1];
                
                  //condition 1
                //change all char in string a to strictly less than curr char(i);
                //change all char in string b to greater than or equal to curr char i;
                //change all the char greater than curr i in a i.e., m-freq[i-1];
                res=min(res, m -freq1[i-1] + freq2[i-1]);
                    
                
                //condition 2
                //change all the char in b strictly less than the curr character
                //change all char in a greater than or equal to curr char (i);
                res=min(res,n-freq2[i-1] + freq1[i-1]);
            }
        }
        return res;
    }
};
```
**Upvote if this helps you :)**