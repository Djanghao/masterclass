# Array is better than Sets. Detailed Comparison

**Author:** muhammadfarhankt
**Votes:** 12
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052874/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5052874/)

---

# Intuition
The problem requires finding special characters in a given string, which are the characters that appear both in lowercase and uppercase. To solve this, we need to iterate through the string and keep track of characters in both cases.

# Approach
## Using Sets
1. Create two sets, smallSet for lowercase characters and capitalSet for uppercase characters.
2. Iterate through each character in the string.
3. If the character is lowercase, add it to smallSet.
4. If the character is uppercase, add it to capitalSet.
5. Iterate through smallSet and check if the corresponding lowercase
6. character exists in capitalSet. If it does, increment the count.
7. Return the count of special characters.

## Using Index Arrays
1. Create two arrays, small and capital, each of size 26 representing the lowercase and uppercase alphabets, respectively.
2. Initialize a count variable to store the number of special characters.
3. Iterate through each character in the string.
4. If the character is lowercase, set the corresponding index in the small array to 1.
5. If the character is uppercase, set the corresponding index in the capital array to 1.
6. Iterate through both arrays simultaneously and check if the value at each index is 1 for both arrays. If it is, increment the count.
7. Return the count of special characters.
8. 
# Complexity
## Using Sets
- Time complexity: O(n), where n is the length of the input string. We iterate through the string once to build the sets, and once again to check for special characters.
- Space complexity: O(1) or O(52) if we consider the size of the alphabet. We use two sets, each containing at most 26 characters.
## Using Index Arrays
- Time complexity: O(n), where n is the length of the input string. We iterate through the string once to build the arrays, and once again to check for special characters.
- Space complexity: O(1). We use two arrays, each of size 26, regardless of the input size.

## Use the approach with sets for smaller input sizes or when simplicity and readability are prioritized.
## Use the approach with index arrays for larger input sizes or when memory efficiency is critical.

# Using Sets
```javascript []
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const smallSet = new Set();
    const capitalSet = new Set();
    
    for (let char of word) {
        if (char >= 'a' && char <= 'z') {
            smallSet.add(char);
        } else {
            capitalSet.add(char);
        }
    }
    let count = 0;
    for (let char of smallSet) {
        if (capitalSet.has(char.toUpperCase())) {
            count++;
        }
    }
    return count;
};
```
```python []
class Solution(object):
    def numberOfSpecialChars(self, word):
        smallSet = set()
        capitalSet = set()
        
        for char in word:
            if char >= 'a' and char <= 'z':
                smallSet.add(char)
            else:
                capitalSet.add(char)
        
        count = 0
        for char in smallSet:
            if char.upper() in capitalSet:
                count += 1
        
        return count
```
```Dart []
class Solution {
  int numberOfSpecialChars(String word) {
    Set<String> smallSet = {};
    Set<String> capitalSet = {};
    
    for (var char in word.split('')) {
      if (char.compareTo('a') >= 0 && char.compareTo('z') <= 0) {
        smallSet.add(char);
      } else {
        capitalSet.add(char);
      }
    }
    
    int count = 0;
    for (var char in smallSet) {
      if (capitalSet.contains(char.toUpperCase())) {
        count++;
      }
    }
    
    return count;
  }
}
```
```Go []
func numberOfSpecialChars(word string) int {
    smallSet := make(map[rune]bool)
    capitalSet := make(map[rune]bool)
    
    for _, char := range word {
        if char >= 'a' && char <= 'z' {
            smallSet[char] = true
        } else {
            capitalSet[char] = true
        }
    }
    
    count := 0
    for char := range smallSet {
        if capitalSet[unicode.ToLower(char)] {
            count++
        }
    }
    
    return count
}
```
```Java []
class Solution {
    public int numberOfSpecialChars(String word) {
        Set<Character> smallSet = new HashSet<>();
        Set<Character> capitalSet = new HashSet<>();
        
        for (char c : word.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                smallSet.add(c);
            } else {
                capitalSet.add(c);
            }
        }
        
        int count = 0;
        for (char c : smallSet) {
            if (capitalSet.contains(Character.toUpperCase(c))) {
                count++;
            }
        }
        
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfSpecialChars(string word) {
        unordered_set<char> smallSet;
        unordered_set<char> capitalSet;
        
        for (char c : word) {
            if (c >= 'a' && c <= 'z') {
                smallSet.insert(c);
            } else {
                capitalSet.insert(c);
            }
        }
        
        int count = 0;
        for (char c : smallSet) {
            if (capitalSet.count(tolower(c))) {
                count++;
            }
        }
        
        return count;
    }
};
```
```c []
int numberOfSpecialChars(char* word) {
    int smallSet[26] = {0};
    int capitalSet[26] = {0};
    
    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] >= 'a' && word[i] <= 'z') {
            smallSet[word[i] - 'a'] = 1;
        } else {
            capitalSet[word[i] - 'A'] = 1;
        }
    }
    
    int count = 0;
    for (int i = 0; i < 26; i++) {
        if (smallSet[i] == 1 && capitalSet[i] == 1) {
            count++;
        }
    }
    
    return count;
}
```


# Using Index Arrays
```javascript []
/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    const small = Array(26).fill(0);
    const capital = Array(26).fill(0);
    let count = 0;
    
    for (let char of word) {
        if (char >= 'a' && char <= 'z') {
            small[char.charCodeAt(0) - 'a'.charCodeAt(0)] = 1;
        } else {
            capital[char.charCodeAt(0) - 'A'.charCodeAt(0)] = 1;
        }
    }
    
    for (let i = 0; i < 26; i++) {
        if (small[i] === 1 && capital[i] === 1) {
            count++;
        }
    }
    
    return count;
};
```
```python []
class Solution(object):
    def numberOfSpecialChars(self, word):
        small = [0] * 26
        capital = [0] * 26
        count = 0
        
        for char in word:
            if char >= 'a' and char <= 'z':
                small[ord(char) - ord('a')] = 1
            else:
                capital[ord(char) - ord('A')] = 1
        
        for i in range(26):
            if small[i] == 1 and capital[i] == 1:
                count += 1
        
        return count
```
```Dart []
class Solution {
  int numberOfSpecialChars(String word) {
    List<int> small = List.filled(26, 0);
    List<int> capital = List.filled(26, 0);
    int count = 0;
    
    for (var char in word.split('')) {
      if (char.compareTo('a') >= 0 && char.compareTo('z') <= 0) {
        small[char.codeUnitAt(0) - 'a'.codeUnitAt(0)] = 1;
      } else {
        capital[char.codeUnitAt(0) - 'A'.codeUnitAt(0)] = 1;
      }
    }
    
    for (var i = 0; i < 26; i++) {
      if (small[i] == 1 && capital[i] == 1) {
        count++;
      }
    }
    
    return count;
  }
}
```
```Go []
func numberOfSpecialChars(word string) int {
    small, capital := [26]int{}, [26]int{}
    count := 0
    for _, char := range word {
        if char >= 'a' && char <= 'z' {
            small[int(char - 'a')] = 1
        } else {
            capital[int(char - 'A')] = 1
        }
    }
    for i := 0; i < 26; i++ {
        if small[i] == 1 && capital[i] == 1 {
            count++
        }
    }
    return count
}
```
```Java []
class Solution {
    public int numberOfSpecialChars(String word) {
        int[] small = new int[26];
        int[] capital = new int[26];
        int count = 0;
        
        for (char c : word.toCharArray()) {
            if (c >= 'a' && c <= 'z') {
                small[c - 'a'] = 1;
            } else {
                capital[c - 'A'] = 1;
            }
        }
        
        for (int i = 0; i < 26; i++) {
            if (small[i] == 1 && capital[i] == 1) {
                count++;
            }
        }
        
        return count;
    }
}
```
```C++ []
class Solution {
public:
    int numberOfSpecialChars(string word) {
        int small[26] = {0};
        int capital[26] = {0};
        int count = 0;
        
        for (char c : word) {
            if (c >= 'a' && c <= 'z') {
                small[c - 'a'] = 1;
            } else {
                capital[c - 'A'] = 1;
            }
        }
        
        for (int i = 0; i < 26; i++) {
            if (small[i] == 1 && capital[i] == 1) {
                count++;
            }
        }
        
        return count;
    }
};
```
```c []
int numberOfSpecialChars(char* word) {
    int small[26] = {0};
    int capital[26] = {0};
    int count = 0;
    
    for (int i = 0; word[i] != '\\0'; i++) {
        if (word[i] >= 'a' && word[i] <= 'z') {
            small[word[i] - 'a'] = 1;
        } else {
            capital[word[i] - 'A'] = 1;
        }
    }
    
    for (int i = 0; i < 26; i++) {
        if (small[i] == 1 && capital[i] == 1) {
            count++;
        }
    }
    
    return count;
}
```
