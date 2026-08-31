# 0ms concise C++ solution (perfectly handles the follow-up and leading 0s)

**Author:** zjh08177
**Votes:** 139
**Link:** [https://leetcode.com/problems/additive-number/solutions/75576/](https://leetcode.com/problems/additive-number/solutions/75576/)

---

use a helper function to add two strings. 

Choose first two number then recursively check.

**Note that the length of first two numbers can't be longer than half of the initial string, so the two loops in the first function will end when *i>num.size()/2*  and *j>(num.size()-i)/2*, this will actually save a lot of time.**


**Update the case of heading 0s
e.g. "100010" should return false**


    class Solution {
    public:
            bool isAdditiveNumber(string num) {
                for(int i=1; i<=num.size()/2; i++){
                    for(int j=1; j<=(num.size()-i)/2; j++){
                        if(check(num.substr(0,i), num.substr(i,j), num.substr(i+j))) return true;
                    }
                }
                return false;
            }
            bool check(string num1, string num2, string num){
                if(num1.size()>1 && num1[0]=='0' || num2.size()>1 && num2[0]=='0') return false;
                string sum=add(num1, num2);
                if(num==sum) return true;
                if(num.size()<=sum.size() || sum.compare(num.substr(0,sum.size()))!=0) return false;
                else return check(num2, sum, num.substr(sum.size()));
            } 
            string add(string n, string m){
                string res;
                int i=n.size()-1, j=m.size()-1, carry=0;
                while(i>=0 || j>=0){
                    int sum=carry+(i>=0 ? (n[i--]-'0') : 0) + (j>=0?  (m[j--]-'0') : 0);
                    res.push_back(sum%10+'0');
                    carry=sum/10;
                }
                if(carry) res.push_back(carry+'0');
                reverse(res.begin(), res.end());
                return res;
            }
        };