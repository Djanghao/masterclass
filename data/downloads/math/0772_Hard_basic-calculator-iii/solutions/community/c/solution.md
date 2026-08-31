# C++ Explained Template for Basic Calculator I, II, III

**Author:** linlin0208
**Votes:** 34
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/757809/](https://leetcode.com/problems/basic-calculator-iii/solutions/757809/)

---

Use **sign** to remember the lasted operator we have met
Use **number** for the number we are operating 
Use **stack** to track the number we have meet

The basic idea to resolve this type of question involves the following 3 basic steps
Step 1.  calculate the current number you meet. If there is parenthese, calculate the inner parenthesis values recursivley
Step 2.  push the current number inside your stack based on the **last sign** you meet 
Step 3.  sum up all the numbers you have meet by poping elements from the stack

**Basic Calculator I**

```
class Solution {
public:
    int calculate(string s) {
        if (s.size()==0) {
            return 0;
        }
        
        stack<int> myStack;
        char sign = '+'; // sign only indicaite next element attribute
        long number = 0;
		
       // Step 1. calculate the current number you meet.
        for (int i=0; i< s.size(); i++) {
            if (isdigit(s[i])) {
                number = number*10 + long(s[i]-'0');
            } else if (s[i] == '(') {
                int braces = 1;
                int j = i+1;
                while(braces > 0) {
                    if(s[j]=='(')
                        braces++;
                    else if (s[j]==')')
                        braces--;
                    j++;
                }
                int length = (j-1) -i;
                number = calculate(s.substr(i+1, length));
                i = j-1; // adjust cursor to the last calculated character
            }
			
			// Step 2.  push the current number inside your stack based on the **last sign** you meet
            if (s[i] =='+' || s[i] =='-' || i == s.size()-1) { 
                switch(sign) {
                    case '+': {
                        myStack.push(number);
                        break;
                    }
                    case '-': {
                        myStack.push(-number);
                        break;
                    }
                }
                sign = s[i]; // assign new operator 
                number = 0; // reset the current number 
            }
        }
        
		// Step 3.  sum up all the numbers you have meet by poping elements from the stack
        int sum = 0;
        while(!myStack.empty()) {
            sum += myStack.top();
            myStack.pop();
        }
        return sum;
    }
};
```

**Basic Calculator II**
```
class Solution {
public:
    int calculate(string s) {
        stack<int> myStack;
        
        char sign = '+'; // sign only indicaite next element attribute
        int number = 0;
                
        for (int i = 0; i < s.size(); i++) {
            // Step 1. calculate the current number you meet.
			if (isdigit(s[i])) {
                number = number*10+ int(s[i]-'0');
            }
			
			// Step 2.  push the current number inside your stack based on the **last sign** you meet 
            // now we can check the latest sign and use stack to accommodate current number
            if (s[i] == '+' || s[i] == '-' || s[i]=='*' || s[i]=='/' || i == s.size()-1) {
                switch(sign) {
                    case '+': {
                        myStack.push(number);
                        break;                        
                    }
                    case '-': {
                        myStack.push(-number);
                        break;                        
                    }
                    case '*': {
                        int top = myStack.top();
                        myStack.pop();
                        myStack.push(top*number);
                        break;
                    }  
                    case '/': {
                        int top = myStack.top();
                        myStack.pop();
                        myStack.push(top/number);                        
                    }
                        
                }
                sign = s[i]; // assign new operator 
                number = 0; // reset the current number 
            }
        }

		// Step 3.  sum up all the numbers you have meet by poping elements from the stack
        int sum = 0;
        while(!myStack.empty()) {
            sum += myStack.top();
            myStack.pop();
        }
        return sum;
    }
};
```

**Basic Calculator III**
```
class Solution {
public:
    int calculate(string s) {
        if (s.size() == 0) {
            return 0;
        }
        
        stack<int> myStack;
        char sign = '+'; // sign only indicaite next element attribute
        long number = 0;
        
        for (int i = 0; i< s.size(); i++) {
		    // Step 1. calculate the current number you meet. have a recursive call the func encounter a parenthese
            if (isdigit(s[i])) {
                number = number*10 + long(s[i]-'0');
            } else if (s[i] == '(') {
                int j = i + 1; 
                int braces = 1;
                while (braces > 0) {
                    if (s[j] == '(')
                        braces++;
                    else if (s[j] ==')')
                        braces--;
                    j++;
                }
                
                int length = (j-1) -i ;
                number = calculate(s.substr(i + 1, length));
                i = j-1; // adjust cursor to the last calculated character
            }
            
			// Step 2.  push the current number inside your stack based on the **last sign** you meet
            if (s[i] == '+' || s[i] == '-' || s[i] == '*' || s[i] == '/' || i == s.size() - 1) {
                switch (sign) {
                    case '+':
                        myStack.push(number);
                        break;
                    case '-':
                        myStack.push(-number);
                        break;
                    case '*': {
                        int top = myStack.top();
                        myStack.pop();
                        myStack.push(top*number);
                        break;                        
                    }
                    case '/': {
                        int top = myStack.top();
                        myStack.pop();
                        myStack.push(top/number);
                        break;                        
                    }
                }

                sign = s[i]; // assign new operator 
                number = 0; // reset the current number 
            }
        }
        
		// Step 3.  sum up all the numbers you have meet by poping elements from the stack
        int sum = 0;
        while(!myStack.empty()) {
            sum += myStack.top();
            myStack.pop();
        }
        return sum;
    }
};
```

Java version reference https://leetcode.com/problems/basic-calculator-iii/discuss/344371/Java-Common-template-for-Basic-Calculator-I-II-and-III-using-Stack