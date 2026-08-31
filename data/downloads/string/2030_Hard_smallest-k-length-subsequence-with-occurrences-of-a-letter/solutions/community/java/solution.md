# Python/Java O(N) greedy solution using a stack

**Author:** sguaaa
**Votes:** 82
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1500174/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1500174/)

---

This question reminds me of `316-Remove Duplicate Letters`, so I am going with a similar approach here.

I maintain a stack containing the built prefix of the output. Starting from left to right of the string `s`, for any character that can improve the lexicographical order, we will pop a character from the stack only if:
    1. There are enough characters left to construct a `k`-size string.
    2. If the character to be popped is the same as `letter`, then there should also be at least `r` character `letter` left.

When adding new element to `stack`, we just need to check if the stack is already full (has size of `k`), and if the character is not the same as `letter`, then also check if we are leaving enough space for the matching characters.

Python solution:
```
class Solution:
    def smallestSubsequence(self, s: str, k: int, letter: str, r: int) -> str:
        n_letters = len([c for c in s if c == letter])
        stack = []
        
        for i, c in enumerate(s):
            while stack and stack[-1] > c and (len(s) - i + len(stack) > k) and (stack[-1] != letter or n_letters > r):
                d = stack.pop()
                if d == letter:
                    r += 1
                
            if len(stack) < k:
                if c == letter:
                    stack.append(c)
                    r -= 1
                elif k - len(stack) > r:
                    stack.append(c)
            
            if c == letter:
                n_letters -= 1
            
        return ''.join(stack)
```
Java solution:
```
class Solution {
    public String smallestSubsequence(String s, int k, char letter, int r) {
        int n_letters = 0;
        for (int i = 0; i < s.length(); i++)
            if (s.charAt(i) == letter)
                n_letters ++;
        
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            while (!stack.isEmpty() && stack.peek() > c && (s.length() - i + stack.size() > k) && (stack.peek() != letter || n_letters > r)) {
                if (stack.pop() == letter) r ++;
            }
            
            if (stack.size() < k) {
                if (c == letter) {
                    stack.push(c);
                    r --;
                } else if (k - stack.size() > r) {
                    stack.push(c);
                }
            }
            
            if (c == letter) n_letters --;
        }
        
        StringBuilder sb = new StringBuilder(stack.size());
        for(Character c : stack) sb.append(c);
        return sb.toString();
    }
}
```