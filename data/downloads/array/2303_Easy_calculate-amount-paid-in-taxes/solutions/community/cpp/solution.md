# ✅C++ | ✅2 Approches | ✅Efficient Solution

**Author:** Yash2arma
**Votes:** 10
**Link:** [https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141274/](https://leetcode.com/problems/calculate-amount-paid-in-taxes/solutions/2141274/)

---

**Please upvote if it helps :)**
**Approach-1:**
```
class Solution {
public:
    double calculateTax(vector<vector<int>>& brackets, int income) 
    {    
        double tax = 0; 
        
        if(brackets[0][0]<=income) tax=(brackets[0][0]*brackets[0][1]/100.0);         
        else return (income*brackets[0][1]/100.0);
            
        for(int i=1; i<brackets.size(); i++)
        {
            if(brackets[i][0]<=income)
                    tax += ((brackets[i][0]-brackets[i-1][0])*brackets[i][1]/100.0);
            
            else 
            {
                tax += ((income-brackets[i-1][0])*brackets[i][1]/100.0);
                break;
            }
        }
        return tax;
        
    }
};
```

**Approach-2**
```
class Solution {
public:
    double calculateTax(vector<vector<int>>& brackets, int income) 
    {   
        if(income==0) return 0.0;
        
        double ans=0;
        int prev=0; 
        
        for(int i=0;i<brackets.size();i++)
        {
            int curr=min(brackets[i][0],income);
            
            ans += ((curr-prev)*brackets[i][1]/100.0);
            
            if(brackets[i][0]>=income) break;
            
            prev=brackets[i][0];
        }
        return ans;
        
    }
};
```