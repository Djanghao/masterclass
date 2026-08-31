# 🔥BEATS 💯 % 🎯 | SUPER EASY AND SIMPLE🔥|

**Author:** CodeWithSparsh
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5789182/](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/solutions/5789182/)

---



### Intuition
The problem asks to find the longest substring where each vowel appears an even number of times. Tracking vowel frequencies can be simplified using a **bitmask**, where each bit represents whether a specific vowel ('a', 'e', 'i', 'o', 'u') appears an even or odd number of times. By toggling the bits as we encounter vowels, we can efficiently track the vowel counts and check when all vowels have even occurrences.

### Approach
1. **Bitmask Representation**: Use a 5-bit mask where each bit represents whether a vowel has appeared an odd (1) or even (0) number of times.
   - The first bit represents 'a', the second bit 'e', and so on.
2. **Traversing the String**: As we traverse the string, for each vowel, toggle the corresponding bit in the bitmask. For consonants, the bitmask remains unchanged.
3. **Tracking First Occurrence**: Use a map to track the first occurrence of each bitmask state. If we encounter the same bitmask again, it means that all vowels in the substring between these two indices have even counts.
4. **Calculate the Maximum Length**: Each time we encounter a repeated bitmask, compute the length of the substring and update the maximum length accordingly.

### Complexity
- **Time Complexity**:  
  $$O(n)$$, where \\(n\\) is the length of the string. We process each character once and use constant time operations to update the bitmask and check the map.
  
- **Space Complexity**:  
  $$O(1)$$ for the bitmask, since there are only 32 possible bitmask states (5 bits). The map may require up to \\(O(n)\\) space to store the indices of bitmask states.

### Code
```dart []
class Solution {
  int findTheLongestSubstring(String s) {
    // Bitmask to track the status of vowels (a, e, i, o, u)
    int bitmask = 0;
    // Map to store the first occurrence of each bitmask
    Map<int, int> bitmaskFirstOccurrence = {0: -1};  // Initially, bitmask 0 occurs at index -1
    int maxLength = 0;

    for (int i = 0; i < s.length; i++) {
      // Update the bitmask for the current character
      if (s[i] == 'a') {
        bitmask ^= 1 << 0; // Toggle the 0th bit (for 'a')
      } else if (s[i] == 'e') {
        bitmask ^= 1 << 1; // Toggle the 1st bit (for 'e')
      } else if (s[i] == 'i') {
        bitmask ^= 1 << 2; // Toggle the 2nd bit (for 'i')
      } else if (s[i] == 'o') {
        bitmask ^= 1 << 3; // Toggle the 3rd bit (for 'o')
      } else if (s[i] == 'u') {
        bitmask ^= 1 << 4; // Toggle the 4th bit (for 'u')
      }

      // Check if we've seen this bitmask before
      if (bitmaskFirstOccurrence.containsKey(bitmask)) {
        // Calculate the length of the valid substring
        int length = i - bitmaskFirstOccurrence[bitmask]!;
        maxLength = max(maxLength, length);
      } else {
        // Record the first occurrence of this bitmask
        bitmaskFirstOccurrence[bitmask] = i;
      }
    }

    return maxLength;
  }
}

``` 



```java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int findTheLongestSubstring(String s) {
        int bitmask = 0;
        int maxLength = 0;
        Map<Integer, Integer> bitmaskFirstOccurrence = new HashMap<>();
        bitmaskFirstOccurrence.put(0, -1);

        for (int i = 0; i < s.length(); i++) {
            char ch = s.charAt(i);
            if (ch == 'a') {
                bitmask ^= 1 << 0;
            } else if (ch == 'e') {
                bitmask ^= 1 << 1;
            } else if (ch == 'i') {
                bitmask ^= 1 << 2;
            } else if (ch == 'o') {
                bitmask ^= 1 << 3;
            } else if (ch == 'u') {
                bitmask ^= 1 << 4;
            }

            if (bitmaskFirstOccurrence.containsKey(bitmask)) {
                int length = i - bitmaskFirstOccurrence.get(bitmask);
                maxLength = Math.max(maxLength, length);
            } else {
                bitmaskFirstOccurrence.put(bitmask, i);
            }
        }

        return maxLength;
    }
}
```



```javascript []
function findTheLongestSubstring(s) {
    let bitmask = 0;
    let maxLength = 0;
    const bitmaskFirstOccurrence = { 0: -1 };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === 'a') {
            bitmask ^= 1 << 0;
        } else if (ch === 'e') {
            bitmask ^= 1 << 1;
        } else if (ch === 'i') {
            bitmask ^= 1 << 2;
        } else if (ch === 'o') {
            bitmask ^= 1 << 3;
        } else if (ch === 'u') {
            bitmask ^= 1 << 4;
        }

        if (bitmaskFirstOccurrence.hasOwnProperty(bitmask)) {
            const length = i - bitmaskFirstOccurrence[bitmask];
            maxLength = Math.max(maxLength, length);
        } else {
            bitmaskFirstOccurrence[bitmask] = i;
        }
    }

    return maxLength;
}
```



```python []
def findTheLongestSubstring(s: str) -> int:
    bitmask = 0
    maxLength = 0
    bitmask_first_occurrence = {0: -1}

    for i, ch in enumerate(s):
        if ch == 'a':
            bitmask ^= 1 << 0
        elif ch == 'e':
            bitmask ^= 1 << 1
        elif ch == 'i':
            bitmask ^= 1 << 2
        elif ch == 'o':
            bitmask ^= 1 << 3
        elif ch == 'u':
            bitmask ^= 1 << 4

        if bitmask in bitmask_first_occurrence:
            length = i - bitmask_first_occurrence[bitmask]
            maxLength = max(maxLength, length)
        else:
            bitmask_first_occurrence[bitmask] = i

    return maxLength
```



```c []
#include <stdio.h>
#include <string.h>

int findTheLongestSubstring(char *s) {
    int bitmask = 0;
    int maxLength = 0;
    int bitmaskFirstOccurrence[32];
    for (int i = 0; i < 32; i++) bitmaskFirstOccurrence[i] = -1;
    bitmaskFirstOccurrence[0] = -1;

    for (int i = 0; s[i] != '\\0'; i++) {
        char ch = s[i];
        if (ch == 'a') {
            bitmask ^= 1 << 0;
        } else if (ch == 'e') {
            bitmask ^= 1 << 1;
        } else if (ch == 'i') {
            bitmask ^= 1 << 2;
        } else if (ch == 'o') {
            bitmask ^= 1 << 3;
        } else if (ch == 'u') {
            bitmask ^= 1 << 4;
        }

        if (bitmaskFirstOccurrence[bitmask] != -1) {
            int length = i - bitmaskFirstOccurrence[bitmask];
            if (length > maxLength) maxLength = length;
        } else {
            bitmaskFirstOccurrence[bitmask] = i;
        }
    }

    return maxLength;
}
```



```cpp []
#include <unordered_map>
#include <string>
#include <algorithm>

class Solution {
public:
    int findTheLongestSubstring(std::string s) {
        int bitmask = 0;
        int maxLength = 0;
        std::unordered_map<int, int> bitmaskFirstOccurrence;
        bitmaskFirstOccurrence[0] = -1;

        for (int i = 0; i < s.size(); i++) {
            char ch = s[i];
            if (ch == 'a') {
                bitmask ^= 1 << 0;
            } else if (ch == 'e') {
                bitmask ^= 1 << 1;
            } else if (ch == 'i') {
                bitmask ^= 1 << 2;
            } else if (ch == 'o') {
                bitmask ^= 1 << 3;
            } else if (ch == 'u') {
                bitmask ^= 1 << 4;
            }

            if (bitmaskFirstOccurrence.find(bitmask) != bitmaskFirstOccurrence.end()) {
                int length = i - bitmaskFirstOccurrence[bitmask];
                maxLength = std::max(maxLength, length);
            } else {
                bitmaskFirstOccurrence[bitmask] = i;
            }
        }

        return maxLength;
    }
};
```



```go []
func findTheLongestSubstring(s string) int {
    bitmask := 0
    maxLength := 0
    bitmaskFirstOccurrence := map[int]int{0: -1}

    for i := 0; i < len(s); i++ {
        switch s[i] {
        case 'a':
            bitmask ^= 1 << 0
        case 'e':
            bitmask ^= 1 << 1
        case 'i':
            bitmask ^= 1 << 2
        case 'o':
            bitmask ^= 1 << 3
        case 'u':
            bitmask ^= 1 << 4
        }

        if firstOccurrence, ok := bitmaskFirstOccurrence[bitmask]; ok {
            length := i - firstOccurrence
            if length > maxLength {
                maxLength = length
            }
        } else {
            bitmaskFirstOccurrence[bitmask] = i
        }
    }

    return maxLength
}
```



```typescript []
function findTheLongestSubstring(s: string): number {
    let bitmask = 0;
    let maxLength = 0;
    const bitmaskFirstOccurrence: { [key: number]: number } = { 0: -1 };

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch === 'a') {
            bitmask ^= 1 << 0;
        } else if (ch === 'e') {
            bitmask ^= 1 << 1;
        } else if (ch === 'i') {
            bitmask ^= 1 << 2;
        } else if (ch === 'o') {
            bitmask ^= 1 << 3;
        } else if (ch === 'u') {
            bitmask ^= 1 << 4;
        }

        if (bitmask in bitmaskFirstOccurrence) {
            const length = i - bitmaskFirstOccurrence[bitmask];
            maxLength = Math.max(maxLength, length);
        } else {
            bitmaskFirstOccurrence[bitmask] = i;
        }
    }

    return maxLength;
}
```


