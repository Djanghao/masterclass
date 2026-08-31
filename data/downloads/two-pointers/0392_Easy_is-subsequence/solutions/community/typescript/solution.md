# 2 lines solution with linear time and description (99.46%, 48.40%)

**Author:** angrebennikov
**Votes:** 8
**Link:** [https://leetcode.com/problems/is-subsequence/solutions/2195456/](https://leetcode.com/problems/is-subsequence/solutions/2195456/)

---

Code:
```
const isSubsequence = (s: string, t: string): boolean => {
  const counter = t.split('').reduce<number>((acc, el) => s[acc] === el ? acc += 1 : acc, 0)

  return counter === s.length
};
```
Description:
The main logic is understood how many times we met each element of the subsequence at the string and compare the number with subsequence's length.
To first iteration `counter` is 0 and we are comparing first letter of the subsequence by first letter of the string.
If we find equality, we increase the counter. (It means that on the second iteration ` counter` will be 1 and we'll compare second letter of the subsequence with the second letter of the string)
If not, just skip this iteration. (It means that on the second iteration ` counter` will be 0 and we'll compare first letter of the subsequence with the second letter of the string)

I did all logic at `reduce` but you can do the same with a variable and `for` loop
```
const isSubsequence = (s: string, t: string): boolean => {
  let counter = 0;
  
  for (let i = 0; i < t.length; i++) {
	  if (s[counter] === t[i]) counter++
  }
  
  return counter === s.length
};
```
