# ✅97.44%🔥Easy Solution🔥With explanation🔥

**Author:** MrAke
**Votes:** 131
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995356/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995356/)

---

# Approach
#### 1. Initialize a variable `time` to keep track of the total time taken.
#### 2. While the person at position k hasn't bought all their tickets:
- Iterate through the queue and let each person buy a ticket.
- Update the queue by decrementing the number of tickets for the person who bought a ticket.
- Increment the time by 1 second for each pass.
#### 3. Return the total time taken.


# Complexity
- ## Time complexity:
#### The algorithm iterates through each person in the queue once, so the time complexity of the loop is $$O(n)$$, where n is the number of people in the queue.

- ## Space complexity:
#### The algorithm uses only a constant amount of extra space for variables such as `total`, `i`, and `x`.
#### Therefore, the space complexity is $$O(1)$$.
----
# Code


```python []
class Solution:
    def timeRequiredToBuy(self, tickets: List[int], k: int) -> int:
        total = 0

        for i, x in enumerate(tickets):
            if i <= k:
                total += min(tickets[i], tickets[k])
            else:
                total += min(tickets[i], tickets[k] - 1)

        return total
```
```C++ []
class Solution {
public:
    int timeRequiredToBuy(vector<int>& tickets, int k) {
        int total = 0;

        for (int i = 0; i < tickets.size(); ++i) {
            if (i <= k) {
                total += min(tickets[i], tickets[k]);
            } else {
                total += min(tickets[i], tickets[k] - 1);
            }
        }

        return total;
    }
};
```
```java []
class Solution {
    public int timeRequiredToBuy(int[] tickets, int k) {
        int total = 0;

        for (int i = 0; i < tickets.length; i++) {
            if (i <= k) {
                total += Math.min(tickets[i], tickets[k]);
            } else {
                total += Math.min(tickets[i], tickets[k] - 1);
            }
        }

        return total;
    }
}

```
```javascript []
var timeRequiredToBuy = function(tickets, k) {
    let total = 0;

    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            total += Math.min(tickets[i], tickets[k]);
        } else {
            total += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return total;
};

```
```C# []
public class Solution {
    public int TimeRequiredToBuy(int[] tickets, int k) {
        int total = 0;

        for (int i = 0; i < tickets.Length; i++) {
            if (i <= k) {
                total += Math.Min(tickets[i], tickets[k]);
            } else {
                total += Math.Min(tickets[i], tickets[k] - 1);
            }
        }

        return total;
    }
}

```
---

![Screenshot 2023-08-20 065922.png](./images/0.png)



















