# JavaScript Solution - Map Approach

**Author:** Deadication
**Votes:** 4
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/1158508/](https://leetcode.com/problems/rabbits-in-forest/solutions/1158508/)

---

When I saw this problem, I knew that there would be some mathematical solution to it. However, I could not figure it out. Therefore, I tried to take a logical approach. When a rabbit says that it has 5 other rabbits with the same color, we want to count the number of other rabbits that also says they have 5 other rabbits with the same color. If there are 2 other rabbits that says they also have 5 other rabbits with the same color, then these two rabbits are part of the 5 other rabbits mentioned by the first rabbit. The remaining 3 rabbits are in the forest (a.k.a not present in the array). However, if there are total of 7 rabbits that says that they have 5 other rabbits with the same color, the 7th rabbit is not part of this group. Therefore, we need to reset our counting.

```
var numRabbits = function(answers) {
    const map = new Map();
    let tot = 0;
    
    for (const answer of answers) {
        if (answer === 0) {
            tot++;
            continue;
        }
        
        if (!map.has(answer)) {
            map.set(answer, answer);
            tot += answer + 1;
        } else {
            map.set(answer, map.get(answer) - 1);
            
            if (map.get(answer) === 0) map.delete(answer);
        }
    }
    return tot;
};
```