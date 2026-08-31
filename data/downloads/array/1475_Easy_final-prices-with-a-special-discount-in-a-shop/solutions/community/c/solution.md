# explained my c++ solution. Beats 100% in both space and time complexity

**Author:** being_bing
**Votes:** 55
**Link:** [https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/691977/](https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/solutions/691977/)

---

problem is very well documented, at first glance it looks very easy and straightforward, but few minutes into the problem you will realize that, the problem maybe straightforward but solution is not. So first let's break down the problem and understand which data-structure to go with for a more clear vision of what's happening.

As we can clearly see, the problem is asking us the most recent element on right hand side of the current element which is smaller than or equal to the current element. The problems emphasis is not on the position of the element which we would be using as discount, but rather on it's value and the fact that how recently the element is introduced in our process.

So, when an elements recentness (i don't know if it is an actual word) make it more eligible, the best data-structure we have for this kind of scenarios is stack. So let's go with the stack and try to formulate an algorithm.

Algorithm -
* iterate from right-to-left on the given 'prices' array.
	->  if stack is empty. No discount on current item (discount = 0). Just push current_item to stack.
	-> if stack is NOT empty. check top of stack.
	.........=> if top <= curr_item, then top is our discount, record it, then push current_item to stack.
	.........=> if top > curr_item, keep popping stack until we get a top which is <= current_item. if stack becomes empty, then no discount on current_item.
	-> we have our discount value for each item in 'prices' array ready.
* create an selling_price array such that, selling_price[i] = prices[i] - discount[i].
* selling_price is our answer.

```
vector<int> finalPrices(vector<int>& prices) {
        stack<int> minStk;
        int n = prices.size();
        vector<int> discount(n, 0);
        for (int i{n-1}; i>=0; i--) {
            if (!minStk.empty())
                if (minStk.top() <= prices[i])
                    discount[i] = minStk.top();
                else {
                    while (!minStk.empty() && (minStk.top() > prices[i])) minStk.pop();
                    if (!minStk.empty()) discount[i] = minStk.top();
                }
            minStk.push(prices[i]);
        }
        vector<int> selling_price(n);
        for (int i{0}; i<n; i++)
            selling_price[i] = prices[i] - discount[i];
        return selling_price;
    }
```

if you think that i missed something, or want me to explain it even further using other possible approaches then comment down below and i will do that.