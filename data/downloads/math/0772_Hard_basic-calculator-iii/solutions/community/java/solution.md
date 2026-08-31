# Java - Common template for Basic Calculator I, II, and III using Stack

**Author:** bluesky299
**Votes:** 46
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/344371/](https://leetcode.com/problems/basic-calculator-iii/solutions/344371/)

---

* Basic Calculator I - [Link](https://leetcode.com/problems/basic-calculator)
* Basic Calculator II - [Link](https://leetcode.com/problems/basic-calculator-ii)
* Basic Calculator III - [Link](https://leetcode.com/problems/basic-calculator-iii)


1. Basic Calculator I 
    
	
	   class Solution {
	
       public int calculate(String s) {
	 
        if (s == null || s.length() == 0) {
            return 0;
        }
        
        Stack<Integer> stack = new Stack<>();
        int num = 0;
        char sign = '+';
        
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            char current = s.charAt(i);            
            if (Character.isDigit(current)) {
                num = 10 * num + (int)(current - '0');
            }else if (current == '(') {
                int j = i + 1; int braces = 1;
                for (; j < n; j++) {
                    if (s.charAt(j) == '(') ++braces;
                    if (s.charAt(j) == ')') --braces;
                    if (braces == 0) break;
                }                
                num = calculate(s.substring(i + 1, j));
                i = j;
            } 
            
            if (current == '+' || current == '-'  || i == n - 1) { // i == n-1, makes sure the last number is added to the stack. 
                switch (sign) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                }
				num = 0;
                sign = current;
            }
        }
        int result = 0;
        while(!stack.isEmpty()) result += stack.pop();
        
        return result;
    }
}

TIme Complexity : O(n^2) where n = length of String s. Substring() function takes O(n) time.

2. Basic Calculator II 

       class Solution {
       
	   public int calculate(String s) {
        if (s == null || s.length() == 0) {
            return 0;
        }
        
        Stack<Integer> stack = new Stack<>();
        int num = 0;
        char sign = '+';
        
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            char current = s.charAt(i);            
            if (Character.isDigit(current)) {
                num = 10 * num + (int)(current - '0');
            }
            
            if (current == '+' || current == '-' || current == '*' || current == '/' || i == n - 1) {
                switch (sign) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                    case '*':
                        stack.push(stack.pop() * num);
                        break;
                    case '/':
                        stack.push(stack.pop() / num);
                        break;
                }
				num = 0;
                sign = current;
            }
        }
        
        int result = 0;
        while(!stack.isEmpty()) result += stack.pop();
        
        return result;
    }
	}

TIme Complexity : O(n) where n = length of String s.

3. Basic Calculator III


       class Solution  {
    
	   public int calculate(String s) {
	
        if (s == null || s.length() == 0) {
            return 0;
        }
        Stack<Integer> stack = new Stack<>();
        int num = 0;
        char sign = '+';
        
        int n = s.length();
        
        for (int i = 0; i < n; i++) {
            char current = s.charAt(i);            
            if (Character.isDigit(current)) {
                num = 10 * num + (int)(current - '0');
            }else if (current == '(') {
                int j = i + 1; int braces = 1;
                for (; j < n; j++) {
                    if (s.charAt(j) == '(') ++braces;
                    if (s.charAt(j) == ')') --braces;
                    if (braces == 0) break;
                }                
                num = calculate(s.substring(i + 1, j));
                i = j;
            } 
            
            if (current == '+' || current == '-' || current == '*' || current == '/' || i == n - 1) {
                switch (sign) {
                    case '+':
                        stack.push(num);
                        break;
                    case '-':
                        stack.push(-num);
                        break;
                    case '*':
                        stack.push(stack.pop() * num);
                        break;
                    case '/':
                        stack.push(stack.pop() / num);
                        break;
                }
				num = 0;
                sign = current;
            }
        }
        
        int result = 0;
        while(!stack.isEmpty()) result += stack.pop();
        
        return result;
    }
	}
	
	TIme Complexity : O(n^2) where n = length of String s. Substring() function takes O(n) time.