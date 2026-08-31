# JS, Python, Java, C++ | Very Simple State Machine Solution w/ Explanation

**Author:** sgallivan
**Votes:** 69
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/1112088/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/solutions/1112088/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

This proplem is an introduction to **state machine** logic. In order to solve it, we can consider the two possible distinct states of being: having no stock and being ready to buy (**buying**) and owning stock and being ready to sell (**selling**).

We just need to iterate through the prices (**P**) and keep track of the best possible value for these two states of being for each day. The difficulty is that the tracks of the two states cross over regulary.

For example, if we consider the state of being ready to buy stock after this iteration (**buying**), it can be reached from being ready to buy today and doing nothing, ***OR*** it can be reached by being ready to sell today and selling (with the additional fee [**F**]). We just need to pick whichever one yields the best value.

The same is true of the **selling** state. The new **selling** state is the better result between the previous **selling** state with no action and the previous **buying** state with a stock purchase today.

![State Machine Visual](https://i.imgur.com/9hpSjmS.png)

We should manually set our initial values for **buying** and **selling** to account for the first day and iterate from there.

Since the fee is only administered once per buy/sell pair, we can technically account for it on either side, as we're always going to want to return the **buying** state, having no outstanding stock left to sell.

***Question: Should we be worried about updating buying before using it in the second equation?***
Mathematically, it's only ever a good day to buy ***or*** sell; it cannot be both.

Consider the possible situations: In the first equation, if the old **buying** is greater than **selling + P[i] - F**, then the new **buying** will be the same as the old **buying**, so there will be no change for the second equation.

But what if **buying** changes? Let's take an example:
```
  if:  buying = 10, P[i] = 4, F = 0
then:  newBuying = max(10, selling + 4 - 0)
       newSelling = max(selling, newBuying - 4)

  if:  selling <= 6                               // For values of selling less than 7
then:  newBuying = max(10, <=10)                  // the old buying will still be largest
       newBuying = buying                         // so there's no problem

  if:  selling > 6                                // If selling is greater than 6
then:  newBuying = max(10, >6 + 4)                // then buying will change
       newBuying = selling + 4                    // so we might have a problem

  if:  newBuying = selling + 4                    // But here we see that selling cannot
then:  newSelling = max(selling, selling + 4 - 4) // possibly change when buying does
```
Any positive value for **F** would only lower the value of **newBuying**, which would only make it so that **newBuying - P[i]** couldn't even tie **selling** but would always be lower.

---

#### ***Implementation:***

The code for all four languages is almost identical.

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 47.3MB** (beats 98% / 79%).
```javascript
var maxProfit = function(P, F) {
    let len = P.length, buying = 0, selling = -P[0]
    for (let i = 1; i < len; i++) {
        buying = Math.max(buying, selling + P[i] - F)
        selling = Math.max(selling, buying - P[i])
    }
    return buying
};
```

---

#### ***Python Code:***

The best result for the code below is **672ms / 21.3MB** (beats 89% / 82%).
```python
class Solution:
    def maxProfit(self, P: List[int], F: int) -> int:
        buying, selling = 0, -P[0]
        for i in range(1, len(P)):
            buying = max(buying, selling + P[i] - F)
            selling = max(selling, buying - P[i])
        return buying
```

---

#### ***Java Code:***

The best result for the code below is **3ms / 47.8MB** (beats 94% / 99%).
```java
class Solution {
    public int maxProfit(int[] P, int F) {
        int len = P.length, buying = 0, selling = -P[0];
        for (int i = 1; i < len; i++) {
            buying = Math.max(buying, selling + P[i] - F);
            selling = Math.max(selling, buying - P[i]);
        }
        return buying;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **88ms / 54.9MB** (beats 92% / 98%).
```c++
class Solution {
public:
    int maxProfit(vector<int>& P, int F) {
        int len = P.size(), buying = 0, selling = -P[0];
        for (int i = 1; i < len; i++) {
            buying = max(buying, selling + P[i] - F);
            selling = max(selling, buying - P[i]);
        }
        return buying;
    }
};
```