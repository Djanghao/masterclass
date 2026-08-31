# Maths behind why we increment min and not max

**Author:** bitmasker
**Votes:** 147
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931891/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/1931891/)

---

<br/> We can increment minimum number in all k operations and take their product in end.

**But why it works ?**
 
Let's take two integers **x and y and (x > y)**

Now if you **increment x by 1** then your product will be
product = (x + 1) * y  = **x * y + y**

And if you **increment y by 1** then your product will be
product = x * (y + 1) = **x * y + x**

As x * y is common in both, and **as x > y so (x * y + x > x * y + y)**
That's why it's always optimal to increment minimum number if you want to maximize their product

So, we do this for all k operations.
<br/>

**C++ Code:**

```
class Solution {
public:
    int maximumProduct(vector<int>& nums, int k) {
        
        priority_queue<int, vector<int>, greater<int>> pq(nums.begin(), nums.end());
        
        while(k--) {
            int mini = pq.top();
            pq.pop();
            pq.push(mini + 1);
        }
        
        long long ans = 1, mod = 1e9+7;
        
        while(!pq.empty()) {
            ans = ((ans % mod) * (pq.top() % mod)) % mod;
            pq.pop();
        }
        
        return (int)ans;
    }
};
```

<br/>