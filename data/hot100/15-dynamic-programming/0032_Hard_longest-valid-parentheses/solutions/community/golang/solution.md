# Python/C++/Go O(n) by stack [w/ Comment]

**Author:** brianchiang_tw
**Votes:** 24
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/1139974/](https://leetcode.com/problems/longest-valid-parentheses/solutions/1139974/)

---

[\u4E2D\u6587\u8A73\u89E3 \u89E3\u984C\u6587\u7AE0](https://vocus.cc/article/651e40a5fd89780001b42f30)

O(n) by stack

---

**Implementation** by stack in Python

```
class Solution:
    def longestValidParentheses(self, s: str) -> int:

        # stack, used to record index of parenthesis
        # initialized to -1 as dummy head for valid parentheses length computation
        stack = [-1]
        
        max_length = 0
        
		# linear scan each index and character in input string s
        for cur_idx, char in enumerate(s):
            
            if char == '(':
                
                # push when current char is (
                stack.append( cur_idx )
                
            else:
                
                # pop when current char is )
                stack.pop()
                
                if not stack:
                    
                    # stack is empty, push current index into stack
                    stack.append( cur_idx )
                else:
                    # stack is non-empty, update maximal valid parentheses length
                    max_length = max(max_length, cur_idx - stack[-1])
                
        return max_length
```

---

**Implementation** by stack in C++

```
class Solution {
public:
    int longestValidParentheses(string s) {
        
        // Initialized a stack with -1 on the bottom
        std::stack<int> _stack = std::stack<int>( {-1} );
        
        int maxSize = 0;
        
        // scan each character
        for( int i = 0 ; i < s.length() ;  i++ ){
            
            char ch = s[i];
            
            if( ch == '(' ){
                
                // current charachter is left bracket
                _stack.push( i );
                
            }else{
                
                // right charachter is left bracket
                _stack.pop();
                
                if( _stack.empty() ){
                    
                    // handle for corner case when ) comes before (
                    _stack.push( i );
                    
                }else{
                    // update max length if we have paired bracket
                    maxSize = max( maxSize, i - _stack.top() );    
                }
            }
        }
        
        return maxSize;
        
    }
};
```

---

**Implementation** by stack in Go

```
// Support function max
func Max(a, b int)int{
    
    if a > b{
        return a
    }
    
    return b
}


func longestValidParentheses(s string) int {
    
    // stack, used to record index of parenthesis
    // initialized to -1 as dummy head for valid parenthesis length computation
    stack := []int{-1}
    
    maxLength := 0
    
    // linear scan each index and character in input string s
    for curIdx, char := range s{
        
        if char == '('{
            
            // push when current char is (
            stack = append( stack, curIdx)
            
        }else{
            
            // pop when current char is )
            stack = stack[:len(stack)-1]
            
            if len(stack)==0{
                
                // stack is empty, push current index into stack
                stack = append( stack, curIdx)
            }else{
                
                // stack is non-empty, update maximal valud parentheses length
                
                maxLength = Max( maxLength, curIdx - stack[ len(stack)-1 ] )
            }
            
        }
        
    }
    
    return maxLength
    
}

```

---

Related leetcode challenge:

[Leetcode #20 Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)