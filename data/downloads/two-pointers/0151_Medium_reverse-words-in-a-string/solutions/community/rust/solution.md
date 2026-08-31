# [All Language] ONLY 1 Line ! (Include Java, Python, Rust, Kotlin, Swift, JavaScript, TypeScript)

**Author:** ethanrao
**Votes:** 7
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/2808521/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/2808521/)

---

# Code
```python []
class Solution:
    def reverseWords(self, s: str) -> str:
        return " ".join(s.split()[::-1])
```

```java []
class Solution {
    public String reverseWords(String s) {
        return Arrays.stream(s.split(" "))
                    .map(String::trim)
                    .filter(word -> !word.isEmpty())
                    .reduce((word1, word2) -> word2 + " " + word1)
                    .orElse("");
    }
}


class Solution {
    public String reverseWords(String s) {
        String[] words = s.trim().split(" +");
        Collections.reverse(Arrays.asList(words));
        return String.join(" ", words);
    }
}
```



```rust []
impl Solution {
    pub fn reverse_words(s: String) -> String {
        s.split(' ')
            .rev()
            .filter(|x| !x.is_empty())
            .collect::<Vec<&str>>()
            .join(" ")
    }
}
```

```javascript []
var reverseWords = function(s) {
    return s.split(' ')
            .map(item => item.trim())
            .filter(item => item !== '')
            .reverse()
            .join(' ')
};
```


```typescript []
function reverseWords(s: string): string {
    return s.split(' ')
            .map(item => item.trim())
            .filter(item => item !== '')
            .reverse()
            .join(' ')
};
```


```Kotlin []
class Solution {
    fun reverseWords(s: String): String {
        return Arrays.stream(s.split(" ".toRegex()).dropLastWhile { it.isEmpty() }
                .toTypedArray())
                .map { obj: String -> obj.trim { it <= ' ' } }
                .filter { word: String -> !word.isEmpty() }
                .reduce { word1: String, word2: String -> "$word2 $word1" }
                .orElse("")
    }
}
```

```swift []
class Solution {
    func reverseWords(_ s: String) -> String {
        return s.split(separator: " ")
                .reversed()
                .joined(separator: " ")
    }
}
```