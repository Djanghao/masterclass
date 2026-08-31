# [Simulation + Stack Tutorial] Reverse Substrings Between Each Pair of Parentheses

**Author:** never_get_piped
**Votes:** 17
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457253/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457253/)

---

**Topic** :  Simulation

Simulation generally involves simulating the problem's processes and carefully following the instructions/information provided.
___

## Solution
For any problem involving matching parentheses, the **stack** data structure should be your first consideration.

Consider this problem for introductory practice:
*  [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

While iterating through our string, when adding an open parenthesis to the stack, ensure that any subsequent **close parenthesis matches the open parenthesis at the top of the stack**.

In other words, for this problem, the task is to reverse the substring enclosed within each pair of matching parentheses in the given string.

Consider the following example simulation:
```
s = "(u(love)i)"

stack change:
1. [] empty initially
2. ["("] add open parenthesis
3. ["(", "u"] add string "u"
4. ["(", "u", "("] add open parenthesis
5.  ["(", "u", "(", "l"] add string "l"
6.   ["(", "u", "(", "l", "o"] add string "o"
7.   ["(", "u", "(", "l", "o", "v"] add string "v"
8.   ["(", "u", "(", "l", "o", "v", "e"] add string "e"
9.   reverse the string between its match parenthesis and insert the string back ["(", "u", "evol"]
10.   ["(", "u", "evol", "i"] add string "i"
11. reverse the string between its match parenthesis and insert the string back ["iloveu"] 


Note that since we push concatenated strings back into the stack,
each time we pop them out, we also need to reverse them to maintain the correct order.


For instance, in step 10, we are required to reverse the string between the first and last parentheses.
The string is "uevoli" and the stack is ["u", "evol", "i"].
We use : "reverse("i") => "i" + "reverse(evol) => love" + "reverse(u) => u" = "iloveu"

```


<br/><br/>

```c++ []
class Solution {
public:
    string reverseParentheses(string s) {
        vector<string> stk;
        for(int i = 0; i < s.size(); i++) {
            if(s[i] == '(') {
                stk.push_back("(");
            } else if(s[i] == ')') {
                string rev = "";
                while(stk.size() > 0 && stk.back() != "(") {
                    reverse(stk.back().begin(), stk.back().end());
                    rev += stk.back();
                    stk.pop_back();
                }
                stk.pop_back();
                stk.push_back(rev);
            } else {
                stk.push_back(string(1, s[i]));
            }
        }
        
        string ans = std::accumulate(stk.begin(), stk.end(), std::string());
        return ans;
    }
};
```
```java []
class Solution {
    public String reverseParentheses(String s) {
        Deque<String> stack = new ArrayDeque<>();
        
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            if (c == '(') {
                stack.push("(");
            } else if (c == ')') {
                StringBuilder rev = new StringBuilder();
                while (!stack.isEmpty() && !stack.peek().equals("(")) {
                    rev.append(new StringBuilder(stack.pop()).reverse());
                }
                stack.pop(); // Remove the '('
                stack.push(rev.toString());
            } else {
                stack.push(String.valueOf(c));
            }
        }
        
        StringBuilder result = new StringBuilder();
        while (!stack.isEmpty()) {
            result.insert(0, stack.pop());
        }
        
        return result.toString();
    }
}
```
```python []
class Solution:
    def reverseParentheses(self, s: str) -> str:
        stack = []
        
        for char in s:
            if char == '(':
                stack.append("(")
            elif char == ')':
                rev = []
                while stack and stack[-1] != "(":
                    rev.append(stack.pop()[::-1])
                stack.pop() # Remove the '('
                stack.append("".join(rev))
            else:
                stack.append(char)
        
        return "".join(stack)
```
```Go []
func reverseString(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}

func reverseParentheses(s string) string {
    var stack []string
	
	for _, char := range s {
		if char == '(' {
			stack = append(stack, "(")
		} else if char == ')' {
			var rev strings.Builder
			for len(stack) > 0 && stack[len(stack)-1] != "(" {
				str := stack[len(stack)-1]
				stack = stack[:len(stack)-1]
				rev.WriteString(reverseString(str))
			}
			stack = stack[:len(stack)-1] // Pop the '('
			stack = append(stack, rev.String())
		} else {
			stack = append(stack, string(char))
		}
	}
	
	var result strings.Builder
	for _, str := range stack {
		result.WriteString(str)
	}
	
	return result.String()
}
```
```PHP []
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function reverseParentheses($s) {
        $stack = [];
        
        for ($i = 0; $i < strlen($s); $i++) {
            $char = $s[$i];
            if ($char == '(') {
                array_push($stack, "(");
            } else if ($char == ')') {
                $rev = "";
                while (!empty($stack) && end($stack) != "(") {
                    $rev .= strrev(array_pop($stack));
                }
                array_pop($stack); // Remove the '('
                array_push($stack, $rev);
            } else {
                array_push($stack, $char);
            }
        }
        
        return implode("", $stack);
    }
}
```
```javascript []
var reverseParentheses = function(s) {
    let stack = [];
        
    for (let char of s) {
        if (char === '(') {
            stack.push("(");
        } else if (char === ')') {
            let rev = "";
            while (stack.length > 0 && stack[stack.length - 1] !== "(") {
                rev += stack.pop().split("").reverse().join("");
            }
            stack.pop(); // Remove the '('
            stack.push(rev);
        } else {
            stack.push(char);
        }
    }
        
    return stack.join("");    
};
```

**Complexity**:
* Time Complexity : `O(n ^ 2)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**