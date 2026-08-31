# Minimize Range After Adjusting by K

**Author:** traezeeofor
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/5196023/](https://leetcode.com/problems/smallest-range-i/solutions/5196023/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I overthought this, and I knew I was doing so, knew I was missing something that AI would decipher easily. Only got the first "return 0" part correctly. Glad to see how AI eventually solved it.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function smallestRangeI(nums: number[], k: number): number {
    if(nums.length === 1){
      return 0;
    }

    const minN = Math.min(...nums);
    const maxN = Math.max(...nums);

    const minN2 = minN + k;
    const maxN2 = maxN - k;

    return Math.max(0, maxN2 - minN2);
};
```