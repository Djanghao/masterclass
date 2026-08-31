# TypeScript O(N)

**Author:** adampjl
**Votes:** 1
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/4584543/](https://leetcode.com/problems/house-robber-ii/solutions/4584543/)

---

# Approach
Do House Robber 1 first.

My first thought was having logic to cover the edge case that you can't rob the first and second house. But... I sat there are thought it out for a few minutes and it would take a lot of if statements complexity to handle this case. Since we'd somehow need knowledge of what houses we robbed at certain points.

Then I realized, well we could remove the need to code around any edge cases if we just remove the possibility that you could rob the first and the last house in one run. To do this, use the solution for House Robber 1.
 Do one rob run that is "first house biased", where you stop before the last house. Then do another rob run that is "last house biased", where you start after the first house. Then see which run netted you more money.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```

function robStreet(nums: number[], start: number, end: number): number {
    let first: number = nums[start];
    let second: number = Math.max(first, nums[start + 1]);
    let maxProfit: number = second;

    for (let i = start + 2; i < end; i++) {
        const profitIfRobbedHouse: number = first + nums[i];
        maxProfit = Math.max(profitIfRobbedHouse, maxProfit);
        first = second;
        second = maxProfit;
    }

    return maxProfit;
}

function rob(nums: number[]): number {
    if (nums.length === 1)
        return nums[0];
    if (nums.length === 2)
        return Math.max(nums[0], nums[1]);

    const firstHouseBias: number = robStreet(nums, 0, nums.length - 1);
    const lastHouseBias: number = robStreet(nums, 1, nums.length);

    return Math.max(firstHouseBias, lastHouseBias);
};




```