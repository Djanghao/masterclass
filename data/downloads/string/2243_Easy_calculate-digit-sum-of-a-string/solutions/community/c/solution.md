# ✅✅C++ || Easy Solution || 0ms || Faster

**Author:** himanshu_52
**Votes:** 45
**Link:** [https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955435/](https://leetcode.com/problems/calculate-digit-sum-of-a-string/solutions/1955435/)

---

'''
class Solution {
public:

    string digitSum(string s, int k) {
        string ans;
        while(1){
            
            if(s.length()<=k)   return s;
            
            int sum=0;
            for(int i=0;i<s.size();i++){
                if(i!=0 and i%k==0){
                    ans+=to_string(sum);
                    sum=0;
                }
                sum+=(s[i]-'0');
            }//end of for
            
            ans+=to_string(sum);
            s=ans;
            ans="";
            
        }//end of while
    }
};

'''

Please Upvote if you like the Solution.
\uD83D\uDE42