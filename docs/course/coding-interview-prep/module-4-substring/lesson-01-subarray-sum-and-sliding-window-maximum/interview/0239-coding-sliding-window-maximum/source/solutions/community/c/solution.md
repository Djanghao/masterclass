# [C++] Easy DP | O(n) | Explained | No Deque Required :D

**Author:** luci3fr
**Votes:** 131
**Link:** [https://leetcode.com/problems/sliding-window-maximum/solutions/951894/](https://leetcode.com/problems/sliding-window-maximum/solutions/951894/)

---

Like many of us, I too had a hard time time understanding the deque approach. But fortunately, there is another great solution to this problem that runs in linear time.

**Algorithm**:

1. N is number of elements in an array and K is window size. So, Window number = N-K+1
2. Now divide array into blocks of K starting from index 1.
Here divide into blocks of size K=3. For your sample input:

    NUMS : 1, 3, -1, | -3, 5, 3, | 6, 7 

3. We have divided into blocks because we will calculate maximum in 2 ways A.) by traversing from left to right B.) by traversing from right to left. 
4. Firstly, Traversing from Left to Right. For each element ai in block we will find maximum till that element ai starting from START of Block to END of that block. So here,

    NUMS : 1, 3, -1, | -3, 5, 3, | 6, 7 
LFT     : 1, 3, 3,  | -3, 5, 5, | 6, 7

5. Secondly, traversing from Right to Left. For each element 'ai' in block we will find maximum till that element 'ai' starting from END of Block to START of that block. So Here,

	NUMS : 1, 3, -1, | -3, 5, 3, | 6, 7 
RGT    : 3, 3, -1, | 5, 5,  3, | 7, 7

6. Now we have to find maximum for each subarray or window of size K. So, starting from index = 1 to index = N-K+1 .

	NUMS : 1, 3, -1, | -3, 5, 3, | 6, 7 
	LFT    : 1, 3, 3,  | -3, 5, 5, | 6, 7
	RGT    : 3, 3, -1, | 5, 5,  3, | 7, 7

max_val[index] = max(Rgt[index], Lft[index+k-1]);

So Final Answer : 3, 3, 5, 5, 6, 7

Time Complexity: O(n)

**WHY DOES THIS WORK?**
We have divided the blocks to have same size of window. If we consider '|' as the boundary, then at any given point of time the sliding window will have atleast one boundary('|') of blocks in it. Consider below with K=7 - 

[ ...a, b, c, d | e, f, g... ]

Lft[index+k-1] - is the maximum of the element on the right of boundary.
Rgt[index] - is the maximum of elements on the left of boundary.

If we take max(Lft[index+k-1], Rgt[index]), we will get max of all elements in the current window.
```
class Solution
{
	public:
		vector<int> maxSlidingWindow(vector<int> &nums, int k)
		{
			int i, j, n = nums.size(), wins;
			wins = n - k + 1;                        // # of windows
			vector<int> lft(n), rgt(n);            // to store above explained lft and rgt

			for (i = 0; i < n; i++)
			{
				lft[i] = nums[i];
				 // If it start of block, then that element is max so far in the block
				 // Else lft[i] is max so far in the block
				if (i % k !=0) 
					lft[i] = max(lft[i - 1], lft[i]);
			}

			rgt[n - 1] = nums[n - 1];
			for (i = n - 2; i >= 0; i--)
			{
				rgt[i] = nums[i];
				// same as for left, but now traversing from right
				if (i % k != (k - 1))
					rgt[i] = max(rgt[i], rgt[i + 1]);
			}

			vector<int> ans;

			for (i = 0; i < wins; i++)
				ans.push_back(max(rgt[i], lft[i + k - 1]));

			return ans;
		}
};
```
Feel free to ask if anything is not clear.