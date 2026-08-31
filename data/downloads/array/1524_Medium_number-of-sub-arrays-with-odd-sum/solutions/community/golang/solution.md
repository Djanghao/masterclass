# [Go][DP] SUPER Detailed Explanation Step-by-Step O(n)O(1)

**Author:** stanroze
**Votes:** 22
**Link:** [https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/1779146/](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/solutions/1779146/)

---

There are a ton of solutions posted for this problem, however a lot of them are complete solutions, skipping a lot of steps. It took me an unreasonably long time to try and decipher other solutions, so here I want to try and explain how the main solution is achieved through an iterative process of coding.

Starting with a dynamic programming solution like this, you always need to start with a helper array that will store some information. In this case we need an array to store number of `odd` sums, note this is just the number of `odd` sums and NOT the sum itself.

so for `A[0...n-1, n]` we will need store in a helper array the number of `odd` sums ending at `n`

```
// create array
odd := make([]int, len(A))
// if A = { 1 }
//     then odd[0] = 1     // the number of odd sums at  A[0] is 1, the subarray is {1} 
// if A = {.........i}{i+1......n}
//    then odd[i] = the number of odd sums at index i in the array
```

**now here is where the algorithm takes shape**
Observe the following mathematic property
```
odd + odd = even             //   5 + 5 =  10
odd + even = odd             //   5 + 2 =  7         

even + odd = odd             //   2 + 5 = 7
even + even = even           //   2 + 2 = 4
```

Notice that depending on the number we're adding the sum changes between `even` and `odd` this means we will need a new helper array to store `even` number of sums, so that we can go back and forth

```
 let odd[i] store the current number of odd sums ending at A[i]
 let odd[i-1] store the number of all previous subarrays whos sum is odd
 
 let even[i] store the current number of even sums ending at A[i]
 let even[i-1] store the number of all previous subarrays whos sum is even
 
 let A[i] be the current value in the array at index i
 if A[i] is odd
      //   all the **PREVIOUS subarrays that had an odd** sum become even 
	  //   all the **PREVIOUS subarrays that had an even sum** become odd plus itself (A[i] is odd remember)
	  even[i] = odd[i-1] 
	  odd[i] = even[i-1] + 1
	  // example of just one possible subarray
	  // sum 3                  sum 8
	  // {1 , 2 } + { 5 } = {1 , 2 , 5 } 
	  // note we don't need to care what the contents of the subarrays
 if A[i] is even
      //   all the **PREVIOUS subarrays that had an odd** sum STAY odd 
	  //   all the **PREVIOUS subarrays that had an even sum** STAY even plus itself (A[i] is even remember)
	  even[i] = even[i-1] + 1
	  odd[i] = odd[i-1]
	  // example of just one possible subarray
	  // sum 3                  sum 9
	  // {1 , 2 } + { 6 } = {1 , 2 , 6 } 
	  // note we don't need to care what the contents of the subarrays	
```

Now its just a matter of translating this to code
*Note: for simplicity sake and clarity, i'm ignoring the problems requiremnet to mod by 1000000007*
```
A := []int{1,2,3,5}
	
	// make our DP arrays to hold the number of sums
    odd :=  make([]int, len(A))
	even := make([]int, len(A))

    // start with the first subarray which is itself
	// if the first item is odd then A[0] % 2  = 1 e.x. 3 % 2 = 1
	
	// if the first item is even then it'll be the opposite of odd
	// e.x.: if odd is 1 then even is 1-1 = 0 otherwise its 1 - 0 = 1
	
	odd[0] = A[0] % 2 
    even[0] = 1 - odd[0]
	// this can also be written as
	// if A[0] % 2 == 1 {
    //     odd[0] = 1
    // } else {
    //     even[0] = 1
    // }
	
    for i := 1; i < len(A); i++ {
        // this is the exact logic from above
		if A[i] % 2 == 1 {
			even[i] = odd[i-1]
            odd[i] = even[i-1] + 1
        } else {
            even[i] = even[i-1] + 1
            odd[i] = odd[i-1]
        }
    }
	
	// now we just need to aggregate the sum in the odd array
	totalOdd := 0
    for _, oddSum := range odd {
        totalOdd += oddSum
    }
	
	return totalOdd
```	
	
This algorithm runs in O(n) and takes O(n) space, now that we have this DP template we can make some small changes.

1.  the loop at the end to count up total sums can be removed and the sums can be counted as we go


	```
	A := []int{1,2,3,5}

	odd :=  make([]int, len(A))
	even := make([]int, len(A))

	odd[0] = A[0] % 2 
    even[0] = 1 - odd[0]
	
	// we either already have 1 odd sum or dont
	totalOdd := odd[0]
    for i := 1; i < len(A); i++ {
        // this is the exact logic from above
		if A[i] % 2 == 1 {
			even[i] = odd[i-1]
            odd[i] = even[i-1] + 1
        } else {
            even[i] = even[i-1] + 1
            odd[i] = odd[i-1]
        }
		totalOdd += odd[i]
    }	
	return totalOdd
	```
	
	Okay, we've removed one loop. Now notice that in our DP we only really care about the previous number. We are always looking at either `odd[i-1]` or `even[i-1]` and we never look at the rest of the DP array. This means we can replace the odd and even arrays with just one variable for each of them.
	

```
	A := []int{1,2,3,5}

	odd := A[0] % 2 
    even := 1 - odd

	totalOdd := odd
    for i := 1; i < len(A); i++ {
		if A[i] % 2 == 1 {
			// note here we can't just rename 
			// if we do even = odd then the next line will get the wrong even number
			// essentially this is a swap + 1
			tmp := even + 1
			even = odd
            odd = tmp
        } else {
            even = even + 1
            odd = odd
        }
		totalOdd += odd
    }	
	
	return totalOdd
```
	
Almost there. Couple of things to notice now. 
1. `odd = odd ` becomes a no-operation and can be removed
2. the only real operation we're doing is `even + 1`
3. it is just a matter what we store in the `odd` vs `even` variables
4. if we move `even + 1` to the top, we are left with an empty `else`
5. we no longer need to calculate the initial number as odd or even and can start with `i = 0`

Let's put all those to the code

```
    A := []int{1,2,3,5}
	odd := 0
    even := 0
	totalOdd := 0
	// note i is starting at 0 now
    for i := 0; i < len(A); i++ {
	    even = even + 1
		if A[i] % 2 == 1 {
			// this now becomes a simple swap
			even, odd = odd, even
        } 
		
		totalOdd += odd
    }	
	
	return totalOdd


and now you have arrived at the same algorithm that you see all over the place here!