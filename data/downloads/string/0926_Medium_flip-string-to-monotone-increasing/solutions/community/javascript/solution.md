# ⛱  Easy Javascript Solution with Detailed Explanation - o(n) time, o(1) space 😎

**Author:** avakatushka
**Votes:** 37
**Link:** [https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1396775/](https://leetcode.com/problems/flip-string-to-monotone-increasing/solutions/1396775/)

---

## Explanation
We want our string to be monotonic. 
Strings "0000", "00111" and "1111" are monotonic.
What if string is already monotonic and we add one more character?
* If this character is '1', string will always remain monotonic. No problem here 
\uD83E\uDD17 "0000" + "1", "0000111" + "1" or "1111" + "1".
* What if this character is '0'? 
	* We can flip it to '1' to make sure string remains monotonic.
	* We can flip all the '1's  we had seen before to '0's making the string to "0000...000".
## Code
We will build solution bit by bit, using result from **first i - 1 characters** to get to result for **ith character**.  As discussed before, we are just adding **one character to the end** each time. 
```
let onesAlreadySeen = 0;
let res = 0;
for (let i = 0; i < s.length; i++) {
	if (s[i] == '0') {
		res = Math.min(res + 1 /* flip this '0' to '1' */,
					   onesAlreadySeen /* flip all '1' we've seen before to '0'*/);
	} else {
		// s[i] is '1'
		onesAlreadySeen++;
	}
}
return res;
```
## Complexity
This solution takes o(1) space - only two variables are being used and o(n) time for 1 for loop. 
