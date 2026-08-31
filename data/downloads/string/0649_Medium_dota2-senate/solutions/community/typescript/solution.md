# Typescript / Javascript easy solution with queue

**Author:** harshmpatel27
**Votes:** 2
**Link:** [https://leetcode.com/problems/dota2-senate/solutions/4156567/](https://leetcode.com/problems/dota2-senate/solutions/4156567/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Using Queue method solve problem
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function predictPartyVictory(senate: string): string {
    const radiant = [];
    const dire = [];
    const length = senate.length;

    for(let i=0; i<length; i++) {
        if (senate[i] === 'R') radiant.push(i);
        else dire.push(i)
    }

    while(radiant.length > 0 && dire.length > 0) {
        if(radiant[0] < dire[0]) {
            radiant.push(radiant.shift() + senate.length);
            dire.shift();
        } else {
            dire.push(dire.shift() + senate.length);
            radiant.shift();
        }
    }
    return radiant.length > 0?"Radiant":"Dire";
};
```