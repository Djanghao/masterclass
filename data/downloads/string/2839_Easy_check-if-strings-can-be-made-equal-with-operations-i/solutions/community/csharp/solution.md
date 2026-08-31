# Beginner Friendly :Unlocking the Code: Solving 'Check if Strings Can be Made Equal With Operation I'

**Author:** LakshayBrejwal_1_0
**Votes:** 3
**Link:** [https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993438/](https://leetcode.com/problems/check-if-strings-can-be-made-equal-with-operations-i/solutions/3993438/)

---

# Check if Strings Can be Made Equal With Operations I


## Approach 1: Swapping Approach

### Explanation
This approach swaps characters in `s2` to check if it can be made equal to `s1`. It iterates through the first three characters of `s1` and compares them to the corresponding characters in `s2`. If they match, it continues. If not, it swaps the current character in `s2` with the character two positions ahead. Finally, it checks if the last two characters in both strings are equal.

### Dry Run
Let's dry run an example to illustrate how the approach works:

Input:
- s1 = "abcd"
- s2 = "badc"

Iteration 1:
- i = 0
- s1[0] == s2[0], continue

Iteration 2:
- i = 1
- s1[1] == s2[1], continue

Iteration 3:
- i = 2
- s1[2] == s2[2], continue

Check last two characters:
- s1[3] == s2[3], yes
- s1[2] == s2[2], yes

Result: s2 can be made equal to s1 by swapping.

### Edge Cases
This approach handles cases where `s1` and `s2` are of length 4 and involve swapping operations.

### Complexity Analysis
- Time Complexity: O(1) - The approach always performs a fixed number of operations regardless of input size.
- Space Complexity: O(1) - The approach uses a constant amount of extra space.

### Codes in (C++) (Java) (Python) (C#) (JavaScript)

```cpp []
class Solution {
public:
    bool canBeEqual(string s1, string s2) {
        for(int i=0;i< 2;i++){
            if(s1[i] == s2[i] || s1[i] == s2[i+2] ){
                if(s1[i] == s2[i]) continue;
                else {
                    swap(s2[i],s2[i+2]);
                }
            }
            else{
                return false;
            }
        }
        
        if(s1[3] == s2[3] && s1[2] == s2[2])
            return true;
        return false;
    }
};
```

```java []
class Solution {
    public boolean canBeEqual(String s1, String s2) {
        for (int i = 0; i < 2; i++) {
            if (s1.charAt(i) == s2.charAt(i) || s1.charAt(i) == s2.charAt(i + 2)) {
                if (s1.charAt(i) == s2.charAt(i)) continue;
                else {
                    char[] s2Chars = s2.toCharArray();
                    char temp = s2Chars[i];
                    s2Chars[i] = s2Chars[i + 2];
                    s2Chars[i + 2] = temp;
                    s2 = new String(s2Chars);
                }
            } else {
                return false;
            }
        }

        if (s1.charAt(3) == s2.charAt(3) && s1.charAt(2) == s2.charAt(2))
            return true;
        return false;
    }
}
```

```python []
class Solution:
    def canBeEqual(self, s1: str, s2: str) -> bool:
        for i in range(2):
            if s1[i] == s2[i] or s1[i] == s2[i + 2]:
                if s1[i] == s2[i]:
                    continue
                else:
                    s2_list = list(s2)
                    s2_list[i], s2_list[i + 2] = s2_list[i + 2], s2_list[i]
                    s2 = ''.join(s2_list)
            else:
                return False
        
        if s1[3] == s2[3] and s1[2] == s2[2]:
            return True
        return False
```

```csharp []
public class Solution {
    public bool CanBeEqual(string s1, string s2) {
        for (int i = 0; i < 2; i++) {
            if (s1[i] == s2[i] || s1[i] == s2[i + 2]) {
                if (s1[i] == s2[i]) continue;
                else {
                    char[] s2Chars = s2.ToCharArray();
                    char temp = s2Chars[i];
                    s2Chars[i] = s2Chars[i + 2];
                    s2Chars[i + 2] = temp;
                    s2 = new string(s2Chars);
                }
            } else {
                return false;
            }
        }

        if (s1[3] == s2[3] && s1[2] == s2[2])
            return true;
        return false;
    }
}
```

```javascript []
var canBeEqual = function(s1, s2) {
    for(let i = 0; i < 2; i++) {
        if(s1[i] === s2[i] || s1[i] === s2[i + 2]) {
            if(s1[i] === s2[i]) continue;
            else {
                let s2Arr = s2.split('');
                [s2Arr[i], s2Arr[i + 2]] = [s2Arr[i + 2], s2Arr[i]];
                s2 = s2Arr.join('');
            }
        } else {
            return false;
        }
    }
    
    if(s1[3] === s2[3] && s1[2] === s2[2])
        return true;
    return false;
};
```

| Language | Runtime | Memory |
|----------|---------|--------|
| C++      | 5 ms  | 6 MB |
| Java     | 1 ms  | 41 MB |
| Python   | 29 ms  | 16 MB |
| C#       | 72 ms  | 43 MB |
| JavaScript | 63 ms | 44 MB |

---


# Consider UPVOTING\u2B06\uFE0F

![image.png](./images/0.png)

# DROP YOUR SUGGESTIONS IN THE COMMENT

## Keep Coding\uD83E\uDDD1\u200D\uD83D\uDCBB

 -- *MR. ROBOT SIGNING OFF*
