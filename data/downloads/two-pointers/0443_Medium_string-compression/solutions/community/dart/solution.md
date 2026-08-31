# easy way beat 100% in String Compression

**Author:** patel_jaimin
**Votes:** 16
**Link:** [https://leetcode.com/problems/string-compression/solutions/6066222/](https://leetcode.com/problems/string-compression/solutions/6066222/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves compressing a list of characters in-place by replacing consecutive characters with the character followed by the number of occurrences. Our goal is to modify the given list to represent a compressed version of the string, reducing the number of characters when possible.

My initial thought is to iterate over the list and track the frequency of consecutive characters. Once a sequence ends (i.e., we encounter a different character), we can store the character and its frequency (if greater than 1). This ensures that we only store the character once, and for repeating characters, we append the frequency next to it.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialization: Start with a pointer `i` that will traverse the list of characters. Use another pointer `idx` to track where the next character or count should be placed in the list.
2. Traverse the characters: Iterate through the list using the `i` pointer. For each character:
    - Count the number of consecutive occurrences of the current character.
    - Store the character at position `idx` and, if the count is greater than 1, convert the count to a string and store each digit in the list after the character.
3. Resize the list: After the loop, the list may contain extra characters. Resize it to `idx` to return only the relevant part.
4. Return the new length: The function should return the length of the modified list.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
int compress(char* chars, int charsSize) {
    int idx = 0;
    for (int i = 0; i < charsSize; i++) {
        char ch = chars[i];
        int count = 0;
        while (i < charsSize && chars[i] == ch) {
            count++;
            i++;
        }
        if (count == 1) {
            chars[idx++] = ch;
        } else {
            chars[idx++] = ch;
            char str[10];
            sprintf(str, "%d", count);
            for (int j = 0; str[j] != '\\0'; j++) {
                chars[idx++] = str[j];
            }
        }
        i--;
    }
    return idx;
}
```
```cpp []
class Solution {
public:
    int compress(vector<char>& chars) {
        int n = chars.size();
        int idx = 0;
        for (int i = 0; i < n; i++) {
            char ch = chars[i];
            int count = 0;
            while (i < n && chars[i] == ch) {
                count++;
                i++;
            }
            if (count == 1) {
                chars[idx++] = ch;
            } else {
                chars[idx++] = ch;
                string str = to_string(count);
                for (char dig : str) {
                    chars[idx++] = dig;
                }
            }
            i--;
        }
        chars.resize(idx);
        return idx;
    }
};
```
```csharp []
public class Solution {
    public int Compress(char[] chars) {
        int n = chars.Length;
        int idx = 0;
        for (int i = 0; i < n; i++) {
            char ch = chars[i];
            int count = 0;
            while (i < n && chars[i] == ch) {
                count++;
                i++;
            }
            if (count == 1) {
                chars[idx++] = ch;
            } else {
                chars[idx++] = ch;
                foreach (char digit in count.ToString()) {
                    chars[idx++] = digit;
                }
            }
            i--;
        }
        Array.Resize(ref chars, idx);
        return idx;
    }
}
```
```typescript []
function compress(chars: string[]): number {
    let n = chars.length;
    let idx = 0;
    for (let i = 0; i < n; i++) {
        let ch = chars[i];
        let count = 0;
        while (i < n && chars[i] === ch) {
            count++;
            i++;
        }
        if (count === 1) {
            chars[idx++] = ch;
        } else {
            chars[idx++] = ch;
            for (let digit of count.toString()) {
                chars[idx++] = digit;
            }
        }
        i--;
    }
    chars.length = idx;
    return idx;
};
```
```javascript []
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let n = chars.length;
    let idx = 0;
    for (let i = 0; i < n; i++) {
        let ch = chars[i];
        let count = 0;
        while (i < n && chars[i] === ch) {
            count++;
            i++;
        }
        if (count === 1) {
            chars[idx++] = ch;
        } else {
            chars[idx++] = ch;
            for (let digit of count.toString()) {
                chars[idx++] = digit;
            }
        }
        i--;
    }
    chars.length = idx;
    return idx;
};
```
```java []
class Solution {
    public int compress(char[] chars) {
        int n = chars.length;
        int idx = 0;
        for (int i = 0; i < n; i++) {
            char ch = chars[i];
            int count = 0;
            while (i < n && chars[i] == ch) {
                count++;
                i++;
            }
            if (count == 1) {
                chars[idx++] = ch;
            } else {
                chars[idx++] = ch;
                for (char digit : Integer.toString(count).toCharArray()) {
                    chars[idx++] = digit;
                }
            }
            i--;
        }
        return idx;
    }
}
```
```python []
class Solution(object):
    def compress(self, chars):
        """
        :type chars: List[str]
        :rtype: int
        """
        n = len(chars)
        idx = 0
        i = 0
        while i < n:
            ch = chars[i]
            count = 0
            while i < n and chars[i] == ch:
                count += 1
                i += 1
            if count == 1:
                chars[idx] = ch
                idx += 1
            else:
                chars[idx] = ch
                idx += 1
                for digit in str(count):
                    chars[idx] = digit
                    idx += 1
        chars[:] = chars[:idx]
        return idx
```
```python3 []
class Solution:
    def compress(self, chars: List[str]) -> int:
        n = len(chars)
        idx = 0
        i = 0
        while i < n:
            ch = chars[i]
            count = 0
            while i < n and chars[i] == ch:
                count += 1
                i += 1
            if count == 1:
                chars[idx] = ch
                idx += 1
            else:
                chars[idx] = ch
                idx += 1
                for digit in str(count):
                    chars[idx] = digit
                    idx += 1
        chars[:] = chars[:idx]
        return idx
```
```Go []
func compress(chars []byte) int {
    n := len(chars)
    idx := 0
    i := 0
    for i < n {
        ch := chars[i]
        count := 0
        for i < n && chars[i] == ch {
            count++
            i++
        }
        if count == 1 {
            chars[idx] = ch
            idx++
        } else {
            chars[idx] = ch
            idx++
            for _, digit := range []byte(strconv.Itoa(count)) {
                chars[idx] = digit
                idx++
            }
        }
    }
    return idx
}
```
```Dart []
class Solution {
  int compress(List<String> chars) {
    int n = chars.length;
    int idx = 0;
    int i = 0;
    while (i < n) {
      String ch = chars[i];
      int count = 0;
      while (i < n && chars[i] == ch) {
        count++;
        i++;
      }
      if (count == 1) {
        chars[idx] = ch;
        idx++;
      } else {
        chars[idx] = ch;
        idx++;
        for (var digit in count.toString().split('')) {
          chars[idx] = digit;
          idx++;
        }
      }
    }
    chars.length = idx; 
    return idx;
  }
}
```
![WhatsApp Image 2024-11-20 at 1.45.55 PM.jpeg](./images/0.jpeg)
