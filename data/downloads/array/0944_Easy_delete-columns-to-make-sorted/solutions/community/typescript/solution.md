# Simple Typescript code with comments

**Author:** astiksarathe
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2990383/](https://leetcode.com/problems/delete-columns-to-make-sorted/solutions/2990383/)

---


# Complexity
- Time complexity: O(N*M) N = string length, M = strs array length
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minDeletionSize(strs: string[]): number {
    
    const N = strs[0].length
    const M = strs.length
    let count = 0

    // traverse each  columns
    for(let i=0; i< N; i++){;
        // traverse each row 
        for(let j = 1; j < M; j++){
            // check previous char should be smaller or equall in case of greater
            // break the loop bcoz we need to delete that column.
            // main the count of delete
            if(strs[j-1].charCodeAt(i) > strs[j].charCodeAt(i)){
                count++
                break;
            }
        }
    }
    return count
}; 
```
**If you like this solution please upvode, Thanks**