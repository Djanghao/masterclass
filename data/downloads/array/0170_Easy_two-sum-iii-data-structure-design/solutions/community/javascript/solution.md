# JavaScript easy to understand HashMap solution with ES6 Class Syntax

**Author:** ChaoWan_2021
**Votes:** 4
**Link:** [https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/545715/](https://leetcode.com/problems/two-sum-iii-data-structure-design/solutions/545715/)

---

```

class TwoSum {
    constructor() {
        this.map = new Map();
    }
    add(number) {
        this.map.set(number, this.map.get(number) + 1 || 1);
    }
    find(value) {
        for(const num of this.map.keys()) {
            const rest = value - num;
            if(rest === num) {
                if(this.map.get(num) > 1) return true;
                else continue;
            }
            else if(this.map.has(rest)) return true;
        }
        return false;
    }
}
```