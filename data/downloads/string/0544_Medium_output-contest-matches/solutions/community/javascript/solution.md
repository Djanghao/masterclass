# Javascript, 54ms, beats 100%

**Author:** willm3003
**Votes:** 0
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/3701810/](https://leetcode.com/problems/output-contest-matches/solutions/3701810/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Intuitively, we can imagine taking the start and end item in an array, pairing them into a two-sized tuple, and pushing that tuple to the start of a new array. We can then move our start and end inwards until they cross over. 

If we repeat this for each round on the previous round's array, we'll generate our final contest matching. We should start with an array of numbers in the range [1, n].

Now that we've got the correct structure, producing the final string is simply a case of serializing the array, and replacing square brackets with rounded ones.
 
# Approach
<!-- Describe your approach to solving the problem. -->
Since we're always selecting the stronger team against the weaker team, we know the algorithm for pair selection at each round will be the same. 

We can take two pointers, one at each end of the array, and move them toward the middle until they cross over. Doing this at any round on the previous round's set of pairs will produce this round's pairings.

Once you've generated your final array as above, you can use `JSON.stringify` to serialize your array, and then `replaceAll` to replace the `[]` with `()`.

# Complexity
- Time complexity:

O(n). Given that we perform string replacement at the end, we perform linear scans over the array to replace square brackets with rounded ones. The length of the final contest matching scales linearly with n.

<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:

We're storing the number of initial pairs (progressively reordered as the rounds go one), which is a function of n. 

O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {string}
 */
var findContestMatch = function(n) {
    let rounds = Math.log2(n);
    let pairs = Array.from({length: n}).fill(0).map((_, idx) => idx + 1);

    while(rounds > 1) {
        pairs = genPairs(pairs)
        rounds--;
    }

    const string = JSON.stringify(pairs)
    return string.replaceAll('[', '(').replaceAll(']', ')')

    function genPairs(pairs) {
        const newPairs = [];
        for(let i = 0; i < pairs.length / 2; i++) {
            newPairs.push([pairs[i], pairs[pairs.length - i - 1]])
        }
        return newPairs;
    }


};



```