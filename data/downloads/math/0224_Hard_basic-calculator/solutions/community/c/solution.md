# ✅ C++ || Explained || Stacks || Beginner Friendly[Easy To Understand]

**Author:** 99NotOut_half_dead
**Votes:** 158
**Link:** [https://leetcode.com/problems/basic-calculator/solutions/1457045/](https://leetcode.com/problems/basic-calculator/solutions/1457045/)

---

# ***Approach***
```
This is a very good stacks problem , we are given an expression in form of string with 
chars as [nums , '(' , ')' , '+' , '-' , ' ']

Note : we can totally ignore ' ' and  '+'.
    
Logic:
        what we are going to do is very simple , 
        first intilaize two vars , sum and sign
        sum = 0
        sign = +1
            
        traverse the string:
            if(ch is digit)
                num = get_full_num; // may be multidigit
                add it to sum , sum += (num * sign)
                reset sign to +1
            else if(ch is '(')
                save current state of sum and sign in stack
                reset sum and sign
            else if(ch is ')')
                sum = val_at_top + (sign_at_top * sum)
                pop;
            else if(ch is '-')
                toggle sign
                
       the use of sum and sign are to evaluate current expression inside a () braces or completely outside
       stack is used to store the state of sum and sign take example
       1 + 2 + 3 - (5 + 6) => 6 - (5 + 6)
                when we encounter '(' saving state means
                stack will store pair(6 , -) and first calculate (5 + 6)
                once (5 + 6) is calculated which is 11
                pop from stack => sum = (6 + (sum * -1)) = (6 + (11 * -1)) = -5 ans
```
# ***Code***
```
class Solution {
public:
   int calculate(string s) {
       stack<pair<int,int>> st; // pair(prev_calc_value , sign before next bracket () )
       
       long long int sum = 0;
       int sign = +1;
       
       for(int i = 0 ; i < s.size() ; ++i)
       {
           char ch = s[i];
           
           if(isdigit(ch))
           {
               long long int num = 0;
               while(i < s.size() and isdigit(s[i]))
               {
                   num = (num * 10) + s[i] - '0';
                   i++;
               }
               i--; // as for loop also increase i , so if we don't decrease i here a sign will be skipped
               sum += (num * sign);
               sign = +1; // reseting sign
           }
           else if(ch == '(')
           {
               // Saving current state of (sum , sign) in stack
               st.push(make_pair(sum , sign));
               
               // Reseting sum and sign for inner bracket calculation
               sum = 0; 
               sign = +1;
           }
           else if(ch == ')')
           {
               sum = st.top().first + (st.top().second * sum);
               st.pop();
           }
           else if(ch == '-')
           {
               // toggle sign
               sign = (-1 * sign);
           }
       }
       return sum;
   }
};
```
# ***If you liked the solution , Please Upvote!!!***