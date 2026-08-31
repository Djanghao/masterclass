# Typescript Solution

**Author:** patbeqo
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-distances/solutions/4808005/](https://leetcode.com/problems/sum-of-distances/solutions/4808005/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
1. Store the indices of re occurrening elements.

2. Compute the Left Sum and Right Sum for the indices. Use this to compute the sum of distances.

    |a-b| + |a-c| + |a-d| = (b+c+d) \u2212 3a,  where a < b,c,d 
    b+c+d = rightSum

    |a-b| + |a-c| + |a-d| = 3a \u2212 (b+c+d),  where a > b,c,d
    b+c+d = leftSum

    O(k) to compute the distances for an element, where k is the number of occurrences. Loop the indices once for left sum, once for right sum, and one final time to compute all the distances using the formulas above.

# Code
```
function distance(nums: number[]): number[] {
    const map = new Map<number, number[]>();

    for(let i = 0; i < nums.length; i++){
        if(map.has(nums[i])){
            map.get(nums[i]).push(i)
        }else{
            map.set(nums[i], [i])
        }
    }

    const result = new Array(nums.length).fill(0)

    for (const indices of map.values()){
        if(indices.length == 1) continue;

        const leftSum = [0]
        const rightSum = [0]

        for(let i = 0; i < indices.length - 1; i++){
            leftSum.push(leftSum[leftSum.length - 1] + indices[i])
        }

        for(let i = indices.length - 1; i > 0; i--){
            rightSum.unshift(rightSum[0] + indices[i])
        }

        for(let i = 0; i < indices.length; i++){
            const greaterThanPart = rightSum[i] - (indices[i] * (indices.length - i - 1))
            const lessThanPart = (indices[i] * i) - leftSum[i];
            result[indices[i]] = greaterThanPart + lessThanPart;
        }

    }

    return result;
};
```