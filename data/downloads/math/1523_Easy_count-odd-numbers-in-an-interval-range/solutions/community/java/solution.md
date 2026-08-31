# Java- Math & Logic Based O(1) Time and Space 100% Faster

**Author:** aastha-621
**Votes:** 219
**Link:** [https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1798724/](https://leetcode.com/problems/count-odd-numbers-in-an-interval-range/solutions/1798724/)

---

**KINDLY UPVOTE IF IT HELPS!**
The same logic can easily be implemented in c++ as well.

**Case 1:  when the range starts and ends with an odd number.** 
		for a small range, lets see how it looks like-
		 odd-even-odd-even-odd
		[odd-even], [odd-even], [odd]
		
We see alternate odd and even numbers, and there is just one odd number at the end which does not have an even pair! 
		
So, count of even numbers ==(nums/2), then there is just one extra odd number, 
therefore, number of odd numbers= (nums/2) + 1

Now, Consider these cases-

 **Case 2**: **starting with odd ending with even**
	odd-even-odd-even
	[odd-even], [odd-even]

**Case 3**: **starting with even ending with odd**
	even-odd-even-odd
	[even-odd], [even,odd]

In both the above cases, 
count of odd==count of even== nums/2

Last Case
**Case 4**: **starting with even ending with even**
	even-odd-even-odd-even
	[even-odd], [even,odd], [even]

 count of odd=nums/2 , which is similar to case 1 and here we have an extra even number instead of odd, so no need to add anything!
 
 So in all cases except Case 1, the answer is nums/2!

```
 public int countOdds(int low, int high) {
       int nums=high-low+1;  //counting total numbers in range
 
		if(low%2!=0 && high%2!=0)  
            return nums/2 + 1;
        
        else
		return nums/2;
    }
```