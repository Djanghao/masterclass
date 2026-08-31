# One Pass O(N) Simple Typescript Solution

**Author:** jingdamai
**Votes:** 1
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131124/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1131124/)

---

https://leetcode.com/problems/reconstruct-original-digits-from-english/discuss/91207/one-pass-O(n)-JAVA-Solution-Simple-and-Clear
The idea is:

for zero, it's the only word has letter 'z',
for two, it's the only word has letter 'w',
......
so we only need to count the unique letter of each word, Coz the input is always valid.
```
const originalDigits = (s: string): string => {
  const counter = new Array<number>(10).fill(0);
  for (const c of s) {
    if (c === 'z') counter[0]++;
    if (c === 'w') counter[2]++;
    if (c === 'x') counter[6]++;
    if (c === 's') counter[7]++; //7-6
    if (c === 'g') counter[8]++;
    if (c === 'u') counter[4]++;
    if (c === 'f') counter[5]++; //5-4
    if (c === 'h') counter[3]++; //3-8
    if (c === 'i') counter[9]++; //9-8-5-6
    if (c === 'o') counter[1]++; //1-0-2-4
  }
  counter[7] -= counter[6];
  counter[5] -= counter[4];
  counter[3] -= counter[8];
  counter[9] = counter[9] - counter[8] - counter[5] - counter[6];
  counter[1] = counter[1] - counter[0] - counter[2] - counter[4];
  const res = [] as string[];
  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j < counter[i]; j++) {
      res.push(i.toString());
    }
  }
  return res.join('');
};

```