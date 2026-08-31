# [TypeScript] This was really hard :(

**Author:** gpambasana
**Votes:** 1
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/2936390/](https://leetcode.com/problems/possible-bipartition/solutions/2936390/)

---

# Code
```
var possibleBipartition = (n: number, dislikes: number[][]): boolean => {
    if (dislikes.length === 0)
        return true;

    const group1 = new Set(), group2 = new Set(), [disliker, person] = dislikes.shift();
    
    group1.add(disliker);
    group2.add(person);

    while (dislikes.length > 0) {
        const queue = [];

        for (const [disliker, person] of dislikes) {
            if (group1.has(disliker) || group2.has(person)) {
                if (group1.has(person) || group2.has(disliker))
                    return false;

                group1.add(disliker);
                group2.add(person);
            } else if (group1.has(person) || group2.has(disliker)) {
                if (group1.has(disliker) || group2.has(person))
                    return false;

                group1.add(person);
                group2.add(disliker);
            } else queue.push([disliker, person]);
        }

        if (queue.length === dislikes.length) {
            const [disliker, person] = dislikes.shift();   
            group1.add(disliker);
            group2.add(person);
        } else dislikes = queue;
    }

    return true;
}
```