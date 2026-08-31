# ✅ Short & Simple Solution w/ Explanation | O(N) & O(1) Space Solutions

**Author:** archit91
**Votes:** 101
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1229370/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/1229370/)

---

\u2714\uFE0F ***Solution - I (Using Explicit Stack)***

The reverse polish is a mathematical notation in which operators follow their operands. So, we will get the operands first and then the operators. 

So, we need to store all the previous operands in order that we receive. If we get a operator at anytime, we know that it must be operated on the previous two operands. The result that we get will act as operand for future operations and so it must be stored as well. We can use a stack to store all the operands. The algorithm can be summarized as -
1. If the current token is a ***operand*** (number), push it into the stack
2. If the token is a ***operator***, pop the top two operands from the stack. Find the result of the operation using the operator and two operands and push the result back into stack
3. Finally, the stack will contain the result of evaluated reverse polish expression.

```
int evalRPN(vector<string>& tokens) {
	stack<int> s;
	for(auto& t : tokens) 
		if(t == "+" || t == "-" || t == "*" || t == "/") {
			int op1 = s.top(); s.pop();
			int op2 = s.top(); s.pop();
			if(t == "+") op1 = op2 + op1;
			if(t == "-") op1 = op2 - op1;
			if(t == "/") op1 = op2 / op1;
			if(t == "*") op1 = op2 * op1;   
			s.push(op1);
		}
		else s.push(stoi(t));    // stoi - converts from string to int     
	return s.top(); 
}
```

***Time Complexity :*** **`O(N)`**, where *`N`* is the number of tokens
***Space Complexity :*** **`O(N)`**, for maintaining the stack

---

\u2714\uFE0F ***Solution - II (Using Implicit Stack - Recursion)***

The same solution as above, just using recursion instead of explicit stack. Here, we need to start from the end. The idea remains the same. If the current token is an operator, find the operands for it by recursing for the previous indices. If the current token is integer, just return it.

```
int evalRPN(vector<string>& tokens) {
	int n = size(tokens) - 1;
	return solve(tokens, n);
}
int solve(vector<string>& t, int &i) {
	if(t[i] == "+" || t[i] == "-" || t[i] == "*" || t[i] == "/") {
		char Operator = t[i][0];
		int op1 = solve(t, --i), op2 = solve(t, --i);            
		if(Operator == '+') return op2 + op1;
		if(Operator == '-') return op2 - op1;
		if(Operator == '/') return op2 / op1;
		if(Operator == '*') return op2 * op1;
	}
	return stoi(t[i]);        
}
```

***Time Complexity :*** **`O(N)`**, where *`N`* is the number of tokens
***Space Complexity :*** **`O(N)`**, for the recursive stack

---

\u2714\uFE0F ***Solution - III (Using input vector as stack)***

If we are allowed to modify the input vector, we can optimize the space usage by using the input vector itself as a stack rather than an explicit stack.

Here, we will maintain a pointer *`top`* which will point to the top index of *`tokens`* (our implicit stack). Everytime we receive a integer token, we will push it at the index pointed by *`top`*. Similarly, when we receive an operator, we can pop the top two operands and after computing the result on them, push it back into  *`tokens`*.

The only important thing here is properly maintaining the *`top`* pointer, so that we correctly access the elements the operands.

```
int evalRPN(vector<string>& tokens) {
	int top = 0;
	for(auto& t : tokens) 
		if(t == "+" || t == "-" || t == "*" || t == "/") {
			int op1 = stoi(tokens[--top]); 
			int op2 = stoi(tokens[--top]); 
			if(t == "+") op1 = op2 + op1;
			if(t == "-") op1 = op2 - op1;
			if(t == "/") op1 = op2 / op1;
			if(t == "*") op1 = op2 * op1;   
			tokens[top++] = to_string(op1);
		}
		else tokens[top++] = t;
	return stoi(tokens[0]);
}
```

***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---