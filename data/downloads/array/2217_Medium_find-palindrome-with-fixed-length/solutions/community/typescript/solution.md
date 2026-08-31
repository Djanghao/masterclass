# Javascript / Typescript Solution (Explained)

**Author:** georgiiperepechko
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1887259/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1887259/)

---

```
// main idea:
// the 1st palindrome will always be of intLength length with 1 as the first and last digit
// each next palindrome is always just the previous one with its first half + 1
// i.e.:
// first: 1001 (first half = 10) | first: 101 (first half = 10)
// nth:   7887 (first half = 78) | kth:   595 (first half = 59)
// nth+1: 7997 (first half = 79) | kth+1: 606 (first half = 60)
// nth+2: 8008 (first half = 80) | kth+2: 616 (first half = 61)

function kthPalindrome(queries: number[], intLength: number): number[] {
    if (intLength === 0) return queries.map(q => -1);

	// calculate the 1st palindrome
    let init = 10**(intLength - 1);
    if (init !== 1) init++;

	// get the first half of the first number as a string, i.e. 100 for 100001 or 10 for 101
	const initString = init.toString(10);
	let endOfFirstHalfIndex = Math.floor(intLength / 2 + 0.5);
	const halfInitString = initString.slice(0, endOfFirstHalfIndex);
    
    function getNthPalindrome(index: number) {
        const nextHalfStr = (+halfInitString + index - 1).toString(10); // figure out the hirst half of the nth palindrome
        if (nextHalfStr.length > halfInitString.length) return -1; // we've over the intLength, return -1;
		
		// now we just have to complete palindrome by recreating the other half
		// (remember to handle both odd and even intLength)
		const res = [];
        for (let i = 0, j = intLength - 1; i <= j; i++, j--) {
            res[i] = nextHalfStr[i];
            res[j] = res[i];
        }
        return +res.join('');
    }
    
	return queries.map(getNthPalindrome);
};
```