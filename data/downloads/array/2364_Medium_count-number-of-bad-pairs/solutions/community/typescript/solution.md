# Typescript | O(n) | Explained | 3 key ideas

**Author:** tohasan
**Votes:** 7
**Link:** [https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2389500/](https://leetcode.com/problems/count-number-of-bad-pairs/solutions/2389500/)

---

**3 key ideas**

We have 3 key ideas here.

1. Invert the task (invert the main condition we need to check). 
	`Total number of pairs = Good pairs count + Bad pairs count`
	i.e. `Bad pairs count = Total number of pairs - Good pairs count`
	so instead of checking `!=` we can check `==` if we invert the task:
	`j - i == nums[j] - nums[i]`.
	
2. Keep an index and the value for the index on the same side of the equation. 
	Originally, we have: `j - i == nums[j] - nums[i]`. 
	However it creates a problem to calculate the difference on each step because it requires we have value from the previous step. 
	If we rewrite the condition this way: `i - nums[i] == j - nums[j]`, 
	on each `i-th` step we can canculate the difference because we have both variables (index and value) for that.

3. Next step gives us the valid condition `i < j` automatically, because `i < (i + 1)`, so for each next index if we calculate and store value for the difference `i - nums[i]`, we can check whether we have such differences already and how much. If we have, we increase the number of good pairs.

**How to calculate Total number of pairs**. 
For instance, we have an array of size 4 (n = 4). In this case for each next index we have the following pairs:
```
j  prev indexes
0
1  0 - pairs [1, 0], i.e. count = 1
2  0 1 - pairs [2, 0], [2, 1], i.e. count = 2
3  0 1 2 - pairs [3, 0], [3, 1], [3, 2], i.e. count = 3
```
We can see that `index == number of pairs` and `total = 0 + 1 + 2 + 3`, i.e. we have an arithmetic progression with the step +1. The sum of arithmetic progression: `sum = N * (a0 + aN) / 2`. In our case: `total = n * (0 + n - 1) / 2 = n * (n - 1) / 2`.

**Solution**:

```
function countBadPairs(nums: number[]): number {
    return countTotal(nums) - countGoodPairs(nums);
}

function countGoodPairs(nums: number[]): number {
    const map = new Map<Difference, Count>();
    let goodPairsCount = 0;
    for (let i = 0; i < nums.length; i++) {
        const diff = i - nums[i];
        let count = map.get(diff) || 0;
        goodPairsCount += count;
        map.set(diff, count + 1);
    }
    return goodPairsCount;
}

function countTotal(nums: number[]): number {
    const n = nums.length;
    return n * (n - 1) / 2;
}

type Difference = number;
type Count = number;
```