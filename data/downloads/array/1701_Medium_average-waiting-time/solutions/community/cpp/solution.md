# ✅💯🔥Explanations No One Will Give You🎓🧠Very Detailed Approach🎯🔥Extremely Simple And Effective🔥

**Author:** heir-of-god
**Votes:** 146
**Link:** [https://leetcode.com/problems/average-waiting-time/solutions/5444540/](https://leetcode.com/problems/average-waiting-time/solutions/5444540/)

---

<blockquote>
        <p>
            <b>
                Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.
            </b>        
        </p>
        <p>
            --- Thomas A. Edison ---
        </p>
</blockquote>

# \uD83D\uDC51Problem Explanation and Understanding:

## \uD83C\uDFAF Problem Description
You are given a list of lists that contains two elements. Each list represent customer where first element - time of customer arrival and the second - how much time we need to cook his order. We know that list sorted by arrival time in non-decreasing order and that chef can cook only 1 dish at once. So, we want to find average waiting time for customers (i.e. sum (`time_customer_received_order - time_customer_arrived`) / `len(customers)`)

## \uD83D\uDCE5\u2935\uFE0F Input:
- Array `customers` where every element - list of 2 elements.

## \uD83D\uDCE4\u2934\uFE0F Output:
Average waiting time for customers

---

# 1\uFE0F\u20E3\uD83E\uDDE0 Approach: Greedy Simulation

# \uD83E\uDD14 Intuition
- The first thing I asked myself is how would I do it if I were this chef? When every customer arrives there's two options:
    - I am now cooking other order so I'll start this as soon as I do all others.
    - I am idle now so I imediately start this order
- We can actualy go through array of customers every time updating variable that keeps time when we'll finish previous order (and so by this time we'll already finished all others)
- We're starting prepare first order as soon as first customer arrive (so for first customer waiting time is `time_for_cooking_customer_order`)
- For every customer we want to start cook his dish at `MAX` between time he arrived and time we finish all other orders. If we finish all orders by time 5 and customer arrived at time 6 - well, we start cook his order at time six, if we finish all orders by time 6 and customer arrived at time 5 - well, we start cook his order at time 5.

# \uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB Coding 
- Initialize `n` with the length of the `customers` list, representing the number of customers.
- Initialize `time_waiting` with the cooking time of the first customer.
- Initialize `finished_prev` with the sum of the arrival time and cooking time of the first customer, representing the time the first dish is finished.
- Start a loop that iterates through the rest of the customers, starting from the second customer. In the loop:
    - Calculate the start cooking time as the maximum of the current customer's arrival time and the time the previous dish finished.
    - Calculate the end time of the current dish by adding the cooking time to the start cooking time.
    - Update `finished_prev` to the current dish's end time (we know for sure that before we started this dish we finished all others, so every time we use `finished_prev` we know we finish all previous orders).
    - Add the waiting time for the current customer (end time - arrival time) to `time_waiting`.
- Return the average waiting time by dividing the total waiting time by the number of customers.

# \uD83D\uDCD2 Complexity Analysis
- \u23F0 Time complexity: O(n), since we ho through each element in `customers` once
- \uD83E\uDDFA Space complexity: O(1), since no extra space is used

# \uD83D\uDCBB Code
``` python []
class Solution:
    def averageWaitingTime(self, customers: list[list[int]]) -> float:
        n: int = len(customers)
        time_waiting: int = customers[0][1]
        finished_prev = customers[0][0] + customers[0][1]

        for customer_ind in range(1, n, 1):
            times: list[int] = customers[customer_ind]
            arrive: int = times[0]

            # chef starts cook this as soon as he finished last dish or customer arrived
            start_cook: int = max(arrive, finished_prev)
            end_time: int = start_cook + times[1]
            finished_prev: int = end_time
            time_waiting += end_time - arrive

        return time_waiting / n
```
``` C++ []
class Solution {
public:
    double averageWaitingTime(vector<vector<int>>& customers) {
        int n = customers.size();
        double time_waiting = customers[0][1];
        int finished_prev = customers[0][0] + customers[0][1];

        for (int customer_ind = 1; customer_ind < n; ++customer_ind) {
            vector<int> times = customers[customer_ind];
            int arrive = times[0];

            int start_cook = max(arrive, finished_prev);
            int end_time = start_cook + times[1];
            finished_prev = end_time;
            time_waiting += end_time - arrive;
        }

        return time_waiting / n;
    }
};
```
``` JavaScript []
var averageWaitingTime = function(customers) {
    let n = customers.length;
    let time_waiting = customers[0][1];
    let finished_prev = customers[0][0] + customers[0][1];

    for (let customer_ind = 1; customer_ind < n; ++customer_ind) {
        let times = customers[customer_ind];
        let arrive = times[0];

        let start_cook = Math.max(arrive, finished_prev);
        let end_time = start_cook + times[1];
        finished_prev = end_time;
        time_waiting += end_time - arrive;
    }

    return time_waiting / n;
};
```
``` Java []
class Solution {
    public double averageWaitingTime(int[][] customers) {
        int n = customers.length;
        double time_waiting = customers[0][1];
        int finished_prev = customers[0][0] + customers[0][1];

        for (int customer_ind = 1; customer_ind < n; ++customer_ind) {
            int[] times = customers[customer_ind];
            int arrive = times[0];

            int start_cook = Math.max(arrive, finished_prev);
            int end_time = start_cook + times[1];
            finished_prev = end_time;
            time_waiting += end_time - arrive;
        }

        return time_waiting / n;
    }
}
```
``` C []
double averageWaitingTime(int** customers, int customersSize, int* customersColSize) {
    int n = customersSize;
    double time_waiting = customers[0][1];
    int finished_prev = customers[0][0] + customers[0][1];

    for (int customer_ind = 1; customer_ind < n; ++customer_ind) {
        int* times = customers[customer_ind];
        int arrive = times[0];

        int start_cook = arrive > finished_prev ? arrive : finished_prev;
        int end_time = start_cook + times[1];
        finished_prev = end_time;
        time_waiting += end_time - arrive;
    }

    return time_waiting / n;
}
```

## \uD83D\uDCA1\uD83D\uDCA1\uD83D\uDCA1I encourage you to check out [my profile](https://leetcode.com/heir-of-god/) and [Project-S](https://github.com/Heir-of-God/Project-S) project for detailed explanations and code for different problems (not only Leetcode). Happy coding and learning!\uD83D\uDCDA

### Please consider *upvote*\u2B06\uFE0F\u2B06\uFE0F\u2B06\uFE0F because I try really hard not just to put here my code and rewrite testcase to show that it works but explain you WHY it works and HOW. Thank you\u2764\uFE0F

## If you have any doubts or questions feel free to ask them in comments. I will be glad to help you with understanding\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![There is image for upvote](./images/0.png)
