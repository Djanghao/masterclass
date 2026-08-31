# Beats 100% || Easy Self Explanatory Code || 3 Approaches

**Author:** Garv_Virmani
**Votes:** 57
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889059/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889059/)

---

# 3 Approaches:
![image.png](./images/1.png)

# Approach 1
**Time O(N) Space O(N)**
```cpp []
class Solution {
public:
    int minAddToMakeValid(string s) {
        stack<char> S;
        int c = 0;
        for (char i : s) {
            if (i == '(')
                S.push(i);
            else {
                if (S.empty())
                    c++;
                else
                    S.pop();
            }
        }
        return c + S.size();
    }
};
```

# Approach 2
**Time O(N) Space O(N)**
# Code
```cpp []
class Solution {
public:
    int minAddToMakeValid(string s) {
        string stck;
        for (auto c : s) {
            if (stck.empty())
                stck.push_back(c);

            else if (stck.back() == '(' && c == ')') {
                stck.pop_back();
            } else {
                stck.push_back(c);
            }
        }
        return stck.size();
    }
};
```

# Approach 3
**Time O(N) Space O(1)**
``` cpp []
class Solution {
public:
    int minAddToMakeValid(string s) {
        int open = 0, close = 0;
        for (auto c : s) {
            if (c == '(') {
                open++;
            } else {
                if (open > 0)
                    open--;
                else
                    close++;
            }
        }
        return open + close;
    }
};
```

![image.png](./images/1.png)

