# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5627418/](https://leetcode.com/problems/how-many-apples-can-you-put-into-the-basket/solutions/5627418/)

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
```Java []
public int maxNumberOfApples(int[] weight) {
    // Sort the weights array to try and add lighter apples first
    Arrays.sort(weight);
    
    int totalWeight = 0;
    int count = 0;
    
    // Iterate through the sorted weights
    for (int i = 0; i < weight.length; i++) {
        totalWeight += weight[i];
        if (totalWeight > 5000) {
            break;
        }
        count++;
    }
    
    return count;
}
```
```Javascript []
var maxNumberOfApples = function(weight) {
    // Sort the array to prioritize lighter apples
    weight.sort((a, b) => a - b);

    let totalWeight = 0;
    let count = 0;

    // Iterate through the sorted weights
    for (let i = 0; i < weight.length; i++) {
        totalWeight += weight[i];
        if (totalWeight > 5000) {
            break;
        }
        count++;
    }

    return count;
};
```
```Typescript []
function maxNumberOfApples(weight: number[]): number {
    // Sort the array to prioritize lighter apples
    weight.sort((a, b) => a - b);

    let totalWeight = 0;
    let count = 0;

    // Iterate through the sorted weights
    for (let i = 0; i < weight.length; i++) {
        totalWeight += weight[i];
        if (totalWeight > 5000) {
            break;
        }
        count++;
    }

    return count;
};
```