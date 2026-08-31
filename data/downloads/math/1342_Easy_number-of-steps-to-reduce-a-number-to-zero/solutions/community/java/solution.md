# Java 0ms 1-liner: avoid recursion/iteration with Integer library

**Author:** AFeas1987
**Votes:** 106
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/907422/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/907422/)

---

```java
public int numberOfSteps (int num) {
	return Integer.toBinaryString(num).length() - 1 + Integer.bitCount(num);
}
```

The first part,  `Integer.toBinaryString(num).length() - 1` obtains the number of characters in the binary representation of our number minus one.  This is equal to the *greatest* value of  `x`, satisfying `2^x <= num`.  This number represents the number of times `num` must be **divided by two**.

The second part, `Integer.bitCount(num)`, returns the "bit count" or "[hamming weight](https://en.wikipedia.org/wiki/Hamming_weight)" of `num`, which is the number of 1's in it's binary representation.  This number represents the number of times we would encounter a **subtract one** operation before dividing in the iterative approach.