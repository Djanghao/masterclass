# I bet you will understand | Intutive solution | Beginner Friendly | C++

**Author:** imraghavagr
**Votes:** 436
**Link:** [https://leetcode.com/problems/generate-parentheses/solutions/3290261/](https://leetcode.com/problems/generate-parentheses/solutions/3290261/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
This problem is one of the classical recursion problems. 
For any given n, lets say n = 2, we have to fill four places in our output ("_ _ _ _"). And each of these places can be either filled by an open braces "(" or a closed braces ")". 

# Approach
<!-- Describe your approach to solving the problem. -->
                                    "_  _  _  _"
                                    / \\     
                                  '(' ')'

For every place we have two choices and 1 decision to make. 
Our choices are to either use '(' or ')'.

Now lets try to visualize the recursive tree based upon the choices discussed above.

Initially, we have:
For n = 3
current ouput = ""
availableOpenBracketsCnt = 3 and availableCloseBracketsCnt  = 3

The first choise is very simple. Since we can not start a balanced parenthesis sequence with ')', we have only one choice in the begining. So our output will be '(' and count of open brackets left = 2 and count of closed brackets left = 3.

                                        op      ip
                                        ""   O-3, C-3
                                
                                        "(",O-2,C-3
                        
                    "((",O-1,C-3                            "()", O-2,C-2

        "(((",0,3             "(()",1,2                       "()(",1,2

        "((()",0,2      "(()(",0,2    "(())",1,1        "()((",0,2      "()()",1,1

        "((())",0,1     "(()()",0,1   "(())(",0,1       "()(()",0,1     "()()(",0,1

        "((()))",0,0   "(()())",0,0   "(())()",0,0      "()(())",0,0    "()()()", 0,0
                            

# Observation from the recursive tree

 - Whenever we have count of open brackets equal to the count of close brackets, we have only one choice - that is to use '('. Because, all the brackets till now have been balanced. And we can not start a new sequence with ')'. 
 - Whenever, count of close bracket is 0, we can only use '('.
 - Whenever, count of open bracket is 0, we can only use ')'.
 - And for all the remaining cases, we have both the choices.
 - We get an answer, when count of open == 0 and count of close == 0.

Just convert these 5 observations into an algorithm and write the code. 


# Code
```
class Solution {
public:
    void solve(string op, int open, int close, vector<string> &ans){
        if(open == 0 && close == 0){
            ans.push_back(op);
            return;
        }
        //when count of open and close brackets are same then 
        //we have only one choice to put open bracket 
        if(open == close){
            string op1 = op;
            op1.push_back('(');
            solve(op1, open-1, close, ans);
        }
        else if(open == 0){
            //only choice is to put close brackets 
            string op1 = op;
            op1.push_back(')');
            solve(op1, open, close-1, ans);
        }
        else if(close == 0){
            //only choise is to use open bracket 
            string op1 = op;
            op1.push_back('(');
            solve(op1, open-1, close, ans);
        }
        else{
            string op1 = op;
            string op2 = op;
            op1.push_back('(');
            op2.push_back(')');
            solve(op1, open-1, close, ans);
            solve(op2, open, close-1, ans);
        }
    }
    vector<string> generateParenthesis(int n) {
        int open = n;
        int close = n;
        vector<string> ans;
        string op = "";
        solve(op, open, close, ans);
        return ans;
    }
};
```
**Note** : I have kept the code implementation simple by just following the observations I mentioned. The same code can be made more compact by reducing some conditional statements (although the time and space complexity will remain the same).
Try to come up with your own compact version. Refer the comments of other peers for help.

# Complexity Analysis: 
- Time Complexity : $O(N*2^N)$ where N = 2*n
 $O(2^N)$ : We have N = 2n places to fill and for every place we will have a maximum of 2 choices. 
 $O(N)$ : We will have to multiply our TC by a factor of N, as every time when we hit the base case, we will copy current op (which is of size N) into the answer vector.
- Space Complexity : $O(N)$ + Recursive Stack Space
 We have used an extra string of size N for storing current output
# Please upvote the solution if you understood it.

![NRRa.gif](./images/0.gif)

**You can connect with me on linkedin, If you understood my solution :D**
https://www.linkedin.com/in/imraghavagr/

