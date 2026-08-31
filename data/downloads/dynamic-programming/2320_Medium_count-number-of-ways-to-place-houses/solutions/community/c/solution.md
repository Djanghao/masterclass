# Easy C++ with explanation | DP

**Author:** venkatasaitanish
**Votes:** 154
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2198118/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/2198118/)

---

house represents no. of ways street ending with house
space represents no. of ways street ending with space
Lets think of no. of ways of placing houses on one side, 
**For n=1** 
We have only one space, either it is house or a space, so house=1 and space=1, total = house+space.
    
**For n=2**
we can put a house if previous ending is space, so house = space (i.e prev spaces)
we can put a space whatever the previous ending may be, so space = total (i.e prev total)
In this way we can continue our loop upto n, Now this answer is for one side.
    
For the other side, we have the same possible ways, so for each way on one side can correspond to any of the total ways on other side.
So our answer is  = (total*total)

**Time complexity: O(n), Space complexity: O(1)**
```
class Solution {
public:
    typedef long long ll;
    ll mod = 1e9+7;
    int countHousePlacements(int n) {
        ll house=1, space=1;
        ll total = house+space;
        for(int i=2;i<=n;i++){
	        house = space;
	        space = total;
	        total = (house+space)%mod;
	    }
	    return (total*total)%mod;
    }
};
```
**Upvote if it helps!**
