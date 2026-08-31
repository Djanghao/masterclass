# FOR ABSOLUTE BEGINNER || BEATS 100% WITH CPP

**Author:** RamHD
**Votes:** 4
**Link:** [https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5323611/](https://leetcode.com/problems/permutation-difference-between-two-strings/solutions/5323611/)

---



# Approach

Initialization:

- The variable add is initialized to 0. This will be used to accumulate the sum of absolute differences between the indices of matching characters in the two strings.

Nested Loops:

- Two nested loops are used to iterate over each character of the strings s and t.
- The outer loop iterates through each character of string s.
- The inner loop iterates through each character of string t.

Character Comparison:

1. Inside the inner loop, the characters at the current positions of s and t are compared.
2. If the characters s[i] and t[j] are the same, the absolute difference of their indices, abs(i - j), is calculated and added to add.


Return Result:

- After both loops have completed, the final value of add is returned, which represents the sum of the absolute differences of the indices of all matching characters between the two strings.

# Complexity
- Time complexity:
O(n*m)

- Space complexity:
O(1)

![Screenshot (71).png](./images/0.png)


# Code

```java []
public class Solution {
    public int findPermutationDifference(String s, String t) {
        int add = 0;
        for (int i = 0; i < s.length(); i++) {
            for (int j = 0; j < t.length(); j++) {
                if (s.charAt(i) == t.charAt(j)) {
                    add += Math.abs(i - j);
                }
            }
        }
        return add;
    }
```
```cpp []
class Solution {
public:
    int findPermutationDifference(string s, string t) {
        int add=0;
        for(int i=0;i<s.size();i++)
        {
            for(int j=0;j<t.size();j++)
            {
                if(s[i]==t[j])
                {
                    add=add+abs(i-j);
                }
            }
        }
        return add;
    }
};

```


```python []
class Solution:
    def findPermutationDifference(self, s: str, t: str) -> int:
        add = 0
        for i in range(len(s)):
            for j in range(len(t)):
                if s[i] == t[j]:
                    add += abs(i - j)
        return add
```
```c []
#include <string.h>
int findPermutationDifference(char* s, char* t) {
    int add = 0;
    int s_len = strlen(s);
    int t_len = strlen(t);
    for (int i = 0; i < s_len; i++) {
        for (int j = 0; j < t_len; j++) {
            if (s[i] == t[j]) {
                add += abs(i - j);
            }
        }
    }
    return add;
}
```
```javascript []
class Solution {
    findPermutationDifference(s, t) {
        let add = 0;
        for (let i = 0; i < s.length; i++) {
            for (let j = 0; j < t.length; j++) {
                if (s[i] === t[j]) {
                    add += Math.abs(i - j);
                }
            }
        }
        return add;
    }
}

```