# Typescript | Beats 100% | Two pointers

**Author:** OsidAbu-Alrub
**Votes:** 11
**Link:** [https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2449971/](https://leetcode.com/problems/reverse-vowels-of-a-string/solutions/2449971/)

---

```
function reverseVowels(s: string): string {
  let start = 0;
  let end = s.length - 1;
  const VOWELS = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
  const ans = [...s];
  while(start < end){
    if(!VOWELS.has(ans[start]))
      start++;
    if(!VOWELS.has(ans[end]))
      end--;
    if(VOWELS.has(ans[start]) && VOWELS.has(ans[end])){
      const temp = ans[start];
      ans[start] = ans[end];
      ans[end] = temp;
      start++
      end--;
    }
  }
  return ans.join("");
};
```