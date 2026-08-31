# Finding Common Characters || Beats 99% users with python3 || JAVA || C++ ||TYPESCRIPT

**Author:** SanketSawant18
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-common-characters/solutions/5260947/](https://leetcode.com/problems/find-common-characters/solutions/5260947/)

---

# Approach
Finding Common Characters

# Complexity
- Time complexity: O(N X L^2)

- Space complexity: O(N X L)

# Explanation
1. **Single Word Check:**

- If there's only one word, the method returns its characters as a list.
2. **Initialize Result and Character Set:**

- Creates a set of characters from the first word to track unique characters.
- Initializes an empty list to store the common characters.
3. **Finding Common Characters:**

- Iterates through each unique character from the first word.
- For each character, finds the minimum frequency across all words.
- Adds the character to the result list according to its frequency.
4. **Return Result:**

- Returns the list containing common characters.

---

```java []
class Solution {
    public List<String> commonChars(String[] words) {
        // If there's only one word, return its characters
        if (words.length == 1) {
            List<String> result = new ArrayList<>();
            for (char c : words[0].toCharArray()) {
                result.add(String.valueOf(c));
            }
            return result;
        }

        List<String> result = new ArrayList<>();
        Set<Character> chars = new HashSet<>();
        
        // Convert the first word's characters to a set
        for (char c : words[0].toCharArray()) {
            chars.add(c);
        }

        // Check each character in the set
        for (char c : chars) {
            int frequency = Integer.MAX_VALUE;
            // Find the minimum frequency of this character in all words
            for (String word : words) {
                int count = 0;
                for (char ch : word.toCharArray()) {
                    if (ch == c) {
                        count++;
                    }
                }
                frequency = Math.min(frequency, count);
            }
            // Add the character to the result the number of times it appears in all words
            for (int i = 0; i < frequency; i++) {
                result.add(String.valueOf(c));
            }
        }

        return result;
    }
}
```
```python3 []
class Solution:
    def commonChars(self, words: List[str]) -> List[str]:
       
        if len(words) == 1:
            return words[0]

        result = []
        chars = set(words[0])
        
        for char in chars:
            frequency = min([word.count(char) for word in words])
            result += frequency * [char]

        return result
```
```C++ []
#include <iostream>
#include <vector>
#include <string>
#include <set>
#include <algorithm>
#include <climits>

using namespace std;

class Solution {
public:
    vector<string> commonChars(vector<string>& words) {
        // If there's only one word, return its characters
        if (words.size() == 1) {
            vector<string> result;
            for (char c : words[0]) {
                result.push_back(string(1, c));
            }
            return result;
        }

        vector<string> result;
        set<char> chars(words[0].begin(), words[0].end());

        // Check each character in the set
        for (char c : chars) {
            int frequency = INT_MAX;
            // Find the minimum frequency of this character in all words
            for (const string& word : words) {
                int cnt = count(word.begin(), word.end(), c);
                frequency = min(frequency, cnt);
            }
            // Add the character to the result the number of times it appears in all words
            for (int i = 0; i < frequency; i++) {
                result.push_back(string(1, c));
            }
        }

        return result;
    }
};
```
```Typescript []
function commonChars(words: string[]): string[] {
    if (words.length === 1) {
        return words[0].split('');
    }

    let result: string[] = [];
    let chars = new Set(words[0]);

    // Check each character in the set
    chars.forEach(char => {
        let frequency = Infinity;
        // Find the minimum frequency of this character in all words
        words.forEach(word => {
            let count = word.split('').filter(c => c === char).length;
            frequency = Math.min(frequency, count);
        });
        // Add the character to the result the number of times it appears in all words
        for (let i = 0; i < frequency; i++) {
            result.push(char);
        }
    });

    return result;
}
```
