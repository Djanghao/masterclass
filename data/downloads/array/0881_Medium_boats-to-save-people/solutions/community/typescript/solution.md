# short solution

**Author:** etokareva
**Votes:** 3
**Link:** [https://leetcode.com/problems/boats-to-save-people/solutions/5109227/](https://leetcode.com/problems/boats-to-save-people/solutions/5109227/)

---

# Intuition
In the worst case scenario when weights of all people are close to limit we will have one boat for each of the people => so the number of boats in this case is size of people array.

Every iteration take the the greatest and the smallest weight. If in sum they are less or equal to limit, then we can put them in one boat => so the number of boats could be decreased by one.


# Approach
Let's sort people weights in asc order and every iteration extract last item - the most heavy, and check the weight of the first item.

If we can put two of these people together in the same boat => then we should extract first item from people array too and decrease number of boats.

Otherwise if together they exceed the limit => number of boats shouldn't change.

# Complexity
- Time complexity:
O(n log n)
- Space complexity:
O(n)

# Code
```
function numRescueBoats(people: number[], limit: number): number {
    people.sort((a, b) => a - b);
    let min = people.length;

    while(people.length > 0) {
        const p1 = people.pop();
        if (p1 + people[0] <= limit) {
            const p2 = people.shift();
            min--;
        }
    }

    return min;
};
```