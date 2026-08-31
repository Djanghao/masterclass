# SINGLE PASS ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880997/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5880997/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to keep a track of the characters encountered till now so that we can go to an element in the string and check what the last element in our seen collection is 
lets say you are at letter B we will see if our seen collection has A letter as the last one 
if yes we will remove it from the stack 
if not we will add this B to the stack 
# Approach
<!-- Describe your approach to solving the problem. -->
lets initialize an empty stack 
we will traerse the string and check for pairing elements 
if found pop the stack 
if not add it to the stack and move on 
finally return the length of the stack that is our final string
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![wallhaven.jpg](./images/0.jpeg)

# Code
```javascript []
var minLength = function(s) {
    let stack = []
    for(let x of s){
        if(x=='B' && stack[stack.length-1]=='A'){
            stack.pop()
        }
        else if(x=='D' && stack[stack.length-1]=='C'){
            stack.pop()
        }
        else stack.push(x)


    }
    return stack.length
};
```
```python []
def minLength(s: str) -> int:
    stack = []
    
    for x in s:
        if x == 'B' and stack and stack[-1] == 'A':
            stack.pop()
        elif x == 'D' and stack and stack[-1] == 'C':
            stack.pop()
        else:
            stack.append(x)
    
    return len(stack)

# Example usage:
print(minLength("ABCD"))

```
```java []
import java.util.Stack;

public class Solution {
    public int minLength(String s) {
        Stack<Character> stack = new Stack<>();
        
        for (char x : s.toCharArray()) {
            if (x == 'B' && !stack.isEmpty() && stack.peek() == 'A') {
                stack.pop();
            } else if (x == 'D' && !stack.isEmpty() && stack.peek() == 'C') {
                stack.pop();
            } else {
                stack.push(x);
            }
        }
        
        return stack.size();
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        System.out.println(solution.minLength("ABCD")); // Example usage
    }
}

```
```c++ []
#include <iostream>
#include <stack>
#include <string>

using namespace std;

int minLength(string s) {
    stack<char> st;
    
    for (char x : s) {
        if (x == 'B' && !st.empty() && st.top() == 'A') {
            st.pop();
        } else if (x == 'D' && !st.empty() && st.top() == 'C') {
            st.pop();
        } else {
            st.push(x);
        }
    }
    
    return st.size();
}

int main() {
    cout << minLength("ABCD") << endl; // Example usage
    return 0;
}
```
```c []
#include <stdio.h>
#include <string.h>

int minLength(const char* s) {
    char stack[strlen(s)]; // Use a stack with the size of the string
    int top = -1; // Stack pointer
    
    for (int i = 0; s[i] != '\\0'; i++) {
        char x = s[i];
        if (x == 'B' && top >= 0 && stack[top] == 'A') {
            top--; // Pop
        } else if (x == 'D' && top >= 0 && stack[top] == 'C') {
            top--; // Pop
        } else {
            stack[++top] = x; // Push
        }
    }
    
    return top + 1; // The stack size is top + 1
}

int main() {
    printf("%d\
", minLength("ABCD")); // Example usage
    return 0;
}
```