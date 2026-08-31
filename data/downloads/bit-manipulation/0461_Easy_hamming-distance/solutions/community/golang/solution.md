# Go | 100 % Faster

**Author:** infernoMarvelous
**Votes:** 3
**Link:** [https://leetcode.com/problems/hamming-distance/solutions/1819749/](https://leetcode.com/problems/hamming-distance/solutions/1819749/)

---

**Naive Solution**
First get the binary representation of both the numbers and find the count of different corresponding bits.
Both numbers are different create 2 arrays of length 64 to store the binary representation and iterate over them to find the count of different corresponding bits.
This solution will solve the problem for all test cases but iterating over the array will still take time and this solution still can be improved.

**Optimized Solution**

The Bitwise-XOR of both number will give the number which has set bits for the different corresponding bits. Then count the number of set bits to get the hamming distance.


```
func hammingDistance(x int, y int) int {
	// Bitwise-XOR will give the number which have all the set bits for different corresponding btis
	xor := x ^ y 									
	r := 0
	// Calculate the number of set bits
	for xor != 0 {
		xor -= xor & (-xor)
		r++
	}
	return r
}

```

Time Complexity:- **O(log(n))**
Space Complexity:- **O(1)**