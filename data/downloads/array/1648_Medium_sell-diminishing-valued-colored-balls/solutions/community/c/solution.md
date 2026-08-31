# [C++] O(nlogn) greedy solution with explanation

**Author:** devangarora
**Votes:** 23
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1434560/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/1434560/)

---

The main idea is that we should always pick the largest number for each order. We could simulate the entire process using a maxheap but that would take O(k\\*logn) time, and will thus give a TLE. 

Whenever we have to pick a ball, it should be taken from the inventory with highest value. So we try to take as many orders as we can from the inventory(s) having the current highest number until the value becomes equal to the next second largest inventory, and thus a new inventory is added to our set from which we pick balls.

Formulas:

`1 + 2 + ... + n = n * (n+1) / 2`
`k + (k+1) + ... + n = [n * (n+1) / 2] - [(k-1) * k / 2]`


```
#define ll long long
const int MOD = 1e9+7; 

class Solution {
public:
    
    ll summation(ll n) {
        return (n*(n+1)/2);
    }
    
    int maxProfit(vector<int>& inventory, int orders) {
        ll n = inventory.size(), i = 0, ans = 0;
        inventory.push_back(0);
        sort(inventory.rbegin(), inventory.rend());
        while(orders and i < n) {
            if(inventory[i] != inventory[i+1]) {
                ll width = i+1, h = inventory[i] - inventory[i+1];
                ll available = width * h, gain = 0;
                if(available <= orders) {
                    orders -= available;
					// from each of the first i+1 inventories, we gain (inventory[i+1] + 1) + ... + inventory[i] value
                    gain = (width * (summation(inventory[i]) - summation(inventory[i+1]))) % MOD; 
                } else {
                    ll q = orders / width, r = orders % width;
					// q balls picked from each of the first i+1 inventories
                    gain = (width * (summation(inventory[i]) - summation(inventory[i]-q))) % MOD;
					// 1 ball picked from r inventories providing value (inventory[i]-q)
                    gain = (gain + r*(inventory[i]-q)) % MOD;
                    orders = 0;
                }
                
                ans = (ans + gain) % MOD; 
            }
            
            i++;
        }
        
        return ans;
    }
};
```