# [Javascript / Typescript] Really clean and easy two pointer solution

**Author:** chordmemory
**Votes:** 34
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/1617399/](https://leetcode.com/problems/move-zeroes/solutions/1617399/)

---

I've seen a lot of solutions that use splice, which imo is not in the spirit of the excercise and would probably get you in hot water if used during an interview.

Here's a really neat two pointer solution:

```ts
function moveZeroes(nums: number[]): void {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer ++) {
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val!==0) {
      nums[writePointer] = val;
      writePointer ++;
    }
  }
};
```

Expanation:

We use two pointers, one to track the current value being read in the array, the other to track the position we can write in.

If we have an array without any zeroes, then the write pointer and read pointer will stay in keeping the whole time.

However, if we do encounter a zero when reading using the read pointer, we simply do not increment the write pointer.

This means the next write of a non zero will lag behind the read pointer, overwriting the zero we found.

For simplicities sake, and to ensure trailing zeroes are maintained properly, we always assign 0 to the index we just read from. 

It may be filled in at a later date with a non zero value if one exists. If not it will remain zero, along with all subsequent indexes, satisfying the excercises' criteria.