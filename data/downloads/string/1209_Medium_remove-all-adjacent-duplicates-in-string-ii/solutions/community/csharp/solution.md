# Simple C# Solution (With Explanation)

**Author:** inderbindra
**Votes:** 2
**Link:** [https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4028985/](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/solutions/4028985/)

---

# Approach

1. We use a stack to keep track of characters and their frequencies.

2. We iterate through the input string `s`.

3. For each character in `s`, we check if the stack is empty or if the character at the top of the stack is the same as the current character.

   - If the stack is not empty and the characters match, we increment the frequency of the character at the top of the stack by 1 and push it back onto the stack.
   
   - If the characters do not match, we push the current character onto the stack with a frequency of 1.

4. After each push operation, we check if the frequency of the character at the top of the stack has reached `k`. If it has, we pop the character from the stack since it has been removed `k` times.

5. Once we have processed all characters in `s`, we pop the characters from the stack and construct the final string by inserting each character multiple times according to its frequency.

6. Finally, we return the constructed string as the result.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public string RemoveDuplicates(string s, int k) {
        Stack<(char letter, int freq)> stack = new Stack<(char letter, int freq)>();
        int i=0;
        StringBuilder str = new StringBuilder();
        for(i=0; i<s.Length; i++)
        {
            if(stack.Count > 0 && stack.Peek().letter == s[i])
            {
                var item = stack.Pop();
                item.freq +=1;
                stack.Push(item);
            }
            else
            {
                stack.Push((s[i], 1));
            }
            if(stack.Count > 0 && stack.Peek().freq == k)
            {
                stack.Pop();
            }
        }
        while(stack.Count > 0)
        {   
            var item = stack.Pop();
            str.Insert(0, item.letter.ToString(), item.freq);
        }
        return str.ToString();
    }
}
```