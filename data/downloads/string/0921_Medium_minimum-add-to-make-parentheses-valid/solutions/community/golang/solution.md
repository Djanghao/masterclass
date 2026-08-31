# Easy Solution (No Stack)🧠 Python | Java | C++ | C | C# | GO | Rust O(N), O(1)

**Author:** violet_6
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5888626/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5888626/)

---

# Intuition
- **Objective**: Determine the minimum number of parentheses to add to make a string valid.

- **Goal**: Keep two counters: one for open parentheses and one for the number of unmatched closing parentheses.

# Approach
1. Traverse the string character by character.
2. Keep track of:
- Open parentheses that still need to be matched.
- Unmatched closing parentheses.
3. For every open parenthesis '(', increase the count of open parentheses.
4. For every closing parenthesis ')', check if there's an unmatched open parenthesis available to pair it with:
- If yes, decrease the open parenthesis count.
- If not, increase the unmatched closing parenthesis count.
5. At the end of the traversal, the result is the **sum** of `unmatched open` and `unmatched closing` parentheses, which indicates how many parentheses are needed to make the string valid.
6. 

# Complexity
- Time complexity: `O(N)`

- Space complexity: `O(1)`

# Code
```python3 []
class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        open_c = close_c = 0
        for c in s:
            if c == '(':
                open_c += 1
            elif c == ')' and open_c > 0:
                open_c -= 1
            else:
                close_c += 1
        return open_c + close_c
```

``` java []
class Solution {
    public int minAddToMakeValid(String s) {
        int open_c = 0;
        int close_c = 0;

        for (char c : s.toCharArray()) {
            if (c == '(') {
                open_c++;
            } else if (c == ')' && open_c > 0) {
                open_c--;
            } else {
                close_c++;
            }
        }
        return open_c + close_c;
    }
}
```

``` C++ []
class Solution {
public:
    int minAddToMakeValid(string s) {
        int open_c = 0;
        int close_c = 0;

        for (char c : s) {
            if (c == '(') {
                open_c++;
            } else if (c == ')' && open_c > 0) {
                open_c--;
            } else {
                close_c++;
            }
        }
        return open_c + close_c;
    }
};
```

``` C# []
public class Solution {
    public int MinAddToMakeValid(string s) {
        int open_c = 0;
        int close_c = 0;

        foreach (char c in s) {
            if (c == '(') {
                open_c++;
            } else if (c == ')' && open_c > 0) {
                open_c--;
            } else {
                close_c++;
            }
        }
        return open_c + close_c;
    }
}
```

``` GO []
func minAddToMakeValid(s string) int {
    open_c, close_c := 0, 0

    for _, c := range s {
        if c == '(' {
            open_c++
        } else if c == ')' && open_c > 0 {
            open_c--
        } else {
            close_c++
        }
    }
    return open_c + close_c
}
```
``` Rust []
impl Solution {
    pub fn min_add_to_make_valid(s: String) -> i32 {
        let mut open_c = 0;
        let mut close_c = 0;

        for c in s.chars() {
            if c == '(' {
                open_c += 1;
            } else if c == ')' && open_c > 0 {
                open_c -= 1;
            } else {
                close_c += 1;
            }
        }
        open_c + close_c
    }
}
```

``` C []
int minAddToMakeValid(char* s) {
    int open_c = 0, close_c = 0;

    for (int i = 0; s[i] != '\\0'; i++) {
        if (s[i] == '(') {
            open_c++;
        } else if (s[i] == ')' && open_c > 0) {
            open_c--;
        } else {
            close_c++;
        }
    }
    return open_c + close_c;
}
```
# Congrats!! You've learned something new today \u2B06\uFE0F\uD83E\uDD29\uD83D\uDC96\uD83D\uDC3E