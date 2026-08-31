# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Binary Search -Interview Solution

**Author:** lancertech6
**Votes:** 185
**Link:** [https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334702/](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/solutions/5334702/)

---

![Screenshot 2024-06-19 075105.png](./images/0.png)

# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

https://youtu.be/4gR2FmfxViQ


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2100 Subscribers*
*Current Subscribers: 2078*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem revolves around finding the minimum number of days required to make `m` bouquets, where each bouquet requires `k` adjacent flowers that have bloomed. Given the constraints, a direct approach might not be feasible due to the potential size of the input. Instead, a binary search approach combined with a helper function to validate bouquet formation within a given number of days can be efficient.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initial Check**: 
   - If `m * k` exceeds the length of the `bloomDay` array, it's impossible to make `m` bouquets, so return `-1`.

2. **Binary Search Setup**:
   - Use binary search to determine the minimum number of days required.
   - Initialize `low` to 1 (the minimum possible day) and `high` to \\(10^9\\) (the maximum possible day given the constraints).

3. **Binary Search Execution**:
   - While `low` is less than `high`, calculate the middle value (`mid`).
   - Use the helper function `isPossibleBouquets` to check if it's possible to make `m` bouquets within `mid` days.
     - If possible, adjust `high` to `mid`.
     - Otherwise, adjust `low` to `mid + 1`.

4. **Helper Function (`isPossibleBouquets`)**:
   - Iterate through the `bloomDay` array, counting consecutive flowers that have bloomed on or before the given `day`.
   - Track the number of valid bouquets formed.
   - Return `true` if the required number of bouquets (`m`) can be formed, otherwise `false`.

# Step by Step Explanation

**Example:**
- Input: `bloomDay = [1, 10, 3, 10, 2]`, `m = 3`, `k = 1`
- Output: `3`

We need to make 3 bouquets, each containing 1 adjacent flower. Here\u2019s how we can approach the problem:

### Steps

1. **Binary Search Setup:**
    - We use binary search to find the minimum number of days. We initialize `low` to 1 (minimum possible day) and `high` to the maximum value in `bloomDay`.

2. **Helper Function - `canMakeBouquets`:**
    - This function checks if we can make `m` bouquets in a given number of days (`day`). It iterates through `bloomDay` and counts the number of flowers that can be used to make bouquets.

3. **Binary Search Process:**
    - We perform binary search by calculating the middle day (`mid`). We then use `canMakeBouquets` to check if we can make the required bouquets in `mid` days.
    - If we can make the bouquets, we search in the left half (days fewer than `mid`).
    - If we cannot make the bouquets, we search in the right half (days more than `mid`).

### Tables for Better Understanding

**Binary Search Table:**

| Iteration | `low` | `high` | `mid` | Can Make Bouquets in `mid` days? | Update `low` or `high` |
|-----------|-------|--------|-------|----------------------------------|------------------------|
| 1         | 1     | 10     | 5     | Yes                               | `high = mid` (5)    |
| 2         | 1     | 5     | 3     | Yes                               | `high = mid` (3)    |
| 3         | 1    | 3     | 2     | No                               | `low = mid + 1` (3)   |

**Helper Function Table (`canMakeBouquets`):**

| Day (`mid`) | Flower | Can Use Flower? | Bouquets Formed | Total Bouquets |
|-------------|--------|-----------------|-----------------|----------------|
| 3           | 1      | Yes             | 1               | 1              |
| 3           | 10     | No              | 0               | 1              |
| 3           | 3      | Yes             | 1               | 2              |
| 3           | 10     | No              | 0               | 2              |
| 3           | 2      | Yes             | 1               | 3              |


# Complexity
- **Time Complexity**:
  - The binary search runs in `O(log(max_day))`, where `max_day` is \\(10^9\\).
  - The `isPossibleBouquets` function runs in `(O(n)`, where `n` is the length of the `bloomDay` array.
  - Overall time complexity is `(O(n log(max_day)))`.

- **Space Complexity**:
  - The space complexity is `O(1)` as we are not using any additional data structures that scale with input size.



# Code
```java []
class Solution {
    public int minDays(int[] bloomDay, int m, int k) {
        if ((long) m * k > bloomDay.length) {
            return -1;
        }

        int low = 1, high = (int) 1e9;
        while (low < high) {
            int mid = low + (high - low) / 2;

            if (isPossibleBouquets(bloomDay, m, k, mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        };

        return low;
    }
    private boolean isPossibleBouquets(int[] bloomDay, int m, int k, int day) {
        int total = 0;

        for (int i = 0; i < bloomDay.length; i++) {
            int count = 0;
            while (i < bloomDay.length && count < k && bloomDay[i] <= day) {
                count++;
                i++;
            }

            if (count == k) {
                total++;
                i--;
            }

            if (total >= m) {
                return true;
            }
        }

        return false;
    }

}
```
```C++ []
class Solution {
public:
    int minDays(vector<int>& bloomDay, int m, int k) {
        if ((long long)m * k > bloomDay.size()) {
            return -1;
        }

        int low = 1, high = 1e9;
        while (low < high) {
            int mid = low + (high - low) / 2;

            if (canMakeBouquets(bloomDay, m, k, mid)) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }

        return low;
    }

private:
    bool canMakeBouquets(vector<int>& bloomDay, int m, int k, int day) {
        int total = 0;
        for (int i = 0; i < bloomDay.size(); i++) {
            int count = 0;
            while (i < bloomDay.size() && count < k && bloomDay[i] <= day) {
                count++;
                i++;
            }

            if (count == k) {
                total++;
                i--;
            }

            if (total >= m) {
                return true;
            }
        }

        return false;
    }
};
```
```Python []
class Solution(object):
    def minDays(self, bloomDay, m, k):
        if m * k > len(bloomDay):
            return -1
        
        def canMakeBouquets(bloomDay, m, k, day):
            total = 0
            flowers = 0
            for b in bloomDay:
                if b <= day:
                    flowers += 1
                    if flowers == k:
                        total += 1
                        flowers = 0
                else:
                    flowers = 0
                if total >= m:
                    return True
            return False
        
        low, high = 1, max(bloomDay)
        while low < high:
            mid = (low + high) // 2
            if canMakeBouquets(bloomDay, m, k, mid):
                high = mid
            else:
                low = mid + 1
        
        return low
        
```
```JavaScript []
var minDays = function(bloomDay, m, k) {
    if (m * k > bloomDay.length) {
        return -1;
    }

    const canMakeBouquets = (bloomDay, m, k, day) => {
        let total = 0;
        let flowers = 0;
        for (let b of bloomDay) {
            if (b <= day) {
                flowers++;
                if (flowers == k) {
                    total++;
                    flowers = 0;
                }
            } else {
                flowers = 0;
            }
            if (total >= m) {
                return true;
            }
        }
        return false;
    };

    let low = 1, high = Math.max(...bloomDay);
    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (canMakeBouquets(bloomDay, m, k, mid)) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }

    return low;
};
```
![upvote.png](./images/1.png)
