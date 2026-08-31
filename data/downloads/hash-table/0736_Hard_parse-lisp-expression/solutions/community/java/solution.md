# JAVA Easy 100% Recursion(Dfs)+HashMap solution

**Author:** AnneOnymous
**Votes:** 2
**Link:** [https://leetcode.com/problems/parse-lisp-expression/solutions/6099288/](https://leetcode.com/problems/parse-lisp-expression/solutions/6099288/)

---

Time Complexity: O(k + d * n + m)  
- k: Length of the input expression (tokenization).  
- d: Depth of nested `let` blocks.  
- n: Number of variables in the largest scope.  
- m: Number of tokens to evaluate.  

Space Complexity: O(d * n + d + k)  
- d * n: Memory for copying scopes.  
- d: Recursive call stack.  
- k: Tokenized input storage.  

class Solution {

    public int evaluate(String expression) 
	{
        return eval(expression, new HashMap<>());
    }

    private int eval(String expr, Map<String, Integer> scope) 
	{
        // 1. If it's a number, return it directly
        if (Character.isDigit(expr.charAt(0)) || expr.charAt(0) == '-') 
            return Integer.parseInt(expr);

        // 2. If it's a variable, get its value from the scope
        if (Character.isLowerCase(expr.charAt(0)) && !expr.startsWith("(")) 
            return scope.get(expr);     //e.g. scope={ "x": 2, "y": 3 }  so return 2 for eval(x, scope)

        // 3. Remove outer parentheses and tokenize the expression
        expr=expr.substring(1, expr.length() - 1); // Remove outer parentheses
        List<String> tokens = new ArrayList<>();
        int balance=0, start=0;

        for (int i=0; i<expr.length(); i++) {
            char c=expr.charAt(i);
            if (c=='(') balance++;
            if (c==')') balance--;
            if (balance==0 && (c==' '||i==expr.length()-1)) 
            {//Splits tokens when we hit a space (c == ' ') or reach the last character (i == expr.length() - 1
                tokens.add(expr.substring(start, i+(i==expr.length()-1?1:0)).trim());     //If the current character is the last one, extend the substring to include it (i + 1).
                start=i+1;
            }
        }
        //e.g. tokens = ["let", "x", "2", "(mult x (let x 3 y 4 (add x y)))"];
        // 4. Parse operation and evaluate accordingly
        String operation = tokens.get(0);
        if (operation.equals("add")) 
            return eval(tokens.get(1), scope) + eval(tokens.get(2), scope);
        else if (operation.equals("mult"))   //tokens = ["mult", "x", "(let x 3 y 4 (add x y))"];
            return eval(tokens.get(1), scope) * eval(tokens.get(2), scope);     //get x val * get val of the other expr
        else                // "let" operation
        { 
            Map<String, Integer> newScope = new HashMap<>(scope); // Create a new scope // Scope: {}
            for (int i=1;i<tokens.size()-1;i+=2) 
                newScope.put(tokens.get(i), eval(tokens.get(i+1), newScope)); // Assign variables - newScope.put("x", eval("2", newScope)); // x = 2
            return eval(tokens.get(tokens.size()-1), newScope); // Evaluate the final expression - eval("(mult x (let x 3 y 4 (add x y)))", newScope);

        }
    }
}


-----


Let\u2019s go through the example step by step and see how the code works on it.

---

### **Input Expression:**
```java
"(let x 2 (mult x (let x 3 y 4 (add x y))))"
```

---

### **Initial Call to `evaluate()`**
The `evaluate` function initializes an empty scope and calls `eval`:
```java
return eval("(let x 2 (mult x (let x 3 y 4 (add x y))))", new HashMap<>());
```

---

### **Step-by-Step Execution**

#### **1. Outer `let` Expression**
**Input to `eval`:**
```java
"(let x 2 (mult x (let x 3 y 4 (add x y))))"
```

1. **Number and Variable Check:**
   - The expression starts with `'('`, so it\u2019s not a number or variable.

2. **Remove Outer Parentheses:**
   ```java
   expr = "let x 2 (mult x (let x 3 y 4 (add x y)))";
   ```

3. **Tokenization:**
   Using the balance counter, the tokens are split into:
   ```java
   tokens = ["let", "x", "2", "(mult x (let x 3 y 4 (add x y)))"];
   ```

4. **Operation:**
   ```java
   operation = "let";
   ```

5. **Create a New Scope:**
   ```java
   Map<String, Integer> newScope = new HashMap<>(scope); // Scope: {}
   ```

6. **Process Variables:**
   - Assign `x = 2`:
     ```java
     newScope.put("x", eval("2", newScope)); // x = 2
     ```

7. **Evaluate the Final Expression:**
   ```java
   eval("(mult x (let x 3 y 4 (add x y)))", newScope);
   ```

---

#### **2. `mult` Expression**
**Input to `eval`:**
```java
"(mult x (let x 3 y 4 (add x y)))"
```

1. **Number and Variable Check:**
   - The expression starts with `'('`, so it\u2019s not a number or variable.

2. **Remove Outer Parentheses:**
   ```java
   expr = "mult x (let x 3 y 4 (add x y))";
   ```

3. **Tokenization:**
   ```java
   tokens = ["mult", "x", "(let x 3 y 4 (add x y))"];
   ```

4. **Operation:**
   ```java
   operation = "mult";
   ```

5. **Evaluate the First Argument:**
   ```java
   eval("x", scope); // Resolves to x = 2
   ```

6. **Evaluate the Second Argument:**
   ```java
   eval("(let x 3 y 4 (add x y))", scope);
   ```

---

#### **3. Inner `let` Expression**
**Input to `eval`:**
```java
"(let x 3 y 4 (add x y))"
```

1. **Number and Variable Check:**
   - The expression starts with `'('`, so it\u2019s not a number or variable.

2. **Remove Outer Parentheses:**
   ```java
   expr = "let x 3 y 4 (add x y)";
   ```

3. **Tokenization:**
   ```java
   tokens = ["let", "x", "3", "y", "4", "(add x y)"];
   ```

4. **Operation:**
   ```java
   operation = "let";
   ```

5. **Create a New Scope:**
   ```java
   Map<String, Integer> newScope = new HashMap<>(scope); // Scope: { x: 2 }
   ```

6. **Process Variables:**
   - Assign `x = 3`:
     ```java
     newScope.put("x", eval("3", newScope)); // x = 3
     ```
   - Assign `y = 4`:
     ```java
     newScope.put("y", eval("4", newScope)); // y = 4
     ```

7. **Evaluate the Final Expression:**
   ```java
   eval("(add x y)", newScope);
   ```

---

#### **4. `add` Expression**
**Input to `eval`:**
```java
"(add x y)"
```

1. **Number and Variable Check:**
   - The expression starts with `'('`, so it\u2019s not a number or variable.

2. **Remove Outer Parentheses:**
   ```java
   expr = "add x y";
   ```

3. **Tokenization:**
   ```java
   tokens = ["add", "x", "y"];
   ```

4. **Operation:**
   ```java
   operation = "add";
   ```

5. **Evaluate Arguments:**
   - Resolve `x`:
     ```java
     eval("x", scope); // Resolves to x = 3
     ```
   - Resolve `y`:
     ```java
     eval("y", scope); // Resolves to y = 4
     ```

6. **Compute Result:**
   ```java
   3 + 4 = 7;
   ```

---

#### **5. Compute `mult`:**
Returning to the `mult` expression:
- First argument: `x = 2`
- Second argument: Result of `let = 7`

```java
2 * 7 = 14;
```

---

#### **6. Final Result:**
Returning to the outer `let`:
- The result of the final expression is:
```java
14;
```

---

### **Output**

```java
14
```

---

### **Variable Scope at Each Step**

1. **Outer `let`:**
   ```java
   Scope: { x: 2 }
   ```

2. **Inner `let`:**
   ```java
   Scope: { x: 3, y: 4 }
   ```

3. **`add`:**
   ```java
   Scope: { x: 3, y: 4 }
   ```

---

### **Key Points**

1. **Tokenization:**
   - Breaks expressions into manageable parts for processing.
   - Handles spaces and nested parentheses.

2. **Scope Management:**
   - A new scope is created for each `let`, extending the previous one.

3. **Recursive Evaluation:**
   - Each operation (`add`, `mult`, `let`) is evaluated recursively.

