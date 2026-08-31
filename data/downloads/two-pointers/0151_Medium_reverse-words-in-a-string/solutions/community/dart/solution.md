# Simplest way to solve and 100% beat Reverse Words in a String

**Author:** patel_jaimin
**Votes:** 5
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/6072463/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/6072463/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is asking to reverse the order of words in a given string while preserving the individual words themselves. A natural approach to solving this involves first extracting the words from the input string, then reversing their order, and finally combining them back into a single string.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Extract words: We start by reading the string `s` and splitting it into words. This can be done using an input string stream (`istringstream` in C++), which allows us to extract words from the string.
2. Reverse the words: After collecting the words, we `reverse` the order of the words using the reverse function.
3. Rebuild the string: After reversing the words, we combine them back into a string. To ensure the correct format, a space is added between words. The output is a single string with words in reverse order.

# Complexity
- Time complexity: $$O(n+m)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```c []
void reverse(char* begin, char* end) {
    char temp;
    while (begin < end) {
        temp = *begin;
        *begin++ = *end;
        *end-- = temp;
    }
}
char* reverseWords(char* s) {
    while (*s == ' ') {
        s++;
    }
    int len = strlen(s);
    while (len > 0 && s[len - 1] == ' ') {
        s[--len] = '\\0';
    }

    char* word_begin = s;
    char* temp = s;
    while (*temp) {
        temp++;
        if (*temp == ' ' || *temp == '\\0') {
            reverse(word_begin, temp - 1);
            word_begin = temp + 1;
        }
    }

    reverse(s, temp - 1);

    char* dest = s;
    temp = s;
    while (*temp) {
        if (*temp != ' ' || (*(temp + 1) != ' ' && *(temp + 1) != '\\0')) {
            *dest++ = *temp;
        }
        temp++;
    }
    *dest = '\\0';

    return s;
}
```
```cpp []
class Solution {
public:
    string reverseWords(string s) {
        istringstream iss(s);
        vector<string> words;
        string word;
        while (iss >> word) {
            words.push_back(word);
        }
        reverse(words.begin(), words.end());
        ostringstream oss;
        for (size_t i = 0; i < words.size(); ++i) {
            if (i > 0) oss << " ";
            oss << words[i];
        }
        return oss.str();
    }
};
```
```csharp []
public class Solution {
    public string ReverseWords(string s) {
        s = s.Trim();
        string[] words = s.Split(new char[] { ' ' }, StringSplitOptions.RemoveEmptyEntries);
        Array.Reverse(words);
        return string.Join(" ", words);
    }
}
```
```java []
class Solution {
    public String reverseWords(String s) {
        s = s.trim();
        String[] words = s.split("\\\\s+");
        Collections.reverse(Arrays.asList(words));
        return String.join(" ", words);
    }
}
```
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    s = s.trim();
    let words = s.split(/\\s+/);
    words.reverse();
    return words.join(" ");
};
```
```typescript []
function reverseWords(s: string): string {
    s = s.trim();
    let words = s.split(/\\s+/);
    words.reverse();
    return words.join(" ");
};
```
```Go []
func reverseWords(s string) string {
	s = strings.TrimSpace(s)
	words := strings.Fields(s)
	for i, j := 0, len(words)-1; i < j; i, j = i+1, j-1 {
		words[i], words[j] = words[j], words[i]
	}
	return strings.Join(words, " ")
}
```
```Dart []
class Solution {
  String reverseWords(String s) {
    s = s.trim();
    List<String> words = s.split(" ");
    words = words.where((word) => word.isNotEmpty).toList();
    words = words.reversed.toList();
    return words.join(" ");
  }
}
```
```python []
class Solution(object):
    def reverseWords(self, s):
        """
        :type s: str
        :rtype: str
        """
        s = s.strip()  
        words = s.split()  
        return " ".join(reversed(words))
```
```python3 []
class Solution:
    def reverseWords(self, s: str) -> str:
        s = s.strip()  
        words = s.split()  
        return " ".join(reversed(words))
```
![WhatsApp Image 2024-11-20 at 1.42.14 PM.jpeg](./images/0.jpeg)
