# Python 3   ||   dict sol, w/ example   ||   T/S: 97% / 92%

**Author:** Spaulding_
**Votes:** 10
**Link:** [https://leetcode.com/problems/design-an-atm-machine/solutions/2811881/](https://leetcode.com/problems/design-an-atm-machine/solutions/2811881/)

---

```
class ATM:

    def __init__(self):
        self.den = {20: 0, 50: 0, 100: 0, 200: 0, 500: 0}       # <-- atm till
    
	
    def deposit(self, banknotesCount: List[int]) -> None:
		for i ,j in [(0,20),(1,50),(2,100),(3,200),(4,500)]:    # <-- put deposit in till
            self.den[j] += banknotesCount[i]                    #


    def withdraw(self, amount: int) -> List[int]:
        ans = [0, 0, 0, 0, 0]

        for i ,j in ((0,500),(1,200),(2,100),(3,50),(4,20)):    # <-- build the withdrawal starting with $500
            if amount >= j:                                     # <-- if a bill is less than present amount, 
                ans[4-i] = min(self.den[j],amount//j)           #     add that bill (or bills) to the withdrawal
                amount -= ans[4-i] * j

        if amount: return [-1]                                  # cannot make the withdrawal if amount still exists

        for i,j in [(0,20),(1,50),(2,100),(3,200),(4,500)]:     # adjust till
            self.den[j] -= ans[i]                               #

        return ans
```
[https://leetcode.com/problems/design-an-atm-machine/submissions/1286563882/
](https://leetcode.com/problems/design-an-atm-machine/submissions/1286563882/
)
I could be wrong, but I think that time complexity is *O*(1) and space complexity is *O*(1).