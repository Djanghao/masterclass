# ✅ Simple Solution w/ Explanation | Max digit | 1-Liners

**Author:** archit91
**Votes:** 55
**Link:** [https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/1231469/](https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/solutions/1231469/)

---

\u2714\uFE0F ***Solution***

We can observe that since we only have deci-binary (1s and 0s) to sum up to given number `n`, we need atleast *`n[i]`* deci-binary numbers to sum up to *`n[i]`*, where `n[i]` is the ith digit of given number.

```
Eg. 
1. Consider n="9"
=> We need to add 1 for 9 times to get n
2. n = "4201"
=> We can add    1101
               + 1100
               + 1000 
               + 1000 
             -------
			     4201
or any other combination which doesnt matter for this quesiton to get n. 

Notice how we require atleast MAX_DIGIT number of deci-binary numbers, where MAX_DIGIT is max digit in n.
```

So, we only need to find the maximum digit in the given number `n` and that would be the minimum number of deci-binary numbers required.



**C++**
```
int minPartitions(string& n) {
	int ans = 0;
	for(auto& ch : n) ans = max(ans, ch - '0');
	return ans;
	// or simply -
	// return *max_element(begin(n), end(n)) - '0';
}
```

---

**Python**
```
def minPartitions(self, n: str) -> int:
	return max(n)
```

---

**JavaScript**
```
const minPartitions = n => Math.max(...n)
```

---

**Java**
```
public int minPartitions(String n) {
	return n.chars().max().getAsInt() - '0';
}
```


---



***Time Complexity :*** **`O(N)`**
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---