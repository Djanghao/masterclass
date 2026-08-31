# Time O(N) && Space O(1)

**Author:** youssefhesham28
**Votes:** 4
**Link:** [https://leetcode.com/problems/house-robber/solutions/4605837/](https://leetcode.com/problems/house-robber/solutions/4605837/)

---

# Complexity
- Time complexity:
- O(N)
- Space complexity:
 O(1)

# Code
```
function rob(nums: number[]): number {
    //[robber1,robber2,num]
    let robber1 = 0;
    let robber2 = 0;
    for (let num of nums) {
        let temp = Math.max(robber1 + num, robber2)
        robber1 = robber2;
        robber2 = temp;
    }
    return robber2;
};
```