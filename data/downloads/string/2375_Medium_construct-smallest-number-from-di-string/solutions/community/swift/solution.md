# 🔥 Simple and Clean 🔥Stack🔥 Solution w/ Commented Code🔥

**Author:** KillingJoke
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5442911/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/5442911/)

---

It is the simple and clean stack solution of this question.

# Code

```C []

char* smallestNumber(char* pattern) {
    char* result = (char*) malloc(sizeof(char) * (strlen(pattern) + 1));
    int resultIdx = 0;
    int stack[1000];
    int top = -1;
    
    // Iterate through each character in the pattern
    for (int i = 0; i <= strlen(pattern); i++) {
        stack[++top] = i + 1;  // Push current number onto the stack
        
        // If end of pattern or current character is 'I'
        if (i == strlen(pattern) || pattern[i] == 'I') {
            while (top >= 0) {
                result[resultIdx++] = stack[top--] + '0';  // Append top of stack to result
            }
        }
    }
    
    result[resultIdx] = '\\0';  // Null terminate the result string
    return result;
}

```
```C++ []
class Solution {
public:
    string smallestNumber(string pattern) {
        string result;
        stack<int> s;
        
        // Iterate through each character in the pattern
        for (int i = 0; i <= pattern.length(); i++) {
            s.push(i + 1);  // Push current number onto the stack
            
            // If end of pattern or current character is 'I'
            if (i == pattern.length() || pattern[i] == 'I') {
                while (!s.empty()) {
                    result += to_string(s.top());  // Append top of stack to result
                    s.pop();  // Pop the top element from stack
                }
            }
        }
        
        return result;
    }
};
```
```Java []
import java.util.Stack;

class Solution {
    public String smallestNumber(String pattern) {
        StringBuilder result = new StringBuilder();
        Stack<Integer> s = new Stack<>();
        
        // Iterate through each character in the pattern
        for (int i = 0; i <= pattern.length(); i++) {
            s.push(i + 1);  // Push current number onto the stack
            
            // If end of pattern or current character is 'I'
            if (i == pattern.length() || pattern.charAt(i) == 'I') {
                while (!s.isEmpty()) {
                    result.append(s.peek());  // Append top of stack to result
                    s.pop();  // Pop the top element from stack
                }
            }
        }
        
        return result.toString();
    }

```
```Python []
class Solution:
    def smallestNumber(self, pattern: str) -> str:
        result = []
        stack = []
        
        # Iterate through each character in the pattern
        for i in range(len(pattern) + 1):
            stack.append(i + 1)  # Push current number onto the stack
            
            # If end of pattern or current character is 'I'
            if i == len(pattern) or pattern[i] == 'I':
                while stack:
                    result.append(str(stack.pop()))  # Append top of stack to result
        
        return ''.join(result)

```
```JavaScript []
class Solution {
    smallestNumber(pattern) {
        let result = '';
        let stack = [];
        
        // Iterate through each character in the pattern
        for (let i = 0; i <= pattern.length; i++) {
            stack.push(i + 1);  // Push current number onto the stack
            
            // If end of pattern or current character is 'I'
            if (i === pattern.length || pattern.charAt(i) === 'I') {
                while (stack.length > 0) {
                    result += stack.pop();  // Append top of stack to result
                }
            }
        }
        
        return result;
    }
}
```
```ruby []
class Solution
  def smallest_number(pattern)
    result = ''
    stack = []
    
    # Iterate through each character in the pattern
    (0..pattern.length).each do |i|
      stack.push(i + 1)  # Push current number onto the stack
      
      # If end of pattern or current character is 'I'
      if i == pattern.length || pattern[i] == 'I'
        while !stack.empty? do
          result += stack.pop.to_s  # Append top of stack to result
        end
      end
    end
    
    result
  end
end
```
```Rust []
struct Solution;

impl Solution {
    pub fn smallest_number(pattern: &str) -> String {
        let mut result = String::new();
        let mut stack: Vec<i32> = Vec::new();
        
        // Iterate through each character in the pattern
        for i in 0..=pattern.len() {
            stack.push((i + 1) as i32);  // Push current number onto the stack
            
            // If end of pattern or current character is 'I'
            if i == pattern.len() || pattern.chars().nth(i).unwrap() == 'I' {
                while !stack.is_empty() {
                    result.push_str(&stack.pop().unwrap().to_string());  // Append top of stack to result
                }
            }
        }
        
        result
    }
}
```
```Swift []
class Solution {
    func smallestNumber(_ pattern: String) -> String {
        var result = ""
        var stack: [Int] = []
        
        // Iterate through each character in the pattern
        for i in 0...pattern.count {
            stack.append(i + 1)  // Push current number onto the stack
            
            // If end of pattern or current character is 'I'
            if i == pattern.count || pattern[pattern.index(pattern.startIndex, offsetBy: i)] == "I" {
                while !stack.isEmpty {
                    result += String(stack.removeLast())  // Append top of stack to result
                }
            }
        }
        
        return result
    }
}

```

--- 
**Tell me if anything is incorrect.
& Upvote if it helps.**




