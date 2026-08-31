# Straight forward Dart solution

**Author:** Allicolyer
**Votes:** 0
**Link:** [https://leetcode.com/problems/sentence-screen-fitting/solutions/4142555/](https://leetcode.com/problems/sentence-screen-fitting/solutions/4142555/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
  int wordsTyping(List<String> sentence, int rows, int cols) {
    // This counter track of how many times we went through
    int counter = 0;
    // Keep track of the current ropw
    int currentRow = 0;
    // Keep track of the current column
    int currentColumn = 0;
    // This is the word we are currently tryint to fit
    int currentWordIndex = 0;

    void skipToNextRow() {
      currentRow++;
      currentColumn = 0;
    }

    void goToNextWord() {
      currentWordIndex++;
      // If we are at the end, reset to the first word
      if (currentWordIndex >= sentence.length) {
        // Reset to the first word, increment counter
        counter++;
        currentWordIndex = 0;
      }
    }

    bool doesWordFit(int wordLength) {
      return cols - currentColumn >= wordLength;
    }

    while (currentRow < rows) {
      // Try to fit the words into the row
      int wordLength = sentence[currentWordIndex].length;
      // Check if next word fits on row, if not increment to the next row and    reset the current column and row pointer
      if (doesWordFit(wordLength)) {
        // Add one for the space
        currentColumn += wordLength + 1;
        goToNextWord();
        if (currentColumn >= cols) {
          skipToNextRow();
        }
      } else {
        skipToNextRow();
      }
    }
    return counter;
  }
}

```