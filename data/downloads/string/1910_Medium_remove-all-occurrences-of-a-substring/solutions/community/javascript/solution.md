# ✅ Beats 100 % || C++/Java/Python/JavaScript || Easy Solution || Stack

**Author:** amanrathore48
**Votes:** 37
**Link:** [https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3479217/](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/solutions/3479217/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
*The problem is asking us to remove all occurrences of a substring 'part' from a string 's'. The approach to solve this problem is to repeatedly find the leftmost occurrence of the substring 'part' in the string 's', and remove it. This process is repeated until no more occurrences of 'part' can be found in the string 's'.*

# Approach : ***Brute Force***
<!-- Describe your approach to solving the problem. -->
The simplest approach is to iterate through the input string s and check if the substring part is present. If it is present, remove it from s and repeat the process until all occurrences of part are removed.

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> This is because for each occurrence of the substring part, the erase() function has to shift all the characters in the string after the part to the left by part.length() positions, which takes O(n) time in the worst case. Since we may have to do this for all occurrences of part in s, the overall time complexity becomes O(n^2).

- Space complexity:  O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> Since we are modifying the input string s in place and not using any additional data structures.

# Code

```C++ []
class Solution {
public:
    string removeOccurrences(string s, string part) {
        int n = s.length();
        while(n!=0 && s.find(part)<n){
            s.erase(s.find(part),part.length());
        }
        return s;
    }
};
```
```java []
class Solution {
    public String removeOccurrences(String s, String part) {
        int n = s.length();
        int index = s.indexOf(part);
        while(index != -1) {
            s = s.substring(0, index) + s.substring(index + part.length());
            n = s.length();
            index = s.indexOf(part);
        }
        return s;
    }
}
```
```python []
class Solution(object):
    def removeOccurrences(self, s, part):
        while part in s:
            s = s.replace(part, '', 1)
        return s
```
```javascript []
var removeOccurrences = function(s, part) {
    let idx = s.indexOf(part);
    while (idx !== -1) {
        s = s.substring(0, idx) + s.substring(idx + part.length);
        idx = s.indexOf(part);
    }
    return s;
};
```


---

# Approach : ***Using Stack***
<!-- Describe your approach to solving the problem. -->
In this approach, we maintain a stack and iterate over the string s. We push each character of s onto the stack. If the top of the stack matches the last character of the substring part, we check if the last len(part) characters on the stack match with the substring part. If they match, we pop them from the stack. We repeat this process until no more occurrences of the substring part are found. The time complexity of this approach is O(n*m), where n is the length of string s and m is the length of substring part.

# Complexity
- Time complexity: O(n*m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> Where n is the length of the string s and m is the length of the string part. 

- Space complexity:  O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> Since we are using a stack to store the characters of s.

# Code

```C++ []
class Solution {
public:
    string removeOccurrences(string s, string part) {
        stack<char> st;
        for(char c : s) {
            st.push(c);
            if(st.size() >= part.length() && st.top() == part.back()) {
                string temp = "";
                for(int i = 0; i < part.length(); i++) {
                    temp += st.top();
                    st.pop();
                }
                reverse(temp.begin(), temp.end());
                if(temp != part) {
                    for(char c : temp) {
                        st.push(c);
                    }
                }
            }
        }
        string ans = "";
        while(!st.empty()) {
            ans += st.top();
            st.pop();
        }
        reverse(ans.begin(), ans.end());
        return ans;
    }
};
```
```java []
class Solution {
    public String removeOccurrences(String s, String part) {
        Stack<Character> stack = new Stack<>();
        for(char c : s.toCharArray()) {
            stack.push(c);
            if(stack.size() >= part.length() && stack.peek() == part.charAt(part.length()-1)) {
                StringBuilder temp = new StringBuilder();
                for(int i = 0; i < part.length(); i++) {
                    temp.append(stack.pop());
                }
                temp.reverse();
                if(!temp.toString().equals(part)) {
                    for(char c : temp.toString().toCharArray()) {
                        stack.push(c);
                    }
                }
            }
        }
        StringBuilder ans = new StringBuilder();
        while(!stack.isEmpty()) {
            ans.append(stack.pop());
        }
        return ans.reverse().toString();
    }
}

```
```python []
class Solution:
    def removeOccurrences(self, s: str, part: str) -> str:
        stack = []
        for c in s:
            stack.append(c)
            if len(stack) >= len(part) and stack[-1] == part[-1]:
                temp = []
                for i in range(len(part)):
                    temp.append(stack.pop())
                temp.reverse()
                if ''.join(temp) != part:
                    for c in temp:
                        stack.append(c)
        ans = []
        while stack:
            ans.append(stack.pop())
        return ''.join(ans[::-1])

```
```javascript []
var removeOccurrences = function(s, part) {
    let stack = [];
    for(let c of s) {
        stack.push(c);
        if(stack.length >= part.length && stack[stack.length-1] == part[part.length-1]) {
            let temp = [];
            for(let i = 0; i < part.length; i++) {
                temp.push(stack.pop());
            }
            temp.reverse();
            if(temp.join('') != part) {
                for(let c of temp) {
                    stack.push(c);
                }
            }
        }
    }
    let ans = [];
    while(stack.length > 0) {
        ans.push(stack.pop());
    }
    ans.reverse();
    return ans.join('');
};
```

---

![upvote.jpeg](./images/0.jpeg)

