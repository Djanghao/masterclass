# C++ stack based solution.  Easy to understand.

**Author:** kfaisal-se
**Votes:** 103
**Link:** [https://leetcode.com/problems/baseball-game/solutions/1265313/](https://leetcode.com/problems/baseball-game/solutions/1265313/)

---

* **Stack based solution.**
```
class Solution {
public:
    int calPoints(vector<string>& ops)
    {
        int value1;
        int value2;
        int ans = 0;
        stack<int>stk;
        
        for(string i:ops)
        {
            if(i == "C")
            {
                stk.pop();
            }
            else if(i == "D")
            {
                stk.push(stk.top()*2);
            }
            else if(i == "+")
            {
                value1 = stk.top();
                stk.pop();
                value2 = stk.top();
                stk.push(value1);
                stk.push(value1 + value2);
            }
            else
            {
                stk.push(stoi(i)); //stoi() to convert string into integer 
            }
        }
        while(stk.size() != 0)
        {
            ans += stk.top();
            stk.pop();
        }
        return ans;
    }
};
```
**Like the solution?
Please upvote \u30C4**