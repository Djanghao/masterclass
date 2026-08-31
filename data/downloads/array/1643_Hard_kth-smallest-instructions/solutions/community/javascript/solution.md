# Kth Smallest Instructions

**Author:** Sam_Neamah
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-instructions/solutions/4748726/](https://leetcode.com/problems/kth-smallest-instructions/solutions/4748726/)

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
```
/**
 * @param {number[]} destination
 * @param {number} k
 * @return {string}
 */
function kthSmallestPath(destination, k) {
    let hCount = destination[1];
    let vCount = destination[0];
    let result = "";

    // Calculate the number of paths that start with 'H' and 'V' respectively
    const pathsStartingWithH = binomialCoefficient(hCount + vCount - 1, vCount);
    const pathsStartingWithV = binomialCoefficient(hCount + vCount - 1, hCount);

    // Determine whether kth smallest path starts with 'H' or 'V'
    if (k <= pathsStartingWithH) {
        result += 'H';
        hCount--;
    } else {
        result += 'V';
        vCount--;
        k -= pathsStartingWithH;
    }

    // Calculate the subsequent characters of the kth smallest path
    for (let i = 1; i < destination[0] + destination[1]; i++) {
        const pathsStartingHereWithH = binomialCoefficient(hCount + vCount - 1, vCount);
        if (k <= pathsStartingHereWithH) {
            result += 'H';
            hCount--;
        } else {
            result += 'V';
            vCount--;
            k -= pathsStartingHereWithH;
        }
    }

    return result;
}

// Function to calculate binomial coefficient (n choose k)
function binomialCoefficient(n, k) {
    let result = 1;
    for (let i = 1; i <= k; i++) {
        result *= (n - i + 1) / i;
    }
    return Math.round(result);
}
```