# Impossible for js?

**Author:** maj0r_t0m
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734452/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/2734452/)

---

Ran into an error during submission resulting I believe from the imprecision of a BigInt => Int/Number conversion in javascript (I know I know --- why use js lol)

I believe the test fixture must convert return of `minCost` function to a number but that some of the test cases have expected results greater than the maximum safe number size for js --- if there is a way around this I would love to know

Either way --- maybe we could in the future return the answer % 10^9 + 7 as is  common for problems w/ very large answers?

(also ----- and I know it doesnt matter at alll -- but is there wany way to request my score in a contest to be changed if I believe a problem was unfair? )

link to my submission detailing a failing case: https://leetcode.com/submissions/detail/828379812/

See this more concise and better documented comment on contest FAQ: https://leetcode.com/discuss/general-discussion/2734067/Weekly-Contest-316/1655342