# Beats 100% Of Users | Takes Minimum Memory | Best Solution You Will Find

**Author:** imsahibnanda
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-appeal-of-a-string/solutions/4874885/](https://leetcode.com/problems/total-appeal-of-a-string/solutions/4874885/)

---

---
# Intuition
To solve this problem, we need to understand that the appeal of a substring is determined by the number of unique characters it contains. The challenge is to efficiently calculate the sum of appeals for all possible substrings of `s` without generating each substring explicitly.

---
# Approach
The key observation is that each character in the string contributes to the appeal of several substrings it is part of. We can track the last occurrence of each character and calculate its contribution to the total appeal based on its position and last occurrence. This way, we avoid redundant computations and achieve a more efficient algorithm.

For each character at index `i` in the string:
- We calculate its contribution to the total appeal as `i - last_seen[char]`, where `last_seen[char]` is the index of the last occurrence of the character.
- We update the total appeal by adding this contribution.
- We then update the `last_seen` position for the current character to `i`.

---
# Complexity
- Time complexity: $$O(n)$$
  - The algorithm iterates through the string once, performing constant-time operations for each character.
- Space complexity: $$O(1)$$
  - The space used by the `last_seen` dictionary is constant, limited by the number of unique characters in the input alphabet (which is typically much smaller than `n`, the length of the string).

---
# Code
---

**Python3:**
```python
class Solution:
  def appealSum(self, s: str) -> int:
    last_seen = {char: -1 for char in set(s)}
    ans = 0
    dp = 0
    for i, char in enumerate(s):
      dp += i - last_seen[char]
      ans += dp
      last_seen[char] = i
    return ans
```
---

**C++:**

```c++
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
  int appealSum(string s) {
    unordered_map<char, int> last_seen;
    int ans = 0, dp = 0, n = s.size();
    for (int i = 0; i < n; ++i) {
      char char = s[i];
      dp += i - last_seen[char];
      ans += dp;
      last_seen[char] = i;
    }
    return ans;
  }
};
```
---

**Java:**

```java
import java.util.HashMap;

public class Solution {
  public int appealSum(String s) {
    HashMap<Character, Integer> lastSeen = new HashMap<>();
    int ans = 0, dp = 0;
    for (int i = 0; i < s.length(); i++) {
      char char = s.charAt(i);
      dp += i - lastSeen.getOrDefault(char, -1);
      ans += dp;
      lastSeen.put(char, i);
    }
    return ans;
  }
}
```
---

**C:**

```c
#include <string.h>
#define MAX_CHAR 256

int appealSum(char* s) {
  int lastSeen[MAX_CHAR];
  memset(lastSeen, -1, sizeof(lastSeen));
  int ans = 0, dp = 0, n = strlen(s);
  for (int i = 0; i < n; ++i) {
    dp += i - lastSeen[s[i]];
    ans += dp;
    lastSeen[s[i]] = i;
  }
  return ans;
}
```
---

**JavaScript:**

```javascript
class Solution {
  appealSum(s) {
    let lastSeen = new Map();
    let ans = 0, dp = 0;
    for (let i = 0; i < s.length; i++) {
      let char = s[i];
      dp += i - (lastSeen.get(char) || -1);
      ans += dp;
      lastSeen.set(char, i);
    }
    return ans;
  }
}
```
---

**Dart:**

```dart
class Solution {
  int appealSum(String s) {
    Map<String, int> lastSeen = {};
    int ans = 0, dp = 0;
    for (int i = 0; i < s.length; i++) {
      String char = s[i];
      dp += i - (lastSeen[char] ?? -1);
      ans += dp;
      lastSeen[char] = i;
    }
    return ans;
  }
}
```
---

This approach and solution provide a unified way to calculate the total appeal of all substrings of a given string across multiple programming languages, leveraging the key insight of character contribution based on the last seen positions.

