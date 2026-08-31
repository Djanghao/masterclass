# JS || Solution by Bharadwaj

**Author:** Manu-Bharadwaj-BN
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/4803789/](https://leetcode.com/problems/number-of-orders-in-the-backlog/solutions/4803789/)

---

# Code
```
var getNumberOfBacklogOrders = function (orders) {
    var bq = new MaxPriorityQueue({ priority: (bid) => bid[0] });
    var sq = new MinPriorityQueue({ priority: (bid) => bid[0] });
    var backlog = [bq, sq];
    orders.forEach(order => {
        let [price, amount, type] = order;
        if (type === 0) {
            while (!sq.isEmpty() && amount > 0) {
                var cur = sq.front().element;
                if (cur[0] <= price) {
                    if (amount <= cur[1]) {
                        cur[1] -= amount;
                        amount = 0;
                        break;
                    }
                    else {
                        amount -= cur[1];
                        sq.dequeue();
                    }
                } else {
                    break;
                }
            }

            if (amount > 0) {
                bq.enqueue([price, amount]);
            }
        }
        else {
            while (!bq.isEmpty() && amount > 0) {
                var cur = bq.front().element;
                if (cur[0] >= price) {
                    if (amount <= cur[1]) {
                        cur[1] -= amount;
                        amount = 0;
                        break;
                    }
                    else {
                        amount -= cur[1];
                        bq.dequeue();
                    }
                } else {
                    break;
                }
            }
            if (amount > 0) {
                sq.enqueue([price, amount]);
            }
        }
    });

    var res = 0;
    var mod = 1000000007;
    while (!bq.isEmpty()) {
        var cur = bq.front().element;
        res = (res + cur[1]) % mod;
        bq.dequeue();
    }
    while (!sq.isEmpty()) {
        var cur = sq.front().element;
        res = (res + cur[1]) % mod;
        sq.dequeue();
    }
    return res;
};
```