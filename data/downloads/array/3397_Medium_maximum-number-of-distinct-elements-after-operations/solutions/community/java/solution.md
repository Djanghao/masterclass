# ✅  Java Solution | (n log(n))

**Author:** Harsh__005
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6172703/](https://leetcode.com/problems/maximum-number-of-distinct-elements-after-operations/solutions/6172703/)

---

## **CODE**
```Java []
public int maxDistinctElements(int[] nums, int k) {
	Arrays.sort(nums);
	int next = nums[0]-k+1, n = nums.length, ans = 1;
	for(int i=1; i<n; i++) {
		if(nums[i]+k < next) continue;
		next = Math.max(next, nums[i]-k);
		ans++;
		next++;
	}
	return ans;
}
```