# Easy stack solution beat 100% time

**Author:** dog830228
**Votes:** 1
**Link:** [https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/3877532/](https://leetcode.com/problems/construct-smallest-number-from-di-string/solutions/3877532/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use a stack and loop (start at 1) judge current character whether "I", if current character is I Pop all value from stack because "I" need increased.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string SmallestNumber(string pattern) {
        StringBuilder sb = new StringBuilder();
        Stack<int> stack = new Stack<int>();
        for(int i = 1; i <= pattern.Length; i++){
            stack.Push(i);
            if(pattern[i - 1] == 'I'){
                while(stack.Count > 0){
                    sb.Append(stack.Pop());
                }
            } 
        } 
        sb.Append(pattern.Length + 1);
        while(stack.Count > 0){
            sb.Append(stack.Pop());
        }

        return sb.ToString();
    }
}
```