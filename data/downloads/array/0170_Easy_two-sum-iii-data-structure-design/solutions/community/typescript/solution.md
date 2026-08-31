# Easy solution: catch here is if the complement is same its difficult to check the pairs

**Author:** subramanya4shenoy
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5874485/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/5874485/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
class TwoSum {
    public numbers;
    public countMap;
    constructor() {
        this.numbers = new Set(); 
        this.countMap = new Map(); 
    }

    add(number) {
        this.numbers.add(number);
        this.countMap.set(number, (this.countMap.get(number) || 0) + 1);
    }

    find(value) {
        for (let num of this.numbers) {
            let complement = value - num;

            if (this.numbers.has(complement)) {
                if (complement === num) {
                    if (this.countMap.get(num) > 1) {
                        return true; 
                    }
                } else {
                    return true; 
                }
            }
        }
        return false;
    }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
```