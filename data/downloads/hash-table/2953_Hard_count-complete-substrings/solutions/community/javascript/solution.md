# ✅☑[C++/Java/Python/JavaScript] || Maps || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 15
**Link:** [https://leetcode.com/problems/count-complete-substrings/solutions/4355938/](https://leetcode.com/problems/count-complete-substrings/solutions/4355938/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**
1. **Counting Complete Substrings:**

    - The `countCompleteSubstrings` function iterates through different substring lengths (from 1 to the count of unique characters in the word) to count complete substrings of length `k` that meet specific conditions.
1. **Sliding Window Approach:**

    - It uses a sliding window approach to check substrings of size `k * subLen` where `subLen` varies from 1 to the count of unique characters.
    - For each window, it checks if the substring satisfies both frequency and adjacent difference conditions.
1. **Helper Functions:**

    - `hasEqualFrequency`: Checks if all character frequencies in the window are equal to `k` or `0`.
    - `hasAdjacentDifferenceAtMostTwo`: Checks if the adjacent character difference in the window is at most two.



# Complexity
- *Time complexity:*
   $$O(26*n)$$
    

- *Space complexity:*
   $$O(n)$$
    


# Code
```C++ []
class Solution {
public:
    int countCompleteSubstrings(string word, int k) {
        int count = 0;
        int uniqueChars = unordered_set<char>(word.begin(), word.end()).size(); // Count unique characters in the word

        // Loop through substring lengths from 1 to the count of unique characters
        for (int subLen = 1; subLen <= uniqueChars; ++subLen) {
            int windowSize = subLen * k; // Define the window size

            unordered_map<char, int> charFreq; // Map to store character frequencies
            int start = 0;
            int end = start + windowSize - 1;

            // Populate the character frequency map for the initial window
            for (int i = start; i <= min(end, static_cast<int>(word.length()) - 1); ++i) {
                charFreq[word[i]]++;
            }

            // Sliding window approach
            while (end < word.length()) {
                // Check conditions for equal frequency and adjacent difference at most two
                if (hasEqualFrequency(charFreq, k) && hasAdjacentDifferenceAtMostTwo(word, start, end)) {
                    count++;
                }

                charFreq[word[start]]--; // Move the window by decrementing the start character frequency
                start++;
                end++;

                // Update the end character frequency if the window size is less than word length
                if (windowSize < word.length()) {
                    charFreq[word[end]]++;
                }
            }
        }

        return count;
    }

    // Function to check if all character frequencies are equal to k or 0
    bool hasEqualFrequency(unordered_map<char, int>& charFreq, int k) {
        for (auto& entry : charFreq) {
            if (entry.second != k && entry.second != 0) {
                return false;
            }
        }
        return true;
    }

    // Function to check if adjacent character difference is at most two
    bool hasAdjacentDifferenceAtMostTwo(string& word, int start, int end) {
        for (int i = start + 1; i <= end; ++i) {
            if (abs(word[i] - word[i - 1]) > 2) {
                return false;
            }
        }
        return true;
    }
};



```
```C []
#include <stdio.h>
#include <string.h>

int hasEqualFrequency(int charFreq[], int size, int k) {
    for (int i = 0; i < size; ++i) {
        if (charFreq[i] != k && charFreq[i] != 0) {
            return 0;
        }
    }
    return 1;
}

int hasAdjacentDifferenceAtMostTwo(char word[], int start, int end) {
    for (int i = start + 1; i <= end; ++i) {
        if (abs(word[i] - word[i - 1]) > 2) {
            return 0;
        }
    }
    return 1;
}

int countCompleteSubstrings(char word[], int k) {
    int count = 0;
    int uniqueChars = 0;
    int charFreq[128] = {0}; // Assuming ASCII characters

    // Count unique characters in the word
    for (int i = 0; word[i] != '\\0'; ++i) {
        if (!charFreq[word[i]]) {
            uniqueChars++;
        }
        charFreq[word[i]]++;
    }

    // Loop through substring lengths from 1 to the count of unique characters
    for (int subLen = 1; subLen <= uniqueChars; ++subLen) {
        int windowSize = subLen * k; // Define the window size
        int start = 0;
        int end = start + windowSize - 1;

        // Populate the character frequency map for the initial window
        for (int i = start; i <= end && word[i] != '\\0'; ++i) {
            charFreq[word[i]]++;
        }

        // Sliding window approach
        while (word[end] != '\\0') {
            // Check conditions for equal frequency and adjacent difference at most two
            if (hasEqualFrequency(charFreq, 128, k) && hasAdjacentDifferenceAtMostTwo(word, start, end)) {
                count++;
            }

            charFreq[word[start]]--; // Move the window by decrementing the start character frequency
            start++;
            end++;

            // Update the end character frequency if the window size is less than word length
            if (windowSize < strlen(word)) {
                charFreq[word[end]]++;
            }
        }
    }

    return count;
}






```
```Java []
import java.util.*;

public class Solution {
    public int countCompleteSubstrings(String word, int k) {
        int count = 0;
        int uniqueChars = new HashSet<>(Arrays.asList(word.split(""))).size();

        for (int subLen = 1; subLen <= uniqueChars; ++subLen) {
            int windowSize = subLen * k;

            Map<Character, Integer> charFreq = new HashMap<>();
            int start = 0;
            int end = start + windowSize - 1;

            for (int i = start; i <= Math.min(end, word.length() - 1); ++i) {
                charFreq.put(word.charAt(i), charFreq.getOrDefault(word.charAt(i), 0) + 1);
            }

            while (end < word.length()) {
                if (hasEqualFrequency(charFreq, k) && hasAdjacentDifferenceAtMostTwo(word, start, end)) {
                    count++;
                }

                charFreq.put(word.charAt(start), charFreq.get(word.charAt(start)) - 1);
                start++;
                end++;

                if (windowSize < word.length()) {
                    charFreq.put(word.charAt(end), charFreq.getOrDefault(word.charAt(end), 0) + 1);
                }
            }
        }

        return count;
    }

    private boolean hasEqualFrequency(Map<Character, Integer> charFreq, int k) {
        for (int value : charFreq.values()) {
            if (value != k && value != 0) {
                return false;
            }
        }
        return true;
    }

    private boolean hasAdjacentDifferenceAtMostTwo(String word, int start, int end) {
        for (int i = start + 1; i <= end; ++i) {
            if (Math.abs(word.charAt(i) - word.charAt(i - 1)) > 2) {
                return false;
            }
        }
        return true;
    }



```
```python3 []
class Solution:
    def countCompleteSubstrings(self, word, k):
        count = 0
        unique_chars = len(set(word))

        for sub_len in range(1, unique_chars + 1):
            window_size = sub_len * k
            char_freq = {}
            start = 0
            end = start + window_size - 1

            for i in range(start, min(end, len(word))):
                char_freq[word[i]] = char_freq.get(word[i], 0) + 1

            while end < len(word):
                if self.has_equal_frequency(char_freq, k) and self.has_adjacent_difference_at_most_two(word, start, end):
                    count += 1

                char_freq[word[start]] -= 1
                start += 1
                end += 1

                if window_size < len(word):
                    char_freq[word[end]] = char_freq.get(word[end], 0) + 1

        return count

    def has_equal_frequency(self, char_freq, k):
        for value in char_freq.values():
            if value != k and value != 0:
                return False
        return True

    def has_adjacent_difference_at_most_two(self, word, start, end):
        for i in range(start + 1, end + 1):
            if abs(ord(word[i]) - ord(word[i - 1])) > 2:
                return False
        return True




```
```javascript []
function hasEqualFrequency(charFreq, k) {
    for (let freq of charFreq.values()) {
        if (freq !== k && freq !== 0) {
            return false;
        }
    }
    return true;
}

function hasAdjacentDifferenceAtMostTwo(word, start, end) {
    for (let i = start + 1; i <= end; ++i) {
        if (Math.abs(word.charCodeAt(i) - word.charCodeAt(i - 1)) > 2) {
            return false;
        }
    }
    return true;
}

function countCompleteSubstrings(word, k) {
    let count = 0;
    const charFreq = new Map();
    let uniqueChars = 0;

    for (let i = 0; i < word.length; ++i) {
        if (!charFreq.has(word[i])) {
            uniqueChars++;
        }
        charFreq.set(word[i], (charFreq.get(word[i]) || 0) + 1);
    }

    for (let subLen = 1; subLen <= uniqueChars; ++subLen) {
        const windowSize = subLen * k;
        let start = 0;
        let end = start + windowSize - 1;

        for (let i = start; i <= end && i < word.length; ++i) {
            charFreq.set(word[i], (charFreq.get(word[i]) || 0) + 1);
        }

        while (end < word.length) {
            if (hasEqualFrequency(charFreq, k) && hasAdjacentDifferenceAtMostTwo(word, start, end)) {
                count++;
            }

            charFreq.set(word[start], charFreq.get(word[start]) - 1);
            start++;
            end++;

            if (windowSize < word.length) {
                charFreq.set(word[end], (charFreq.get(word[end]) || 0) + 1);
            }
        }
    }

    return count;
}



```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---