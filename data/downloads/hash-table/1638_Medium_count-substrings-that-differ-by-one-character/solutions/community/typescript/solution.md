# Typescript: Time O(n^2 ), Space O(n^2)

**Author:** mkryuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3406480/](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/solutions/3406480/)

---

# Intuition
The intuition behind the solution is to generate all possible substrings of both strings and then compare each substring from the first string with substrings of the same length from the second string.

# Approach
The approach is to first generate all possible substrings for both input strings 's' and 't'. For 's', we create an array of all its substrings, while for 't', we create a map that groups its substrings by their lengths. Then, for each substring in 's', we check if it has been processed before by looking it up in the cache. If not, we find the count of substrings in 't' that differ by exactly one character and store the result in the cache. The result is the sum of these counts for all substrings in 's'.

# Complexity
- Time complexity:
The time complexity is O(s^2 * t * m), where s is the length of the first input string, t is the length of the second input string, and m is the length of the longest substring in 's'. This complexity comes from iterating through all substrings of 's' (O(s^2)), and for each substring, calling getDifferByOneCount, which takes O(t * m) time.

- Space complexity:
The space complexity is O(s^2 + t^2), which comes from the storage of all substrings of both input strings 's' and 't'. The total number of substrings for each string is O(n^2), where n is the length of the string.

# Code
```
function countSubstrings(s: string, t: string): number {
  const substrings = getSubstrings(s);
  const tSubstringsByLength = getSubstringsByLength(t);
  const cache = new Map<string, number>();
  let result = 0;
  for (let i = 0; i < substrings.length; i++) {
    if (cache.has(substrings[i])) {
      result += cache.get(substrings[i])!;
      continue;
    }
    const tSubstrings = tSubstringsByLength.get(substrings[i].length) ?? [];
    const count = getDifferByOneCount(substrings[i], tSubstrings);
    cache.set(substrings[i], count);
    result += count;
  }
  return result;
}

function getDifferByOneCount(substring: string, substrings: string[]) {
  let result = 0;
  for (let i = 0; i < substrings.length; i++) {
    let differ = 0;
    for (let j = 0; j < substring.length; j++) {
      if (differ > 1) {
        break;
      }
      if (substring[j] !== substrings[i][j]) {
        differ++;
      }
      if (j === substring.length - 1 && differ === 1) {
        result++;
      }
    }
  }
  return result;
}

function getSubstrings(s: string): string[] {
  const substrings: string[] = [];
  for (let count = 1; count <= s.length; count++) {
    for (let start = 0; start < s.length; start++) {
      if (start + count > s.length) {
        continue;
      }
      const substr = s.slice(start, start + count);
      substrings.push(substr);
    }
  }
  return substrings;
}

function getSubstringsByLength(s: string): Map<number, string[]> {
  const substringsMap = new Map<number, string[]>();
  for (let count = 1; count <= s.length; count++) {
    for (let start = 0; start < s.length; start++) {
      if (!substringsMap.has(count)) {
        substringsMap.set(count, []);
      }
      if (start + count > s.length) {
        continue;
      }
      const substr = s.slice(start, start + count);
      substringsMap.get(count)!.push(substr);
    }
  }
  return substringsMap;
}

```