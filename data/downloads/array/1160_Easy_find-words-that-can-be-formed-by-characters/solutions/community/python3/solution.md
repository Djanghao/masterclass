# 💯Faster✅💯 Lesser✅4 Methods🔥 Brute Force🔥Hash Map 🔥Counting Characters🔥Optimized Hash Map

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 39
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352393/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/4352393/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# Problem Explaination: 
We are given an array of strings `words` and a string `chars`. Our task is to find the sum of lengths of all words in `words` that can be formed using the characters in `chars`. We can use each character in chars only once.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Brute Force
2. Hash Map
3. Counting Characters
4. Optimized Hash Map

# 1. Brute Force: 
- Iterate through each word in `words`.
- For each word, check if it can be formed using the characters in `chars`.
- If yes, add the length of the word to the result.
# Complexity
- \u23F1\uFE0F Time Complexity: `O(N * M * K)`, where N is the number of words, M is the average length of a word, and K is the length of chars.
- \uD83D\uDE80 Space Complexity: `O(1)`

# Code
```Python []
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        def can_form(word, chars):
            char_count = Counter(chars)
            for char in word:
                if char_count[char] <= 0:
                    return False
                char_count[char] -= 1
            return True
        result = 0
        for word in words:
            if can_form(word, chars):
                result += len(word)
        return result
```
```Java []
class Solution {
    public int countCharacters(String[] words, String chars) {
        int result = 0;
        for (String word : words) {
            if (canFormWord(word, chars)) {
                result += word.length();
            }
        }
        return result;
    }

    private boolean canFormWord(String word, String chars) {
        int[] charCount = new int[26];

        for (char ch : chars.toCharArray()) {
            charCount[ch - 'a']++;
        }
        for (char ch : word.toCharArray()) {
            if (charCount[ch - 'a'] == 0) {
                return false;
            }
            charCount[ch - 'a']--;
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int result = 0;
        for (const string& word : words) {
            string tempChars = chars;
            bool valid = true;
            for (char c : word) {
                size_t pos = tempChars.find(c);
                if (pos != string::npos) {
                    tempChars.erase(pos, 1);
                } else {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                result += word.size();
            }
        }
        return result;
    }
};
```
```C []
int countCharacters(char** words, int wordsSize, char* chars) {
    int result = 0;
    for (int i = 0; i < wordsSize; ++i) {
        char* word = words[i];
        int len = strlen(word);
        int charsCopy[26] = {0};
        strcpy(charsCopy, chars);
        int j;
        for (j = 0; j < len; ++j) {
            if (--charsCopy[word[j] - 'a'] < 0) {
                break;
            }
        }
        if (j == len) {
            result += len;
        }
    }
    return result;
}
```
# 2. Hash Map:
- Create a frequency map for the characters in `chars`.
- Iterate through each word in `words`.
- For each word, create a frequency map.
- Check if the word's frequency map is a subset of the chars frequency map.
- If yes, add the length of the word to the result.
# Complexity
- \u23F1\uFE0F Time Complexity: `O(N * (M + K))`, where N is the number of words, M is the average length of a word, and K is the length of chars.
- \uD83D\uDE80 Space Complexity: `O(K)`

# Code
```Python []
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        result = 0
        char_count = Counter(chars)
        for word in words:
            word_count = Counter(word)
            if all(word_count[char] <= char_count[char] for char in word):
                result += len(word)
        return result
```
```Java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int countCharacters(String[] words, String chars) {
        int result = 0;
        Map<Character, Integer> charFreqMap = new HashMap<>();
        for (char ch : chars.toCharArray()) {
            charFreqMap.put(ch, charFreqMap.getOrDefault(ch, 0) + 1);
        }
        for (String word : words) {
            if (canFormWord(word, charFreqMap)) {
                result += word.length();
            }
        }
        return result;
    }

    private boolean canFormWord(String word, Map<Character, Integer> charFreqMap) {
        Map<Character, Integer> tempMap = new HashMap<>();
        for (char ch : word.toCharArray()) {
            tempMap.put(ch, tempMap.getOrDefault(ch, 0) + 1);
        }
        for (Map.Entry<Character, Integer> entry : tempMap.entrySet()) {
            char ch = entry.getKey();
            int count = entry.getValue();

            if (!charFreqMap.containsKey(ch) || charFreqMap.get(ch) < count) {
                return false;
            }
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int result = 0;
        unordered_map<char, int> charFreq;
        for (char c : chars) {
            charFreq[c]++;
        }
        for (const string& word : words) {
            unordered_map<char, int> wordFreq;
            bool valid = true;
            
            for (char c : word) {
                wordFreq[c]++;
                if (wordFreq[c] > charFreq[c]) {
                    valid = false;
                    break;
                }
            }
            
            if (valid) {
                result += word.size();
            }
        }
        return result;
    }
};
```
```C []
int countCharacters(char** words, int wordsSize, char* chars) {
    int result = 0;
    int charsCount[26] = {0};
    for (int i = 0; i < strlen(chars); ++i) {
        charsCount[chars[i] - 'a']++;
    }
    for (int i = 0; i < wordsSize; ++i) {
        char* word = words[i];
        int len = strlen(word);
        int wordCount[26] = {0};
        for (int j = 0; j < len; ++j) {
            wordCount[word[j] - 'a']++;
        }
        int j;
        for (j = 0; j < 26; ++j) {
            if (wordCount[j] > charsCount[j]) {
                break;
            }
        }
        if (j == 26) {
            result += len;
        }
    }
    return result;
}
```
# 3. Counting Characters:
   - Create an array to count the occurrences of each character in `chars`.
- Iterate through each word in `words`.
- For each word, create a temporary array to count the occurrences of each character.
- Check if the temporary array is less than or equal to the array created in step 1.
- If yes, add the length of the word to the result.
# Complexity
- \u23F1\uFE0F Time Complexity: `O(N * (M + K))`, where N is the number of words, M is the average length of a word, and K is the length of chars.
- \uD83D\uDE80 Space Complexity: `O(1)`

# Code
```Python []
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        def count_chars(s):
            char_count = [0] * 26
            for char in s:
                char_count[ord(char) - ord('a')] += 1
            return char_count
        result = 0
        chars_count = count_chars(chars)
        for word in words:
            word_count = count_chars(word)
            if all(word_count[i] <= chars_count[i] for i in range(26)):
                result += len(word) 
        return result
```
```Java []
class Solution {
    public int countCharacters(String[] words, String chars) {
        int result = 0;
        int[] charCount = new int[26];
        for (char ch : chars.toCharArray()) {
            charCount[ch - 'a']++;
        }
        for (String word : words) {
            if (canFormWord(word, charCount.clone())) {
                result += word.length();
            }
        }
        return result;
    }

    private boolean canFormWord(String word, int[] charCount) {
        for (char ch : word.toCharArray()) {
            if (charCount[ch - 'a'] == 0) {
                return false;
            }
            charCount[ch - 'a']--;
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int result = 0;
        vector<int> charCount(26, 0);
        for (char c : chars) {
            charCount[c - 'a']++;
        }
        for (const string& word : words) {
            vector<int> tempCount(charCount);
            bool valid = true;
            for (char c : word) {
                if (tempCount[c - 'a'] > 0) {
                    tempCount[c - 'a']--;
                } else {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                result += word.size();
            }
        }
        return result;
    }
};
```
```C []
int countCharacters(char** words, int wordsSize, char* chars) {
    int result = 0;
    int charsCount[26] = {0}; 
    for (int i = 0; i < strlen(chars); ++i) {
        charsCount[chars[i] - 'a']++;
    }
    for (int i = 0; i < wordsSize; ++i) {
        char* word = words[i];
        int len = strlen(word);
        int wordCount[26] = {0};

        for (int j = 0; j < len; ++j) {
            wordCount[word[j] - 'a']++;
        }
        int j;
        for (j = 0; j < 26; ++j) {
            if (wordCount[j] > charsCount[j]) {
                break;
            }
        }
        if (j == 26) {
            result += len;
        }
    }
    return result;
}
```
# 4. Optimized Hash Map:
   - Create a frequency map for the characters in `chars`.
- Iterate through each word in `words`.
- For each word, decrement the frequency of characters in the map.
- Check if any character's frequency becomes negative during this process.
- If no negative frequencies are encountered, add the length of the word to the result.
# Complexity
- \u23F1\uFE0F Time Complexity: `O(N * M)`, where N is the number of words and M is the average length of a word. 
- \uD83D\uDE80 Space Complexity: `O(K)`

# Code
```Python []
class Solution:
    def countCharacters(self, words: List[str], chars: str) -> int:
        result = 0
        char_count = Counter(chars)
        
        for word in words:
            temp_count = char_count.copy()
            can_form_word = True
            for char in word:
                if temp_count[char] <= 0:
                    can_form_word = False
                    break
                temp_count[char] -= 1
            
            if can_form_word:
                result += len(word)
        
        return result
```
```Java []
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int countCharacters(String[] words, String chars) {
        int result = 0;
        Map<Character, Integer> charFreqMap = new HashMap<>();
        for (char ch : chars.toCharArray()) {
            charFreqMap.put(ch, charFreqMap.getOrDefault(ch, 0) + 1);
        }
        for (String word : words) {
            if (canFormWord(word, new HashMap<>(charFreqMap))) {
                result += word.length();
            }
        }
        return result;
    }

    private boolean canFormWord(String word, Map<Character, Integer> charFreqMap) {
        for (char ch : word.toCharArray()) {
            if (!charFreqMap.containsKey(ch) || charFreqMap.get(ch) == 0) {
                return false;
            }
            charFreqMap.put(ch, charFreqMap.get(ch) - 1);
        }
        return true;
    }
}
```
```C++ []
class Solution {
public:
    int countCharacters(vector<string>& words, string chars) {
        int result = 0;
        unordered_map<char, int> charFreq;
        for (char c : chars) {
            charFreq[c]++;
        }
        for (const string& word : words) {
            unordered_map<char, int> tempFreq(charFreq);
            bool valid = true;
            
            for (char c : word) {
                if (tempFreq[c] > 0) {
                    tempFreq[c]--;
                } else {
                    valid = false;
                    break;
                }
            }
            
            if (valid) {
                result += word.size();
            }
        }
        return result;
    }
};
```
```C []
int countCharacters(char** words, int wordsSize, char* chars) {
    int result = 0;
    int charsCount[26] = {0}; 
    for (int i = 0; i < strlen(chars); ++i) {
        charsCount[chars[i] - 'a']++;
    }
    for (int i = 0; i < wordsSize; ++i) {
        char* word = words[i];
        int len = strlen(word);
        int wordCount[26] = {0};
        for (int j = 0; j < len; ++j) {
            wordCount[word[j] - 'a']++;
        }
        int j;
        for (j = 0; j < 26; ++j) {
            if (wordCount[j] > charsCount[j]) {
                break;
            }
        }
        if (j == 26) {
            result += len;
        }
    }
    return result;
}
```
# \uD83D\uDCA1 I invite you to check out my profile for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA