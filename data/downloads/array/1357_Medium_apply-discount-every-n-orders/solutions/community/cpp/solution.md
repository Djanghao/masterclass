# Solution in C++

**Author:** ashish_madhup
**Votes:** 4
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/3572465/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/3572465/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Cashier {
public:
    unordered_map<int, int> tags;
    int cnt, mod;
    double pct;
    Cashier(int n, int discount, vector<int>& products, vector<int>& prices) 
    {
        cnt = 0;
        mod = n;
        pct = (100.0 - discount) / 100.0;
        for (int i = 0; i < products.size(); ++i)
            tags[products[i]] = prices[i];
    }
    double getBill(vector<int> product, vector<int> amount) 
    {
        cnt++;
        double ans(0.0);
        for (int i = 0; i < product.size(); ++i)
            ans += tags[product[i]] * amount[i];
        return cnt % mod ? ans : ans * pct;
    }
};
/**
 * Your Cashier object will be instantiated and called as such:
 * Cashier* obj = new Cashier(n, discount, products, prices);
 * double param_1 = obj->getBill(product,amount);
 */
```