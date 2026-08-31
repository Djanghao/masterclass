# 2 Easy Interview Approaches ✅ || without stack 🔥|| with stack ✅ || Beat 99.59%💯 || Simple Approach

**Author:** naman_malik
**Votes:** 30
**Link:** [https://leetcode.com/problems/remove-k-digits/solutions/5005947/](https://leetcode.com/problems/remove-k-digits/solutions/5005947/)

---

![Runtime complexity2.png](./images/0.png)

# Approach 1
<!-- Describe your approach to solving the problem. -->
using vector as a stack (Stack Approach)

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
  vector stack take O(n) space in worst case
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string removeKdigits(string num, int k) {
        vector<char>stk;
        string ans;
        for(char c :num){
            while(k>0 && !stk.empty() && stk.back()>c){
                stk.pop_back();
                k--;
            }
            stk.push_back(c);
        }
        while(k>0){
            stk.pop_back();
            k--;
        }
        for(char c : stk){
            if(ans.empty() && c=='0') continue;
            ans.push_back(c);

        }
        return ans.empty()?"0":ans;
    }
};
```
```Java []
class Solution {
    public String removeKdigits(String num, int k) {
        Stack<Character> stk = new Stack<>();
        StringBuilder ans = new StringBuilder();
        for (char c : num.toCharArray()) {
            while (k > 0 && !stk.isEmpty() && stk.peek() > c) {
                stk.pop();
                k--;
            }
            stk.push(c);
        }
        while (k > 0) {
            stk.pop();
            k--;
        }
        for (char c : stk) {
            if (ans.length() == 0 && c == '0') continue;
            ans.append(c);
        }
        return ans.length() == 0 ? "0" : ans.toString();
    }
}
```
```python []
class Solution(object):
    def removeKdigits(self, num, k):
        stk = []
        ans = ""
        for c in num:
            while k > 0 and stk and stk[-1] > c:
                stk.pop()
                k -= 1
            stk.append(c)
        while k > 0:
            stk.pop()
            k -= 1
        for c in stk:
            if not ans and c == '0':
                continue
            ans += c
        return ans if ans else '0'

```
# Approach 2
<!-- Describe your approach to solving the problem. -->
without Stack

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
  only returning string take space. we have to mandatory return it so it can not be counted as extra space  
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string removeKdigits(string num, int k) {
        string s = ""; s += num[0];
        for(int i=1;i<num.length();++i) {
            // if removal attempts are left (k>0)
            // and nums[i] is less than last element of s
            // then remove last element of s and come back to nums[i] again
            if(k > 0 && s.length() > 0 && num[i] < s[s.length()-1]) {
                s.pop_back();
                k--;
                i--;
                continue;
            }
            else
            s += num[i];
        }
        // if removal attempts are left remove characters at the end
        // because at this point s contains characters in ascending order
        // so preferable to remove larger characters at the end
        while(k > 0 && s.length() > 0) {
            s.pop_back();
            k--;
        }

        while(s[0] == '0') {      // remove trailing zeroes if any
            s.erase(s.begin());
        }
        
        if(s.length() == 0) s = "0";   // if final s is empty then indicates 0
        return s;
    }
};
```
```Java []
class Solution {
    public String removeKdigits(String num, int k) {
        StringBuilder s = new StringBuilder();
        s.append(num.charAt(0));
        for (int i = 1; i < num.length(); ++i) {
            if (k > 0 && s.length() > 0 && num.charAt(i) < s.charAt(s.length() - 1)) {
                s.deleteCharAt(s.length() - 1);
                k--;
                i--;
                continue;
            }
            s.append(num.charAt(i));
        }
        while (k > 0 && s.length() > 0) {
            s.deleteCharAt(s.length() - 1);
            k--;
        }
        while (s.length() > 0 && s.charAt(0) == '0') {
            s.deleteCharAt(0);
        }
        if (s.length() == 0) {
            s.append('0');
        }
        return s.toString();
    }
}

```
```python []
class Solution(object):
    def removeKdigits(self, num, k):
        s = num[0]
        for i in range(1, len(num)):
            if k > 0 and len(s) > 0 and num[i] < s[-1]:
                s = s[:-1]
                k -= 1
                continue
            s += num[i]
        while k > 0 and len(s) > 0:
            s = s[:-1]
            k -= 1
        while s and s[0] == '0':
            s = s[1:]
        if not s:
            s = '0'
        return s


```
![upvote cat3.png](./images/1.png)


