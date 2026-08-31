# Try to distribute coins by 8 coins on each step

**Author:** anton-gorbikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/4817333/](https://leetcode.com/problems/distribute-money-to-maximum-children/solutions/4817333/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Try to give 8 coins to children 1 by 1 starting with zero. If the number of children is greater than the number of coins - it's an incorrect distribution. If only one child left and the number of coins equals 4 - it's an incorrect distribution. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$ where $$n$$ is a number of children

# Code
```
function distMoney(money: number, children: number): number {
    let result = -1;

    for (let i = 0; i <= Math.floor(money / 8) && i <= children; ++i) {
        let rest = money - i * 8;
        let restC = children - i;

        if (rest >= restC && !(rest === 4 && restC === 1) && !(rest > 0 && restC === 0)) {
            result = i;
        }
    }

    return result;
};
```