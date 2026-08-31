# Just binary search (map, lower_bound, upper_bound).

**Author:** cpcs
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183514/](https://leetcode.com/problems/maximum-profitable-triplets-with-increasing-prices-i/solutions/4183514/)

---

# Intuition
Consider how LIS works, we want to keep both prices and pofits strictly increasing.

# Approach
How to update valid subsequence of length 1?

We just try to insert (price, profit) to make a subseequence of length 1 (single element).

Optionally insertion:
1. If there was a price previously that is no larger than the current price and the profit is no less than the current profit, we don't need to do insert.
2. If there was a price previously that is no less than the current price and the porfit is no larger than the current profit, the previous price and profit pair can be deleted.

How to update valid subsequence of length 2?
From the set of subsequences of length 1, find the largest price that is less than the current price, suppose the element is (price', profit') so potentially we can append the current (price, profit) after the single element. to make a valid subsequence of length 2.
We try inserting (price, profit' + profit) into subsequence of length 2's map. The optional insertion logic is excatly the same as the logic above.

How to get the answer?
From subsequence of length 2's map, find the largest price that is less than the current price, suppose the element is (price', profit'), and profit' + profit is a potential answer.

Indeed, this is just a special variantion of LIS.


# Complexity
- Time complexity:
O(nlogn)

- Space complexity:
O(n)

# Code
```
class Solution {
    void insert(int price, int profit, map<int, int> &have) {
        auto t = have.upper_bound(price);
        if (t != have.begin() && (--t)->second >= profit) return;
        for (t = have.lower_bound(price); t != have.end() && t->second <= profit; have.erase(t++))
        ;
        have[price] = profit; 
    }

public:
    int maxProfit(vector<int>& prices, vector<int>& profits) {
        map<int, int> one, two;
        const int n = prices.size();
        int r = -1;
        for (int i = 0; i < n; ++i) {
            auto t = two.lower_bound(prices[i]);
            if (t != two.begin()) {
                r = max(r, (--t)->second + profits[i]);
            }
            t = one.lower_bound(prices[i]);
            if (t != one.begin()) {
                insert(prices[i], (--t)->second + profits[i], two);
            }
            insert(prices[i], profits[i], one);
        }
        return r;
    }
};
```