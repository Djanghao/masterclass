# Typescript Simple

**Author:** Sameer177
**Votes:** 1
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/1917555/](https://leetcode.com/problems/rabbits-in-forest/solutions/1917555/)

---

```
function numRabbits(answers: number[]): number {
    let map = {};
    let ans = 0;
    for(let i = 0; i < answers.length; i++) {
        let n = answers[i];
        if(!map.hasOwnProperty(n) || map[n] == 0) {
            ans += n + 1;
            map[n] = n;
        } else {
            map[n] -= 1;
        }
    }
    return ans;
};