# Beats 100% || Easy To understand || maps || cpp || java || py || js || c# || c

**Author:** me_avi
**Votes:** 11
**Link:** [https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476223/](https://leetcode.com/problems/redistribute-characters-to-make-all-strings-equal/solutions/4476223/)

---

# Intuition
The idea is to ensure that each character occurs a number of times that is a multiple of the total number of words. This condition is necessary because characters must be evenly distribute among all the words.

If this condition is met for every character, it implies that characters can rearrange to make all words equal.

# Approach
Frequency Counting:

Iterate through each word in the list.
Count the frequency of each character using a data structure (e.g., Counter in Python, Map in C++/Java).
Check Frequencies:

After counting frequencies, check if the count of each character is divisible by the total number of words. If not, return false.
Return Result:

If all characters have frequencies divisible by the total number of words, return true. This means that it's possible to rearrange the characters to make all the words equal.

# Complexity
- Time complexity:
O(N*M) where N is the number of words and M is the average length of the words

- Space complexity:
O(M), where M is the number of unique characters in all words.
```c++ []
class Solution {
public:
    bool makeEqual(vector<string>& words) {
        int len= words.size();
        unordered_map<char,int> mp;
        for(int i=0;i<words.size();i++)
        {
            for(auto j: words[i])
            {
                mp[j]++;
            }
        }
        for(auto i: mp)
        {
            if( i.second % len != 0 )
            {
                return false;
            }
        }
        return true;
    }
};
```
```c []
typedef struct {
    char key;
    int value;
} Pair;

bool makeEqual(char** words, int wordsSize) 
{
    int length = wordsSize;
    Pair charCount[26]; 
    for (int i = 0; i < 26; i++) 
    {
        charCount[i].key = 'a' + i;
        charCount[i].value = 0;
    }
    for (int i = 0; i < wordsSize; i++) 
    {
        char *word = words[i];
        int wordLen = strlen(word);
        for (int j = 0; j < wordLen; j++) 
        {
            charCount[word[j] - 'a'].value++;
        }
    }
    for (int i = 0; i < 26; i++) 
    {
        if (charCount[i].value % length != 0) 
        {
            return false; 
        }
    }
    return true;
}

```
```python []
class Solution:
    def makeEqual(self, words):
        length = len(words)
        char_count = Counter()
        
        for word in words:
            char_count.update(word)
        
        for count in char_count.values():
            if count % length != 0:
                return False
        
        return True

```
```java []
class Solution {
    public boolean makeEqual(String[] words) 
    {
        int length = words.length;
        Map<Character, Integer> charCount = new HashMap<>();
        for (String word : words) 
        {
            for (char c : word.toCharArray())       
            {
                charCount.put(c, charCount.getOrDefault(c, 0) + 1);
            }
        }
        for (int count : charCount.values()) 
        {
            if (count % length != 0) 
            {
                return false;
            }
        }
        return true;
    }
}

```
```javascript []
var makeEqual = function(words) 
{
    const length = words.length;
        const charCount = new Map();
        for (const word of words) 
        {
            for (const char of word) 
            {
                charCount.set(char, (charCount.get(char) || 0) + 1);
            }
        }
        for (const count of charCount.values()) 
        {
            if (count % length !== 0) 
            {
                return false;
            }
        }
        return true;
};

```
```c# []
public class Solution 
{
    public bool MakeEqual(string[] words) 
    {
        int length = words.Length;
        Dictionary<char, int> charCount = new Dictionary<char, int>();
        foreach (var word in words) 
        {
            foreach (var c in word) 
            {
                charCount[c] = charCount.GetValueOrDefault(c, 0) + 1;
            }
        }
        foreach (var count in charCount.Values) 
        {
            if (count % length != 0) 
            {
                return false;
            }
        }
        return true;
    }
}

```
![WhatsApp Image 2023-10-20 at 08.23.29.jpeg](./images/0.jpeg)

