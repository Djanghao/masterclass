# Typescript solution O(n) 65ms

**Author:** timlauffs
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/4196428/](https://leetcode.com/problems/number-of-ways-to-split-a-string/solutions/4196428/)

---

# Intuition
Typescript solution O(n):
    -> get array of position of 1s
    -> check edge cases
    -> calculate num ways s can be split given position of ones

# Complexity
- Time complexity:
O(n)

# Code
```
function numWays(s: string): number {

    let arr_index_1 = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '1') {
            arr_index_1.push(i)
        }
    }

    if (arr_index_1.length % 3 !== 0) return 0;
    if (arr_index_1.length == 0){
        let sum = 0;
        for (let i = 1; i < s.length-1; i++) {
            sum += i;
        }
        return sum % (10**9 + 7); 
    }

    const index = arr_index_1.length/3
    const a = arr_index_1[index] - arr_index_1[index-1]
    const b = arr_index_1[arr_index_1.length-index] - arr_index_1[arr_index_1.length-index-1]

    return (a * b) % (10**9 + 7)
};
```