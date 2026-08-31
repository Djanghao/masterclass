# 💯💯💯 Short, Easy, Clean and Effective solution [7 lines of code - HashSet]

**Author:** trungtrn
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282214/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5282214/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Sort the rewardValues in ascending order and then for loop, at each value we will for loop throw sum HashSet and if that value greater than current sum, then add new sum into a HashSet.
# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n^2)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
JavaScript
```javascript
function maxTotalReward(rewardValues) {
    rewardValues.sort((a,b) => a-b);
    const sum = new Set();
    for (let num of rewardValues) {
        for (let pre of [...sum]) {
            if (pre < num) sum.add(pre + num);
        }
        sum.add(num);
    }
    return Math.max(...sum);
}
```

Java
```
class Solution {
    public int maxTotalReward(int[] rewardValues) {
        Arrays.sort(rewardValues);
        Set<Integer> sumSet = new HashSet<>();
        for (int num : rewardValues) {
            for (int prevSum : new ArrayList<>(sumSet)) {
                if (prevSum < num) sumSet.add(num + prevSum);
            }
            sumSet.add(num);
        }
        return Collections.max(sumSet);
    }
}
```