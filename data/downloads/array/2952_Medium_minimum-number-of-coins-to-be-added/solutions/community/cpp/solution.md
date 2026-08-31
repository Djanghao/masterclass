# 🥇 C++ | PYTHON | JAVA || Greedy Explained || ; ] ✅

**Author:** karan_8082
**Votes:** 88
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4356100/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4356100/)

---

# Intuition
- The given problem can be solved using a greedy approach.
1. We sort the array initially. 
2. Then, we iterate through the sorted array, and for each coin, we check whether it can contribute to the current maximum value or not.
3. If it can't, we add a new coin to the array to extend the reach. 
4. We continue this process until we reach or exceed the target value.

# Approach

**Check Contribution of Each Coin:**
- For each coin in the sorted array, check whether it can contribute to the current maximum value `current_max`.

- If the current coin is less than or equal to `current_max + 1`, it means this coin can contribute to the next value in the sequence. Increment the `current_max` by the value of the coin, and move to the next coin.

**Extend Reach by Adding a New Coin:**

- If the current coin cannot contribute to the next value `coins[index] > current_max + 1`, add a new coin to the array to extend the reach.
- Increment the `current_max` by doubling its current value and then incrementing it by 1.
- Increment the additions counter to keep track of the number of coins added.

# Complexity
- Time complexity : O (NlogN)

- Space complexity: O(1)


``` C++ []
class Solution {
public:
    int minimumAddedCoins(vector<int>& coins, int target) {
        sort(coins.begin(), coins.end());

        int current_max = 0;
        int additions = 0;
        int index = 0;

        while (current_max < target) {
            if (index < coins.size() && coins[index] <= current_max + 1) {
                current_max += coins[index];
                index++;
            } else {
                current_max += current_max + 1;
                additions++;
            }
        }

        return additions;
    }
};
```
``` Python []
class Solution:
    def minimumAddedCoins(self, nums: List[int], target: int) -> int:
        nums.sort()
        current_max = 0
        additions = 0
        index = 0

        while current_max < target:
            if index < len(nums) and nums[index] <= current_max + 1:
                current_max += nums[index]
                index += 1
            else:
                current_max += current_max + 1
                additions += 1

        return additions
```
``` JAVA []
class Solution {
    public int minimumAddedCoins(int[] coins, int target) {
        Arrays.sort(coins);

        int currentMax = 0;
        int additions = 0;
        int index = 0;

        while (currentMax < target) {
            if (index < coins.length && coins[index] <= currentMax + 1) {
                currentMax += coins[index];
                index++;
            } else {
                currentMax += currentMax + 1;
                additions++;
            }
        }

        return additions;
    }
}
```

![IMG_3726.JPG](./images/0.jpeg)
