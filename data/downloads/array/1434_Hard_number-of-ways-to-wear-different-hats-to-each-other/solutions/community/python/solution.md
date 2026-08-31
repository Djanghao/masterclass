# Python - DP with Bitmasking - Memoization - Clear Explanation

**Author:** deepaklaksman
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2742416/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/2742416/)

---

**Understanding the Question and Constraints**

We have to calculate the number of ways to assign hats to people such that no two people wear same hats and all the people wear a hat.

As the number of hats is 40 in the worst case, if we try to use hats as a state to dp, then we will have 2 ^ 40 states which is too much.

*But as we have only 10 persons in the worst case, we can use people as a state.*

Now we just need to know which person(s) can wear a particular hat and then recursively assign hats.
We can use a bitmask of 10 bits to store whether a particular person was already assigned a hat or not.

*In my code, hatToPerson stores which person can wear that particular hat.
finalHats stores all the unique hats in the input*

We just try to pick the hat and then pick which person to assign the  particular hat to.
We can also go by not picking a particular hat when there are more hats than persons.

The parameters of dp are -> **(current hat, bitmask)**
So we have 40 * 2 ^ 10 states, which is small compared to 10 *  2 ^ 40 states.

**Worst Case Time Complexity**

The worst case is when we can have 40 hats, 10 persons and every person can wear every hat.

So as we pick or not pick the hat, ways is 40. Now we have 10 person for each hat whom again we can pick or not pick, so 

**Time Complexity -> O(40 * 10 * 2 ^ 10) 
Space Complexity -> O(40 * 2 ^ 10) as there are that many states.**


```
class Solution:
    def numberWays(self, hats: List[List[int]]) -> int:
        
        mod = 10 ** 9 + 7
        n = len(hats)
        
        # bitmask to store which people have been assigned a hat
        taken = 0
        
        # hashmap to store which people can wear a particular hat
        # key -> hat, value -> List of people
        hatToPerson = {}
        
        # hat numbers of hats present in the hats list
        hatsavailable = set()
        
        for i in range(len(hats)):
            for hat in hats[i]:
                if hat not in hatToPerson:
                    hatToPerson[hat] = set()
                    hatsavailable.add(hat)
                hatToPerson[hat].add(i)
                
        # list to store all the available hats from available hats set
        finalhats = []
        for hat in hatsavailable:
            finalhats.append(hat)
            
        # hashmap to memoize
        memo = {}
        def dp(idx, taken, memo):
            # if all person are assigned a hat
            if taken == (1 << n) - 1:
                return 1
            
            # if we reached end of list and no answer found
            if idx == len(finalhats):
                return 0
            
            # if we already processed this state
            if (idx, taken) in memo:
                return memo[(idx, taken)]
            
            # if we are not picking the current hat
            notPick = dp(idx + 1, taken, memo) % mod
            
            pick = 0
            # trying to assign every person who can wear that hat
            for person in hatToPerson[finalhats[idx]]:
                
                # if that person is not assigned a hat already
                if (1 << person) & taken == 0:
                    taken += (1 << person)
                    pick = (pick + dp(idx + 1, taken, memo)) % mod
                    taken -= (1 << person)
            # caching        
            memo[(idx, taken)] = (notPick + pick) % mod
            return (notPick + pick) % mod
        
        return dp(0, taken, memo)
            
```