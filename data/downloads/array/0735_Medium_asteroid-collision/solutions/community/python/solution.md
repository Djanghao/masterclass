# Python 3 | Stack Simply Clean O(N) | Explanation

**Author:** idontknoooo
**Votes:** 99
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/904475/](https://leetcode.com/problems/asteroid-collision/solutions/904475/)

---

### Explanation
- Intuition, when adding a new asteroid, there are 2 situation (collision or no collsion)
	- Collision (left meaning previous asteroid, right meaning current asteroid)
		- Left destroyed right, e.g. `3, -1`
		- Right destroyed left, e.g. `1, -3`
		- Both destroyed, e.g. `2, -2`
	- No collision
- It seems like scenarios can be analyzed linearly with some condition check on neighbors, intuitively, `stack` is a good tool to use
- So let's focus on 3 collision situation, for each new `right` asteroid
	- If left destroyed right, then no more to destroy, break
	- If both destroyed, no more to destroy, break
	- If right destroyed left, then there is a chance it could destroy more on the left, thus
		- pop out left from stack, repeat check again
	- If stack becomes empty, meaning right destroyed all left asteroids, append right to stack
- Time Complexity: `O(N)`
### Implementation
<iframe src="https://leetcode.com/playground/ee8uH7fr/shared" frameBorder="0" width="500" height="250"></iframe>