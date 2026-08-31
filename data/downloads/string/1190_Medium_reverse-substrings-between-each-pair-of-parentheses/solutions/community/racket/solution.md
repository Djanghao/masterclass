# Solution on Racket

**Author:** bigbag
**Votes:** 1
**Link:** [https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457220/](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/solutions/5457220/)

---

# Intuition
The problem involves reversing substrings within each pair of matching parentheses, starting from the innermost pair. This suggests a stack-based approach, where we can keep track of substrings as we encounter parentheses and reverse them as needed. The stack helps manage nested parentheses by ensuring that we process the innermost pairs first.

# Approach
1) Initialize Variables:
- Use a stack to store substrings before encountering an opening parenthesis (.
- Use a variable current to build the current substring.
2) Iterate Through Characters:
Convert the input string s into a list of characters for easy iteration.
For each character:
- If it is an opening parenthesis (, push the current substring onto the stack and reset current to an empty string.
- If it is a closing parenthesis ), reverse the current substring. If the stack is not empty, pop the top element from the stack and concatenate it with the reversed substring.
- If it is any other character, append it to the current substring.
3) Final Result:
- After processing all characters, the current substring will contain the final result without any parentheses.

# Complexity
- Time complexity:
The time complexity is O(n). Each character is processed once, and reversing a substring takes linear time relative to its length.

- Space complexity:
The space complexity is O(n). The stack can hold up to n characters in the worst case, and the current substring can also be up to n characters long.

# Code
```
(define/contract (reverse-parentheses s)
  (-> string? string?)
  (define (reverse-string str)
    (list->string (reverse (string->list str))))
  
  (define stack '())
  (define current "")
  
  (for ([char (string->list s)])
    (cond
      [(char=? char #\\()
       (set! stack (cons current stack))
       (set! current "")]
      [(char=? char #\\))
       (set! current (reverse-string current))
       (when (pair? stack)
         (set! current (string-append (car stack) current))
         (set! stack (cdr stack)))]
      [else
       (set! current (string-append current (string char)))]))
  
  current)
```