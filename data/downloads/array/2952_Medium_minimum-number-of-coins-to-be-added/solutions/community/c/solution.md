# ✅☑[C++/Java/Python/JavaScript] || DP || EXPLAINED🔥

**Author:** MarkSPhilip31
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4355976/](https://leetcode.com/problems/minimum-number-of-coins-to-be-added/solutions/4355976/)

---

# PLEASE UPVOTE IF IT HELPED

---


# Approaches
**(Also explained in the code)**

1. **Sorting Coins:**

    - The coins array is sorted in ascending order to simplify the logic of adding coins progressively.
1. **Iterating Through Coins:**

    - The code iterates through each coin in the sorted order.
    - It tries to reach the `target` value by adding coins based on their values.
1. **Updating Maximum Reachable Value:**

    - While the maximum reachable value (`maxi`) is less than the target and the next coin's value is more than 1 greater than the current `maxi`, it continuously adds `maxi + 1` to the `maxi` value.
    - If the current `maxi` becomes greater than or equal to the `target`, it breaks out of the loop.
1. **Adding Coins:**

    - After adjusting the `maxi` value based on available coins, it adds the current coin value to `maxi`.
    - It repeats this process until `maxi` reaches or surpasses the `target`.


# Complexity
- *Time complexity:*
   $$O(nlogn)$$
    

- *Space complexity:*
   $$O(1)$$
    


# Code
```C++ []
class Solution {
public:
    int minimumAddedCoins(vector<int>& coins, int target) {
        // Sort the coins in ascending order
        sort(coins.begin(), coins.end());

        int maxi = 0; // Variable to track the maximum reachable value
        int cnt = 0; // Variable to count the number of coins added

        for (int coin : coins) {
            // While the maximum reachable value is less than the target and
            // the next coin's value is more than 1 greater than the maximum reachable value
            while (maxi < target && maxi + 1 < coin) {
                // Update the maximum reachable value by adding (maxi + 1) to it
                maxi += maxi + 1;
                cnt++; // Increment the count of added coins
            }

            // If the maximum reachable value is equal to or greater than the target, exit the loop
            if (maxi >= target) {
                break;
            }

            // Update the maximum reachable value by adding the current coin value
            maxi += coin;
        }

        // After iterating through the coins, add coins until the maximum reachable value reaches the target
        while (maxi < target) {
            maxi += maxi + 1;
            cnt++; // Increment the count of added coins
        }

        return cnt; // Return the total count of added coins
    }
};



```
```C []

#include <stdio.h>
#include <stdlib.h>

int minimumAddedCoins(int* coins, int coinsSize, int target) {
    // Sort the coins in ascending order
    qsort(coins, coinsSize, sizeof(int), cmpfunc);

    int maxi = 0; // Variable to track the maximum reachable value
    int cnt = 0; // Variable to count the number of coins added

    for (int i = 0; i < coinsSize; ++i) {
        int coin = coins[i];

        // While the maximum reachable value is less than the target and
        // the next coin's value is more than 1 greater than the maximum reachable value
        while (maxi < target && maxi + 1 < coin) {
            // Update the maximum reachable value by adding (maxi + 1) to it
            maxi += maxi + 1;
            cnt++; // Increment the count of added coins
        }

        // If the maximum reachable value is equal to or greater than the target, exit the loop
        if (maxi >= target) {
            break;
        }

        // Update the maximum reachable value by adding the current coin value
        maxi += coin;
    }

    // After iterating through the coins, add coins until the maximum reachable value reaches the target
    while (maxi < target) {
        maxi += maxi + 1;
        cnt++; // Increment the count of added coins
    }

    return cnt; // Return the total count of added coins
}

// Comparison function for qsort
int cmpfunc(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}





```
```Java []


public class Solution {
    public int minimumAddedCoins(int[] coins, int target) {
        Arrays.sort(coins);

        int maxi = 0;
        int cnt = 0;

        for (int coin : coins) {
            while (maxi < target && maxi + 1 < coin) {
                maxi += maxi + 1;
                cnt++;
            }

            if (maxi >= target) {
                break;
            }

            maxi += coin;
        }

        while (maxi < target) {
            maxi += maxi + 1;
            cnt++;
        }

        return cnt;
    }




```
```python3 []

class Solution:
    def minimumAddedCoins(self, coins, target):
        coins.sort()

        maxi = 0
        cnt = 0

        for coin in coins:
            while maxi < target and maxi + 1 < coin:
                maxi += maxi + 1
                cnt += 1

            if maxi >= target:
                break

            maxi += coin

        while maxi < target:
            maxi += maxi + 1
            cnt += 1

        return cnt



```
```javascript []
function minimumAddedCoins(coins, target) {
    coins.sort((a, b) => a - b);

    let maxi = 0;
    let cnt = 0;

    for (let i = 0; i < coins.length; ++i) {
        const coin = coins[i];

        while (maxi < target && maxi + 1 < coin) {
            maxi += maxi + 1;
            cnt++;
        }

        if (maxi >= target) {
            break;
        }

        maxi += coin;
    }

    while (maxi < target) {
        maxi += maxi + 1;
        cnt++;
    }

    return cnt;
}


```

---



# PLEASE UPVOTE IF IT HELPED

---
---


---