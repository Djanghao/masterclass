# Short JavaScript Solution Using a Set Object

**Author:** sronin
**Votes:** 8
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/1982697/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/1982697/)

---

```
const intersection = nums => {
    if (nums.length === 1) return nums[0].sort((a, b) => a - b)
	
    let initSet = new Set(nums[0]) //Initial Set 

    for (let i = 1; i < nums.length; i++) {
        initSet = new Set([...nums[i]].filter(x => initSet.has(x)))
    }
	
    return Array.from(initSet).sort((a, b) => a - b)
};
```