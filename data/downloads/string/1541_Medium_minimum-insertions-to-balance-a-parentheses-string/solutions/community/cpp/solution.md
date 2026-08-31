# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5535941/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/5535941/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

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

![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/0.jpeg)