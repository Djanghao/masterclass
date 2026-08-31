# Full explanation including explanation of a variations

**Author:** roberluc
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904949/](https://leetcode.com/problems/find-the-number-of-possible-ways-for-an-event/solutions/5904949/)

---

# Preliminary Readings

[Stirling numbers of the second kind](https://en.wikipedia.org/wiki/Stirling_numbers_of_the_second_kind)
[Binomial Coefficients](https://en.wikipedia.org/wiki/Combination)
[Combinatorial Principles](https://en.wikipedia.org/wiki/Combinatorial_principles) 

# Intuition
We proceed via counting, 
- we have $\	extnormal{n}$ performers
- we have $\	extnormal{x}$ stages
- we have $\	extnormal{y}$ scores

For each $1 \\leq \	extnormal{i} \\leq \	extnormal{min(n, x)}$ we do:
- choose $\	extnormal{i}$ stages in ${x \\choose i}$ ways 
- partition the performers into $\	extnormal{i}$ non-empty subsets, in ${n \\brace i}$ ways (Stirling number of the second kind counts these subsets)
- arrange the stages and performers in $i!$ different orderings which are all considered distinct
- give scores to each band (a band is all performers on the stage), $y^i$ possible ways

Now by the multiplication rule we multiply each of these values together for one of the possible values. We sum over all valid $\	extnormal{i}$ to get the final answer.

Do not forget the mod, it's a common gotcha.

# Approach
For the binomial coefficients and for the Stirling numbers of the second kind you can do the DP solution calculation *in-place* which reduces the space complexity from $\\mathcal{O}(n^2)$ to $\\mathcal{O}(n)$. If you store or cache all the subproblems for all $X$ values in ${X \\choose i}$, and similarly for the Stirling numbers this is the same as building out the entire triangle for each, we avoid doing that here and also avoid using two adjacent rows of the triangle by doing the DP computation *in-place*. 

The key to doing this is traversing the arrays backward. If you study the recursions of the binomials and the Stirling numbers of the second kind you'll see that this is what's happening in the code listings beneath.

We also precompute the factorials and the powers of y as needed.
Finally computing the sum over all $i$ and take a mod to get the answer.

$\\sum_{i=1}^{\	extnormal{min}(n, x)}{x \\choose i}{n \\brace i}i!y^i$ = answer.

I use the bracket notation for Stirling numbers of the second kind, this notation is advocated for by [Donald Knuth](https://en.wikipedia.org/wiki/Donald_Knuth). One reason is because this way is easy to write and is reminiscent of the binomial coefficient.   

Note that for the javascript solution I needed to use `BigInt` types. 
In python integers can have arbitrary length so no need to worry about the types.

# Note on relation to other solutions

Some solutions do not calculate Stirling numbers of the second kind.
These solutions instead use the recursion:

$f(n, i) = i * (f(n - 1, i) + f(n - 1, i - 1)) $

Which is just the direct calculation of 

${n \\brace i}i!$ which can be seen if you study this in relation to the recursion for the Stirling numbers of the second kind, 

${n+1 \\brace i} = i{n \\brace i} + {n \\brace i-1}$

The $a(n, i)$ count the number of ways for $n$ people in a race to finish allowing that there are ties resulting in $i$ groups, each group has 0 or more ties-0 ties if the person who finishes does *not* have a tie with anyone else. 
The sum of these values over $i$ is an [ordered Bell number](https://en.wikipedia.org/wiki/Ordered_Bell_number). 

# Complexity
- Time complexity:
$\\mathcal{O}(\	extnormal{n}^2)$
The quadratic time complexity stems from the need to compute the
triangles for the binomial coefficients and for the Stirling numbers
of the second kind. 

To be precise we calculate ${n \\choose 2} + n$ entries, for the lower halves of the two triangles but this is the same as quadratic complexity.

- Space complexity:
$\\mathcal{O}(\	extnormal{max(n, x)})$

# Code
```javascript []
/**
 * @param {number} n
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var numberOfWays = function(n, x, y) {
        let MOD = BigInt(1000000007);
        // step 0: populate binomials
        let binoms = [BigInt(1)];
        for(let i=1; i < x; i++){
            binoms.push(BigInt(1));
            for(let j=binoms.length - 1; j>0; j--){
                binoms[j] += binoms[j-1];
            }
        }
        binoms.push(BigInt(1));
        //console.log(binoms);
        // step 1: populate stirling 2s
        let stirling2 = [BigInt(0),BigInt(1)];
        for(let i=2; i<n; i++){
            stirling2.push(BigInt(1));
            for(let j=stirling2.length-1; j>1; j--){
                stirling2[j] *= BigInt(j);
                stirling2[j] += stirling2[j-1];
            }
        }
        stirling2.push(BigInt(1));
        //console.log(stirling2);
        // step 3: calculate i!s
        facts = new Array(Math.min(n, x)+2).fill(BigInt(1));
        facts[0] = BigInt(1);
        for(let i=1; i<facts.length; i++){
            facts[i] = facts[i-1]*BigInt(i);
        }
        //console.log(facts);
        // step 4: calculate y^i
        let pow = [BigInt(1)];
        for(let i=1; i<=Math.min(n,x); i++){
            pow.push(BigInt(y));
            pow[pow.length-1] *= pow[pow.length-2];
        }
        // now calculate entire things 
        //console.log(pow)
        ans = BigInt(0);
        for(let i=1; i<=Math.min(n, x); i++){
            //console.log(ans, i)
            ans += (binoms[i] * facts[i] * stirling2[i] * pow[i]) % MOD
        }
        return Number(ans % MOD);
};
```
``` python3 []
class Solution:
    def numberOfWays(self, n: int, x: int, y: int) -> int:
        MOD = (10 ** 9 + 7)
        # formula: sum_{i=1}^{min(x, n)} {x \\choose i} * \\brace{n, i} * i! * y^i
        # time: O(n^2), space: O(max(x, n))
        # this is the best that can be done I think
        # step 0: populate binomials
        binoms = [1]
        for i in range(1, x):
            binoms.append(1)
            for j in range(len(binoms)-1, 0, -1):
                binoms[j] += binoms[j-1]
        binoms.extend([1])
        #print(binoms)
        # step 1: populate stirling 2s
        stirling2 = [0,1]
        for i in range(2, n):
            stirling2.append(1)
            for j in range(len(stirling2)-1, 1, -1):
                stirling2[j] *= j
                stirling2[j] += stirling2[j-1]
        stirling2.append(1)
        stirling2.extend([0]*(len(binoms) - len(stirling2)))
        #print(stirling2)
        # step 3: calculate i!s
        facts = list(range(min(n, x)+2))
        facts[0] = 1
        for i in range(1, len(facts)):
            facts[i] *= facts[i-1]
        # now calculate entire things 
        #print(facts)
        ans = 0
        for i in range(1, min(n, x) + 1):
            #print(ans, i)
            ans = (ans + binoms[i] * facts[i] * stirling2[i] * pow(y, i, MOD)) % MOD
        return ans
```