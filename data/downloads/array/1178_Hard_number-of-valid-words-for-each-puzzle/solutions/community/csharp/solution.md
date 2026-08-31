# 💥💥Runtime and memory beats 100% [EXPLAINED]

**Author:** r9n
**Votes:** 5
**Link:** [https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/5801613/](https://leetcode.com/problems/number-of-valid-words-for-each-puzzle/solutions/5801613/)

---

# Intuition
We need to figure out how many words can match each puzzle based on two criteria:

A word must include the first letter of the puzzle.

Every letter in the word must be found in the puzzle.

I realized that checking these criteria one by one for every word and puzzle would be too slow, especially with large inputs. So, I used a more efficient method involving bitmasks to speed up the process.

# Approach
Bitmask Representation:

I converted each word and puzzle into a bitmask. A bitmask is just an integer where each bit represents whether a particular letter is present. For example, the bitmask for the word "abc" is 00000000000000000000000000000000000000000111 (in binary), indicating that 'a', 'b', and 'c' are present.

Preprocessing Words:

I created a dictionary to count how many times each bitmask appears. This way, I can quickly look up how many words correspond to any given bitmask.

Processing Puzzles:

For each puzzle, I created its bitmask and then checked all possible subsets of this bitmask to see if they match any of the word bitmasks in my dictionary.
I made sure that the subset includes the first letter of the puzzle, which is a must for the word to be valid.

# Complexity
- Time complexity:
The algorithm's time complexity is O(W + P * 2^L), where W is the number of words, P is the number of puzzles, and L is the length of each puzzle (which is fixed at 7). This is efficient because even though we check all subsets, the number of subsets is limited by the fixed length of the puzzles.

- Space complexity:
The space complexity is O(W * 2^L) because we store bitmask counts for each word, and there are at most 2^L possible bitmasks. For puzzles of length 7, this is manageable.

# Code
```csharp []
using System;
using System.Collections.Generic;

public class Solution {
    public IList<int> FindNumOfValidWords(string[] words, string[] puzzles) {
        var wordMaskCount = new Dictionary<int, int>();
        
        // Helper to convert a string to a bitmask
        int GetBitmask(string s) {
            int mask = 0;
            foreach (var ch in s) {
                mask |= 1 << (ch - 'a');
            }
            return mask;
        }

        // Populate wordMaskCount dictionary
        foreach (var word in words) {
            int mask = GetBitmask(word);
            wordMaskCount[mask] = wordMaskCount.GetValueOrDefault(mask, 0) + 1;
        }

        var results = new List<int>();
        
        foreach (var puzzle in puzzles) {
            int puzzleMask = GetBitmask(puzzle);
            int firstCharMask = 1 << (puzzle[0] - 'a');
            int count = 0;

            // Check all subsets of puzzleMask
            for (int submask = puzzleMask; submask > 0; submask = (submask - 1) & puzzleMask) {
                if ((submask & firstCharMask) != 0 && wordMaskCount.ContainsKey(submask)) {
                    count += wordMaskCount[submask];
                }
            }

            results.Add(count);
        }
        
        return results;
    }
}

```