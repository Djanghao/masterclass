# JAVA || Stack || O(n) || clean code with explanation

**Author:** Nikhil_Pall
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4295579/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/4295579/)

---

# Approach
1. Iterate through the string characters.

2. Use a stack to track opening parentheses '(' encountered.

3. For every closing parenthesis ')', check if it pairs with the next character; if so, skip the next character.

4. If there's no matching closing parenthesis or open parenthesis left in the stack, increment the count.

5. Finally, count the remaining open parentheses in the stack and adjust the count accordingly.

# Complexity
- Time complexity: O(n)

- Space complexity: O(n)

# Code
```
class Solution {
    public int minInsertions(String s) {
        Stack<Character> stack=new Stack<>();
        int count=0;
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(c == '('){
                stack.push(c);
            }
            else{
                if(i+1<s.length()&& s.charAt(i+1)==')'){
                    i++;
                }
                else {
                    count++;
                }
                
                if(!stack.isEmpty()){
                    stack.pop();
                }
                else{
                    count++;
                }
            }
        }
        count += 2*stack.size();
        return count;
    }
}
```