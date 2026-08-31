# 2033. Minimum Operations to Make a Uni-Value Grid

**Author:** pgmreddy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1514516/](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/solutions/1514516/)

---

---

**Algo**:


An example

Assume grid is

	1 2 3
	6 5 4
	7 8 9

Accumulate all numbers into `A`

	A = [ 1,2,3,6,5,4,7,8,9 ]

Now sort `A`, it becomes

	A = [ 1,2,3,4,5,6,7,8,9 ]

Now if we make all 1 or 9

	1,1,1, 1,1,1, 1,1,1
	9,9,9, 9,9,9, 9,9,9

it will take more operations
the value of x does not matter here, it will still take more operations

But if we make all some mid value, like 5 here

	5,5,5, 5,5,5, 5,5,5

everyone is moving only a bit 1 to 5, 9 to 5
the extremes moving of 9 to 1, or 1 to 9 is not there
we have less moves ( for example, when x is 1)


the mid value is called `median` here
this will be mid of `A` after sorting

	A = [ 1,2,3,4,   5 *   ,6,7,8,9 ]

If there are two mid values, you can take any
because (all of) one of the other side will move a bit more
total will still be same

so now we have median
how much are they moving?

	median - each element `e`

		OR

	each element `e` - median

depending on which side e exists in median
for example

	5 (median)  - 1 (element) = 4
	9 (element) - 5 (median)  = 4

So use the absolute value to get +ve value, in either of above cases

So how much each moved?

	Abs (  median - each element `e` )

But they can only jump `x` amounts only, and reach the `median`
so divide by x, to get number of moves element `e` takes

	Abs (  median - each element `e` ) / x

Total number of moves for all `e` to get to median,
by jumping each time of length `x`
(the `ans`)
is

		Sum of
			Abs (  median - each element `e` ) / x
				for all e

Thats the answer we return as `ans` 

---

But we assumed that each can get to median, by jumping `x` lengths
that is 

	(  median - each element `e` ) / x   will be some integer, in that case
	
	like
	
		10/2 = 5 jumps

		then all is going good

but if that is not possible

	like

		11/2 = 5.5 jumps

		then we return -1

That early exit is, check if % is 0

		if ((median - e) % x)
            return -1;

	like

		10 % 2 = 0	 ( yes jumping in 2 will reach 10 distance )

		11 % 2 = 0	 ( no, jumping in 2 will reach 11 distance, so return -1 )

Hope that helps

---

Hope it is simple to understand.

---

    var minOperations = function (grid, x) {
        let A = [];
        for (let row of grid)
            for (let e of row)
                A.push(e);

        A.sort((a, b) => a - b);

        let median = A[Math.trunc(A.length / 2)];

        let ans = 0;
        for (let e of A) {
            if ((median - e) % x)
                return -1;
            ans += Math.abs((median - e) / x);
        }
        return ans;
    };

---
