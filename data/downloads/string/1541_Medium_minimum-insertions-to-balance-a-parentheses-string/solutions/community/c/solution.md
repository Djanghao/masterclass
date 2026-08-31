# C++ | With & Without Stack | Clear & detailed step by step explanation

**Author:** MaitreyeePaliwal
**Votes:** 48
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/1394902/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/1394902/)

---


#### **Intution:**
This problem is similar to [921. Minimum Add to Make Parentheses Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/).  Note that here, for every open parantheses, there must be 2 consecutive close parantheses. 

Seeing any question involving parenthesis balancing, it becomes quite intutive to use stacks. 
However, for problems involving only a single type of parenthesis (open, curly or square), we can generally (but not always) solve them without stack in the same time complexity.But as an advantage, this could solve the problem in constant space.

In this post, I am adding two approaches - one using stack and another without stack.
The codes are well commented for your better understanding.

##### 1. Using stack:


```
class Solution {
public:
    int minInsertions(string s) {
        stack <char> st;
        
        // open & close denote number of open and close brackets needed respectively
        int open = 0, close = 0;
        
        for(int i = 0; i<s.length(); i++){
            // Push all open brackets
            if(s[i]=='(') st.push(s[i]);
            
            // For close brackets
            else if(s[i]==')') {
                // if consecutive close brackets appear, remove one open bracket from stack which would balance the two close brackets.  
				// If however stack is empty, an open bracket is needed. 
                if(  i<s.length()-1 && s[i+1]==')'){
                    if(!st.empty()) st.pop();
                    else open++;
                    i++; //Remember to increment the ith pointer!!
                }
                
                // if the next element is not a closing bracket- 2 cases: stack is empty or not
                else{
                    // for an empty stack ->    ')' bracket needs an '(' and a ')' to make '( ) )' 
                    if(st.empty()){
                        open++;
                        close++; 
                    }
                    
                    //for a filled stack ->     ')' bracket and atleast 1 '(' in stack would need 1 ')' to make '( )) ' 
                    else{
                        close++;
                        st.pop();
                    }
                }
            }
        }
        
        /* After traversing the complete string, the minimum brackets needed include:
        1. st.size() indicates the '(' which never had the required number of ')' found in the string.
        2. close indicates number of close bracketes needed
        3. open indicates number of open brackets needed. Note that these are the need of '(' brackets encountered when stack was empty. 
        */
        int total = st.size() * 2 + close + open;
        return total; 
		}
};
```

**Complexity Analysis:** Time Complexity - O(n) , since the entire string of length n is traversed once, and for each character we perform the operations in constant time. 
Space Complexity - O(n) becuase of stack


##### 2. Without  using stack : 

```
class Solution {
public:

    int minInsertions(string s) {
        //Let open be the number of open brackets in the stack which did not get equivalent close brackets to balance.
        // openneeded be the number of ( needed (Found when stack was empty)
        // closeneeded be the number of ) needed 
        int open = 0; 
        int openneeded = 0;
        int closeneeded = 0;
        
        for(int i = 0; i<s.size(); i++){
            
            //For open brackets
            if(s[i]=='(')
                open++;
            
            //For close brackets
            else if(s[i]==')') {
                
                //If next char is also a ')' , check if an open bracket was encountered before and has not yet been balanced or not. If yes, decrement the number of open brackets. 
                if(  i<s.length()-1 && s[i+1]==')'){
                    if(open==0) openneeded++;
                    else open--;
                    i++;
                }
                // If next char is a (
                else{
                    if(open==0){
                        openneeded++;
                        closeneeded++;
                    }
                    else {
                        open--;
                        closeneeded++;
                    }
                }
            }
        }
        
        int total = 2*open + openneeded + closeneeded;
        return total; 
		}
};
```

**Complexity Analysis:** Time Complexity - O(n) , since the entire string of length n is traversed once, and for each character we perform the operations in constant time. 
Space Complexity - O(1) constant space 
