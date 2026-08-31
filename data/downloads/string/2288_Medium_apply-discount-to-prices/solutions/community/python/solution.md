# Simple Python with explanation

**Author:** Eba472
**Votes:** 11
**Link:** [https://leetcode.com/problems/apply-discount-to-prices/solutions/2085723/](https://leetcode.com/problems/apply-discount-to-prices/solutions/2085723/)

---

```
class Solution:
    def discountPrices(self, sentence: str, discount: int) -> str:
        s = sentence.split() # convert to List to easily update
        m = discount / 100 
        for i,word in enumerate(s):
            if word[0] == "$" and word[1:].isdigit(): # Check whether it is in correct format
                num = int(word[1:]) * (1-m) # discounted price
                w = "$" + "{:.2f}".format(num) #correctly format
                s[i] = w #Change inside the list
        
        return " ".join(s) #Combine the updated list
		```