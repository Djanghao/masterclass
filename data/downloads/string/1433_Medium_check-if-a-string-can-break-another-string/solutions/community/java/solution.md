# Java O(nlogn) easy sorting and loop

**Author:** mounirk
**Votes:** 9
**Link:** [https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/623007/](https://leetcode.com/problems/check-if-a-string-can-break-another-string/solutions/623007/)

---

There is no need to calculate the permutations because by sorting the two string you can start comparing the string one char at a time.

```
public boolean checkIfCanBreak(String s1, String s2) {
	char[] x = s1.toCharArray();
	char[] y = s2.toCharArray();
	Arrays.sort(x);
	Arrays.sort(y);
	boolean xx = true;
	boolean yy = true;
	for (int i = 0; i < x.length && (xx || yy); i++) {
		if (x[i] < y[i]) xx = false;
		if (y[i] < x[i]) yy = false;
	}
	return xx || yy;
}
```