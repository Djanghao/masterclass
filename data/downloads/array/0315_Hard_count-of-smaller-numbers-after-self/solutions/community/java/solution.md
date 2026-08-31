# merge sort, CLEAR simple EXPLANATION with EXAMPLES, O(n lg n)

**Author:** confiscate
**Votes:** 1651
**Link:** [https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/445769/](https://leetcode.com/problems/count-of-smaller-numbers-after-self/solutions/445769/)

---

# basic idea:

we do a normal merge sort
- whenever we merge 2 small sub-arrays into 1 bigger result array
- **the standard merge algorithm is already checking for cases which this coding problem is asking for**
	- the standard merge algorithm already checks for *numbers positioned to the right of the current element, that are smaller than the current element*


# example:

The example given in the problem's description: [5, 2, 6, 1]
Let us do normal merge sort on this given array.

First, just as normal merge sort, we
1. recursively split array
2. go top-down until each sub-array is of size 1

[5, 2, 6, 1]
 [5, 2]      [6, 1]
[5] [2]     [6] [1]          

Now, we go back bottom-up.
We merge [5] and [2] into a result array
Normally we just 
1. compare the first element of both sub-arrays (5 and 2)
2. take smaller element (2)
3. put smaller element into the "merged" area (now holding only 2)

**NOTICE:  in this case, we know that:**
* before the sort, all elements in the left sub-array [5], are orginally positioned LEFT of all elements in the right sub-array [2]
* 5 > 2

* Now **we have found 1 instance, of an element (2), that is positioned to the right side of 5, and smaller than 5**
* We can increment by 1, the answer result count for 5
* If we repeat this process, we will have answer result counts for all elements, which is **the answer the coding problem is asking for**

For the rest of the explanation, I will use this notation to describe the answer result count:
5(3) 2(0) 6(1) 1(0)

In this example for notation only, for the original input element 5, there are 3 elements to the right side of 5, that are smaller than 5.

Let's continue on our original example, from the problem description:

[5, 2, 6, 1]
 [5, 2]      [6, 1]
[5] [2]     [6] [1] 

result count:
5(0) 2(0) 6(0) 1(0)

if we merge up one level from the bottom
* 2 is smaller than, and to the right of 5  ==> increment count for 5
* 1 is smaller than, and to the right of 6  ==> increment count for 6

[5, 2, 6, 1]
[2, 5]      [1, 6]

result count:
5(1) 2(0) 6(1) 1(0)

Now we have to merge:
* left sub-array, [2, 5]
* right sub-array [1, 6]

Notice that
* all elements in right sub-array, are originally positioned to the right, of all elements in the left sub-array

Notice that 1, from the right sub-array, is less than 2 from the left sub-array.
That means 1 is positioned right of 2, and smaller than 2
So we should increment answer result count for 2

Notice that 1 is also less than 5, and positioned to the right of 5

In fact, 1 is less than, and positioned to the right of, all elements in the left-subarray after the element 2

**this is because the left sub-array was already sorted from previous recursion merge-sort calls.**

in this example, it would be:
1 < 2 < 5

so we will also need to increment the answer result count for 5

this is the updated state:

[5, 2, 6, 1]
[2, 5]      [1, 6]     ---------->  [2, 5] [6]         + merged= [1]

result count:
5(1) 2(0) 6(1) 1(0)  ------->  5(2) 2(1) 6(1) 1(0)


now, the only element in the right sub-array is 6. The elements in the left sub-array, [2, 5], are all smaller than 6. They are not what the problem is looking for, so just move them to the "merged" area, same as normal merge sort.


[5, 2, 6, 1]
[2, 5]      [1, 6]     ---------->  merged= [1,2,5,6]

result count:
5(1) 2(0) 6(1) 1(0)  ------->  5(2) 2(1) 6(1) 1(0)

**Merge sort is done now.
The final answer result count is [2,1,1,0], same as in the problem description**

Since we just did a normal merge sort, and added some checking logic along the way, the runtime is same as normal merge sort, O(n log n)

## additional issue
take this example:

left-subarray:  [9, 11, 15]
right-subarray: [2, 5, 6]
merged: [ ]

say we are merging these 2 sub-arrays into 1 result array.
In a normal merge, this is O(n). 
We compare the heads of the 2 subarray, find the smaller, and move it to merged area
repeat one by one

But for this coding problem, 2 is smaller than 9, and to the right of 9. We know that 2 is also smaller than, and to the right of, every element in left sub-array after 9

If we increment the answer result count for 9, and then 
increment the answer result count for 11, and then
increment the answer result count for 15, then
we just did 3 operations (basically traversed the whole left sub array).

Ok now 2 is handled. We move 2 to the merged area. Now we process 5
We compare 5 and 9. Same thing happens. We again have to increment the answer result count for 9, 11, and 15.

Now we process 6. Same thing again, increment the answer result count for 9, 11, and 15.

So the operation for merging the left and right sub-arrays, becomes O(N^2), instead of the usual O(N) merge for normal merge sort.

We can avoid this slowness, by keeping a count, of the number of elements moved from the right sub-array to the merged area. Let's call this count "numElemsRightArrayLessThanLeftArray"

In our example

left-subarray:  [9, 11, 15]
right-subarray: [2, 5, 6]
merged: [ ]
numElemsRightArrayLessThanLeftArray: 0

Here are the steps we take:
1. compare 2 and 9
2. 2 is less than 9 and positioned right side of 9
3. DO NOT increment anwer result count for 9 
4. increment numElemsRightArrayLessThanLeftArray
5. move 2 to "merged" area
6. repeat for 5
	7. increment numElemsRightArrayLessThanLeftArray
	8. move 5 to "merged" area
9. repeat for 6
	10. increment numElemsRightArrayLessThanLeftArray
	11. move 6 to "merged" area

the state is now:

left-subarray:  [9, 11, 15]
right-subarray: []
merged: [2, 5, 6]
numElemsRightArrayLessThanLeftArray: 3
result count:  9(0) 11(0) 15(0)

numElemsRightArrayLessThanLeftArray is 3. This indicates there are currently 3 elements less than 9, that are to the right side of 9

next step, right side sub-array is empty. Move all elements in left sub-array to "merged" area.
Since 
numElemsRightArrayLessThanLeftArray = 3,
we add 3 to the answer result counts of 9, and move 9 to the "merged" area.
We repeat for elements 11 and 15

result count:  9(3) 11(3) 15(3)

**This makes the the merge operation O(N) as usual for merge sort. We avoid O(N^2)**



# Inversions

some other discussion explanation threads mention the word "inversion" a lot, but don't really explain what it is, or how it relates to this problem

an inversion is a **Pair of Numbers**, in an array, where the left number is bigger than the right number

example:
2, 9, 6

the **pair of numbers** (9, 6) is an **inversion**. 

the pair (2, 9) is NOT and inversion

So, in a sorted array
2, 6, 9

there are 0, no inversions

but an reverse-sorted array has the max number of inversions:
9, 6, 2

This coding problem, simply is asking you to give a count of inversions for each element.

Don't let other discussions explanations confuse or intimidate you. The concept is simple, but often folks like to complicate the issue to seem smart, instead of trying to actually help clarify the underlying meaning

```
    // Wrapper class for each and every value of the input array,
    // to store the original index position of each value, before we merge sort the array
    private class ArrayValWithOrigIdx {
        int val;
        int originalIdx;
        
        public ArrayValWithOrigIdx(int val, int originalIdx) {
            this.val = val;
            this.originalIdx = originalIdx;
        }
    }
    
    public List<Integer> countSmaller(int[] nums) {
        if (nums == null || nums.length == 0) return new LinkedList<Integer>();
        int n = nums.length;
        int[] result = new int[n];
        
        ArrayValWithOrigIdx[] newNums = new ArrayValWithOrigIdx[n];
        for (int i = 0; i < n; ++i) newNums[i] = new ArrayValWithOrigIdx(nums[i], i);
            
        mergeSortAndCount(newNums, 0, n - 1, result);
        
        // notice we don't care about the sorted array after merge sort finishes.
        // we only wanted the result counts, generated by running merge sort
        List<Integer> resultList = new LinkedList<Integer>();
        for (int i : result) resultList.add(i);
        return resultList;
    }
    
    private void mergeSortAndCount(ArrayValWithOrigIdx[] nums, int start, int end, int[] result) {
        if (start >= end) return;
        
        int mid = (start + end) / 2;
        mergeSortAndCount(nums, start, mid, result);
        mergeSortAndCount(nums, mid + 1, end, result);
        
        // left subarray start...mid
        // right subarray mid+1...end
        int leftPos = start;
        int rightPos = mid + 1;
        LinkedList<ArrayValWithOrigIdx> merged = new LinkedList<ArrayValWithOrigIdx>();
        int numElemsRightArrayLessThanLeftArray = 0;
        while (leftPos < mid + 1 && rightPos <= end) {
            if (nums[leftPos].val > nums[rightPos].val) {
                // this code block is exactly what the problem is asking us for:
                // a number from the right side of the original input array, is smaller
                // than a number from the left side
                //
                // within this code block,
                // nums[rightPos] is smaller than the start of the left sub-array.
                // Since left sub-array is already sorted,
                // nums[rightPos] must also be smaller than the entire remaining left sub-array
                ++numElemsRightArrayLessThanLeftArray;
            
                // continue with normal merge sort, merge
                merged.add(nums[rightPos]);
                ++rightPos;
            } else {
                // a number from left side of array, is smaller than a number from
                // right side of array
                result[nums[leftPos].originalIdx] += numElemsRightArrayLessThanLeftArray;
                
                // Continue with normal merge sort
                merged.add(nums[leftPos]);
                ++leftPos;
            }
        }
        
        // part of normal merge sort, if either left or right sub-array is not empty,
        // move all remaining elements into merged result
        while (leftPos < mid + 1) {
            result[nums[leftPos].originalIdx] += numElemsRightArrayLessThanLeftArray;

            merged.add(nums[leftPos]);
            ++leftPos;
        }
        while (rightPos <= end) {
            merged.add(nums[rightPos]);
            ++rightPos;
        }
        
        // part of normal merge sort
        // copy back merged result into array
        int pos = start;
        for (ArrayValWithOrigIdx m : merged) {
            nums[pos] = m;
            ++pos;
        }
    }
```