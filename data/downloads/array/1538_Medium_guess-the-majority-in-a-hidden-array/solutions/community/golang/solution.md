# Golang: approach with n queries

**Author:** devbackend
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3467313/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3467313/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * type ArrayReader struct {
 * }
 * // Compares 4 different elements in the array
 * // return 4 if the values of the 4 elements are the same (0 or 1).
 * // return 2 if three\xA0elements have a value\xA0equal to 0\xA0and one\xA0element has value equal to 1\xA0or vice versa.
 * // return 0 :\xA0if two element have a value equal to 0 and two elements have a value equal to 1.
 * func (this *ArrayReader) query(a, b, c, d int) int {}
 *
 * // Returns the length of the array
 * func (this *ArrayReader) length() int {}
 */

func guessMajority(reader *ArrayReader) int {
	size := reader.length()

	cntEqual := 1
	ixDiff := -1

	var diff int

	fn := func(isEqual bool, ix int) {
		if isEqual {
			cntEqual++
		} else {
			diff++
			ixDiff = ix
		}
	}

	firstElemsQuery := reader.query(0, 1, 2, 3)
	secondElemsQuery := reader.query(1, 2, 3, 4)

	fn(firstElemsQuery == secondElemsQuery, 4)

	for i := 5; i < size; i++ {
		fn(firstElemsQuery == reader.query(1, 2, 3, i), i)
	}

	fn(reader.query(0, 2, 3, 4) == secondElemsQuery, 1)
	fn(reader.query(0, 1, 3, 4) == secondElemsQuery, 2)
	fn(reader.query(0, 1, 2, 4) == secondElemsQuery, 3)

	if cntEqual > diff {
		return 0
	} else if diff > cntEqual {
		return ixDiff
	}
	
	return -1
}
```