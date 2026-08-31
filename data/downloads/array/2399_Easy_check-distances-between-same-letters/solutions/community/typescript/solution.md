# ✅ [TypeScript] 100%, one-pass & in-place solution (with detailed comments)

**Author:** iablokov
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-distances-between-same-letters/solutions/2540187/](https://leetcode.com/problems/check-distances-between-same-letters/solutions/2540187/)

---

This [solution](https://leetcode.com/submissions/detail/793015446/) checks the correctness of distances in one pass by performing in-place operations. It demonstrated **59 ms runtime (100.00%)** and used **45.1 MB memory (70.59%)**. Detailed comments are provided.

**IF YOU LIKE THIS SOLUTION, PLEASE UPVOTE.**
```
// [1] we will not allocate additional storage for indices, but
//     rather use 'distance' in a clever way
function checkDistances(s: string, distance: number[]): boolean 
{
    let letter: number;
    const a = 'a'.charCodeAt(0);
    for (let pos = 0; pos < s.length; pos++)
    {
        letter = s[pos].charCodeAt(0) - a;

        // [2] provided that elements in 'distance' are initially >= 0, 
        //     we can manage two states for first and second occurences of each letter;
        //     this will allow us to ensure that, for correct distances, the following holds:
        //     'second' - 'first' + 1 - 'distance' = 0
        if (distance[letter] >= 0)
        {
            // [3] state 1: first occurence of the letter;
            //     we put '-1' to guarantee that distance[letter] < 0 for correct distance
            //     (namely, the state will be switched to 'letter was encountered once')
            distance[letter] = - distance[letter] - pos - 1;
        }
        else
        {
            // [4] state 2: second occurence of the letter
            //     if we'd put '+1' here (instead of '-1' in the previous block) 
            //     then the algorithm will fail changing the state for distance[letter] = pos = 0
            distance[letter] += pos;

            // [5] once wrong distance is found, return false
            if (distance[letter] != 0) return false;
        }
    }

    // [6] if no wrong distance was found, return true
    return true;
};
```