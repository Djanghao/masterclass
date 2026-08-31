# ✅Beats 100% | Simple & Short

**Author:** Piotr_Maminski
**Votes:** 18
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102231/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102231/)

---

```python3 []
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        words = sentence.split()
        for i, word in enumerate(words, 1):
            if word.startswith(searchWord):
                return i
        return -1
```
```cpp []
class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        stringstream s(sentence);
        string t;
        for(int i = 1; s >> t; i++)
            if(t.substr(0, searchWord.length()) == searchWord) return i;
        return -1;
    }
};
```
```java []
class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        String[] words = sentence.split(" ");
        for (int i = 0; i < words.length; i++) {
            if (words[i].startsWith(searchWord)) {
                return i + 1;
            }
        }
        return -1;
    }
}
```
```csharp []
public class Solution {
    public int IsPrefixOfWord(string sentence, string searchWord) {
        string[] words = sentence.Split(' ');
        for (int i = 0; i < words.Length; i++) {
            if (words[i].StartsWith(searchWord)) {
                return i + 1;
            }
        }
        return -1;
    }
}
```
```golang []
func isPrefixOfWord(sentence string, searchWord string) int {
    words := strings.Split(sentence, " ")
    for i, word := range words {
        if strings.HasPrefix(word, searchWord) {
            return i + 1
        }
    }
    return -1
}
```
```swift []
class Solution {
    func isPrefixOfWord(_ sentence: String, _ searchWord: String) -> Int {
        let words = sentence.split(separator: " ")
        for (index, word) in words.enumerated() {
            if word.hasPrefix(searchWord) {
                return index + 1
            }
        }
        return -1
    }
}
```
```javascript [JS]
// JavaScript

var isPrefixOfWord = function(sentence, searchWord) {
    const words = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
};
```
```typescript [TS]
// TypeScript

function isPrefixOfWord(sentence: string, searchWord: string): number {
    const words: string[] = sentence.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    return -1;
}
```
```rust []
impl Solution {
    pub fn is_prefix_of_word(sentence: String, search_word: String) -> i32 {
        for (i, word) in sentence.split_whitespace().enumerate() {
            if word.starts_with(&search_word) {
                return (i + 1) as i32;
            }
        }
        -1
    }
}
```
```ruby []
def is_prefix_of_word(sentence, search_word)
    words = sentence.split
    words.each_with_index do |word, index|
        return index + 1 if word.start_with?(search_word)
    end
    -1
end
```

- Complexity: Time O(n) & Space O(n)

# Explanation


- `words = sentence.split()` -  Split sentences into individual words

- `if word.startswith(searchWord):` - Checks if it starts with the word you are looking for

- return **position** or if doesn't exist: **-1**

Done.

Not enough work to **Upvote**, but if you want I won't stop you :)

---









![string.png](./images/0.png)




# Most common String Interview Problems
List based on my research (interviews, reddit, github) Probably not 100% accurate but very close to my recruitments. Leetcode Premium is probably more accurate [I don't have]

**Easy:** [[20. Valid Parentheses]](https://leetcode.com/problems/valid-parentheses/solutions/6013115/solution) [[28. Find the Index of the First Occurrence in a String]](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string) [[13. Roman to Integer]](https://leetcode.com/problems/roman-to-integer/solutions/6021029/beats-100-explained-step-by-step-list-most-common-string-interview-problems/) [[125. Valid Palindrome]](https://leetcode.com/problems/valid-palindrome) [[680. Valid Palindrome II]](https://leetcode.com/problems/valid-palindrome-ii) [[67. Add Binary]](https://leetcode.com/problems/add-binary)




**Medium/Hard:** [[8. String to Integer (atoi)]](https://leetcode.com/problems/string-to-integer-atoi/solutions/6013112/solution/) [[3. Longest Substring Without Repeating Characters]](https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/6013106/solutions/) [[5. Longest Palindromic Substring]](https://leetcode.com/problems/longest-palindromic-substring/solutions/6013111/solution/) [[937. Reorder Data in Log Files]](https://leetcode.com/problems/reorder-data-in-log-files) [[68. Text Justification]](https://leetcode.com/problems/text-justification) [[32. Longest Valid Parentheses]](https://leetcode.com/problems/longest-valid-parentheses) [[12. Integer to Roman]](https://leetcode.com/problems/integer-to-roman/solutions/6023402/solutions) [[22. Generate Parentheses]](https://leetcode.com/problems/generate-parentheses) [[65. Valid Number]](https://leetcode.com/problems/valid-number) [[49. Group Anagrams]](https://leetcode.com/problems/group-anagrams)














####  [Interview Questions and Answers Repository](https://github.com/RooTinfinite/Interview-questions-and-answers)


