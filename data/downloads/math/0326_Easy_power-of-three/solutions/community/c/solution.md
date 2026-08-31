# ✅ Power Of Three | Loops / Recursive / Direct Approach | Multiple Solutions Explained w/ Clean Code

**Author:** archit91
**Votes:** 142
**Link:** [https://leetcode.com/problems/power-of-three/solutions/1178701/](https://leetcode.com/problems/power-of-three/solutions/1178701/)

---

\u2714\uFE0F ***Solution - I (Loops)***

We can keep dividing a number till it is divisible by 3. At last, if the number is equal to 1, return true, otherwise return false. We need to handle 

```
bool isPowerOfThree(int n) {
	if(!n) return false;
	while(n % 3 == 0) n /= 3;    
	return n == 1;
}
```

***Time Complexity :*** **`O(log3(n))`**
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - II (Recurison)***

The same logic as above converted to recursive solution -

```
bool isPowerOfThree(int n) {
	if(n <= 1) return n == 1;
	return n % 3 == 0 && isPowerOfThree(n / 3);
}
```

***Time Complexity :*** **`O(log3(n))`**
***Space Complexity :*** **`O(log3(n))`**

---



\u2714\uFE0F ***Solution - III (Base Conversion)***

&emsp;&emsp;\u2726 Any power of 10, in base 10, starts with 1 and rest digits are 0.

&emsp;&emsp;\u2726 Any power of 2, in base 2, starts with 1 and rest digits are 0.

&nbsp;&emsp; \uD83D\uDC49  Similarly, any power of 3, in base of 3, will start with 1 and rest digit will be 0.

```
bool isPowerOfThree(int n) {
	if(n < 1) return false;
	string nbase3 = "";
	while(n) nbase3 += to_string(n % 3), n /= 3;   // conversion to base 3
	int i = 0;
	while(i < size(nbase3) - 1) if(nbase3[i++] != '0') return false; // checking if all digits in base 3 converted number except first one are 0
	return nbase3[i] == '1';   // check if starting digit is 1
}
```

***Time Complexity :*** **`O(log3(n))`**
***Space Complexity :*** **`O(log3(n))`**
  
---  
  
\u2714\uFE0F ***Solution IV (Space optimized Base Converison)***

We don't really need to store the number after base converted to 3. We can check if it (number in base 3) is starting with 1 and rest of digits are 0 on the fly -

```
bool isPowerOfThree(int n) {
	if(n < 1) return false;
	for(; n != 1; n /= 3) if(n % 3 != 0) return false;
	return true;
}
```
  
***Time Complexity :*** **`O(log3(n))`**
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - V (Precompute Once & Store in Set)***

If there are many queries, we can just precompute all powers of 3 and store them in a hashset. Then we can find if *`n`*  is present in it or not.

```
unordered_set<int> s;
bool f = []{
    for (uint i = 0, powOf3 = 1; i <= 19; i++, powOf3 *= 3) s.insert(powOf3);    
    return true;
}(); 
class Solution {
public:    
    bool isPowerOfThree(int n) {
        return s.find(n) != end(s);
    }
};
```

***Time Complexity :*** **`O(1)`**
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - VI (Without loops or recursion - Divisiblity Check w/ Largest power of 3)***

3 is a prime number. So, **any power of 3 will only be divisible by lower or equal powers of 3**.

The largest power of 3 less than `2^31` is 1162261467 (can be found by `3^( log3(2^31 - 1) ) = 3^19 = 1162261467` ). So, this number will only be divisible by a power of 3. 

Thus, we can only check if the above number is divisible by *`n`*. If *`n`* is a power of 3, then only it will be completely divisible by n.

```
bool isPowerOfThree(int n) {
	return n > 0 && 1162261467 % n == 0;
	// pow(3, floor(log(INT_MAX)/log(3))) = 1162261467 
}
```

***Time Complexity :*** **`O(1)`**
***Space Complexity :*** **`O(1)`**
  
**Note:** This solution worked because 3 is a prime number and will work for any other prime number power checks as well. It won't work for non-prime numbers because its largest power will also get divided by some non-powers of that number as well.

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---