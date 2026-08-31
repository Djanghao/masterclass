# ✅C# || ✅C++ ||🐍 Python || ✔Both DP and Stack Solution || 🚀 Beats 99%

**Author:** Santhosh1608
**Votes:** 7
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/3197466/](https://leetcode.com/problems/longest-valid-parentheses/solutions/3197466/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

# If you find this helpful,Please Upvote 
```
public class Solution {
    public int LongestValidParentheses(string s) {
        Stack<int> index =new Stack<int>();
            for(int i=0;i < s.Length;i++){
                if (s[i] == '('){
                    index.Push(i);
                }
                else{
                    if(index.Any() && s[index.Peek()] == '('){
                        index.Pop();
                    }
                    else{
                        index.Push(i);
                    }
                }
            }
            if(!index.Any()){
                return s.Length;
            }
            int length = s.Length, unwanted = 0;
            int result = 0;
            while(index.Any()){
                unwanted = index.Peek();
                index.Pop();
                result = Math.Max(result,length - unwanted - 1);
                length = unwanted;
            }
            result = Math.Max(result,length);
            return result;
    }
}
```
# Python Solution  

    def ValidParantheses(s):
        length=len(s)
        dp=[0]*length
        count=0
        maxLen=0
        pos=0
        for par in s:
            if par == '(':
                count += 1
            elif par == ')':
                if count>0:
                    count-=1
                    #immediate parentheses like ()()
                    dp[pos]=dp[pos-1]+2
                    #outer parentheses (out of nested parentheses or non immmediate valid parentheses)
                    if dp[pos] <= pos:
                        dp[pos] = dp[pos]+dp[pos-dp[pos]]
                
            maxLen=max(maxLen,dp[pos])
            pos += 1
        return maxLen

# Upvote \uD83E\uDD1E