# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/JS -Sliding Window -Interview Solution

**Author:** lancertech6
**Votes:** 117
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344081/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/5344081/)

---

![Screenshot 2024-06-21 071757.png](./images/0.png)



# YouTube Video Explanation:

<!-- **If you want a video for this question please write in the comments** -->

https://youtu.be/pLCZsQki-d4


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2200 Subscribers*
*Current Subscribers: 2167*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem involves maximizing customer satisfaction in a bookstore where the owner can control their grumpiness for a consecutive number of minutes. The key challenge is to decide when to use this "non-grumpy" period to maximize the number of satisfied customers.

# Approach
<!-- Describe your approach to solving the problem. -->
1. **Initialize Variables**:
   - `initialSatisfaction`: Sum of customers during non-grumpy minutes.
   - `maxExtraSatisfaction`: Maximum additional satisfaction we can get using the non-grumpy technique.

2. **Calculate Initial Satisfaction**:
   - Iterate over the `customers` array and add customers where the owner is not grumpy.

3. **Sliding Window to Find Maximum Extra Satisfaction**:
   - Initialize `currentWindowSatisfaction` to calculate the satisfaction within the first `minutes` window where the owner would otherwise be grumpy.
   - Use the sliding window technique to move through the `customers` array and update the `currentWindowSatisfaction` for each position.
   - Track the maximum satisfaction obtained in any window.

4. **Combine Both Results**:
   - The final result is the sum of `initialSatisfaction` and `maxExtraSatisfaction`.


# Complexity
- **Time Complexity**: O(n)
  - Calculating the initial satisfaction takes O(n).
  - The sliding window to find the maximum extra satisfaction also takes O(n).
  
- **Space Complexity**: O(1)
  - We use a constant amount of extra space for variables.

# Step by Step Explanation

#### Step 1: Calculate Initial Satisfaction
Only consider minutes when `grumpy[i] == 0`.

| Minute | Customers | Grumpy | Satisfied Customers (if not grumpy) |
|--------|-----------|--------|-------------------------------------|
| 0      | 1         | 0      | 1                                   |
| 1      | 0         | 1      | 0                                   |
| 2      | 1         | 0      | 1                                   |
| 3      | 2         | 1      | 0                                   |
| 4      | 1         | 0      | 1                                   |
| 5      | 1         | 1      | 0                                   |
| 6      | 7         | 0      | 7                                   |
| 7      | 5         | 1      | 0                                   |
| **Total** |           |        | **10**                                |

Initial satisfaction: `1 + 1 + 1 + 7 = 10`

#### Step 2: Sliding Window for Extra Satisfaction
Calculate the extra satisfaction using a sliding window of size `minutes = 3`.

| Window Start | Extra Satisfied Customers | Updated Total Satisfaction |
|--------------|---------------------------|----------------------------|
| 0-2          | 0                         | 10                         |
| 1-3          | 2                         | 12                         |
| 2-4          | 0                         | 12                         |
| 3-5          | 3                         | 13                         |
| 4-6          | 1                         | 13                         |
| 5-7          | 6                         | 16                         |

Maximum extra satisfaction: `6` (in the window from minute 5 to 7)

### Final Result
Total maximum satisfied customers: `Initial Satisfaction + Max Extra Satisfaction = 10 + 6 = 16`


# Code
```java []
class Solution {
    public int maxSatisfied(int[] customers, int[] grumpy, int minutes) {
        int n = grumpy.length;
        int i = 0;
        int curWin = 0;
        int maxWin = 0;

        for(int j=0;j<n;j++) {
            curWin+=customers[j] * grumpy[j];
            maxWin = Math.max(curWin, maxWin);
            if(j >= minutes - 1 ) {
                curWin -= customers[i] * grumpy[i++];
            }
        }
        int res = maxWin;
        for(i=0;i<grumpy.length;i++) {
            res+=customers[i] * (1 - grumpy[i]);
        }
        return res;

    }
}
```
```C++ []
class Solution {
public:
    int maxSatisfied(vector<int>& customers, vector<int>& grumpy, int minutes) {
        int initialSatisfaction = 0;
        int maxExtraSatisfaction = 0;
        int currentWindowSatisfaction = 0;
        
        for (int i = 0; i < customers.size(); ++i) {
            if (grumpy[i] == 0) {
                initialSatisfaction += customers[i];
            } else if (i < minutes) {
                currentWindowSatisfaction += customers[i];
            }
        }
        
        maxExtraSatisfaction = currentWindowSatisfaction;
        
        for (int i = minutes; i < customers.size(); ++i) {
            currentWindowSatisfaction += customers[i] * grumpy[i];
            currentWindowSatisfaction -= customers[i - minutes] * grumpy[i - minutes];
            maxExtraSatisfaction = max(maxExtraSatisfaction, currentWindowSatisfaction);
        }
        
        return initialSatisfaction + maxExtraSatisfaction;   
    }
};
```
```Python []
class Solution(object):
    def maxSatisfied(self, customers, grumpy, minutes):
        initial_satisfaction = 0
        max_extra_satisfaction = 0
        current_window_satisfaction = 0
        
        for i in range(len(customers)):
            if grumpy[i] == 0:
                initial_satisfaction += customers[i]
            elif i < minutes:
                current_window_satisfaction += customers[i]
        
        max_extra_satisfaction = current_window_satisfaction
        
        for i in range(minutes, len(customers)):
            current_window_satisfaction += customers[i] * grumpy[i]
            current_window_satisfaction -= customers[i - minutes] * grumpy[i - minutes]
            max_extra_satisfaction = max(max_extra_satisfaction, current_window_satisfaction)
        
        return initial_satisfaction + max_extra_satisfaction
        
```
``` JavaScript []
var maxSatisfied = function(customers, grumpy, minutes) {
    let initialSatisfaction = 0;
    let maxExtraSatisfaction = 0;
    let currentWindowSatisfaction = 0;
    
    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            initialSatisfaction += customers[i];
        } else if (i < minutes) {
            currentWindowSatisfaction += customers[i];
        }
    }
    
    maxExtraSatisfaction = currentWindowSatisfaction;
    
    for (let i = minutes; i < customers.length; i++) {
        currentWindowSatisfaction += customers[i] * grumpy[i];
        currentWindowSatisfaction -= customers[i - minutes] * grumpy[i - minutes];
        maxExtraSatisfaction = Math.max(maxExtraSatisfaction, currentWindowSatisfaction);
    }
    
    return initialSatisfaction + maxExtraSatisfaction;
};
```
![upvote.png](./images/1.png)
