# c++ | easy | short

**Author:** venomhighs7
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/2708452/](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/solutions/2708452/)

---


# Code
```
class Solution {
public:
    int minOperationsToFlip(string exp) {
        stack<pair<char,int>> s;
        char val1, val2, op; int cost1, cost2;;
        pair<char,int> p;

        for(int i=0; i<exp.size(); i++){
            if(exp[i] == '(' || exp[i] == '&' || exp[i] == '|'){
                s.push({exp[i], 0});
            }
            else{
                if(exp[i] == ')'){
                    p = s.top();
                    s.pop();
                    s.pop();
                }
                else{
                    p = {exp[i], 1}; 
                }
                while(!s.empty() && (s.top().first == '&' || s.top().first == '|')){
                    op = s.top().first;
                    s.pop();
                    val2 = p.first;
                    cost2 = p.second;
                    val1 = s.top().first;
                    cost1 = s.top().second;
                    s.pop();

                    if(op == '&' && val1 == '1' && val2 == '1') p = {'1', min(cost1, cost2)};
                    if(op == '&' && val1 == '1' && val2 == '0') p = {'0', 1};
                    if(op == '&' && val1 == '0' && val2 == '1') p = {'0', 1};
                    if(op == '&' && val1 == '0' && val2 == '0') p = {'0', min(1 + cost1, 1 + cost2)};

					if(op == '|' && val1 == '1' && val2 == '1') p = {'1', min(1 + cost1, 1 + cost2)};
                    if(op == '|' && val1 == '1' && val2 == '0') p = {'1', 1};
                    if(op == '|' && val1 == '0' && val2 == '1') p = {'1', 1};
                    if(op == '|' && val1 == '0' && val2 == '0') p = {'0', min(cost1, cost2)};
                }
                s.push(p);
            }
        }
        return s.top().second;
    }
};
```