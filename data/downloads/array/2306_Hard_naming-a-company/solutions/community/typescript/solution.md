# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/naming-a-company/solutions/6042475/](https://leetcode.com/problems/naming-a-company/solutions/6042475/)

---

# Intuition
The goal is to count how many distinct name pairs can be formed, where each name in a pair differs only in their first character, but shares the same suffix. We need to avoid counting pairs that share the same suffix for both names.

# Approach
We can create an array to group suffixes by their first character, then compare different groups to calculate how many valid pairs can be formed, excluding pairs where both names have the same suffix.

# Complexity
- Time complexity:
O(N * 26), where N is the number of ideas (strings), because for each string, we are doing constant-time operations related to its suffix, and there are 26 possible starting characters.

- Space complexity:
O(26 * S), where S is the average number of unique suffixes, because we store suffixes for each character from 'a' to 'z'.

# Code
```typescript []
/**
 * Function to calculate the number of valid distinct name pairs based on suffixes.
 * 
 * @param {string[]} ideas - An array of strings where each string represents a name idea.
 * @return {number} - The total number of distinct name pairs.
 */
function distinctNames(ideas: string[]): number {
  // Step 1: Initialize an array of 26 elements, each holding an object to track suffixes.
  const suffixes: Record<string, Set<string>>[] = Array(26).fill(null).map(() => ({}));

  // Step 2: Populate the suffixes objects for each letter (from 'a' to 'z').
  ideas.forEach(idea => {
    const firstCharIndex = idea.charCodeAt(0) - 97; // Find the index based on the first character of the idea.
    const suffix = idea.slice(1); // Extract the suffix (everything except the first character).
    if (!suffixes[firstCharIndex][suffix]) {
      suffixes[firstCharIndex][suffix] = new Set();
    }
    suffixes[firstCharIndex][suffix].add(idea); // Add the full idea to the set of ideas for this suffix.
  });

  let totalPairs = 0;

  // Step 3: Loop through all possible pairs of starting characters (a, b) to (z, z).
  for (let i = 0; i < 25; i++) {
    for (let j = i + 1; j < 26; j++) {
      let mutualCount = 0; // Track how many suffixes are shared between the sets for the two characters.
      
      // Compare the suffixes between the two sets corresponding to different starting characters.
      Object.keys(suffixes[i]).forEach(suffix => {
        if (suffixes[j][suffix]) {
          mutualCount++; // Increment mutualCount if the suffix exists in both sets.
        }
      });

      // Calculate the number of valid pairs by excluding mutual suffixes.
      const remainingValidPairs = (Object.keys(suffixes[i]).length - mutualCount) *
                                   (Object.keys(suffixes[j]).length - mutualCount);
      totalPairs += remainingValidPairs; // Update the total valid pairs count.
    }
  }

  // Step 4: Multiply by 2 to account for both (a, b) and (b, a) pairs.
  return totalPairs * 2;
}

```