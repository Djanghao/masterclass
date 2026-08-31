# JS/TS Solution. Simple implementation, lots of comments

**Author:** jamauss
**Votes:** 2
**Link:** [https://leetcode.com/problems/valid-mountain-array/solutions/3687648/](https://leetcode.com/problems/valid-mountain-array/solutions/3687648/)

---

Pretty simple solution with a detailed explanation below.

# Code
```
const validMountainArray = (arr: number[]): boolean => {

    // A valid mountain array must have at least 3 elements
    if(arr.length < 3) return false;

    // i is going to store the current index we're on and
    // we will add one to it to check the next number and
    // whether it's greater or less than the current number
    // depending on which "side of the mountain" we're on.
    let i = 0;

    // move forward through the array checking that the next
    // number is bigger than the previous one until that is
    // no longer the case, incrementing i each time.
    while(arr[i] < arr[i + 1] && i < arr.length) {
        i++;
    }

    // now that we're out of the loop above, check to see where we
    // ended up. If we're at the end, or if we never moved anywhere
    // at all, it's not a mountain array.
    if(i === 0  || i + 1 === arr.length) return false;

    // If we have reached this far, then we at least came to one 
    // "mountain peak" - now we check to see if the rest of the
    // values conform to the notion of a mountain and decrease in value
    while(arr[i] > arr[i + 1] && i < arr.length) {
        i++;
    }

    // if it was a true mountain array, then at this point i
    // should equal the length of the array.
    return i + 1 === arr.length;
    

};
```
See more `TypeScript`/`JavaScript` (and other language) LeetCode solutions at https://github.com/jasonmauss/LeetCode