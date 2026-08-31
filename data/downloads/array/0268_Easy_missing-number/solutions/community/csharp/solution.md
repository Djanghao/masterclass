# Bitwise solution with XOR and no summing - Explained

**Author:** anikit
**Votes:** 22
**Link:** [https://leetcode.com/problems/missing-number/solutions/2082716/](https://leetcode.com/problems/missing-number/solutions/2082716/)

---

**Solution**
```csharp
public int MissingNumber(int[] nums)
{
	int x = nums.Length;
	
	for (int i = 0; i < nums.Length; i++)
	{
		x ^= i ^ nums[i];
	}
	
	return x;
}
```

Same logic, but with LINQ:
```csharp
public int MissingNumber(int[] nums)
	=> Enumerable.Range(0, nums.Length).Aggregate(nums.Length, (x, i) => x ^ i ^ nums[i]);
```

**Explanation**
1. XOR (designated by `^`) has a nice property: `(a ^ b) ^ b = a`. Moreover, the order of xoring does not matter: `(a ^ c) ^ b = (a ^ b) ^ c`. Also, `a ^ a = 0` and `0 ^ a = a`.
2. We know that `nums` contains all numbers between `0` and `n` except the one that we want to find. Now, let's xor `x` with each number in `nums` and at the same time "de-xor" `x` with the loop variable `i`. Again, we don't care about the order of xoring. After the loop, we have `x` xored by every number in `[0, n]` and by every number in `nums`. Thus, `x` is equal to the missing number.

**Example**
Let's say, `n = 5`, and the missing number is `3`.
The array `nums` contains `{0, 1, 2, 4, 5}`
The iteration variable will run through these values: `{0, 1, 2, 3, 4}` plus we initialized `x` with `5`.
The matching numbers cancel each other out and we return the one number that has no match, i.e. `3`.