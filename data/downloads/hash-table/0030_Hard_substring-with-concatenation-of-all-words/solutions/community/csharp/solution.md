# C# - Sliding Window Approach With Explanation

**Author:** saberzero1
**Votes:** 6
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/3680493/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/3680493/)

---

# Intuition
First a few notable properties of the problem:
- Every word is the same length.
- Words can repeat in the input.
- The problems looks for permutations, not combinations
  - This means that if the input is `["foo", "bar"]`, then the substring `"foofoobar"` is valid.
- The result should report the starting index(es) only.

# Approach
The [Sliding Window Algorithm](https://www.geeksforgeeks.org/window-sliding-technique/) approach seems appropriate, because we only have to check if the next `n` letters form a word from the input, where `n` is the length of the words in the input.

> The sliding window algorithm is a commonly used technique in computer science and data analysis. It involves defining a window or subset of data that "slides" along a larger dataset, with the purpose of extracting relevant information or performing calculations on the smaller window. The size of the window is one parameter that can be adjusted, depending on the specific task at hand.

# Explanation
1. The first step is to count how many times each word appears in the `words` array. We store this information in a dictionary called `wordCount`.
2. To improve the performance, we use a sliding window approach. We examine each possible starting position within the length of a single word (`wordLength`).
3. For each starting position, we create a window of a fixed length, `substringLength`, which represents the length of the concatenated substring.
4. Inside this window, we keep track of the count of words we encounter using the `currentWordCount` dictionary. Additionally, we keep a tally of the total number of words found (`wordsFound`) and the index at the left side of the window (`left`).
5. We iterate through the string `s` using steps of `wordLength`, moving the window one word length at a time.
6. If the current word is present in the `wordCount` dictionary, we update the counts in `currentWordCount` and increment `wordsFound`. If the count of any word exceeds the required count, we adjust the left side of the window until the counts are balanced again.
7. When we have found all the required words (`wordsFound` equals `totalWords`), we add the index at the left side of the window to the result. Then, we decrease the count for the word at the left side, decrement `wordsFound`, and move the left side of the window forward by one word length.
8. If the current word is not present in the `wordCount` dictionary, it means the window is no longer valid. In this case, we reset the counts and move the left side of the window to the next valid position.
9. Finally, we return the list of valid starting indices of the concatenated substrings as the result.

# Complexity
- Time complexity: $$O(N)$$, where $$N$$ is the length of the input string `s`.
- Space complexity: $$O(M)$$, where $$M$$ is the total number of characters in all the words combined.

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> FindSubstring(string s, string[] words) {
        IList<int> result = new List<int>();

        if (s.Length == 0 || words.Length == 0)
            return result;

        int wordLength = words[0].Length; // Length of each word in the words array
        int totalWords = words.Length; // Total number of words in the words array
        int substringLength = wordLength * totalWords; // Length of the concatenated substring

        if (s.Length < substringLength)
            return result;

        Dictionary<string, int> wordCount = new Dictionary<string, int>();
        
        // Count the occurrences of each word in the words array
        foreach (string word in words) {
            if (wordCount.ContainsKey(word))
                wordCount[word]++;
            else
                wordCount[word] = 1;
        }

        // Sliding window approach
        for (int i = 0; i < wordLength; i++) {
            Dictionary<string, int> currentWordCount = new Dictionary<string, int>(); // Track counts of words in the current window
            int wordsFound = 0; // Total number of words found in the current window
            int left = i; // Left index of the sliding window

            // Move the window one word length at a time
            for (int j = i; j <= s.Length - wordLength; j += wordLength) {
                string currentWord = s.Substring(j, wordLength);

                // If the current word is in the wordCount dictionary, update the counts
                if (wordCount.ContainsKey(currentWord)) {
                    if (currentWordCount.ContainsKey(currentWord))
                        currentWordCount[currentWord]++;
                    else
                        currentWordCount[currentWord] = 1;

                    wordsFound++;

                    // Adjust the left index of the window if any word count exceeds the required count
                    while (currentWordCount[currentWord] > wordCount[currentWord]) {
                        string leftWord = s.Substring(left, wordLength);
                        currentWordCount[leftWord]--;
                        wordsFound--;
                        left += wordLength;
                    }

                    // If all words are found, add the left index to the result
                    if (wordsFound == totalWords) {
                        result.Add(left);
                        string leftWord = s.Substring(left, wordLength);
                        currentWordCount[leftWord]--;
                        wordsFound--;
                        left += wordLength;
                    }
                }
                // If the current word is not in the wordCount dictionary, reset the counts and move the left index
                else {
                    currentWordCount.Clear();
                    wordsFound = 0;
                    left = j + wordLength;
                }
            }
        }

        return result;
    }
}
```