# JS | with comments

**Author:** darinsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3469450/](https://leetcode.com/problems/guess-the-majority-in-a-hidden-array/solutions/3469450/)

---

# Intuition
We need some way to either find values in each index.
Or may be we don't need it, and we can check if values in each index is equal to the value in index 0 for example. 

# Approach
Next lots of observations of query results, can lead to this:
if query 0123 = query 123i -> nums[0] === nums[i] 
this way we can check all values with index 4+

indexes 123 should be checked manually. 
we can check them by comparing with q1234

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {ArrayReader} reader
 * @return {number}
 */
var guessMajority = function(reader) {
    const q0123 = reader.query(0,1,2,3)

    const n = reader.length()
    let counter = 1 //count of elements = nums[0]
    let difIndex
    //check all element after index 5
    for (let i=4; i<n; i++) {
        const q123i = reader.query(1,2,3,i)
        if (q0123 === q123i) {
            counter++
        } else {
            difIndex = i
        }
    }    

    /*
    compare q1234 with other queries to check elements 1-3 in nums
    indeces=0,2,3,4 - to check if nums[1] === nums[0]
    indeces=0,1,3,4 - to check if nums[2] === nums[0]
    indeces=0,1,2,4 - to check if nums[3] === nums[0]
     */
    const q1234 = reader.query(1,2,3,4)
    const check = (indeces, index) => {
        if (q1234 === reader.query(...indeces)) { //check index 1
            counter++ 
        } else {
            difIndex = index
        }
    }
    
    check([0,2,3,4], 1)
    check([0,1,3,4], 2)
    check([0,1,2,4], 3)

    const diffElementCount = n - counter
    if (counter > diffElementCount) {
        return 0
    } else if (counter === diffElementCount) {
        return -1
    } else {
        return difIndex
    }
};
```