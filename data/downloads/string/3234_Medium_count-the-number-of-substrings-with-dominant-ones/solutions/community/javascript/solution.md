# 🔥BEATS 💯 % 🎯 || DART || JAVA || JAVASCRIPT || PYTHON || C++|| 🍭✨

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5547763/](https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones/solutions/5547763/)

---

![image.png](./images/0.png)


# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find the number of substrings where the count of zeros squared is greater than or equal to the count of ones, we can use prefix sums to count the number of ones efficiently. We can then iterate through the string and use this prefix sum to check the count of ones and zeros in each substring, making necessary jumps to skip over substrings that cannot meet the condition.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate a prefix sum array to store the cumulative count of ones up to each index.
2. Iterate through the string and for each starting position, calculate the number of ones and zeros in the substring ending at each subsequent position.
3. Use the prefix sum to efficiently get the count of ones in any substring.
4. Check if the count of zeros squared is greater than or equal to the count of ones. If true, increment the output.
5. Make necessary jumps to skip over substrings that cannot meet the condition to optimize the solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
The time complexity is \\(O(n^2)\\) in the worst case due to the nested loops.

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
The space complexity is \\(O(n)\\) due to the prefix sum array.

# Code

### Dart
```dart
import 'dart:math';

class Solution {
  int numberOfSubstrings(String s) {
    int output = 0;
    List<int> prefix = List.filled(s.length, 0);
    for (int i = 0; i < s.length; i++) {
      if (i == 0) {
        prefix[i] = (s[i] == '1') ? 1 : 0;
      } else {
        prefix[i] = prefix[i - 1] + ((s[i] == '1') ? 1 : 0);
      }
    }
    for (int i = 0; i < s.length; i++) {
      int count = 0, one = 0;
      for (int j = i; j < s.length; j++) {
        one = prefix[j] - ((i == 0) ? 0 : prefix[i - 1]); // count of one
        count = j - i + 1 - one;  // count of zero
        if (count * count > one) {
          j += (count * count - one - 1);  // jump where next solution is possible
        }
        if (count * count <= one) {
          int kl = sqrt(one).toInt();
          output++;
          if (kl > count) {  // again jump where zero can be greater than one
            output += (j + (kl - count)) >= s.length
                ? (s.length - j - 1)
                : (kl - count); // condition added just to ensure not to exceed the s.length
            j = j + (kl - count);
          }
        }
      }
    }
    return output;
  }
}
```

### Java
```java
class Solution {
    public int numberOfSubstrings(String s) {
        int output = 0;
        int[] prefix = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            if (i == 0) prefix[i] = (s.charAt(i) == '1') ? 1 : 0;
            else prefix[i] = prefix[i - 1] + ((s.charAt(i) == '1') ? 1 : 0);
        }
        for (int i = 0; i < s.length(); i++) {
            int count = 0, one = 0;
            for (int j = i; j < s.length(); j++) {
                one = prefix[j] - ((i == 0) ? 0 : prefix[i - 1]); // count of one
                count = j - i + 1 - one;  // count of zero
                if (count * count > one) {
                    j += (count * count - one - 1);  // jump where next solution is possible
                }
                if (count * count <= one) {
                    int kl = (int) Math.sqrt(one);
                    output++;
                    if (kl > count) {  // again jump where zero can be greater than one
                        output += (j + (kl - count)) >= s.length() ? (s.length() - j - 1) : (kl - count); // condition added just to ensure not to exceed the s.length()
                        j = j + (kl - count);
                    }
                }
            }
        }
        return output;
    }
}
```

### JavaScript
```javascript
class Solution {
  numberOfSubstrings(s) {
    let output = 0;
    let prefix = new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
      if (i == 0) {
        prefix[i] = (s.charAt(i) == '1') ? 1 : 0;
      } else {
        prefix[i] = prefix[i - 1] + ((s.charAt(i) == '1') ? 1 : 0);
      }
    }
    for (let i = 0; i < s.length; i++) {
      let count = 0, one = 0;
      for (let j = i; j < s.length; j++) {
        one = prefix[j] - ((i == 0) ? 0 : prefix[i - 1]); // count of one
        count = j - i + 1 - one;  // count of zero
        if (count * count > one) {
          j += (count * count - one - 1);  // jump where next solution is possible
        }
        if (count * count <= one) {
          let kl = Math.floor(Math.sqrt(one));
          output++;
          if (kl > count) {  // again jump where zero can be greater than one
            output += (j + (kl - count)) >= s.length ? (s.length - j - 1) : (kl - count); // condition added just to ensure not to exceed the s.length
            j = j + (kl - count);
          }
        }
      }
    }
    return output;
  }
}
```

### Python
```python
import math

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        output = 0
        prefix = [0] * len(s)
        for i in range(len(s)):
            if i == 0:
                prefix[i] = 1 if s[i] == '1' else 0
            else:
                prefix[i] = prefix[i - 1] + (1 if s[i] == '1' else 0)
        
        for i in range(len(s)):
            count = 0
            one = 0
            j = i
            while j < len(s):
                one = prefix[j] - (0 if i == 0 else prefix[i - 1])  # count of one
                count = j - i + 1 - one  # count of zero
                if count * count > one:
                    j += (count * count - one - 1)  # jump where next solution is possible
                if count * count <= one:
                    kl = math.isqrt(one)
                    output += 1
                    if kl > count:  # again jump where zero can be greater than one
                        output += (j + (kl - count)) >= len(s) and (len(s) - j - 1) or (kl - count)  # condition added just to ensure not to exceed the s.length
                        j += (kl - count)
                j += 1
        return output
```

### C++
```cpp
#include <vector>
#include <cmath>
#include <string>

class Solution {
public:
    int numberOfSubstrings(std::string s) {
        int output = 0;
        std::vector<int> prefix(s.length(), 0);
        for (int i = 0; i < s.length(); i++) {
            if (i == 0) {
                prefix[i] = (s[i] == '1') ? 1 : 0;
            } else {
                prefix[i] = prefix[i - 1] + ((s[i] == '1') ? 1 : 0);
            }
        }
        for (int i = 0; i < s.length(); i++) {
            int count = 0, one = 0;
            for (int j = i; j < s.length(); j++) {
                one = prefix[j] - ((i == 0) ? 0 : prefix[i - 1]); // count of one
                count = j - i + 1 - one;  // count of zero
                if (count * count > one) {
                    j += (count * count - one - 1);  // jump where next solution is possible
                }
                if (count * count <= one) {
                    int kl = static_cast<int>(std::sqrt(one));
                    output++;
                    if (kl > count) {  // again jump where zero can be greater than one
                        output += (j + (kl - count)) >= s.length() ? (s.length() - j - 1) : (kl - count); // condition added just

 to ensure not to exceed the s.length()
                        j = j + (kl - count);
                    }
                }
            }
        }
        return output;
    }
};
```
![image.png](./images/1.png)