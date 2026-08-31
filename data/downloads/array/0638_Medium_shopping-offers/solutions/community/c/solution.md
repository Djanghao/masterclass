# C++ | Recursion | Clean code

**Author:** alaska_blues
**Votes:** 69
**Link:** [https://leetcode.com/problems/shopping-offers/solutions/992433/](https://leetcode.com/problems/shopping-offers/solutions/992433/)

---

The algorithm is:
1. Calculate the total price without using any offers.
2. For each offer:
	2.a) Apply it to the current needs
	2.b) Check if needs doesn't have any negative values, i.e. that we are not buying more items than needed (this is not allowed by definition)
	2.c) Calculate the best price with the current offer by adding the offer's value and recursing with the updated needs.
	2.d) Backtrack by adding the offer back to the needs. 

```
    int shoppingOffers(vector<int>& price, vector<vector<int>>& special, vector<int>& needs) {
        int bestPrice = calculateWOOffers(price, needs);
        for (const auto& sp : special) {
            substractOffer(sp, needs);
            if (noNegatives(needs)) {
                int withOffer = sp.back() + shoppingOffers(price, special, needs);
                bestPrice = min(bestPrice, withOffer);
            }
            addOffer(sp, needs);
        }

        return bestPrice;
    }
    
    int calculateWOOffers(const vector<int>& price, const vector<int>& needs) {
        int totalPrice{0};
        for (size_t i = 0; i < price.size(); ++i)
            totalPrice += price[i] * needs[i];
        return totalPrice;
    }
    
    void substractOffer(const vector<int>& special, vector<int>& needs) {
        for (size_t i = 0; i < needs.size(); ++i)
            needs[i] -= special[i];
    }
    
    void addOffer(const vector<int>& special, vector<int>& needs) {
        for (size_t i = 0; i < needs.size(); ++i)
            needs[i] += special[i];
    }
    
    bool noNegatives(const vector<int>& needs) {
        for (int n : needs)
            if (n < 0)
                return false;
        return true;
    }
	