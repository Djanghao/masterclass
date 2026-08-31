# if else until death :)))

**Author:** uongsuadaubung
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-removal-game/solutions/6094038/](https://leetcode.com/problems/stone-removal-game/solutions/6094038/)

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
function canAliceWin(n: number): boolean {
    if (n < 10) return false; // 10
    else if (n < 19) return true; //9
    else if (n < 27) return false; //8
    else if (n < 34) return true; //7
    else if (n < 40) return false; //6
    else if (n < 45) return true; //5
    else if (n < 49) return false; //4
    else return true; //3

    // :))
    // let alice = false;
    // let stones = 10;

    // while (n >= stones) {
    //     n -= stones;
    //     stones--;
    //     alice = !alice;
    // };

    // return alice;
};
```