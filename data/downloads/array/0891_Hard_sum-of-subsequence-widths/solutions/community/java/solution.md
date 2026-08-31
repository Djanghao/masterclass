# Easy explanation with example | Java | O(nlogn)

**Author:** spandanx
**Votes:** 6
**Link:** [https://leetcode.com/problems/sum-of-subsequence-widths/solutions/1708434/](https://leetcode.com/problems/sum-of-subsequence-widths/solutions/1708434/)

---

Let's say,
This is our array:
[3,1,2,4]

Subsequences:

				max - min
	3			3-3 = 0
	1			1-1 = 0
	2			2-2 = 0
	4			4-4 = 0
	3,1			3-1 = 2
	3,2			3-2 = 1
	3,4			4-3 = 1
	1,2			2-1 = 1
	1,4			4-1 = 3
	2,4			4-2 = 2
	3,1,2		3-1 = 2
	3,1,4		4-1 = 3
	3,2,4		4-2 = 2
	1,2,4		4-1 = 3
	3,1,2,4		4-1 = 3

answer = 0+0+0+0+2+1+1+1+3+2+2+3+2+3+3 = 23 **-------------------- reference (1)**

Let us calculate the total number of occurrences of maximum and minimum elements from these subsequence .

Maximum side occurrences: **-------------------- reference (2)**
'3' occurred 4 times
'1' occurred 1 times
'2' occurred 2 times
'4' occurred 8 times

Minimum side occurrences:  **-------------------- reference (3)**
'3' occurred 2 times
'1' occurred 8 times
'2' occurred 4 times
'4' occurred 1 times

ultimately the effective frequencies of elements would be:
'4' occurred 8-1 = 7 times
'3' occurred 4-2 = 2 times
'2' occurred 2-4 = -2 times
'1' occurred 1-8 = -7 times

answer would be:
(7 * 4) + (2 * 3) + (-2 * 2) + (-7 * 1) = 28+6-4-7 = 23
same answer right? (**reference (1)**)

Now let us get a detailed view of the maximum side occurrences of **4**:

	4			4-4 = 0
	3,4			4-3 = 1
	1,4			4-1 = 3
	2,4			4-2 = 2
	3,1,4		4-1 = 3
	3,2,4		4-2 = 2
	1,2,4		4-1 = 3
	3,1,2,4		4-1 = 3

subsequence  with 
length 4 occurred 1 times
length 3 occurred 3 times
length 2 occurred 3 times
length 1 occurred 1 times

Let us sort the array in ascending order,
[1,2,3,4]

So, to generate subsequence with length 4 we need to include 3 elements from the remaining 3 elements = 3C3 	= 1
to generate subsequence with length 3 we need to include 2 elements from the remaining 3 elements = 3C2		= 3
to generate subsequence with length 2 we need to include 1 elements from the remaining 3 elements = 3C1		= 3
to generate subsequence with length 1 we need to include 0 elements from the remaining 3 elements = 3C0		= 1

So, total occurrence of 4:
3C3 + 3C2 + 3C1 + 3C0 = 2^3 = 8 (nC0 + nC1 + nC2 + ... + nCn = 2^n)

Similarly, for the whole array,
[1,2,3,4]

4 -> 2^3 = 8
3 -> 2^2 = 4
2 -> 2^1 = 2
1 -> 2^0 = 1
Basically 2 to the power of remaining elements those are lesser than the current element.

Similarly to get the occurrences of minimum side:
[1,2,3,4]

1 -> 2^3 = 8
2 -> 2^2 = 4
3 -> 2^1 = 2
4 -> 2^0 = 1

To get the effective frequencies we need to subtract the minimum side occurrence of each element from its maximum side occurrence.
The answer would be:
((8-1)*4) + ((4-2)*3) + ((2-4)*2) + ((1-8)*1) = 28+6-4-7 = 23

Basically, to get the effective frequencies, we need to generate the 2 power array, and reversed version of the 2 power array and then subtract each element.
i.e. 

	[8,4,2,1] - 
	[1,2,4,8]
	= [8-1, 4-2, 2-4, 1-8]
	= [7, 2, -2, -7]

And ultimately we multiply them with values of our sorted array ([1,2,3,4]).

Here is the code:

```
public int sumSubseqWidths(int[] nums) {
       long twoPower [] =new long[nums.length];
       long mod = 1000000007L;
       twoPower[0] =1;
	   // generating 2 power array
       for (int i = 1; i< nums.length; i++){
           twoPower[i] = (twoPower[i-1]*2)%mod;
       }
       long effective[] = new long[nums.length];
	   // generating effective frequency array  by subtracting the 2 power array's elements from its reverse view
       for (int i = 0; i< nums.length; i++) {
    	   effective[i] = (twoPower[i]- twoPower[nums.length- i-1]);
       }
       Arrays.sort(nums); // sorting the array
       long ans = 0;
	   // now, to get the answer we multiply the elements of the sorted array with the effective frequency array elements
       for (int i = 0; i< nums.length; i++) {
    	   ans = (ans+ effective[i]*nums[i])%mod;
       }
       return (int) ans;
   }
```
