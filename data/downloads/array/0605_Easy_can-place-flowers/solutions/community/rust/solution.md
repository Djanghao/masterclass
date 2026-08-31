# Rust iterators 0ms 100% 2.1MB 92% chain fold tuple no mutations no declarations

**Author:** UrzaMancer
**Votes:** 6
**Link:** [https://leetcode.com/problems/can-place-flowers/solutions/1719845/](https://leetcode.com/problems/can-place-flowers/solutions/1719845/)

---

This one started off ugly for me. Maybe the test cases provide some insight there. I knew I was lacking on some edge cases and was able to easily create the representative test cases, which saved me from errant submissions.

I began naively with a scan method tracking for 3 consecutive zeros. I think I had the intuition that a fold would work but ended up fighting with type mismatches and didn't see the obvious - initial value, accumulator, and _return_ value of the closure must match. Scan is iter -> iter so return type can deviate from the internal state, so I fell back to that plan. After writing it out, I ended up with a scan into a fold.

I was still missing the edge cases though, for arrays starting and ending with two 0's, as well as not properly "making room" for sharing a padding zero between sequences of 3 consecutive (i.e. 0 - 0 - 0 - 0 - 0 in the middle of an array can hold at least 2 flowers, "sharing" the middle 0). I modified the closure logic to reset consecutive to 1 instead of 0 which helped with the middle but not the ends.

Eventually setting the starting to condition 1 got me halfway there, and I had the idea to pad the whole array with 0s on the ends which would give a similar result, rather than awkwardly checking for beginning and end of the iterator (I very much did not want to write this way). The iter::once chain isn't much better I'll admit, but it at least rescues the whole iterator approach.

I finally got it working after fighting with types removing the iter::once chain from the beginning (the 1 starting condition for consecutive_zeros performs the same function - maybe there is a smoother way to do a similar trick at the end with the consecutive_zeros return value from fold), then ended up completely refactoring the scan closure in favor of fold which allowed me to remove all the mutations (Just return a tuple in the fold, dummy! :D )

Finally I removed one clumsy escape gate (if n + sum of the array is > half of its length, return false) and moved the other into the overall return expression:
`if n == 0 { return true; }` -> `n == 0 ||` which works the same as a short-circuit

I feel like this one caused me more difficulty than it should have in working out the mechanics of the iterators in the solution, and as such I'm pretty pleased with how it turned out.

Do you like the iter::once chain? How would you do it differently with iterators? (also once again feeling the lack of reduce in this ancient Rust version :( )

```
/*
[1,0,0,0,1]
1
[1,0,0,0,1]
2
[1,0,0,0,0,1]
1
[1,0,0,0,0,1]
2
[1,0,0,0,0,0,1]
2
[1,0,0,0,0,0,1]
3
[1,0,1,0,0,1,0,1,0,0,1]
1
[1,0,1,0,0,1,0,1,0,0,1]
0
[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
7
[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
8
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
8
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
9
[0]
1
[0,0]
1
[0,1,0,1,0]
1
[0,0,1,0,1,0,0]
2
*/
use std::iter;

impl Solution {
    pub fn can_place_flowers(flowerbed: Vec<i32>, n: i32) -> bool {
        n == 0 || 
        flowerbed.iter().chain(iter::once(&0))
            .fold((1, 0), 
            |(consecutive_zeros, open_pots), &pot| {
                if pot == 1 { (0, open_pots) }
                else if consecutive_zeros == 2 { (1, open_pots + 1) }
                else { (consecutive_zeros + 1, open_pots) }
            }
        ).1 >= n
    }
}
```