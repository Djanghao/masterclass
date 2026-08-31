# Functional/Declarative JavaScript / TypeScript Solution

**Author:** p2MK65LFFH5KbF
**Votes:** 5
**Link:** [https://leetcode.com/problems/next-permutation/solutions/2238691/](https://leetcode.com/problems/next-permutation/solutions/2238691/)

---

```
// mutative!
function swapValuesByIndex(array, index1, index2){
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}

// mutative! 
function reversePartOfArray(array, startIndex, endIndex){
    while(startIndex < endIndex){
        swapValuesByIndex(array, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

function findLastIndexWhere(array, callbackFn){
    for(let i = array.length - 1; i >= 0; i--){
        if(callbackFn(array[i], i)) return i;
    }
}

// mutative!
function nextPermutation(nums: number[]): void {
    // step 1: find the last digit that decreases from the one after it
    const firstIndex = findLastIndexWhere(nums, (num, i) => nums[i+1] !== undefined && num < nums[i+1]);

    // step 1a: if the whole array is monotonically increasing from end to beginning, reverse the entire array
    if(firstIndex === undefined){
        reversePartOfArray(nums, 0, nums.length - 1);
        return;
    }

    // step 2: find the last digit that is larger than our "pivot" digit
    const secondIndex = findLastIndexWhere(nums, (num, i) => num > nums[firstIndex]);
    
    // step 3: swap those digits
    swapValuesByIndex(nums, firstIndex, secondIndex);
    
    // step 4: reverse the part of the number after the swapped one
    reversePartOfArray(nums, firstIndex + 1, nums.length - 1);
};

// time complexity: O(n + n + n) = O(n)
// space complexity: O(1)
```