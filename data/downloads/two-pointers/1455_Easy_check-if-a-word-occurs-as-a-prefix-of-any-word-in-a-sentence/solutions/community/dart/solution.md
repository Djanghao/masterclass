# 🔥BEATS 💯 % 🎯 |✨SUPER EASY BEGINNERS 👏

**Author:** CodeWithSparsh
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6104991/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6104991/)

---

![image.png](./images/0.png)

---

### Intuition
The goal is to determine whether a given `searchWord` is a prefix of any word in the sentence. The idea is to break the sentence into individual words and compare the prefix of each word with `searchWord`. If a match is found, return the index of that word (1-based), otherwise return `-1`.

---

### Approach
1. **Split the Sentence**:  
   Use the `split(" ")` method to break the sentence into a list of words.
   
2. **Iterate Through the Words**:  
   Traverse each word in the list and check if it starts with `searchWord` using the `startsWith` method.

3. **Return the Index**:  
   If a word starts with `searchWord`, return its index (1-based). If no such word is found, return `-1`.

4. **Edge Cases**:  
   - If the sentence is empty, return `-1`.
   - If the `searchWord` is not a prefix of any word, return `-1`.

---

### Complexity
- **Time Complexity**:  
  - Splitting the sentence into words: \\(O(n)\\), where \\(n\\) is the total number of characters in the sentence.  
  - Checking each word for the prefix: \\(O(w \\cdot k)\\), where \\(w\\) is the number of words and \\(k\\) is the length of the `searchWord`.  
  Overall, the complexity is approximately \\(O(n + w \\cdot k)\\).

- **Space Complexity**:  
  \\(O(w)\\) for the list of words created by the `split` method.

---


```dart []
class Solution {
  int isPrefixOfWord(String sentence, String searchWord) {
    // Split the sentence into words
    List<String> words = sentence.split(" ");
    
    // Iterate over words
    for (int i = 0; i < words.length; i++) {
      // Check if the current word starts with the searchWord
      if (words[i].startsWith(searchWord)) {
        return i + 1; // Return 1-based index
      }
    }
    
    // If no match is found, return -1
    return -1;
  }
}
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


```javascript []
var isPrefixOfWord = function(sentence, searchWord) {
    let words = sentence.split(" ");
    
    for (let i = 0; i < words.length; i++) {
        if (words[i].startsWith(searchWord)) {
            return i + 1;
        }
    }
    
    return -1;
};
```


```python []
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        words = sentence.split(" ")
        
        for i, word in enumerate(words):
            if word.startswith(searchWord):
                return i + 1
        
        return -1
```


```cpp []
class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        istringstream ss(sentence);
        string word;
        int index = 1;
        
        while (ss >> word) {
            if (word.find(searchWord) == 0) { // Check if it's a prefix
                return index;
            }
            index++;
        }
        
        return -1;
    }
};
```


```go []
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
---

![image.png](./images/1.png) {:style='width:250px'}
