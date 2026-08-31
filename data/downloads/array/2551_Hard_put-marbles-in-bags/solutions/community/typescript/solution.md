# Easily explained 🔥 with example || Beats 100%

**Author:** Atanu_200
**Votes:** 1
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3735309/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3735309/)

---

# Intuition
The code aims to find the sum of differences between the highest k-1 and lowest k-1 pair costs among the given weights. The pair cost is calculated by summing the weights of consecutive marbles. The goal is to determine the minimum cost required to put k marbles together.

# Approach with easy example
Let's consider an example to understand the approach better. Suppose we have an array of weights [1, 3, 2, 5, 4] and k = 3.
1. Calculate pair costs:
    - Start with the first weight and add it to the next weight: 1 + 3 = 4
    - Move to the next pair: 3 + 2 = 5
    - Continue this process for all pairs: [4, 5, 7, 9]
2. Sort the pair costs in ascending order: [4, 5, 7, 9]
3. Calculate the sum of differences for the highest k-1 and lowest k-1 pair costs:
    - For k = 3, we need to consider the top 2 and bottom 2 pair costs.
    - The sum of differences would be (9 - 4) + (7 - 5) = 7.
4. Return the result: 7


# Complexity
- Time complexity: $$O(n log n + k)$$
    - The code involves iterating through the given weights array once to calculate the pair costs, which takes O(n) time, where n is the length of the weights array.
    - Sorting the pair costs array takes O(n log n) time.
Finally, calculating the sum of differences requires iterating k-1 times, resulting in O(k) time.
    - Therefore, the overall time complexity is O(n log n + k).

- Space complexity: $$O(n)$$
    - The space complexity is O(n) since the code uses an additional array, pairCosts, to store the pair costs.

![image.png](./images/0.png)


> IF YOU FOUND IT HELPFUL GIVE IT A `UPVOTE \u2B06` SO THAT OTHER PEOPLE ALSO CAN FIND IT EASILY
THANK YOU FOR YOUR TIME \u231A

# Javascript Code
```
/**
 * @param {number[]} weights
 * @param {number} k
 * @return {number}
 */
var putMarbles = function (weights, k) {
    let pairCosts = new Array(weights.length - 1);

    // store all the possible Pairs sum
    for (let i = 0; i < pairCosts.length; i++) {
        pairCosts[i] = weights[i] + weights[i + 1];
    }

    // ascending order sorting
    pairCosts.sort((a, b) => a - b);

    let ans = 0;
    // get the sum for all pairs differences
    for (let i = 0; i < k - 1; i++) {
        ans += pairCosts[pairCosts.length - 1 - i] - pairCosts[i];
    }

    return ans;
};
```

---

# Typescript Code
```
function putMarbles(weights: number[], k: number): number {
    let pairCosts: number[] = new Array(weights.length - 1);

    // store all the possible Pairs sum
    for (let i: number = 0; i < pairCosts.length; i++) {
        pairCosts[i] = weights[i] + weights[i + 1];
    }

    // ascending order sorting
    pairCosts.sort((a, b) => a - b);

    let ans: number = 0;
    // get the sum for all pairs differences
    for (let i: number = 0; i < k - 1; i++) {
        ans += pairCosts[pairCosts.length - 1 - i] - pairCosts[i];
    }

    return ans;
};
```
---

# Python Code
```
class Solution:
    def putMarbles(self, weights: List[int], k: int) -> int:
        # create an array of weights.length-1
        pairCosts = [0] * (len(weights)-1)
        
        # store all the possible Pairs sum
        for i in range(len(weights) - 1):
            pairCosts[i] = weights[i] + weights[i + 1]

        # ascending order sorting
        pairCosts.sort()

        ans = 0;
        # get the sum for all pairs differences
        for i in range(k - 1):
            ans += pairCosts[len(pairCosts) - 1 - i] - pairCosts[i]

        return ans
```