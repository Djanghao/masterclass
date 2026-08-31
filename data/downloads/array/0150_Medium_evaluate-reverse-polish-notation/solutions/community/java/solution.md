# [Java] Accepted Code: Stack implementation.

**Author:** pvaldes
**Votes:** 301
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/47430/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/47430/)

---

Hi everyone.  
The Reverse Polish Notation is a stack of operations, thus, I decided to use java.util.Stack to solve this problem. As you can see, I add every token as an integer in the stack, unless it's an operation. In that case, I pop two elements from the stack and then save the result back to it. After all operations are done through, the remaining element in the stack will be the result.  
Any comments or improvements are welcome.

Cheers.

    import java.util.Stack;
    
    public class Solution {
        public int evalRPN(String[] tokens) {
            int a,b;
    		Stack<Integer> S = new Stack<Integer>();
    		for (String s : tokens) {
    			if(s.equals("+")) {
    				S.add(S.pop()+S.pop());
    			}
    			else if(s.equals("/")) {
    				b = S.pop();
    				a = S.pop();
    				S.add(a / b);
    			}
    			else if(s.equals("*")) {
    				S.add(S.pop() * S.pop());
    			}
    			else if(s.equals("-")) {
    				b = S.pop();
    				a = S.pop();
    				S.add(a - b);
    			}
    			else {
    				S.add(Integer.parseInt(s));
    			}
    		}	
    		return S.pop();
    	}
    }