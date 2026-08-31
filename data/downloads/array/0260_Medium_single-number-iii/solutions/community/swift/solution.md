# Swift: SIMPLE & SWEET hash table & bit manipulation solutions with complexity and EXPLANATION (100%)

**Author:** voxqhuy
**Votes:** 4
**Link:** [https://leetcode.com/problems/single-number-iii/solutions/751273/](https://leetcode.com/problems/single-number-iii/solutions/751273/)

---

# Approach 1: Using a hash table
**Time: O(n), Space: O(n)** where n is the count of nums
Explanation:
We traverse over the array twice => Time: O(2n) = O(n)
We use a hash table => Space: O(n)
```
func singleNumber(_ nums: [Int]) -> [Int] {
	var dict = [Int : Int]()
	var result = [Int]()

	for num in nums {
		dict[num] = dict[num, default: 0] + 1
	}

	for num in nums {
		if dict[num] == 1 { result.append(num) }
	}

	return result
}
```


---

# Approach 2: Bit manipulation
We will do this in 3 steps:
**Step 1:** we XOR all elements in the array, and get the XOR (call it "xorResult") of the two numbers we need to find . Why? because XORing two duplicate numbers always results in 0.

**Step 2:** Since the 2 numbers of the result are different, they will have some different bits. Interestingly, our "xorResult" contains the bit 1s (so called set bits) at where the two result numbers differ (refer to XOR truth table in case you need to refresh this). 

Now, we will try to find the right most set bit (call it "rightMostSetBit") by using a bit manipulation trick, explained [here](https://www.***.org/position-of-rightmost-set-bit/). Basically, the "rightMostSetBit" is the result of xorResult & -xorResult.

**Step 3:** We have found the bit at which the 2 numbers are different ("rightMostSetBit"). All the numbers can be divided into two groups: 
+ the 1st group consisting of all numbers whose bits at "rightMostSetBit" is 0, 
+ the 2nd group consisting of all numbers whose bits at "rightMostSetBit" is 1.

by XoRing all numbers in the first group, we can get the first number.
by XoRing all numbers in the second group, we can get the second number.

*Again, the order is not important in this problem.*

**Time: O(n), Space: O(1)**
```
func singleNumber(_ nums: [Int]) -> [Int] {
	// Step 1
	let xorResult = nums.reduce(0, ^)

	// Step 2
	let rightMostSetBit = xorResult & -xorResult

	// Step 3
	var result = [0, 0]
	for num in nums {
		if num & rightMostSetBit == 0 {
			result[0] ^= num
		} else {
			result[1] ^= num
		}
	}

	return result
}
```