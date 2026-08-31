# C# faster than 86% - two approaches explained

**Author:** pawel753
**Votes:** 3
**Link:** [https://leetcode.com/problems/longest-palindromic-subsequence/solutions/843008/](https://leetcode.com/problems/longest-palindromic-subsequence/solutions/843008/)

---

1. **Approach #1: Memoization**
First, let's point out that for each input string if the first and last letters equals we can ignore them (because they will be part of a palindromic subsequence) and check recursively the inner substring adding 2 to it's Palindromic check value (2 because first and last letter will be added to the final palindrome)
On the other hand, if first and the last letters do not equal - we need to check which letter should we include in the final palindrome by checking recursively two substrings:
	* created without the first letter
	* created without the last letter

	Thus we can define this function *fun* as:
	```
							  / 2 + fun(leftPos+1, rightPos-1)  IFF  s[leftPos] == s[rightPos]
	fun(leftPos, rightPos) = |
							  \\ Max( fun(leftPos, rightPos-1), fun(leftPos+1, rightPos) )     OTHERWISE
	```
	The code below implements this logic with additional memoization table
	```csharp
	public class Solution
    {
        Dictionary<(int, int), int> memo = new Dictionary<(int, int), int>();

        public int LongestPalindromeSubseq(string s)
        {
            return Helper(s, (0, s.Length - 1));
        }

        private int Helper(string s, (int, int) range)
        {
            if (memo.ContainsKey(range))
                return memo[range];

            int res = 0;
            bool equals = s[range.Item1] == s[range.Item2];
            int dist = range.Item2 - range.Item1;

            if (dist == 0)
                res = 1;
            else if (dist == 1)
                res = equals ? 2 : 1;
            else
                res = equals ?
                        2 + Helper(s, (range.Item1 + 1, range.Item2 - 1)) :
                        Math.Max(Helper(s, (range.Item1, range.Item2 - 1)), Helper(s, (range.Item1 + 1, range.Item2)));

            memo.Add(range, res);
            return res;
        }
    }
	```

2. **Approach #2: Dynamic Programming**
General principle is the same as in the first approach but instead of recursive calls we can implement the same technique using [*len x len*] array. Each array element defines the length of maximum palindromic subsequence of input string starting with first array index and ending with the second array index value, i.e. for input string *"bxbbaqd"* array element at `(2, 5)` stores maxiumum palindrome length for substring *"bbaq"*.
For the input string *"bxbbaqd"* the array would look like this and the **final result is kept in the rop right corner of the array**
	```
	 1,1,3,3,3,3,3,
	 0,1,1,2,2,2,2,
	 0,0,1,2,2,2,2,
	 0,0,0,1,1,1,1,
	 0,0,0,0,1,1,1,
	 0,0,0,0,0,1,1,
	 0,0,0,0,0,0,1,
	```
	
	We are calculating this array diagonally starting from the elements `(0,0)`, `(1,1)` etc. and the last calculated element is the result kept in the `(0, len-1)` position. The code for this approach is as follows:
	
	```csharp
	public class Solution {
		public int LongestPalindromeSubseq(string s)
		{
			int len = s.Length;
			int[,] arr = new int[len,len];

			int offset=0;
			for(int i=0; i<len; i++, offset++)
			{
				int x=0;
				for(int y=offset; y<len; y++, x++)
				{
					int val = 0;
					if(x == y)
						val = 1;
					else if(s[x] == s[y])
						val = 2 + arr[x+1,y-1];
					else
						val = arr[x,y-1] > arr[x+1,y] ? arr[x,y-1] : arr[x+1,y];
					arr[x,y] = val;
				}
			}

			return arr[0,len-1];
		}
	}
	```
	Runtime: 112 ms, faster than 86.44% of C# online submissions for Longest Palindromic Subsequence.
	Memory Usage: 45.1 MB, less than 80.51% of C# online submissions for Longest Palindromic Subsequence.