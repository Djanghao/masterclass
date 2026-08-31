# Python O(nlogn) | Without Confusing Arithmetic

**Author:** drew42
**Votes:** 31
**Link:** [https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/929004/](https://leetcode.com/problems/sell-diminishing-valued-colored-balls/solutions/929004/)

---

To preface, this answer was heavily inspired by this post https://leetcode.com/problems/sell-diminishing-valued-colored-balls/discuss/927674/Python3-Greedy  
Check out that post if you want an explanation for what's going on.


I thought it was more intuitive to create a sumRange helper function to compute the profit.
This function is essentially a modification of the gaussian sum equation. 
Ex. sumRange(3, 6) -> 3 + 4 + 5 + 6 = 18

```
def maxProfit(self, inventory: List[int], orders: int) -> int:
        inventory.sort(reverse=True)
        inventory.append(0)
        profit = 0
        width = 1
        for i in range(len(inventory)-1):
            if inventory[i] > inventory[i+1]:
                if width * (inventory[i] - inventory[i+1]) < orders:
                    profit += width * self.sumRange(inventory[i+1]+1, inventory[i])
                    orders -= width * (inventory[i] - inventory[i+1])
                else:
                    whole, remaining = divmod(orders, width)
                    profit += width * self.sumRange(inventory[i]-whole+1, inventory[i])
                    profit += remaining * (inventory[i]-whole)
                    break
            width += 1
        return profit % (10**9 + 7)
                    
        
def sumRange(self, lo, hi):
	# inclusive lo and hi
	return (hi * (hi+1)) // 2 - (lo * (lo-1)) // 2
```