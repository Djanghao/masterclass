# using regex

**Author:** boutchamir
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4940061/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/4940061/)

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
function countValidWords(sentence: string): number {
  const words = sentence.split(' ').filter(word => word !== ""); // Exclude empty strings resulted from split
  const validWords = words.filter(word => isValidWord(word));
  console.log(validWords);
  return validWords.length;
}

function isValidWord(word: string): boolean {
  // Directly return true for valid standalone punctuation
  if (['!', '.', ','].includes(word)) return true;

  // Validate word against the rules for characters and hyphen usage
  if (!/^[a-z]+(-[a-z]+)?[!,.]?$/.test(word)) return false;

  // Check for invalid starting characters or presence of numbers
  if (word.startsWith('-') || /\\d/.test(word)) return false;

  // Ensure only one punctuation or hyphen is present
  const punctuationAndHyphens = word.split('').filter(char => ['!', '.', ','].includes(char));
  if (punctuationAndHyphens.length > 1) return false;

  // If a hyphen is present, ensure it's surrounded by letters
  const hyphenIndex = word.indexOf('-');
  if (hyphenIndex !== -1) {
      const beforeHyphen = word[hyphenIndex - 1];
      const afterHyphen = word[hyphenIndex + 1];
      if (!/[a-z]/.test(beforeHyphen) || !/[a-z]/.test(afterHyphen)) return false;
  }

  return true;
}

```