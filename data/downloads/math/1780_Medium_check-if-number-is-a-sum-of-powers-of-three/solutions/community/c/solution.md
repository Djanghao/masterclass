# ✅ Simple Solution w/ explanation | C++ short & concise

**Author:** archit91
**Votes:** 16
**Link:** [https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1096257/](https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/solutions/1096257/)

---

\u2714\uFE0F ***Solution-I (Direct implementation as per problem statement)***
We need to observe that for a number `n` to be able to express as sum of distinct powers of three, it should be such `n % 3` is 0 or 1 meaning it should either be divisible by three or leave remainder 1(since we can nullify it using `3^0 = 1`). If it atleast doesn't satisfy this criteria, we are sure that it cant be expressed as required.

Start by finding the maximum power of 3 less than or equal to n, then the next one and so on until `n` doesn't become zero. Store each power that we have used so far. If any power occurs multiple time or remainder is not equal to `0` or `1`, then the number `n` cant be expressed as sum of distinct powers of 3.
```
bool checkPowersOfThree(int n) {
	int cnt = 0;
	vector<int>pows(15);
	while(n)
		if(!(n % 3))
			n /= 3, cnt++;
		else if(n % 3 == 1){
			n--, pows[cnt]++; 
			if(pows[cnt] >= 2)
				return false;
		}
		else return false;
	
	return true;
}
```
**Time Complexity** : **`O(logN)`**
**Space Complexity** : **`O(1)`**


----------
## Solution-II (Optimised)
Infact, we don't really need to have `pows` vector at all and we can directly do the above same implementation as follows - 

```
bool checkPowersOfThree(int n) {
	while(n)
		if(!(n % 3)) n /= 3;
		else if(n % 3 == 1) n--;             
		else return false;        
	return true;
}
```

