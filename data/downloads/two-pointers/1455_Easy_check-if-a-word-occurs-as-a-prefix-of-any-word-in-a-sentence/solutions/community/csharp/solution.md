# Beats 100% | Loop | StringMatch | Solution for LeetCode#1455

**Author:** samir023041
**Votes:** 40
**Link:** [https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102262/](https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/solutions/6102262/)

---

![image.png](./images/0.png)

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem requires finding the first word in a sentence that starts with a given prefix (searchWord). A straightforward approach is to split the sentence into words and check each word from the beginning.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Split the sentence into an array of words using the space character as a delimiter.
2. Iterate through the array of words.
3. For each word, check if it starts with the searchWord using the startsWith() method.
4. If a match is found, return the 1-based index of the word.
5. If no match is found after checking all words, return -1.

# Complexity
- Time complexity: O(n) [ ~ O(n*10) ]
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java [Java(v1)]
class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        String[] arr = sentence.split(" ");               
        int n=arr.length;
        
        for(int i=0; i<n; i++){
            if(arr[i].startsWith(searchWord)){                
                return i+1;
            }
        }

        return -1;
    }
}
```
```java [Java(v2)]
class Solution {
    public int isPrefixOfWord(String sentence, String searchWord) {
        int i=0;
        
        for(String str : sentence.split(" ")){
            if(str.startsWith(searchWord)){                
                return i+1;
            }
            i++;
        }

        return -1;
    }
}
```

```python []
class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        # Split the sentence into words
        words = sentence.split(" ")
        
        # Iterate over the words
        for i, word in enumerate(words):
            # Check if the word starts with the searchWord
            if word.startswith(searchWord):
                return i + 1  # Return 1-based index
        
        # Return -1 if no word starts with the searchWord
        return -1

```
```cpp []
class Solution {
public:
    int isPrefixOfWord(string sentence, string searchWord) {
        // Split the sentence into words
        istringstream stream(sentence);
        string word;
        int index = 1; // 1-based index
        
        while (stream >> word) {
            // Check if the word starts with the searchWord
            if (word.find(searchWord) == 0) {
                return index;
            }
            index++;
        }
        
        // Return -1 if no word starts with the searchWord
        return -1;
    }
};

```
```csharp []
public class Solution {
    public int IsPrefixOfWord(string sentence, string searchWord) {
        string[] words = sentence.Split(' ');
        
        for (int i = 0; i < words.Length; i++) {
            if (words[i].StartsWith(searchWord)) {
                return i + 1; // Return 1-based index
            }
        }
        
        return -1; // No word starts with searchWord
    }
}

```
```swift []
class Solution {
    func isPrefixOfWord(_ sentence: String, _ searchWord: String) -> Int {
        let words = sentence.split(separator: " ")
        
        for (index, word) in words.enumerated() {
            if word.hasPrefix(searchWord) {
                return index + 1 // Return 1-based index
            }
        }
        
        return -1 // No word starts with searchWord
    }
}

```
