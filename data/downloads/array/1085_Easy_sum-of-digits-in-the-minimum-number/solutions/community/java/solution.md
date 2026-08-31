# java beats 100/100. simple w/ comments

**Author:** carti
**Votes:** 4
**Link:** [https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/415469/](https://leetcode.com/problems/sum-of-digits-in-the-minimum-number/solutions/415469/)

---

```java
public int sumOfDigits(int[] A) {
	//min (set to first element)
	int min = A[0];
	//iterate thru A
	for (int i = 1; i < A.length; i++) {
		//set new min
		min = Math.min(A[i], min);
	}
	//current sum
	int sum = 0;
	//get invidiual digits in min
	while (min > 0) {
		//add current digit to sum
		sum += min % 10;
		//cut down
		min = min / 10;
	}
	//result : 0 if odd, 1 if even
	return (sum % 2 == 0) ? 1 : 0;
}
```