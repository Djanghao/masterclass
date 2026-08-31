# Easy GoLang solutions O(log(n))

**Author:** sdimon13
**Votes:** 5
**Link:** [https://leetcode.com/problems/first-bad-version/solutions/3524967/](https://leetcode.com/problems/first-bad-version/solutions/3524967/)

---

# Intuition
The problem is asking for the first bad version in a sequence of versions. The basic intuition behind this problem is to use a binary search to find the first bad version. We are given a helper method **isBadVersion** which can check whether a version is bad or not.

# Approach
1. Initialize two pointers: left at 1 and right at n.
2. Perform a binary search. In each iteration, we calculate the middle element mid and check if it's a bad version using the isBadVersion method.
3. If the mid is a bad version, we know all versions after it are also bad, so we set right to mid. If it's not a bad version, we know all versions before it are also good, so we set left to mid + 1 
4. We keep shrinking the range until left is equal to right, at which point we've found the first bad version.

# Complexity
- Time complexity:
O(logn), because in each step we reduce the number of versions we are looking at by half.

- Space complexity:
O(1), because we only use a constant amount of space to store our variables.

# Code
```
/** 
 * Forward declaration of isBadVersion API.
 * @param   version   your guess about first bad version
 * @return 	 	      true if current version is bad 
 *			          false if current version is good
 * func isBadVersion(version int) bool;
 */

func firstBadVersion(n int) int {
	left, right := 1, n

	for left < right {
		mid := left + (right-left)/2
		if isBadVersion(mid) {
			right = mid
		} else {
			left = mid + 1
		}
	}

	return left
}
```
