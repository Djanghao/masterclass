# ✅✅ Stack, C++ Easy to Understand 😎😎

**Author:** Deepak_5910
**Votes:** 49
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/3592759/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/3592759/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Approach is simple and this problem is similar to the below problem.
Note:- Keep in mind that here we can change the unlocked parenthesis.
**To make similar problem , change the unlocked parenthesis to "*"**

Related Problem:- https://leetcode.com/problems/valid-parenthesis-string/description/

1. start traverse the string if s[i] is '*' then push back it to star stack , if s[i] is "(" then push back it to open stack , if s[i] is ")" then first check open stack if it is empty then check star stack if it is also empty ,return false otherwise pop the top elment of the stack.

2. after traversing, pop the elments of open stack with star stack if position(top elment of the open stack )is less then position(top element of the star stack)

3. check that number of reaming stars in star stack if even no problem otherwise return false

4. if open stack is not empty then return false otherwise return true;
 

# Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    bool canBeValid(string s, string locked) {

        int n = s.size();

        for(int i = 0;i<n;i++)
        {
            if(locked[i]=='0')
            s[i] = '*';
        }

        cout<<s<<endl;

        stack<int> open,star;
        for(int i = 0;i<n;i++)
        {
            if(s[i]=='(') open.push(i);
            else if(s[i]=='*') star.push(i);
            else if(s[i]==')')
            {
                if(!open.empty()) open.pop();
                else if(!star.empty()) star.pop();
                else return false;
            }
        }

        while(!open.empty() && !star.empty() && open.top() < star.top())
        {
            open.pop();
            star.pop();
        }

        if(star.size()%2)
        return false;
    
        return (open.empty());
        
    }
};
```
![upvote.jpg](./images/0.jpeg)
