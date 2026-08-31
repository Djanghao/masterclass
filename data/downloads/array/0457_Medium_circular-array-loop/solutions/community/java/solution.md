# Java | Slow and Fast pointers | 3 progressive methods

**Author:** prashant404
**Votes:** 17
**Link:** [https://leetcode.com/problems/circular-array-loop/solutions/1354601/](https://leetcode.com/problems/circular-array-loop/solutions/1354601/)

---

**Method 1:** Floyd's Cycle Detection Algorithm. Fast and Slow pointers
>**T/S:** O(n\xB2)/O(1)
```
public boolean circularArrayLoop(int[] nums) {
	for (var i = 0; i < nums.length; i++) {
		var direction = Math.signum(nums[i]);
		var slow = i;
		var fast = i;

		do {
			slow = getNextIndex(nums, direction, slow);
			fast = getNextIndex(nums, direction, fast);

			if (fast != -1)
				fast = getNextIndex(nums, direction, fast);

		} while (slow != -1 && fast != -1 && slow != fast);

		if (slow != -1 && slow == fast)
			return true;
	}
	return false;
}

/**
* Math.signum(x) will return 1, -1, 0 depending on whether x is positive, negative or zero.
* value of currentDirection * direction can be:
* < 0, means that currentDirection and direction are of opposite signs, and thus opposite in nature, e.g. left/right, right/left
* > 0, means they're of the same sign, e.g. left/left, right/right
*  0, means at least one of them is zero. For this problem, its not a possibility to have 0 as direction
*/
private int getNextIndex(int[] nums, float direction, int i) {
	var currentDirection = Math.signum(nums[i]);

	if (currentDirection * direction < 0)
		return -1;

	var n = nums.length;
	var nextIndex = (i + nums[i]) % n;

	if (nextIndex < 0)
		nextIndex += n;

	return nextIndex == i ? -1 : nextIndex;
}
```

**Method 2:** Use a visited set. Each index will thus be evaluated for cycle just once.
>**T/S:** O(n)/O(n)
```
public boolean circularArrayLoop(int[] nums) {    
    var n = nums.length;
	var notCycles = new HashSet<Integer>(n); 
	
	for (var i = 0; i < n; i++) {
		var direction = Math.signum(nums[i]);
		var slow = i;
		var fast = i;

		do {
			slow = getNextIndex(nums, direction, slow);
			fast = getNextIndex(nums, direction, fast);
			if (fast != -1)
				fast = getNextIndex(nums, direction, fast);
			if (notCycles.contains(slow) || notCycles.contains(fast))
				break;
		} while (slow != -1 && fast != -1 && slow != fast);

		if (slow != -1 && slow == fast)
			return true;
		notCycles.add(i);
	}
	return false;
}
```

**Method 3:** Use input array for storing visited state. I think its O(n) but feel free to chime in.
>**T/S:** O(n)/O(1). Memory beats 98%
```
public boolean circularArrayLoop(int[] nums) {
	for (var i = 0; i < nums.length; i++) {
		var direction = Math.signum(nums[i]);
		var slow = i;
		var fast = i;

		do {
			slow = getNextIndex(nums, direction, slow);
			fast = getNextIndex(nums, direction, fast);
			if (fast != -1)
				fast = getNextIndex(nums, direction, fast);
			if (fast == -1 || nums[slow] == 0 || nums[fast] == 0)
				break;
		} while (slow != fast);

		if (slow != -1 && slow == fast) 
			return true;
		nums[i] = 0;
	}
	return false;
}
```
***Please upvote if this helps***