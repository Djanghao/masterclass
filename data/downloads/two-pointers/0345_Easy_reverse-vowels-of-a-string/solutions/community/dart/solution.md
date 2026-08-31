# Simple way to Solve Reverse Vowels in a String

**Author:** patel_jaimin
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/6064825/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/6064825/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To solve the problem, the goal is to reverse the positions of only the vowels in a given string. Since vowels are a subset of characters, we need to identify vowels and swap them without affecting the positions of the other characters. A two-pointer approach can be useful, where one pointer starts from the beginning of the string and the other starts from the end, moving towards each other and swapping vowels when both pointers point to vowels.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Two-pointer Technique:

   - Start with two pointers: one (`start`) at the beginning of the string and the other (`end`) at the last character.
   - Move the `start` pointer forward until a vowel is found.
   - Move the `end` pointer backward until a vowel is found.
   - Once both pointers point to vowels, swap them.
   - Continue this process until the two pointers meet or cross.
2. Check for Vowels:

   - To determine whether a character is a vowel, define a helper function (`isVowel`) that checks if a character belongs to the set `aeiouAEIOU`.
3. Edge Cases:

   - If the string is empty or has only one character, no reversal is needed.
   - If there are no vowels, the string remains unchanged.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
bool isVowel(char c) {
    char vowels[] = "aeiouAEIOU";
    for (int i = 0; vowels[i] != '\\0'; i++) {
        if (c == vowels[i]) {
            return true;
        }
    }
    return false;
}

char* reverseVowels(char* s) {
    int start = 0;
    int end = strlen(s) - 1;

    while (start < end) {
        while (start < end && !isVowel(s[start])) {
            start++;
        }
        while (start < end && !isVowel(s[end])) {
            end--;
        }
        
        // Swap vowels
        char temp = s[start];
        s[start] = s[end];
        s[end] = temp;

        start++;
        end--;
    }
    return s;
}
```
```cpp []
class Solution {
public:
    string reverseVowels(string s) {
        string word = s;
        int start = 0;
        int end = s.length() - 1;
        string vowels = "aeiouAEIOU";
        while (start < end) {
            while (start < end && vowels.find(word[start]) == string::npos) {
                start++;
            }
            while (start < end && vowels.find(word[end]) == string::npos) {
                end--;
            }
            swap(word[start], word[end]);
            start++;
            end--;
        }
        return word;
    }
};
```
```csharp []
public class Solution {
    public string ReverseVowels(string s) {
        char[] word = s.ToCharArray();
        int start = 0;
        int end = s.Length - 1;
        string vowels = "aeiouAEIOU";

        while (start < end) {
            while (start < end && !vowels.Contains(word[start].ToString())) {
                start++;
            }
            while (start < end && !vowels.Contains(word[end].ToString())) {
                end--;
            }

            char temp = word[start];
            word[start] = word[end];
            word[end] = temp;

            start++;
            end--;
        }

        return new string(word);
    }
}
```
```java []
class Solution {
    public String reverseVowels(String s) {
        char[] word = s.toCharArray();
        int start = 0;
        int end = s.length() - 1;
        String vowels = "aeiouAEIOU";

        while (start < end) {
            while (start < end && vowels.indexOf(word[start]) == -1) {
                start++;
            }
            while (start < end && vowels.indexOf(word[end]) == -1) {
                end--;
            }

            char temp = word[start];
            word[start] = word[end];
            word[end] = temp;

            start++;
            end--;
        }

        return new String(word);
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let word = s.split('');
    let start = 0;
    let end = s.length - 1;
    let vowels = "aeiouAEIOU";

    while (start < end) {
        while (start < end && !vowels.includes(word[start])) {
            start++;
        }
        while (start < end && !vowels.includes(word[end])) {
            end--;
        }

        [word[start], word[end]] = [word[end], word[start]];
        start++;
        end--;
    }

    return word.join('');
};
```
```typescript []
function reverseVowels(s: string): string {
    let word = s.split('');
    let start = 0;
    let end = s.length - 1;
    let vowels = "aeiouAEIOU";

    while (start < end) {
        while (start < end && !vowels.includes(word[start])) {
            start++;
        }
        while (start < end && !vowels.includes(word[end])) {
            end--;
        }

        [word[start], word[end]] = [word[end], word[start]];
        start++;
        end--;
    }

    return word.join('');
};
```
```python []
class Solution(object):
    def reverseVowels(self, s):
        """
        :type s: str
        :rtype: str
        """
        word = list(s)
        start = 0
        end = len(s) - 1
        vowels = "aeiouAEIOU"

        while start < end:
            while start < end and word[start] not in vowels:
                start += 1
            while start < end and word[end] not in vowels:
                end -= 1

            # Swap vowels
            word[start], word[end] = word[end], word[start]

            start += 1
            end -= 1

        return ''.join(word)
```
```python3 []
class Solution:
    def reverseVowels(self, s: str) -> str:
        word = list(s)
        start = 0
        end = len(s) - 1
        vowels = "aeiouAEIOU"

        while start < end:
            while start < end and word[start] not in vowels:
                start += 1
            while start < end and word[end] not in vowels:
                end -= 1

            # Swap vowels
            word[start], word[end] = word[end], word[start]

            start += 1
            end -= 1

        return ''.join(word)
```
```Go []
func reverseVowels(s string) string {
    word := []rune(s)
    start := 0
    end := len(word) - 1
    vowels := "aeiouAEIOU"

    for start < end {
        for start < end && !strings.ContainsRune(vowels, word[start]) {
            start++
        }
        for start < end && !strings.ContainsRune(vowels, word[end]) {
            end--
        }

        word[start], word[end] = word[end], word[start]
        start++
        end--
    }

    return string(word)
}
```
```Dart []
class Solution {
  String reverseVowels(String s) {
    List<String> word = s.split('');
    int start = 0;
    int end = s.length - 1;
    String vowels = "aeiouAEIOU";

    while (start < end) {
      while (start < end && !vowels.contains(word[start])) {
        start++;
      }
      while (start < end && !vowels.contains(word[end])) {
        end--;
      }

      String temp = word[start];
      word[start] = word[end];
      word[end] = temp;

      start++;
      end--;
    }

    return word.join('');
  }
}
```

![WhatsApp Image 2024-11-20 at 1.43.05 PM.jpeg](./images/0.jpeg)
