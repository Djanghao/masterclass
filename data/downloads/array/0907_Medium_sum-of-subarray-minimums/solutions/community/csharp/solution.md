# C# monotonic stack, O(n) with explanation

**Author:** subarcticmoose
**Votes:** 12
**Link:** [https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2128385/](https://leetcode.com/problems/sum-of-subarray-minimums/solutions/2128385/)

---

As explained in some of the other answers provided, the goal is to find the number of subarrays in which the each value in the array is considered the minimum. For example,

```
[3,1,2,5,4]
```
"3" is the min value for [3] only
"1" is the min value for all subarrays that include it
"2" is the min value for [2] [2,5] [2,5,4]
"5" is the min value for [5] only
"4" is the min value for [5,4] [4]

When trying to find the minimum of a given subarray, we look at an index's surrounding values. Until we hit a lesser value in each direction (previous and ahead), we know that the value we're looking at will be the min value for all subarrays in that range that include the value.

If we look at "3", there are no elements left of it, so the start of the array is the left bound. Looking right, we immediately see that "1" is less than "3", so the right boundary is between "3" and "1".
```
[(3) 1,2,5,4]. 
```

If we look at "1", we never find a value to the left or right of it that is smaller. The left boundary is the start of the array and the right boundary is the end of the array.
```
[(3,1,2,5,4)]. 
```

If we look at "2", we immediately run into the lesser value of "1" to the left of it. So in this case, we can think of the left boundary being between "1" and "2". However, there are no lesser values than "2" to the right, so the right boundary will be the end of the array. All subarrays that include 2 in this range will have a min value of "2" (in this case, just [2], [2,5] and [2,5,4] because the next subarray [5,4] does not include "2").
```
[3,1 (2,5,4)]. 
```

For "5", the numbers on both sides are both smaller, so we partion on either side of "5".
```
[3 1,2 (5) 4]. 
```

For "4", we don't hit a smaller number on the left side until we get to "2". The right side is the end of the array.
```
[3 1,2 (5, 4)]. 
```

Using some mathematical proofs (mentioned in plenty of other answers), the number of existing subarrays in a range that include the specific value is equal to the number of left indexes (including the index we're at) multiplied by the number of indexes on the right side (including the index we're at).

value = "1", index is 1
recall that this slice is only bounded by the start and end of the array
[(3,1,2,5,4)]

left side, which is index 0 and 1
[(3,1),2,5,4] = 2

right side, which is index 1,2,3,4
[3,(1,2,5,4)] = 4

**Number of subarrays in this slice that include "1" is equal to 2 * 4 = 8, and 8 *  1 = 8**

value = "2", index is 2
recall that this slice is only bounded by "1" to the left and the end of the array to the right
[3,1 (2,5,4)]

left side = 1, since we're already at the left bound
[(3,1,(2),5,4] = 1

right side = 3, which is index 1,2,3,4
[3,1,(2,5,4)] = 3

**Number of subarrays in this slice that include "1" is equal to 1 * 3 = 3, min value is 2, 2 * 3 = 6
**
**If we repeat this logic for each index and add these totals together and multiply them by the min value in the array, we'll have our sum of subarray minimums.**

In code, we use a montomic increasing (or not decreasing) stack to keep track of the index of the previous minimum. If the next value is >= than the value for the index at the top of the stack, we add that index and continue. **The point of using the stack is to keep track of all the values since we encountered the previous smaller value.**

Traversing the array [3,1,2,5,4], the increasing stack will look like:
3
3 -> 1, **1 is smaller so we need to pop 3 to maintain increasing order.**
1 -> 2
1 -> 2 -> 5
1 -> 2 -> 5 -> 4, **4 is smaller than 5, so we pop until order restored**
1 -> 2 -> 4

Notice how when we came to 4, we only needed to pop 5 because 2 is smaller than 4? That corresponds exactly to what we saw earlier when figuring out the subarrays where 4 is the minimum: 
[3,1,2,(5,4)]

If the value is < top of the stack, we pop the index and use it as the midpoint. We also need to set the left and right bounds to find the number of subarrays in which our array[mid] is the min value for. The right value can be represented by our current spot in the array traversal, and the left value is either a) the next index in the stack (which was below the one we just popped) or -1 if the stack is empty because we're at array[0].

Final note-this method does need to traverse beyond the length of the array itself, hence i <= arr.Length, not just <. 





```
		// validations
        if (arr == null || arr.Length == 0) return 0;  
		
        long sum = 0;
        Stack<int> stack = new Stack<int>();
		
		// traverse the array
        for(int i = 0; i <= arr.Length; i++)
        {
			// check if stack is > 0
			// if so, check if current value is smaller than top of stack
            while (stack.Count > 0 && arr[stack.Peek()] > (i == arr.Length? Int32.MinValue : arr[i])) {
				// if arr[i] < arr[stack.Peek()], we need to pop 
				// until we find an index where the value was smaller
				// each time we pop, recalc the min for the subarray
                int mid = stack.Pop();
				
				// left bound is previous stack entry (or beginning of array)
                int left = stack.Count == 0 ? -1 : stack.Peek();
				
				// right bound is our current index (or end of array)
                int right = i;
				
				// multiple the min value by number of subarrays that include it
                sum += (long)(arr[mid]) * (mid - left) * (right - mid);
            }
            stack.Push(i);
        }
        
        return (int)(sum % 1000000007);
```
		
Similary, we can accomplish the same thing using a second array to store the results of subarray sums we already calculated, which is explained in greater detail here: https://leetcode.com/problems/sum-of-subarray-minimums/discuss/257811/Python-O(n)-slightly-easier-to-grasp-solution-(explained)

[3] = 3
[3,1] [1] = 1 + 1 = 2
[3,1,2] [1,2] [2] = 1 + 1 + 2 = 4
[3,1,2,5] [1,2,5] [2,5] [5] = 1 + 1 + 2 + 5 = 9
[3,1,2,5,4] [1,2,5,4] [2,5,4] [5,4] [4] = 1 + 1 + 2 + 4 + 4 = 12

An array of the results for the sum min up to and including each index would look like-
result[3,2,4,9,12]

As stated in the other answer,
If array[i-1] <= array[i], then result[i] = result[i-1] + array[i]

In the first example, when we encounter a value smaller than the top of the stack, we pop from the stack and perform the calculations by multiplying the value of the popped index by the ranges specified by the left - mid and mid - right boundaries, or arr[mid] * (mid-left) * (right-mid).

In this version, we continously pop until we reach the correct point of the stack, then add the previously calculated results[j] to the new results from the next subarray.

```
        // validations
        if (arr == null || arr.Length == 0) return 0;  
		
        Stack<int> stack = new Stack<int>();
        long[] results = new long[arr.Length + 1];
        results[0] = 0;
        for (int i = 0; i < arr.Length; ++i) {
            while (stack.Count() > 0 && arr[i] < arr[stack.Peek()]) {
                stack.Pop();
            }
            int j = stack.Count() > 0 ? stack.Peek() : -1;
            results[i+1] = (results[j+1] + (arr[i] * (i-j)));
            stack.Push(i);
        }
        
        return (int)(results.Sum() % 1000000007);