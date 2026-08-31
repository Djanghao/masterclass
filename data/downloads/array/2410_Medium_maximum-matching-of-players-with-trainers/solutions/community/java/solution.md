# Easy Java solution | Greedy approach

**Author:** Siddhant_1602
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2587925/](https://leetcode.com/problems/maximum-matching-of-players-with-trainers/solutions/2587925/)

---

```
class Solution {
    public int matchPlayersAndTrainers(int[] p, int[] t) {
        Arrays.sort(p);
        Arrays.sort(t);
        int i=0,j=0,c=0;
        while(i<p.length&&j<t.length)
        {
            if(p[i]<=t[j])
            {
                i++;
                j++;
                c++;
            }
            else
            {
                j++;
            }
        }
        return c;
    }
}