# Java 2 ms, Short and Simple

**Author:** danyh
**Votes:** 15
**Link:** [https://leetcode.com/problems/friends-of-appropriate-ages/solutions/558722/](https://leetcode.com/problems/friends-of-appropriate-ages/solutions/558722/)

---

Many posts have already mentioned the conditions can be summed up as:
> Person A will friend request B iif 
> **0.5 * age[A] + 7 < age[B] <= age[A]**

So just iterate over the possible values of B's age.
Sum how many people there are in each age year to make calculations more efficient.

```
    public int numFriendRequests(int[] ages) {
        int[] ageCounts = new int[121];
        int friendReqCount = 0;
        
        // Count how many people there are for each age
        for(int age : ages) {
            ageCounts[age]++;
        }
        
        for(int a=0; a<=120; a++) {
            // Iterate over the allowed range for B's age
            for(int b=(int)(0.5*a)+7+1; b<=a; b++) {
                friendReqCount += ageCounts[a] * ageCounts[b];
                
                if(a==b) {
                    // A will not friend request him/herself
                    friendReqCount -= ageCounts[a];
                }
            }
        }
        
        return friendReqCount;
    }
```