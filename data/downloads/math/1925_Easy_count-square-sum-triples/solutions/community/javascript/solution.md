# Easy Solution with Explanation.  C | JavaScript | TypeScript

**Author:** fasilv843
**Votes:** 5
**Link:** [https://leetcode.com/problems/count-square-sum-triples/solutions/4271581/](https://leetcode.com/problems/count-square-sum-triples/solutions/4271581/)

---


# Approach
<!-- Describe your approach to solving the problem. -->
Checking each pair from $$1$$ to $$n,$$ if any pair $$(a,b)$$ square root of sum $$(sqrt( (a*a) + (b*b) ))$$ is an integer and less than $$n$$, count it two times. if triplets $$(a,b,c)$$ a valid one, then triplet $$(b,a,c)$$ also a valid triplet that we didn't checking in code. (starting j from i+1) 

# Complexity
- Time complexity: $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript []
/**
 * @param {number} n
 * @return {number}
 */
var countTriples = function(n) {
    let count = 0 
    for(let i=1; i<n; i++){

        // j starting from i+1, because we don't have to check same pairs again
        for(let j=i+1; j<=n; j++){
            const sumSqrt = Math.sqrt((i*i) + (j*j));

            // if sumSqrt start to exceed n, we can safely break.
            if(sumSqrt > n) break;

            // if square root is an integer, increment count
            // counting two times, because if a^2 + b^2 = c^2, then b^2 + a^2 = c^2
            if(Number.isInteger(sumSqrt)) count += 2;
        }
    }

    return count
};
```
```typescript []
const countTriples = (n: number): number => {
    let count: number = 0;

    for (let i = 1; i < n; i++) {
        // j starting from i+1, because we don't have to check same pairs again
        for (let j = i + 1; j <= n; j++) {
            const sumSqrt: number = Math.sqrt(i * i + j * j);

            // if sumSqrt starts to exceed n, we can safely break.
            if (sumSqrt > n) break;

            // if square root is an integer, increment count
            // counting two times, because if a^2 + b^2 = c^2, then b^2 + a^2 = c^2
            if (Number.isInteger(sumSqrt)) count += 2;
        }
    }

    return count;
};

```
```c []
int countTriples(int n) {
    int count = 0;

    for (int i = 1; i < n; i++) {

        // j starting from i+1, because we don't have to check same pairs again
        for (int j = i + 1; j <= n; j++) {
            double sumSqrt = sqrt(i * i + j * j);

            // if sumSqrt starts to exceed n, we can safely break.
            if (sumSqrt > n) break;

            // if square root is an integer, increment count
            // counting two times, because if a^2 + b^2 = c^2, then b^2 + a^2 = c^2
            if (sumSqrt == floor(sumSqrt)) count += 2;
        }
    }

    return count;
}
```


