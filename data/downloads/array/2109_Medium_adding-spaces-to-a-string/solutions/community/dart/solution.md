# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6109455/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6109455/)

---

![image.png](./images/0.png)


---


```java []
class Solution {
    public String addSpaces(String s, int[] spaces) {
        StringBuilder result = new StringBuilder();
        int lastIndex = 0;

        for (int space : spaces) {
            result.append(s.substring(lastIndex, space)).append(" ");
            lastIndex = space;
        }

        result.append(s.substring(lastIndex));
        return result.toString();
    }
}
```


```python []
class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        result = []
        last_index = 0

        for space in spaces:
            result.append(s[last_index:space])
            last_index = space

        result.append(s[last_index:])
        return " ".join(result)
```


```c []
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* addSpaces(char* s, int* spaces, int spacesSize) {
    int sLength = strlen(s);
    int newLength = sLength + spacesSize;
    char* result = (char*)malloc(newLength + 1); // Allocate memory for result
    int resultIndex = 0, sIndex = 0;

    for (int i = 0; i < spacesSize; i++) {
        int space = spaces[i];
        while (sIndex < space) {
            result[resultIndex++] = s[sIndex++];
        }
        result[resultIndex++] = ' ';
    }

    while (s[sIndex] != '\\0') {
        result[resultIndex++] = s[sIndex++];
    }

    result[resultIndex] = '\\0';
    return result;
}
```


```cpp []
class Solution {
public:
    string addSpaces(string s, vector<int>& spaces) {
        string result;
        int lastIndex = 0;

        for (int space : spaces) {
            result += s.substr(lastIndex, space - lastIndex) + " ";
            lastIndex = space;
        }

        result += s.substr(lastIndex);
        return result;
    }
};
```


```go []
func addSpaces(s string, spaces []int) string {
    result := ""
    lastIndex := 0

    for _, space := range spaces {
        result += s[lastIndex:space] + " "
        lastIndex = space
    }

    result += s[lastIndex:]
    return result
}
```


```javascript []
var addSpaces = function(s, spaces) {
    let result = [];
    let lastIndex = 0;

    for (let space of spaces) {
        result.push(s.substring(lastIndex, space));
        lastIndex = space;
    }

    result.push(s.substring(lastIndex));
    return result.join(" ");
};
```


```dart []
class Solution {
  String addSpaces(String s, List<int> spaces) {
    if (spaces.isEmpty) return s;

    List<String> parts = [];
    parts.add(s.substring(0, spaces.first));

    for (int i = 1; i < spaces.length; i++) {
      parts.add(s.substring(spaces[i - 1], spaces[i]));
    }

    parts.add(s.substring(spaces.last));
    return parts.join(" ");
  }
}
```


---

![image.png](./images/1.png) {:style='width:250px'}