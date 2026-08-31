# C++ Solution, Recursion - Easy to understand

**Author:** hem_ajet
**Votes:** 13
**Link:** [https://leetcode.com/problems/strobogrammatic-number-ii/solutions/703728/](https://leetcode.com/problems/strobogrammatic-number-ii/solutions/703728/)

---

```
class Solution {
public:
    vector<string> findStrobogrammatic(int n) 
    {
        return helper(n,n);   
    }

    vector<string>helper(int n,int m)
    {
        if(n==0) return vector<string>{""};
        if(n==1) return vector<string> {"0","1","8"};

        vector<string> list = helper(n-2,m);
        vector<string> result;

        for(int i=0;i<list.size();i++)
        {
            string s = list[i];
            if(n!=m) 
                result.push_back("0"+s+"0");

            result.push_back("1"+s+"1");
            result.push_back("6"+s+"9");
            result.push_back("8"+s+"8");
            result.push_back("9"+s+"6");
        }
        return result;
    }
};
```