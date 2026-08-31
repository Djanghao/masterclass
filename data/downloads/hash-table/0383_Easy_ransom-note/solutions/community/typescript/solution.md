# Typescript - HashMap

**Author:** aramfilak
**Votes:** 17
**Link:** [https://leetcode.com/problems/ransom-note/solutions/3360795/](https://leetcode.com/problems/ransom-note/solutions/3360795/)

---


Time Complexity: O(n+m)
Space Complexity: O(1)

# Code
```ts
function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineChars = new Map<string, number>();

  for (const char of magazine) {
    if (magazineChars.has(char)) {
      magazineChars.set(char, magazineChars.get(char)! + 1);
    } else {
      magazineChars.set(char, 1);
    }
  }

  for (const char of ransomNote) {
    if (magazineChars.get(char)) {
      magazineChars.set(char, magazineChars.get(char)! - 1);
    } else {
      return false;
    }
  }

  return true;
}



```