# Typescript 100% with explanation

**Author:** MarcoMaar
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1052180/](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day/solutions/1052180/)

---

**Overview**

The core concept of the algorithm is too understand that you can eat a certain range of candies on a given day and that you have to eat candies in order.

**Example Question:**
For the candy **counts [3,2,5]**, can I eat on **day 2** the candy of **type 1** if I can at maximum eat **3 candies per day**.

Lets break this down into smaller problems

**How many candies can I eat on day 2?**

Let's assume we can eat 3 candies per day and our favorite day is day 2 (beware day 0 is the first day and we need to count it).

This means we can eat a maximum of 9 candies (3 candies * 3 days).
The minimum amount of candies we have to eat is one per day, therefore 3.

On **day 2** we can eat **3-9 candies**.

**Which candies are of type 1?**
Since we need to eat candies in order we can simply calculate the sum of candies one has to eat before being able to eat a certain candy.

Let's assume the following candy counts [3,2,5] and we want to know which candies are of type 1. We need to at least eat 3 candies of type 0 + 1 candy of type 1, which is 4. At maximum we can eat 3 candies of type 0 and 2 of type 2, which is 5. So the **candies 4-5** are of **type 1**.

**Can we eat our favorite candy on our favorite day?**

Finally we just need to see if our opportunity window of candy eating overlaps.
On our favorite day we can eat 3-9 candies, and we want to eat one of the candies between 4-5.

This means **we can eat our favorite candy on our favorite day** since the two ranges overlap.

**Optimiziation**

We can precompute the amount of candies that we have to eat to reach candy types. If we have the following candy counts [2,3,5] we can precumpute the following sums [1,3,6,11]. We start with 1, it means we have to eat 1 candy to get to candy type 0, Type 1 is calculated by adding the count of candy type 0 to the current sum (2+1 = 3). For type 2 we calculate (3 = 3 = 6) and so on. For the last number (6+5=11) there is no candy available anymore. We compute this last number to ensure we know what is the last type 2 candy (11 - 1 = 10).
Precomputing those candy sums means we will not have to calculate this over and over for each query redcuing the complexity of our algorithm.  

```
class Range {
    readonly low: number;
    readonly high: number;

    constructor(from: number, to: number) {
        this.low = from
        this.high = to
    }

    public doesIntersect(other: Range) {
        return other.low <= this.high && this.low <= other.high
    }
}

function canEat(candiesCount: number[], queries: number[][]): boolean[] {
    let candySum: number[] = [1]
    for (let i = 0; i < candiesCount.length; i++) {
        candySum.push(candySum[i] + candiesCount[i]);
    }
    let answers: boolean[] = []
    for (let query of queries) {
        let type: number = query[0];
        let day: number = query[1] + 1;
        let cap: number = query[2];


        let low = candySum[type];
        let high = candySum[type + 1] - 1;

        let candyRange = new Range(low, high);
        let eatingWindow = new Range(day, day * cap);
        let answer = candyRange.doesIntersect(eatingWindow);
        answers.push(answer);
    }
    return answers;
}
```