# 5 lines code | c++ | easy-understanding | explained

**Author:** ansh1701
**Votes:** 232
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1678915/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solutions/1678915/)

---

Take the minimum number from the array and then substarct that minimum number from all the elements in the array, the final answer is the sum of the difference between the minimum number and the integer values in the given array. 
For example:
if the given array is [5,6,7,8] then the minimum value is 5. Substracting it from all the values given in the array will give us 5-5 + 6-5 + 7-5 + 8-5 =0 + 1 + 2 + 3 = 6.

EXPLANATION of the logic behind this-

We have to increment n-1 elements by 1 to make them equal. This is equal to decrementing only 1 element by 1. Since we need to make all the elements equal we can consider he given problem to be equal to decrementing all the elements by 1 in each move until they are equal to the minimum element in the array. 
For example- [5,6,7,8] can be made equal if we decrement number 8, three times and 7, two times and 6 one times. Decrementing 8 by 1 is equal to adding 1 to all the other elements. 
Conclusion - We are just reversing the problem to make it simpler :)

Please up-vote if the solution and explanation helped you in any way. Also comment if you would like any further explanation.
Thank you!
		
		class Solution {
		public:
			int minMoves(vector<int>& nums) {
				int m=INT_MAX;
				for(int n:nums) m = min(m,n);
				int ans=0;
				for(int n:nums) ans+=n-m;
				return ans;

			}
		};