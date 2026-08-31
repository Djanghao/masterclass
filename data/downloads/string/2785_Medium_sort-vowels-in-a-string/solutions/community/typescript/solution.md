# Simple Sorting Solution

**Author:** SheepNDW
**Votes:** 5
**Link:** [https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281250/](https://leetcode.com/problems/sort-vowels-in-a-string/solutions/4281250/)

---

# Approach

1. **Identifying Vowels**: Use a `Set` to store all vowels (both lowercase and uppercase) for quick lookup.
2. **Separating and Sorting Vowels**: Convert the string into an array and filter out the vowels. Sort these vowels by their ASCII values.
3. **Reconstructing the String**: Iterate through the original string. If the current character is a vowel, insert the next sorted vowel from our collection. If it's a consonant, keep it as is.

# Complexity
- Time complexity: $O(n \\log n)$ (Beats 91.67%)

- Space complexity: $O(n)$ (Beats 87.50%)

# Code
```
function sortVowels(s: string): string {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  const sArr = s.split('');
  const sortedVowel = sArr.filter((c) => vowels.has(c)).sort();

  let result = '';
  let vowelIndex = 0;
  for (let i = 0; i < s.length; i++) {
    if (vowels.has(s[i])) {
      result += sortedVowel[vowelIndex++];
    } else {
      result += s[i];
    }
  }

  return result;
}
```