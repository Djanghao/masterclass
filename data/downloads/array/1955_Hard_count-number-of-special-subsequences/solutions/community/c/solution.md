# Easy DP Solution | [C++] | O(n) Time, O(1) Space | With Explanation

**Author:** oliver_bowman
**Votes:** 13
**Link:** [https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1376530/](https://leetcode.com/problems/count-number-of-special-subsequences/solutions/1376530/)

---

Let us consider 3 types of subsequences
* **Type 0** - It is a subsequence that contain only a positive number of zeroes
* **Type 1** - It is a subsequence that contain a positive number of zeroes folowed by a positive number of ones
* **Type 2** - It is a subsequence that contain a positive number of zeroes folowed by a positive number of ones followed by  positive number of twos.

We have 3 variables
* z - number of valid subsequences of *Type 0*
* o - number of valid subsequences tof *Type 1*
* t - number of valid subsequences of *Type 2*

Now we iterate through the array and update each variable's value:
* **Case 1 - The element at the i'th indez is '0'** :  Here we add the number of Type 0 subsequences that end at the i'th index to the variable **z**.  Hence we add z+1 to z.
	* Subsequence where the '0' at the i'th index is the only element - ***1 subsequence***.
	* Subsequence with more than one element where the '0' at the i'th index is the last element - ***z subsequences***.
	* Thats how we get the *z+1* thats added to z.
* **Case 2 - The element at the i'th indez is '1'** :  Here we add the number of Type 1 subsequences that end at the i'th index to the variable **o**.  Hence we add o+z to o.
	* Subsequence where the '1' at the i'th index is the single '1' in that subsequence - ***z subsequences***.
	* Subsequence with multiple 1's where the '1' at the i'th index is the last element - ***o subsequences***.
	* Thats how we get the *o+z* thats added to o.
* **Case 3 - The element at the i'th indez is '2'** :  Here we add the number of Type 2 subsequences that end at the i'th index to the variable **t**.  Hence we add t+o to t.
	* Subsequence where the '2' at the i'th index is the single '2' in that subsequence - ***o subsequences***.
	* Subsequence with multiple 2's where the '2' at the i'th index is the last element - ***t subsequences***.
	* Thats how we get the *t+o* thats added to t.

The final value of **t** at the end of the iteration will be the answer.
```
class Solution {
public:
    int countSpecialSubsequences(vector<int>& nums) {
        long long z=0,o=0,t=0;
        long long mod =1e9 +7;
        for(int i=0;i<nums.size();i++)
        {
            if(nums[i]==0)
                z=(z+z+1)%mod;
            else if(nums[i]==1)
                o=(o+o+z)%mod;
            else
                t=(t+t+o)%mod;
        }
        return (((t%mod)+mod)%mod);
    }
};
```

Hope this helps.