# Typescript | Javascript | With comments

**Author:** OsidAbu-Alrub
**Votes:** 2
**Link:** [https://leetcode.com/problems/subsets-ii/solutions/2489881/](https://leetcode.com/problems/subsets-ii/solutions/2489881/)

---

```
function subsetsWithDup(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const subsets = [[]];
  let indexOfFirstNewlyAddedElement = 0;
  for(let i = 0 ; i < nums.length ; i++){
    let startIndex = 0;
    
    // if we find a duplicate element, 
    // then don't add element to all exisiting subsets
    // but instead add to subsets that were added
    // in the previous step only
    if(nums[i] === nums[i - 1])
      startIndex = indexOfFirstNewlyAddedElement;
    
    // if our subsets length is 4, then the last element added will be
    // at index 3, but the next element will be added at index 4, thats
    // why indexOfFirstNewlyAddedElement is equal to subsets.length
    indexOfFirstNewlyAddedElement = subsets.length;
    for(let j = startIndex ; j < indexOfFirstNewlyAddedElement ; j++){
      const set = [...subsets[j]];
      set.push(nums[i]);
      subsets.push(set);
    }
  }
  return subsets;
};
```