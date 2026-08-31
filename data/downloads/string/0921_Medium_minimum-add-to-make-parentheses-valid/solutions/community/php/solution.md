# Only 6 lines 🔥🔥 || Beats 💯% || O(n), O(1) || All Language Solution 🙌

**Author:** dharmikgohil
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889379/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5889379/)

---

>

> I don't always test my code, but when I do, I do it in production \u2014 Unknown
>


![image.png](./images/0.png)

# Intuition
We don't use stack for this solutioin but just brackets counts.
Let's see appraoch.

# Approach
1. Count the OpenBracket when you find `(`
2. if you find ClosingBracket `)` so decrease the OpenBracket `(` count, because `()` is valid `condition = but check that for any OpenBracket there is atleast one closing brackets`
3. if `!condition` we increase ClosingBrackets `)` counts.
4. now we left with unblanaced brackets counts 

# Complexity
- Time complexity:
`O(n)`

- Space complexity:
`O(1)`

# Code
```java []
class Solution {
    public int minAddToMakeValid(String s) {
        int openBracketsCount = 0;
        int closedBracketsCount = 0;

        for(char ch : s.toCharArray()){
            if(ch == '('){
                openBracketsCount++;
            }
            else if(openBracketsCount > 0){
                openBracketsCount--;
            }
            else{
                closedBracketsCount++;
            }
        }
        return openBracketsCount + closedBracketsCount;
    }
}
```
```C++ []
class Solution {
public:
    int minAddToMakeValid(string s) {
        int openBracketsCount = 0;
        int closedBracketsCount = 0;

        for (char ch : s) {
            if (ch == '(') {
                openBracketsCount++;
            } else if (openBracketsCount > 0) {
                openBracketsCount--;
            } else {
                closedBracketsCount++;
            }
        }
        return openBracketsCount + closedBracketsCount;
    }
};

```
```python []
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        openBracketsCount = 0
        closedBracketsCount = 0

        for ch in s:
            if ch == '(':
                openBracketsCount += 1
            elif openBracketsCount > 0:
                openBracketsCount -= 1
            else:
                closedBracketsCount += 1

        return openBracketsCount + closedBracketsCount

```
```Javascript []
var minAddToMakeValid = function(s) {
    let openBracketsCount = 0;
    let closedBracketsCount = 0;

    for (let ch of s) {
        if (ch === '(') {
            openBracketsCount++;
        } else if (openBracketsCount > 0) {
            openBracketsCount--;
        } else {
            closedBracketsCount++;
        }
    }

    return openBracketsCount + closedBracketsCount;
};

```
```C# []
public class Solution {
    public int MinAddToMakeValid(string s) {
        int openBracketsCount = 0;
        int closedBracketsCount = 0;

        foreach (char ch in s) {
            if (ch == '(') {
                openBracketsCount++;
            } else if (openBracketsCount > 0) {
                openBracketsCount--;
            } else {
                closedBracketsCount++;
            }
        }
        return openBracketsCount + closedBracketsCount;
    }
}

```
```Typescript []
function minAddToMakeValid(s: string): number {
    let openBracketsCount = 0;
    let closedBracketsCount = 0;

    for (const ch of s) {
        if (ch === '(') {
            openBracketsCount++;
        } else if (openBracketsCount > 0) {
            openBracketsCount--;
        } else {
            closedBracketsCount++;
        }
    }

    return openBracketsCount + closedBracketsCount;
}
```
```PHP []
class Solution {
    function minAddToMakeValid($s) {
        $openBracketsCount = 0;
        $closedBracketsCount = 0;

        for ($i = 0; $i < strlen($s); $i++) {
            if ($s[$i] == '(') {
                $openBracketsCount++;
            } else if ($openBracketsCount > 0) {
                $openBracketsCount--;
            } else {
                $closedBracketsCount++;
            }
        }

        return $openBracketsCount + $closedBracketsCount;
    }
}

```
```C []
#include <stdio.h>
#include <string.h>

int minAddToMakeValid(char* s) {
    int openBracketsCount = 0;
    int closedBracketsCount = 0;

    for (int i = 0; i < strlen(s); i++) {
        if (s[i] == '(') {
            openBracketsCount++;
        } else if (openBracketsCount > 0) {
            openBracketsCount--;
        } else {
            closedBracketsCount++;
        }
    }

    return openBracketsCount + closedBracketsCount;
}


```
![HOPE YOU GOT IT (1).png](./images/1.png)

