# ✅ Faster Solution || HashMap || Typescript || Easy to understand

**Author:** viniciusteixeiradias
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/2819242/](https://leetcode.com/problems/largest-unique-number/solutions/2819242/)

---

```
const largestUniqueNumber = (nums: number[]): number => {
    const hashMap = new Map<number, number>();
    
    for (const num of nums) {
        hashMap.set(num, (hashMap.get(num) || 0) + 1)
    }
    
    let maxVal = -1;
    for (const [key, value] of hashMap) {
        if (value === 1) {
            maxVal = Math.max(maxVal, key);
        }   
    }
    
    return maxVal;
};
```

Let me know in comments if you have any doubts. I will be happy to answer.
Please upvote if you found the solution useful.