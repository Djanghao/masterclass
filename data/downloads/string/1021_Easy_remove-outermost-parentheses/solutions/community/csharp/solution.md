# C++ and C# very easy solution.

**Author:** aloneguy
**Votes:** 8
**Link:** [https://leetcode.com/problems/remove-outermost-parentheses/solutions/3398832/](https://leetcode.com/problems/remove-outermost-parentheses/solutions/3398832/)

---

# Intuition:First of all,we have to find outer parentheses and after that we have to add other parentheses to a new string.
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach:Each pair has a couple of parenthese.So we use stack to declare which parenthese is either opener or cleser.
<!-- Describe your approach to solving the problem. -->
![photo_2023-04-10_05-40-10.jpg](./images/0.jpeg)


```C++ []
class Solution {
public:
    string removeOuterParentheses(string s) {
        string result;
        int index = 0;
        for (char x : s) {
           switch(x){
               case '(':
               if(index++>0)result+=x;
               break;
               case ')':
               if(index-->1)result+=x;
               break;
           }
        }
        return result;
    }
};
```
```C# []
public class Solution {
    public string RemoveOuterParentheses(string s) {
        StringBuilder result=new();
        int index = 0;
        foreach (char x in s) {
            if (x == '(' && index++ > 0) 
            result.Append(x);
            else if (x == ')' && index-- > 1) 
            result.Append(x);
        }
        return result.ToString();
    }
}
```
