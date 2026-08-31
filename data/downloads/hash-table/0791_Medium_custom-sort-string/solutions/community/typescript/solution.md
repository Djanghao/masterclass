# HashSet Solution (with step by step solution)

**Author:** alekseyvy
**Votes:** 3
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/4115992/](https://leetcode.com/problems/custom-sort-string/solutions/4115992/)

---

# Intuition
we use HashSet to solve this problem
# Approach
we declare hash set to store chars so after we sort by order we would have O(1) access to check if we already put current char into sorted string, we iterate over order and take each order and then find all chars that are equals in s string to put in sorted string in right ordr, after that we loop thru s string last time to find all chars that are remained in s string.
# Complexity
- Time complexity:
O(m * n) -> we iterate s times over order to sort each char in corresponding order
- Space complexity:
O(n) -> we use hash set to store sorted chars to have O(1) has method to check if it's already in sorted string and sorted string to collect our result
# Code
```
function customSortString(order: string, s: string): string {
    // declare sorted string
    let sorted = "";
    // declare hash set 
    const hash = new Set<string>()
    // iterate over order:
    for(let l = 0; l < order.length; l++) {
        // get currend order
        const currOrder = order[l];
        // iterate over s string
        for(let r = 0; r < s.length; r++) {
            // get current char
            const char = s[r];
            // if s char equals to current order:
            if(char === currOrder) {
                // put into hash set
                hash.add(char)
                // add to sorted string
                sorted += char;
            }
        }
    }
    // iterate over s string:
    for(let i = 0; i < s.length; i++) {
        // if char not in hash set then add it to sorted string
        if(!hash.has(s[i])) sorted += s[i]
    }
    // return result
    return sorted
};
```