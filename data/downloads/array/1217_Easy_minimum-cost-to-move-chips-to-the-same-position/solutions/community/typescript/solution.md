# Solution and explaination

**Author:** FsnS0qO14U
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5474915/](https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position/solutions/5474915/)

---

# Intuition
Count the number of even and odd in the array of numbers. Return the min value between the numbers of even and odd.

[1, 2, 3] => Even: 1, Odd: 2 => Return the number of even numbers
[2, 2, 2, 3, 3] => Even: 3, Odd: 2 => Return the number of odd numbers
[1, 10000000] => Even: 1, Odd: 1 => Return the number of even numbers or odd numbers
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minCostToMoveChips(position: number[]): number {
    let evenCount: number = 0;
    let oddCount: number = 0;

    for (let i: number = 0; i < position.length; i++) {
        if (position[i] % 2 === 0) evenCount++;
        else oddCount++;
    }

    return Math.min(evenCount, oddCount);
};
```