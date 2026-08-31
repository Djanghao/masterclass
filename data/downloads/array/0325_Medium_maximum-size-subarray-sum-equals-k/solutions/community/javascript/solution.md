# Javascript Solution - O(n) solution explained

**Author:** dclif
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1340176/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1340176/)

---

## Solution O(n)

### Intro
My first solution was the double for-loop n^2 approach to build up every possible subbarray. My next thought was, "*how can I get a faster solution while still being able to test every possible subarray?*"

I'm sure many people who started this problem thought the next approach would be a sliding window or 2 pointer problem, only to later realize we cant use those techniques due to negative numbers possibly being present in the array (*so we cant apply the expand or contract the subarray that way with this problems contraints*)

I'll be honest, the solution is not yet 100% intuitive for me and still fuzzy, but maybe writing it out for other may helpe me and help you get started.

### Solution Explanation
```
Input = [-2, -1, 2, 1],  k=1
```
The O(n) time solution below makes use of a hashmap that stores the current sum at i and the index. `Map<sum_at_index_i, index_i>`.
- we have 2 conditions to check for a solution:
	- is `running_sum === k`? (*This seems pretty logical condition* .. the next one takes time to understand)
	- is `map.get(running-sum -k)` in the hashmap ? 
		What does this mean? *What map.containsKey(sum - k) returns is the index where the sum of every element up to that index from index 0 is sum - k*
		
		This logic maps to the idea of finding the sum of a range using this prefix sum formula:
		```
		Finding sum of range using prefix Sum
		---------------------------------------
		sum[ i: j ] = prefix_sum[j] - prefix_sum[i - 1]
		
		In our problem
		j (which is the current iteration of i in our for loop) map to this this part in the formula above  --->  prefix_sum[j]
		The value we get from `map.get(running_sum-k)` is  `prefix_sum[i - 1]`
	
		```
		



## Code

```
var maxSubArrayLen = function(nums, k) {
    if(nums.length === 0) return 0;
    
    let running_sum = 0;
    let max_length = 0;
    const map = new Map(/*sum: index */);
    
    for (let i = 0; i < nums.length; i++) {
        running_sum += nums[i];
        
        // This is straight forward. Just check if the running sum equals K.
        if(running_sum === k){
            max_length = i + 1
        }
        if (map.has(running_sum - k)){
            const subarray_length = i - map.get(running_sum - k);
            max_length = Math.max(max_length, subarray_length);
        }
        
        if (!map.has(running_sum)){
            map.set(running_sum, i);
        } 
    }
    return max_length;
}
```

## Text explanation for an input of `[-2, -1, 2, 1], k=1`

```
Consider {-2,-1,2,1} and k = 1, 

let contiguous sum 's' so far be 0.

i=0
Take the first element: -2 and add to s (s is now -2)
How much more do I need to get to 1? 
    I need +3. 
    Check HASHMAP: Is there a contiguous sub-array so far worth -3 that I can drop (minus for drop), so that -2 - (-3) == 1? 
    If not, note down for future reference in hash-map that a cumulative sum of -2 is formed until index 0.



i=1
Take the second element: -1 and add to s (s is now -3). 
    How much more do I need to get to 1? I need +4. 
    Check HASHMAP: Is there a contiguous sub-array so far worth -4 that I can drop (minus for drop), so that -3 - (-4) == 1? 
    If not, note down for future reference in hash-map that a cumulative sum of -3 is formed until index 1



i=2
Take the third element: 2 and add to s (s is now -1). 
    How much more do I need to get to 1? I need +2.
    Check HASHMAP: Is there a contiguous sub-array so far worth -2 that I can drop (minus for drop), so that -1 - (-2) == 1?
        HASHMAP={-2:0, -3:1, -1:2}
        YES, at index 0 we have a cumulative sum of -2
      
          0   1  2  3
        {-2, -1 ,2, 1}
                 i
        if exlude indicies from 0 & before from out subarray and only look at the indicies after it and up to including  i, 
        we see only index 1 & 2 which their values sum to 1

     

i=3
Take the fourth element: 1 and add to s (s is now 0). 
    How much more do I need to get to 1? I need 1. 
    Check HASHMAP: Is there a contiguous sub-array so far worth -1 that I can drop (minus for drop), so that 0 - (-1) == 1? 
        HASHMAP={-2:0, -3:1, -1:2, 0:1}
        YES, at index 2 we have a cumulative sum of -2

          0   1  2  3
        {-2, -1 ,2, 1}
                    i
        if we exclude indicies from 2 and before from out of our subbarray, and only look at indicied after it up to including i
        we only see index 3, which's value sums to 1
```