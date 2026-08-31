# [TypeScript] - O(1) space O(n) time complexity - beats 100%

**Author:** tgldr
**Votes:** 4
**Link:** [https://leetcode.com/problems/gas-station/solutions/3011296/](https://leetcode.com/problems/gas-station/solutions/3011296/)

---


# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function canCompleteCircuit(gas: number[], cost: number[]): number {
    let total:number = 0, ans: number = 0, tank: number = 0;

    for(let i:number=0; i<gas.length; i++) {
        tank += gas[i] - cost[i];
        total += gas[i] - cost[i];

        if(tank < 0) {
            tank = 0;
            ans = i+1;
        }
    }

    if(total < 0) return -1;

    return ans;
};
```