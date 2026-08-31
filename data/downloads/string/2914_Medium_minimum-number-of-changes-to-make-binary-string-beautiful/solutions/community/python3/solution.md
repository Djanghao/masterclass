# 🌟 Beats 100.00% 👏 || For loop || Explained with example

**Author:** phoenix_sr
**Votes:** 86
**Link:** [https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008345/](https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/solutions/6008345/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires us to count the number of changes needed to make adjacent pairs in the string identical. This means for each pair (s[i], s[i + 1]), we check if they are the same. If they are not, it counts as one required change to make them identical.

The goal is to minimize the number of changes needed to make all these pairs identical, so we simply count how many pairs have different characters and return this count.
# Approach
<!-- Describe your approach to solving the problem. -->
Initialize a counter: Set up a variable count to track the number of pairs that need changes.
Iterate through the string in steps of 2: Start a loop at index 0 and increment by 2 each time, so we examine pairs (s[i], s[i+1]).
Note: We stop at len(s) - 1 because s[i + 1] needs to exist as the second character in the pair.
Check if characters in the pair are different:
If s[i] != s[i + 1], increase count by 1 because it represents a change needed.
Return the result: After finishing the loop, return count, which gives the minimum number of changes required to make all pairs identical.

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []

var minChanges = function (s) {
    let count = 0
    for (let i = 0; i < s.length; i = i + 2) {
        if (s[i] != s[i + 1]) count++
    }
    return count
};
```
```python []
def min_changes(s):
    count = 0
    i = 0
    while i < len(s) - 1:
        if s[i] != s[i + 1]:
            count += 1
        i += 2
    return count

```
```java []
public class Solution {
    public int minChanges(String s) {
        int count = 0;
        for (int i = 0; i < s.length() - 1; i += 2) {
            if (s.charAt(i) != s.charAt(i + 1)) {
                count++;
            }
        }
        return count;
    }
}

```
```c []
#include <string.h>

int minChanges(char* s) {
    int count = 0;
    for (int i = 0; i < strlen(s) - 1; i += 2) {
        if (s[i] != s[i + 1]) {
            count++;
        }
    }
    return count;
}

```
```c++ []
class Solution {
public:
    int minChanges(const std::string& s) {
    int count = 0;
    for (int i = 0; i < s.size() - 1; i += 2) {
        if (s[i] != s[i + 1]) {
            count++;
        }
    }
    return count;
}
};
#include <string>



```