# b(N)

**Author:** amjedpulikkal
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996120/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4996120/)

---

ja
```
function timeRequiredToBuy(tickets: number[], k: number): number {
    let person = tickets[k]
    let c = 0
    let lineLeftC = 0
    console.log(person)
    for (let i = 0; i < tickets.length; i++) {


        if (i < k) {
            c += Math.min(tickets[i], person);
            console.log(tickets[i])
        } else if (i === k) {
            c += person;
        } else {
            if (tickets[i] < person)
                c += tickets[i];
            else
                c += person - 1;
        }



    }
    return c
};
```