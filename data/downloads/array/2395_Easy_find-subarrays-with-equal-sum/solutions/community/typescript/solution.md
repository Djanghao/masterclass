# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5479103/](https://leetcode.com/problems/find-subarrays-with-equal-sum/solutions/5479103/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Java []
public boolean findSubarrays(int[] nums) {
    HashSet<Integer> seenSums = new HashSet<>();

    for (int i = 0; i < nums.length - 1; i++) {
        int sum = nums[i] + nums[i + 1];
        if (seenSums.contains(sum)) {
            return true;
        }
        seenSums.add(sum);
    }

    return false;
}
```
```Javascript []
var findSubarrays = function(nums) {
    let seenSums = new Set();
    
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (seenSums.has(sum)) {
            return true;
        }
        seenSums.add(sum);
    }
    
    return false;
};
```
```Typescript []
function findSubarrays(nums: number[]): boolean {
    let seenSums: Set<number> = new Set();

    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i] + nums[i + 1];
        if (seenSums.has(sum)) {
            return true;
        }
        seenSums.add(sum);
    }

    return false;
};
```