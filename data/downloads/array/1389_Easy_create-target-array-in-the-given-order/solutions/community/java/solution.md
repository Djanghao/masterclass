# JAVA | Runtime: 1 ms | Simple solution

**Author:** nrai90
**Votes:** 54
**Link:** [https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1034668/](https://leetcode.com/problems/create-target-array-in-the-given-order/solutions/1034668/)

---

```
public int[] createTargetArray(int[] nums, int[] index) {
     int[] target = new int[nums.length];
     int i = 0, k = 0;
	 while (i < index.length) {
		for (k = target.length - 1; k > index[i]; k--)
			target[k] = target[k - 1];
		target[index[i]] = nums[i];
		i++;
	}
    return target;
}
```
P.S. Do upvote if this is an easy to understand solution. :)