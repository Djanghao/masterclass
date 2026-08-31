# [ALL Languages]   ONLY 1 Line !

**Author:** ethanrao
**Votes:** 39
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2711868/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2711868/)

---


# Code
```cpp []
class Solution {
public:
    bool checkIfPangram(string sentence) {
        return unordered_set<char>(sentence.begin(), sentence.end()).size() == 26;
    }
};
```

```java []
class Solution {
    public boolean checkIfPangram(String sentence) {
        return sentence.chars().distinct().count() == 26;
    }
}


// Stream
class Solution {
    public boolean checkIfPangram(String sentence) {
        return sentence.chars().boxed().collect(Collectors.toSet()).size() == 26;
    }
}

```
```kotlin []
class Solution {
    fun checkIfPangram(sentence: String): Boolean {
        return sentence.toSet().count() == 26
    }
}
```


```python []
class Solution:
    def checkIfPangram(self, sentence: str) -> bool:
        return len(set(sentence)) == 26
```

```javascript []
var checkIfPangram = function (sentence) {
    return new Set(sentence).size === 26
};
```
```typescript []
function checkIfPangram(sentence: string): boolean {
    return [...new Set(sentence)].length >= 26;
};
```

