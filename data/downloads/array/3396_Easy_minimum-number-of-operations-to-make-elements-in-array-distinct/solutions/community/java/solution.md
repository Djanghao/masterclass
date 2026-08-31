# ✅  Java Solution | HashMap

**Author:** Harsh__005
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6172741/](https://leetcode.com/problems/minimum-number-of-operations-to-make-elements-in-array-distinct/solutions/6172741/)

---

## **CODE**
```Java []
public int minimumOperations(int[] nums) {
	Map<Integer, Integer> map = new HashMap<>();
	int dupct=0;
	for(int num : nums) {
		map.put(num, map.getOrDefault(num, 0) + 1);
		if(map.get(num) == 2) dupct++;
	}
	
	int n = nums.length, i=0, op = 0;
	while(dupct > 0) {
		op++;
		int limit = Math.min(n, i+3);
		for(; i<limit; i++) {
			int val = map.get(nums[i]);
			if(val == 2) {
				dupct--;
			}
			map.put(nums[i], val-1);
		}
	}

	return op;
}
```