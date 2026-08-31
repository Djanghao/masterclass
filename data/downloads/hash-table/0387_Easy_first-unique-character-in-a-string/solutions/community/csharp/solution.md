# Beats 100%🚀➡️2 Approaches 💯➡️[Java/C++C/Python3/C#/JavaScript]

**Author:** Shivansu_7
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4679086/](https://leetcode.com/problems/first-unique-character-in-a-string/solutions/4679086/)

---

# Approach with Map
1. **Create a HashMap:** Initialize a HashMap to store characters and their frequencies.
2. **Count Frequencies:** Iterate through the string and count the frequencies of each character. You can do this by storing each character as a key in the HashMap and incrementing its corresponding value.
3. **Find the First Unique Character:** Iterate through the string again. For each character, check its frequency in the HashMap. Return the index of the first character with a frequency of 1, as that indicates it's unique.
4. **Handling Empty String:** If the input string is empty, return -1 to indicate that there are no unique characters.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int firstUniqChar(String s) {
        int n = s.length();
        if(n == 0){
            return -1;
        }

        HashMap<Character, Integer> map = new HashMap<>();
        for(char ch : s.toCharArray()) {
            map.put(ch, map.getOrDefault(ch,0)+1);
        }

        for(int i=0; i<n; i++) {
            char ch = s.charAt(i);
            if(map.get(ch)==1) {
                return i;
            }
        }
        return -1;
    }
}
```
```C++ []
class Solution {
public:
    int firstUniqChar(string s) {
        int n = s.length();
        if (n == 0) {
            return -1;
        }

        unordered_map<char, int> map;
        for (char ch : s) {
            map[ch]++;
        }

        for (int i = 0; i < n; i++) {
            char ch = s[i];
            if (map[ch] == 1) {
                return i;
            }
        }
        return -1;
    }
};
```
```Python3 []
class Solution:
    def firstUniqChar(self, s: str) -> int:
        n = len(s)
        if n == 0:
            return -1

        char_count = {}
        for ch in s:
            char_count[ch] = char_count.get(ch, 0) + 1

        for i in range(n):
            ch = s[i]
            if char_count[ch] == 1:
                return i

        return -1
```
```JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let n = s.length;
    if (n === 0) {
        return -1;
    }

    let charCount = {};
    for (let ch of s) {
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (let i = 0; i < n; i++) {
        let ch = s.charAt(i);
        if (charCount[ch] === 1) {
            return i;
        }
    }

    return -1;
};
```
```C []
int firstUniqChar(char *s) {
    int n = strlen(s);
    if (n == 0) {
        return -1;
    }

    int charCount[256] = {0}; // Assuming ASCII characters

    for (int i = 0; i < n; i++) {
        charCount[s[i]]++;
    }

    for (int i = 0; i < n; i++) {
        if (charCount[s[i]] == 1) {
            return i;
        }
    }

    return -1;
}
```
```C# []
public class Solution {
    public int FirstUniqChar(string s) {
        int n = s.Length;
        if (n == 0) {
            return -1;
        }

        Dictionary<char, int> charCount = new Dictionary<char, int>();

        foreach (char ch in s) {
            if (charCount.ContainsKey(ch)) {
                charCount[ch]++;
            } else {
                charCount[ch] = 1;
            }
        }

        for (int i = 0; i < n; i++) {
            if (charCount[s[i]] == 1) {
                return i;
            }
        }

        return -1;
    }
```
# Approach without Map
1. **Handle Empty String:** Check if the input string s is empty. If it is, return -1, indicating that there are no unique characters in an empty string.
2. **Count Character Frequencies:** Initialize an array freq of size 26 to store the frequencies of characters in the string s. Traverse through each character of s using a for-each loop. Increment the count of the character's frequency in the freq array.
3. **Find First Unique Character:** Iterate through the string s again using a for loop. For each character, check its frequency in the freq array. If the frequency is 1, it means the character is unique, so return its index.
4. **Return -1 if No Unique Character Found:** If there are no unique characters in the string, return -1.
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
class Solution {
    public int firstUniqChar(String s) {
        if(s.length()==0) {
            return -1;
        }
        int[] freq = new int[26]; // Stores the frequency of string s
        
        for(char ch : s.toCharArray()) {
            freq[ch-'a']++;
        }

        for(int i=0; i<s.length(); i++) {
            char ch = s.charAt(i);
            if(freq[ch-'a']==1) {
                return i;
            }
        }
        return -1;
    }
}
```
```Python3 []
class Solution:
    def firstUniqChar(self, s: str) -> int:
        if not s:
            return -1

        freq = [0] * 26  # Stores the frequency of string s
        for ch in s:
            freq[ord(ch) - ord('a')] += 1

        for i in range(len(s)):
            ch = s[i]
            if freq[ord(ch) - ord('a')] == 1:
                return i
        return -1
```
```C++ []
class Solution {
public:
    int firstUniqChar(string s) {
        if (s.empty()) {
            return -1;
        }

        vector<int> freq(26, 0); // Stores the frequency of string s
        for (char ch : s) {
            freq[ch - 'a']++;
        }

        for (int i = 0; i < s.length(); i++) {
            char ch = s[i];
            if (freq[ch - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }
};
```
```C# []
public class Solution {
    public int FirstUniqChar(string s) {
        if (string.IsNullOrEmpty(s)) {
            return -1;
        }

        int[] freq = new int[26]; // Stores the frequency of string s
        foreach (char ch in s) {
            freq[ch - 'a']++;
        }

        for (int i = 0; i < s.Length; i++) {
            char ch = s[i];
            if (freq[ch - 'a'] == 1) {
                return i;
            }
        }
        return -1;
    }
```
```JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    if (!s) {
        return -1;
    }
    
    const freq = new Array(26).fill(0); // Stores the frequency of each character
    
    for (let ch of s) {
        freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for (let i = 0; i < s.length; i++) {
        const ch = s.charAt(i);
        if (freq[ch.charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            return i;
        }
    }
    
    return -1;
};
```
