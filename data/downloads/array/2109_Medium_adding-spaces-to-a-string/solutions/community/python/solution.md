# 🌟 Beats 100.00% 👏 || For loop || Explained with example

**Author:** phoenix_sr
**Votes:** 28
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106675/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6106675/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
very simple explanation 
we will first cut the string into pieces given in the spaces array 
then we will simply join them with a space in between each of them 
very simple
# Approach
<!-- Describe your approach to solving the problem. -->
use an aray to store all the words 
add a space to all of them while joining and return it 
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var addSpaces = function(s, spaces) {
    let arr=[]
    arr.push(s.slice(0,spaces[0]))
    for(let i=1;i<spaces.length;i++){
        arr.push(s.slice(spaces[i-1],spaces[i]))
    }
    arr.push(s.slice(spaces.at(-1)))
    arr=arr.join(' ')
    return arr
};
```
```python []
def add_spaces(s, spaces):
    arr = []
    arr.append(s[:spaces[0]])
    for i in range(1, len(spaces)):
        arr.append(s[spaces[i-1]:spaces[i]])
    arr.append(s[spaces[-1]:])
    return ' '.join(arr)

```
```java []
public class AddSpaces {
    public static String addSpaces(String s, int[] spaces) {
        StringBuilder result = new StringBuilder();
        int start = 0;
        for (int space : spaces) {
            result.append(s, start, space).append(" ");
            start = space;
        }
        result.append(s.substring(start));
        return result.toString();
    }
}

```
```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* addSpaces(const char* s, const int* spaces, int spacesSize) {
    int len = strlen(s);
    int newLen = len + spacesSize; // Calculate the length of the new string
    char* result = (char*)malloc((newLen + 1) * sizeof(char)); // Allocate memory for result
    int resIndex = 0, start = 0;

    for (int i = 0; i < spacesSize; i++) {
        int space = spaces[i];
        // Copy part of the original string
        strncpy(result + resIndex, s + start, space - start);
        resIndex += space - start;
        result[resIndex++] = ' '; // Add a space
        start = space;
    }
    strcpy(result + resIndex, s + start); // Copy the remaining part
    return result; // Caller should free this memory
}
```
``c++ []
#include <string>
#include <vector>

std::string addSpaces(const std::string& s, const std::vector<int>& spaces) {
    std::string result;
    int start = 0;

    for (int space : spaces) {
        result += s.substr(start, space - start) + " ";
        start = space;
    }
    result += s.substr(start);
    return result;
}
```