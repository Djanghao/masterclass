# 🔥 Go Solution | Beat 100% | From Set Theory to Bit Operation | With Explanation 🔥

**Author:** ConstantineJin
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/5247539/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/5247539/)

---

# Intuition
Performing a bitwise AND operation on two numbers is equivalent to finding the intersection of the sets corresponding to their binary forms.

# Approach
First, let's consider the brute force method. In the outer loop, traverse `arr` from left to right. In the inner loop, traverse `arr` from the current element backwards, and use `arr[j]` to store the result of performing the AND operation on all elements from `arr[j]` to `arr[i]`. This way, each time we enter the inner loop, we only need to perform one AND operation between `arr[j]` and the element `arr[i]`. Obviously, the time complexity of this approach is $O(n^2)$.

Next, let's try to optimize this algorithm. Based on set theory, we have the following three conclusions:

1. The intersection of two sets is always no larger than either of the two sets.
2. If $A \\subseteq B$ and $B \\subseteq C$, then $A \\subseteq C$.
3. If $A \\subseteq B$, then $A \\bigcap B = A$ and $A \\bigcup B = B$.

These conclusions can be extended to bitwise operations. If in the inner loop, `arr[j] & arr[i] == arr[j]` (or `arr[j] | arr[i] == arr[i]`) indicates that `arr[i]` is a superset of `arr[j]`. Additionally, since `arr[j]` is a superset of every `arr[k]` to its left where $0<=k<=j$, the rest part of the inner loop will not change the element value, allowing us to exit the inner loop immediately.

Note that onle one single element may also be a valid subarray.

# Complexity
- Time complexity: $$O(n\	ext{log}U)$$, $U=log_2(10^6)$

- Space complexity: $$O(1)$$

# Code
```
func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func closestToTarget(arr []int, target int) int {
	ans := math.MaxInt
	for i, x := range arr {
		ans = min(ans, abs(x-target))
		for j := i - 1; j >= 0 && arr[j]|x != x; j-- {
			arr[j] &= x
			ans = min(ans, abs(arr[j]-target))
		}
	}
	return ans
}
```