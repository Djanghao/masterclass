# 2 Solutions: the most logical, and the fastest

**Author:** balfin
**Votes:** 7
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5739691/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5739691/)

---

# Intuition
We are going to generate all possible combinations using a dynamic programming approach. We initialize all values as false. Starting from 0, we try to add either the first or the second prime number. If adding either results in a valid index, we mark that index as true. By doing this repeatedly, we generate all possible combinations up to the maximum value. In the end, we check the largest value that is still marked as false to find our answer.

# Approach
We create an array items of size primeOne * primeTwo filled with false. We then start from 0 and update indices based on whether they can be reached by adding primeOne or primeTwo. Finally, we iterate from the highest index downwards to find the largest index that is still false, which represents the most expensive item that cannot be obtained.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

n = primeOne * primeTwo

# Code
```javascript []
/**
 * @param {number} primeOne
 * @param {number} primeTwo
 * @return {number}
 */
var mostExpensiveItem = function(primeOne, primeTwo) {
    let n = primeOne * primeTwo;
    let items = new Array(n).fill(false);
    items[0] = true;

    for(let i = 0; i < n; i++) {
        if(items[i]) { //start from items[0] our base DP case
            if(i + primeOne < n) {
                items[i + primeOne] = true;
            }

            if(i + primeTwo < n) {
                items[i + primeTwo] = true;
            }
        }
    }

    for(let i = n - 1; i >= 0; i--) {
        if(!items[i])
            return i;
    }

    return false;
};
```

# Bonus solution (Coin Problem)
I would not go with it since if I was an interviewer I would ask for a mathematical proof of formula wich is not that easy to do 
 
https://en.wikipedia.org/wiki/Coin_problem 
```
/**
 * @param {number} primeOne
 * @param {number} primeTwo
 * @return {number}
 */
var mostExpensiveItem = function(primeOne, primeTwo) {
    return primeOne * primeTwo - primeOne - primeTwo;
};
```
