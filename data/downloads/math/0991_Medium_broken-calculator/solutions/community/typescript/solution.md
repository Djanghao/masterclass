# Typescript || Greedy

**Author:** onifs10
**Votes:** 0
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/3110977/](https://leetcode.com/problems/broken-calculator/solutions/3110977/)

---

# Intuition
Follow the steps given in the problem, but start from the target and backtrack to startValue

backwards operation
- divide by 2
- add 1

# Approach
to get minimum operations from the target, we have to divide by 2 anytime that is possible, else we add 1

# Complexity
- Time complexity:
 $$O(log_2(n))$$

- Space complexity:
$$O(1)$$

# Code
```
function brokenCalc(startValue: number, target: number): number {
    let count = 0
    while (target > startValue){
        if ((target % 2) == 0){
            target  = target / 2
        }else{
            target += 1
        }
        count++
    }
    return count + (startValue - target)
};
```