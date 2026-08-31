# One Pass - Stack with Java

**Author:** trunkunala
**Votes:** 2
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3591010/](https://leetcode.com/problems/ternary-expression-parser/solutions/3591010/)

---

# Intuition
We start traversing the string from the right side. We ignore any ```:``` being met, but for everything else we put it in a stack.

whenever we encounter a ```?```, it means that we are dealing with a tenary expression. The character left of this ```?``` should be either ```T``` or ```F```. We then ```pop()``` the two characters we just put in the stack and name it ```first``` and ```second```. If the character left of this '?' is ```T```, we push the ``` first``` into the stack, otherwise we push the ```second``` to the stack. 

The end result should be a stack with only one character. It is our desired answer. 

I am trying to think of a better solution that uses recursion or DP. Will update soon.

# Code
```
class Solution {
    public String parseTernary(String expression) {
        return helper(expression);
    }
    String helper(String s){

        Stack<Character> stk = new Stack();

        for(int i=s.length()-1; i>=0; i--){
            
            char c = s.charAt(i);

            if(c=='?'){
                
                char first = stk.pop();
                char second = stk.pop();
                
              if(s.charAt(i-1)=='T'){
                  stk.push(first);
              } else if(s.charAt(i-1)=='F'){
                  stk.push(second);
              }

                i--;

            }else if(c==':') {
                continue;
            } else {
                stk.push(c);
            }

        }

        return String.valueOf(stk.pop());

    }

}
```