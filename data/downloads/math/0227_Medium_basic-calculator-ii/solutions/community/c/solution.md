# [C++] Intuitive Solution (W/ explanation) | Stack

**Author:** Mythri_Kaulwar
**Votes:** 91
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/1645655/](https://leetcode.com/problems/basic-calculator-ii/solutions/1645655/)

---

**APPROACH :**
* To begin with, we add '+' to the s=input string (Reason will be understood later).
* We initilaize a few variables ```int ans=0```(to store the final ans),  ```char sign='+'```(to store the previous operator), ```long long int curr=0``` (to store the value computed until we encounter some operator) (The final ans is guaranteed to be an integer, but the values in between might exceed integer values).
* While traversing the string :
           1. If we encounter an empty space, we just continue.
           2. Else if we encounter a digit/num (The string might also contain more than 1 digit numbers, so until we find any operator, we'll keep on forming the multi digit number (num = num*10 + s[i] ) ).
           3. When we encounter a sign, we stop & check the previous operator :
                       ** If sign = ```'+'``` (i.e; the previous operator was **+**), we just push ```curr``` into the stack ('Cause this value needs to be added to ```ans```).
                       ** If sign = ``` '-' ```, (i.e; the previous operator was **-**), we toggle ```curr```'s sign and push it into the stack ('Cause this value needs to be subtracted from ```ans```).
                      ** If sign = ```'*'```, (i.e; we encountered a **x** sign previously), then the curr value should be multiplied with it and then added to ```ans```, so we pop the top of the stack, multiply it with the current value and push the result into the stack.
                     ** If sign = ```'/'```, i.e; we encountered a **/** previously, then the curr value should divide the previous value ```ans```, so we pop the top of the stack, divide it with ```curr``` and push the result into the stack.
            4. At the end, we encounter another '+' sign, this is to push the last ```curr``` value into the stack.
            5. Finally we have obtained a stack of values all of which only need to be added to obtain the ans.
            6. So pop the values from stack one by one, add them to ```ans```, and return the ans

**Time Complexity :** O(n) - n = size of the input string

**Auxiliary Space :** O(n) - For the stack

**Code :**
```
class Solution {
public:
    int calculate(string s) {
        s += '+';
        stack<int> stk; 
        
        long long int ans = 0, curr = 0;
        char sign = '+'; //to store the previously encountered sign
        
        for(int i=0; i<s.size(); i++){
            if(isdigit(s[i])) curr = curr*10 + (s[i]-'0'); //keep forming the number, until you encounter an operator
            
            else if(s[i]=='+' || s[i]=='-' || s[i]=='*' || s[i]=='/'){
                
                if(sign == '+') stk.push(curr); //'Cause it has to added to the ans
            
                else if(sign == '-') stk.push(curr*(-1)); //'Cause it has to be subtracted from ans
                
                else if(sign == '*'){
                    int num = stk.top(); stk.pop();  //Pop the top of the stack
                    stk.push(num*curr); //Multiply it with the current value & push the result into stack
                }
                
                else if(sign == '/'){
                    int num = stk.top();stk.pop(); 
                    stk.push(num/curr);  //Divide it with curr value & push it into the stack
                }
                
                curr = 0; 
                sign = s[i]; 
            }
            
        }
        
        while(stk.size()){
            ans += stk.top(); stk.pop();
        }
            
        return ans;    
    }
};
```

The same can be done using vector (Since we have used stack only to store values ) and this approach is faster.
**Code :**
```
class Solution {
public:
    int calculate(string s) {
        char op = '+'; 
        int curr = 0; 
        vector<int> stk; 
        
        for (int i = 0; i < s.size(); ++i) {
            
            if(isdigit(s[i])) curr = curr*10 + (s[i] - '0'); 
            
            if(i==s.size()-1 || s[i]=='+' || s[i]=='-' || s[i]=='*' || s[i]=='/'){
                if (op == '+') stk.push_back(curr); 
                else if (op == '-') stk.push_back(curr*(-1)); 
                else if (op == '*'){
                    int num = stk.back();
                    stk.pop_back();
                    stk.push_back(num * curr);
                }
                else if (op == '/'){
                    int num = stk.back();
                    stk.pop_back();
                    stk.push_back(num / curr); 
                }
                
                curr = 0;
                op = s[i];      
            }
        }
        return accumulate(stk.begin(), stk.end(), 0); 
    }
};
```

If you like my solutions & explanation, please upvote my post to keep me motivated to post everyday  :) :P
			