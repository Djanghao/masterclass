# Maximum Profit of Operating a Centennial Wheel || Intuitive approach || Very simple || O(N)🔥🔥

**Author:** anuragiyer
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/5395230/](https://leetcode.com/problems/maximum-profit-of-operating-a-centennial-wheel/solutions/5395230/)

---

# Please upvote if you like my explanation\uD83E\uDD7A\uD83E\uDD7A
## Intuition
The first thing that came to my mind was that if the values were given in such a way that the profit that is gained in the current ride could be lower than any of the previously earned profits. And I got the answer in the affirmative, there could be cases when only one customer boards.

For example customers = [4,4,1] boardingCost = 2, runningCost = 6.
- In the first round, 4 customers board. So now the amount the customers pay is 8 and the runningCost is 6. So profit earned in this iteration is 2.
- In the second round, 4 more customers board. Now the amount paid is 16 and the running cost is 12 and the profit earned becomes 4.
- In the third round, 1 customer boards, so the number of customers are 9 and the amount paid is 18. Since this is the third round, the cost for the rounds is 18 and now the profit becomes 0.

So we will have to take the max profit of these, which is 4. Further we know that we do not have to display the maximum profit, but how many rounds the operator has to make to gain max profit. So he has to stop after 2 rounds, which is what we have to return, so we have to keep track of all the previous profits so that we can know after how many rounds the max profit was achieved, so we do that using an array.

## Approach
1. We initialise the variable customerswaiting, customersriding and i equal to 0. Here, i denotes the number of rounds the centennial wheel has been rotated for.
2. Next, we need to work under a while loop. The loop executes under the condition that the number of customerswaiting is greater than 0 or there is someone standing in the queue waiting to ride. We use the or operator and not and operator because if the number of customers waiting are more than zero but by that time there is no one standing in the queue, then the loop stops executing or vice versa, if there is no customerwaitin but there are people waiting in the queue then the loop stops executing too.
3. To prevent the index out of range error, we have the if condition. If there is someone in the queue after the centennial wheel has been rotated for i rounds, then the ith index is added onto the customerswaiting variable to denote how many customers are waiting for their turn.
4. If there are more than 3 customers waiting we seat 4 customers in the gondola and reduce those many customers from the customerswaiting variable, else if there are less than 4 customers waiting we seat all those in the gondola and make the number of customers waiting as 0.
5. The centennial wheel now rotates one more round and so we increase i by 1. We calculate the current profit and check if it is larger than the max profit that has been gained by now and if it is larger, we change the variable maxp to the current profit. If it is the first round, then we do not have a max profit and hence our current profit itself is the max profit. We then append the current profit onto the array.
6. When the loop terminates, we check if there is any profit or not. If there is no profit only loss or a breakeven, then we return -1, else we return the round at which the max profit was achieved.

## Complexity
- Time complexity: O(N)

- Space complexity: O(N)

## Code
```Python3 []
class Solution:
    def minOperationsMaxProfit(self, customers: List[int], boardingCost: int, runningCost: int) -> int:
        customerswaiting = 0
        customersriding = 0
        profit = []
        i = 0
        while customerswaiting>0 or i<len(customers):
            if i < len(customers):
                customerswaiting += customers[i]
            if customerswaiting>3:
                customersriding += 4
                customerswaiting -= 4
            else:
                customersriding += customerswaiting
                customerswaiting = 0
            i += 1
            x = customersriding*boardingCost - i*runningCost
            if len(profit) == 0:
                maxp = x
            else:
                maxp = max(maxp, x)
            profit.append(x)
        if maxp <= 0:
            return -1
        return profit.index(maxp)+1
```
```Python []
class Solution(object):
    def minOperationsMaxProfit(self, customers, boardingCost, runningCost):
        customerswaiting = 0
        customersriding = 0
        profit = []
        i = 0
        while customerswaiting>0 or i<len(customers):
            if i < len(customers):
                customerswaiting += customers[i]
            if customerswaiting>3:
                customersriding += 4
                customerswaiting -= 4
            else:
                customersriding += customerswaiting
                customerswaiting = 0
            i += 1
            x = customersriding*boardingCost - i*runningCost
            if len(profit) == 0:
                maxp = x
            else:
                maxp = max(maxp, x)
            profit.append(x)
        if maxp <= 0:
            return -1
        return profit.index(maxp)+1
```
```C++ []
class Solution {
public:
    int minOperationsMaxProfit(vector<int>& customers, int boardingCost, int runningCost) {
        int customerswaiting = 0, customersriding = 0, i = 0, maxp = 0;
        vector<int> profit;
        while (customerswaiting > 0 || i < customers.size()) {
            if (i < customers.size()) {
                customerswaiting += customers[i];
            }
            if (customerswaiting > 3) {
                customersriding += 4;
                customerswaiting -= 4;
            } else {
                customersriding += customerswaiting;
                customerswaiting = 0;
            }
            i++;
            int x = customersriding * boardingCost - i * runningCost;
            if (profit.empty()) {
                maxp = x;
            } else {
                maxp = max(maxp, x);
            }
            profit.push_back(x);
        }
        if (maxp <= 0) {
            return -1;
        }
        return distance(profit.begin(), max_element(profit.begin(), profit.end())) + 1;
    }
};
```
```Java []
class Solution {
    public int minOperationsMaxProfit(int[] customers, int boardingCost, int runningCost) {
        int customersWaiting = 0, customersRiding = 0, i = 0, maxp = 0;
        List<Integer> profit = new ArrayList<>();
        while (customersWaiting > 0 || i < customers.length) {
            if (i < customers.length) {
                customersWaiting += customers[i];
            }
            if (customersWaiting > 3) {
                customersRiding += 4;
                customersWaiting -= 4;
            } else {
                customersRiding += customersWaiting;
                customersWaiting = 0;
            }
            i++;
            int x = customersRiding * boardingCost - i * runningCost;
            if (profit.isEmpty()) {
                maxp = x;
            } else {
                maxp = Math.max(maxp, x);
            }
            profit.add(x);
        }
        if (maxp <= 0) {
            return -1;
        }
        return profit.indexOf(maxp) + 1;
    }
}
```