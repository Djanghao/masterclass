# Go Solution Using Euclidean Algorithm O(log N)

**Author:** jhonwar
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-point-is-reachable/solutions/3240709/](https://leetcode.com/problems/check-if-point-is-reachable/solutions/3240709/)

---

# Intuition
The function takes in two integers targetX and targetY that represent the coordinates of a point in a 2D plane. The function returns a boolean value that indicates whether it's possible to reach the point from the origin by only moving along the x and y axes in integer increments.

# Approach
The function first finds the greatest common divisor (GCD) of targetX and targetY using the Euclidean algorithm. This algorithm works by repeatedly subtracting the smaller number from the larger number until one of the numbers becomes zero, at which point the other number is the GCD.

After finding the GCD, the function checks whether it's a power of two by performing a bitwise AND operation between the GCD and the GCD minus one. If the result is zero, then the GCD is a power of two, which means that the point is reachable from the origin. Otherwise, the GCD is not a power of two, which means that the point is not reachable from the origin.

The reason this works is that if the GCD is a power of two, then there exists some integer n such that targetX/n and targetY/n are both integers. This means that the point (targetX, targetY) can be reached by taking n steps along the x axis and n steps along the y axis, since each step will move the point by an integer amount along each axis. If the GCD is not a power of two, then it's not possible to find an n that makes both targetX/n and targetY/n integers, so the point is not reachable from the origin.

# Complexity
- Time complexity:
O(log N)

- Space complexity:
O(1)

# Code
```
func isReachable(targetX int, targetY int) bool {
	// Find greatest common divisor (GCD) using the Euclidean algorithm
	for targetY != 0 {
		targetX, targetY = targetY, targetX%targetY
	}

	// Check if GCD is a power of 2
	return targetX & (targetX - 1) == 0
}

```