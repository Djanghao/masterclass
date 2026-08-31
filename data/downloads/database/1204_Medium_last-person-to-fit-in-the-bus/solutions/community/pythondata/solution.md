# pandas || Two Solutions || T/S: 99% / 99%

**Author:** Spaulding_
**Votes:** 11
**Link:** [https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/4228250/](https://leetcode.com/problems/last-person-to-fit-in-the-bus/solutions/4228250/)

---

# Solution 1:
- Accumulate the sums in `weight`. 
- Filter the frame for `weight`<= 1000 kg.
- Return the name in `tail(1)`. 

```
import pandas as pd

def last_passenger(queue: pd.DataFrame, ans = 1000) -> pd.DataFrame:

    queue.sort_values('turn', inplace = True)
    queue['weight'] = queue.weight.cumsum()
    
    return queue[queue.weight <= 1000].tail(1)[['person_name']]
```
I could be wrong, but for Solution 1, I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(*N*), in which *N* ~ `len(queue)`.

# Solution 2:

- Sort the frame using 'turns' as the key
- Zip the `name` and `weight` series, and iterate, accumulating the weights and breaking when the next weight would exceed 1000 kg. Return the previous name.

(Some will, with good reason, think this solution is cheating because it's more *python* thatn *pandas*, but I like it because we do not have to accumulate weights for the entire frame. And, it seems to run faster)
```
import pandas as pd

def last_passenger(queue: pd.DataFrame, ans = 1000) -> pd.DataFrame:

    queue.sort_values('turn', inplace = True)
    
    for name, weight in zip(queue.person_name, queue.weight):
                           
        if weight > ans: break                    
        ans-= weight
        prev = name
        
    return pd.DataFrame({'person_name': [prev]})
```
[https://leetcode.com/problems/last-person-to-fit-in-the-bus/submissions/1087890029/](https://leetcode.com/problems/last-person-to-fit-in-the-bus/submissions/1087890029/)

I could be wrong, but for Solution 2 I think that time complexity is *O*(*N*log*N*) and space complexity is *O*(1), in which *N* ~ `len(queue)`.

