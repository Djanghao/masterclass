# ✅ Explained with Comments | Easy | 90% | O(n) | JS

**Author:** _kapi1
**Votes:** 25
**Link:** [https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1871784/](https://leetcode.com/problems/smallest-string-with-a-given-numeric-value/solutions/1871784/)

---

```
/* 
Idea is to build the string from the end.
1. We create an array (numericArr) to store string (1 indexed) corresponding to it's 
numeric value as given i.e [undefined,a,b,c,......,z] 

Now we have to fill n places i.e  _ _ _ _ _ _ (Think it as fill in the blanks)

We will fill this from the end. The highest value last bank can have is "z" i.e 26 numeric value
but we also have to fill remaining n-1 blanks and minimum value they can have is "a" i.e 1 numeric
value. So it is clear the we will have to subtract these n-1 min values to fill nth blank
so our nth value will be k-(n-1). In below code n===i

2. So we calculate nth blank value i.e val=k - (n-1)

3. Now if value >=26 then we fill this blank with z i.e numericArr[26] and reduce k by 26
i.e k=k-26

else our value is <26 so we pick the string as numericArr[val] and k=k-val

In both if else case in step 3 we update our final string as str = numericArr[index] + str; (see below code)
*/
var getSmallestString = function (n, k) {
	let numericArr = [],
		str = '';
	// Step 1 to build string numeric array
	for (let i = 1; i <= 26; i++) {
		numericArr[i] = String.fromCharCode(96 + i);
	}
	for (let i = n; i > 0; i--) {
		// Step 2: Find nth blanks value
		let val = k - (i - 1);
		// Step 3
		if (val >= 26) {
			str = numericArr[26] + str;
			k = k - 26;
		} else {
			str = numericArr[val] + str;
			k = k - val;
		}
	}
	return str;
};
getSmallestString(3, 27);
```