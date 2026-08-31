# ✅ | Typescript O(n) with Hash Map |

**Author:** web-dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/4694435/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/4694435/)

---

# Intuition
Iterate from a to b, and check that every number has unique digits using a counting srructure like an arry / hash map

# Approach
for every number in `[a,b]`, we create a map where we hold the count of apparitions of digits. 

For example: `x = 431` => HASHMAP will be `{0:0,1:1,2:0,3:1,4:1,5:0,6:0,7:0,8:0,9:0}`

we then use a `for` loop to go through all the digits `0...9` and check that their value in the map is exactly 1. otherwise the digit is not unique.

# Complexity
- Time complexity: O(n)

- Space complexity: O(b-a*10)
For every number between a and b, we use a map structure of length 10 (number of base 10 digits)

# Code
```
const hasUniqueDigits = (x: number) => {
    let map = new Map();
    //initialize all map digits with 0
    for (let i = 0; i <= 9; i++)map.set(i, 0);
    //add the digits count to the map
    while (x) {
        map.set(x % 10, map.get(x % 10) + 1);
        x = Math.floor(x / 10);
    }
    //check if it has unique digits (all counts in the map are 1)
    for (let i = 0; i <= 9; i++) if (map.get(i) > 1) return false;
    return true;
}

function numberCount(a: number, b: number): number {
    let count = 0;

    for (let i = a; i <= b; i++) {
        if (hasUniqueDigits(i)) count++;
    }

    return count;
};
```