# Clear Explanation || C++ || Greedy || Detailed Explanation

**Author:** i_QUaSaR
**Votes:** 285
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/1390811/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/1390811/)

---

**Idea :** 

For such kind of problems first thing that should hit our mind is can we solve it **Greedily**. It is a variation of Balanced Parenthesis problem.

These kind of problems are hard to proof, one need to rely on their own intution during contest I think xD. 

Now lets observe somthings that are given in the question. 
* First of all it is guarenteed that total number of '[' brackets is equal to total number of ']' brackets. 
* So, for every bracket element we are sure that its counterpart exist.
* Also, to keep string balanced, at every i 
	* *count of '[' >= count of ']'*
	* If at any moment *count of ']'* exceeds *count of '['*, this is the time when we need to do swaping.

As of now that we have noted few important observations, lets move to algorithm part. 
1. To track if brackets are balanced at any index i, lets take a variable *balance* 
	* balance = 0 , initially
		
2. When we see a opening bracket, we increament balance by one. 
	 * As we expect a closing bracket later who will balance it . '[' -> 1
		 
3. Else When we see closing bracket, we decrement balance by one so that number 
	* this will balance the opening bracket that occured previously. ']' -> -1
			
			string:    [   [    ]   ] 
			balance:   1   2    1   0   
					(at last balance is zero which means all elements are matched)
			
4. Now, the main catch where we need to swap. When number of closing brackets exceed the already occured opening brackets. This is where we need to do swapping.
	* when *balance < 0*, or *balance == -1* , swap this element with first occuring '[' from last. 
	* Doing this we change our current balance to 1 and now we can move further in search of closing brackets.
		
			string:     [      ]       ]          [
			balance :	 (1)    (0)    (-1)  ....  (1)  
			// Swap (-1) with the last (1) to balance it
		
	* As soon as we swap the brackets, we need to again set balance to 1 as current bracket is opening -> '[' = 1

Lets Do a dry run on string : "[ ] ] ] [ [ ] ["
	
	index:   0  1  2  3  4  5  6  7
	string : [  ]  ]  ]  [  [  ]  [
	balance: 1  0 -1  .  .  .  .  .
	-> swap ']' at index 2 with first '[' from last i.e index 7
	=> swap = 1 , set balance to 1 
	
	After swapping we continue till end until balance does not become -1. 
	If balance = -1, repeat above steps
	
	index:   0  1  2  3  4  5  6  7
	string : [  ]  [  ]  [  [  ]  ]
	balance: 1  0  1  0  1  2  1  0  
	-> This is final value of balance and state string that is balanced
		

**Code**

```
int minSwaps(string s) {
	int n = s.size();
	int balance = 0, swaps = 0, j=n-1;
	for(int i=0; i<n; i++)
	{
		if(s[i] == '[') balance++;
		else balance--;

		if(balance < 0)
		{
			while(i<j && s[j] != '[') j--;
			swap(s[i], s[j]);
			swaps++;
			balance = 1;
		}
	}
	return swaps;
}
```
**Time : O(N)**
**Space : O(1)**

**Hope this explanation was crystal clear. In case of any query let me know :)**
**If you liked my explanation do upvote !!!**


Also practice Similar Problems : 
1. [Minimum Add to Make Parenthesis Valid](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/)
2. [Minimum Remove to Remove Make Valid Parenthesis](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/)
3. [Minimum Insertions to balance a parenthesis string](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/)
4. [Remove Invalid Parenthesis](https://leetcode.com/problems/remove-invalid-parentheses/)
