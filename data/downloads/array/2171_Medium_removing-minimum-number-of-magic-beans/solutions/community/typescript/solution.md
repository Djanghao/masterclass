# Javascript | Typescript solution O(nlogn)

**Author:** neha150498
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/4895449/](https://leetcode.com/problems/removing-minimum-number-of-magic-beans/solutions/4895449/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
To find out how many beans to keep for certain position `i` in the array

# Approach
<!-- Describe your approach to solving the problem. -->
If we find out the beans to keep and sum of all beans then 

`BEANS_REMOVED = TOTAL_BEANS - BEANS_TO_KEEP`

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Sorting the beans array : O(nlogn)
Traversing the array : O(n) * O(1) {constant operation inside loop}

`Total - O(nlogn) + O(n) = O(nlogn)`

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
Since we haven't used any extra space - `O(1)` 

# Code
```
function minimumRemoval(beans: number[]): number {
    // Sort beans to know after each position how many beans to remove
    beans.sort((a,b)=>a-b); // -- O(nlogn)

    let len = beans.length;
    let minBeansToRemove = 0;
    // Total Beans
    let sum = beans.reduce((total, current)=> total+current);

    // 1. Traversing through array 
    // 2. Finding out how many beans will be there if we're at current index i
    // 3. All the beans before i will be removed 
    // 4. From ith index each position should have exact of i beans
    // 5. we calculate maximum beans to keep 
    // 6. and remove them from total then we'll have count of beans to remove
    for(let i=0; i<beans.length ; i++){
        minBeansToRemove = Math.max(minBeansToRemove, beans[i]*(len-i));
    }

    return sum-minBeansToRemove;
};
```