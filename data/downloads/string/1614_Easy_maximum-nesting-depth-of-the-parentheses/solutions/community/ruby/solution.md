# Beats 100% 🔥 || Java Easy✅✅with explanation 😊😊|| Simple Iteration O(n) time✅✅

**Author:** 21eca01
**Votes:** 26
**Link:** [https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969646/](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/solutions/4969646/)

---

****Problem statement!!**
They baiscally told us that the given string is a **vps**(valid paranthesis string ) ,so we just have to iterate throughout the string and count whenever the count of **open bracket becomes maximum** **'('** thus returning the max;;**

**ex: 1.(1)+((2))+(((3)))
ind=0 ->count=1,max=1.
ind=1 ->count=1,max=1.
ind=2 ->count=0,max=1.
ind=3 ->count=0,max=1.
ind=4 ->count=1,max=1.
ind=5 ->count=2,max=2.
ind=6 ->count=2,max=2.
ind=7 ->count=1,max=2.
ind=8 ->count=0,max=2.
ind=9 ->count=0,max=2.
ind=10 ->count=1,max=2.
ind=11 ->count=2,max=2.
ind=12 ->count=3,max=3.
ind=13 ->count=3,max=3.
ind=14 ->count=2,max=3.
ind=15 ->count=1,max=3.
ind=16 ->count=0,max=3.
thus the max=3.**


# **if this helps please upvote!!**

# Code
``` java []
class Solution {
    public int maxDepth(String s) {
        int count=0,max=0;
        for(int i=0;i<s.length();i++){
            if(s.charAt(i)=='(') count++;
            max=Math.max(count,max);
            if(s.charAt(i)==')') count--;
        }
        return max;
    }
}
```
```c []
int maxDepth(char* s) {
    int count = 0, max = 0;
    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') 
            count++;
        max = (count > max) ? count : max;
        if (s[i] == ')') 
            count--;
    }
    return max;
}

```

```C# []
public class Solution {
    public int MaxDepth(string s) {
        int count = 0, max = 0;
        foreach (char c in s) {
            if (c == '(')
                count++;
            max = Math.Max(count, max);
            if (c == ')')
                count--;
        }
        return max;
    }
}

```
```python3 []
class Solution:
    def maxDepth(self, s: str) -> int:
        count = 0
        max_depth = 0
        for char in s:
            if char == '(':
                count += 1
            max_depth = max(count, max_depth)
            if char == ')':
                count -= 1
        return max_depth

```
```javascript []
function maxDepth(s) {
    let count = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;
        }
        max = Math.max(count, max);
        if (s[i] === ')') {
            count--;
        }
    }
    return max;
}

```
```ruby []
def max_depth(s)
    count = 0
    max = 0
    s.each_char do |c|
        count += 1 if c == '('
        max = [count, max].max
        count -= 1 if c == ')'
    end
    max
end

```
