# [Python] O(n) solution + O(n) space

**Author:** PxyUp
**Votes:** 56
**Link:** [https://leetcode.com/problems/invalid-transactions/solutions/1230813/](https://leetcode.com/problems/invalid-transactions/solutions/1230813/)

---

```
class Solution(object):
    def invalidTransactions(self, transactions):
        """
        :type transactions: List[str]
        :rtype: List[str]
        """
        
        r = {}
                
        inv = []        
        for i in transactions:
            split = i.decode("utf-8").split(",")
            name = str(split[0])
            time = int(split[1])
            amount = int(split[2])
            city = str(split[3])
            
            if time not in r:
                r[time] = {
                    name: [city]
                }
            else:
                if name not in r[time]:
                    r[time][name]=[city]
                else:
                    r[time][name].append(city)
                    
        
        for i in transactions:
            split = i.decode("utf-8").split(",")
            name = str(split[0])
            time = int(split[1])
            amount = int(split[2])
            city = str(split[3])
            
            
            if amount > 1000:
                inv.append(i)
                continue
            
            for j in range(time-60, time+61):
                if j not in r:
                    continue
                if name not in r[j]:
                    continue
                if len(r[j][name]) > 1 or (r[j][name][0] != city):
                    inv.append(i)
                    break
                                        
        return inv       
```