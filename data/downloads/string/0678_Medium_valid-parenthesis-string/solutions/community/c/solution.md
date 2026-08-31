# 🏆Made Easy🔥C++🔥w/ Comments

**Author:** Manohar_001
**Votes:** 49
**Link:** [https://leetcode.com/problems/valid-parenthesis-string/solutions/3401476/](https://leetcode.com/problems/valid-parenthesis-string/solutions/3401476/)

---

### Explained inside the code for better understanding.
# \uD83D\uDE09Don't just watch & move away, also give an Upvote.\uD83D\uDE09
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool checkValidString(string s) {
        stack<char> open, star;

        for(int i=0; i<size(s); i++)
        {
            //push the index of '('
            if(s[i] == '(')
                open.push(i);

            //push the index of '*'
            else if(s[i] == '*')
                star.push(i);

            /*If we get a ')' then
                either pop '(' if we have some
                or pop '*' if there's no '('.
            */
            else{
                if(!open.empty())
                    open.pop();

                else if(!star.empty())
                    star.pop();
            
                //If both '(' ans '*' are exhausted then return false.
                else
                    return false;
            }
        }

        //Processingthe leftover brackets in 'open'

        /*compare the position of '*' ans '(' if position of '*' is greater than '(' then it means we can convert some '*' to ')'.*/
        while(!open.empty() && !star.empty() && star.top() > open.top())
        {
            open.pop();
            star.pop();
        }

//After processing if open stack is still not empty the return false.

<!-- \u2705Well before returning answer don't forget to UPVOTE.\u2705 -->
        return open.empty();
    }
};
```