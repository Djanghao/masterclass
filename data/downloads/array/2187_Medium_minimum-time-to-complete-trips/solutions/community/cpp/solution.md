# ✅ C++| Answer on Binary Search | List of Related Problems

**Author:** chandanagrawal23
**Votes:** 498
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/1802416/](https://leetcode.com/problems/minimum-time-to-complete-trips/solutions/1802416/)

---

In this type of questions (where question want some minimum/ maximum / at least ) we use concept of Binary search more formally this is a technique which generally called as **"Answer on Binary Search"** (some people also say  Binary Search on Answer) .

**Brute Force** -

We will check whether the minimum time can be 1 , then 2  , then 3 .......... untill we found an answer.

**BInary Search**

Can we do something better ? , why we have to check linearly ? instead we can try Binary search , but how ?

Let me take a simple scenario -

suppose I take minimum time as 10 and this can not be the minimum time , then 9 also cannot be minimum time , 8 can't in general less than 10 cannot be answer , so instead of check every value we will check using Binary search if we find some valid condition we will move our left and right pointer accordingly.

```
PSUDO CODE-
-------------
int check(a,mid)
{
	// find answer using this mid
}
while(l<r)
{
	m = (l+r)/2;
	if(check(arr,m)>=givenK)
	//	move left or right accordingly
	else
	//	move left or right accordingly
}
return ans;
```

In this question , we have to find minimum time 
- let's take the **lowestTime can be 1** and **highestTime can be as large as 1e14** (10^14) , 
- now we will find for given **mid** what will be the answer (which is to count totalTrips at time = mid) 
- if we get **number of trips >= requiredTrips** , then we have to **decrease** the time , that is why I moved my right pointer which is **highestTime** ,
- if we get number of **trips < requiredTrips** , then we have to **increase** the time , that is why I moved my left pointer which is **lowestTime**
- finally **return lowestTime**



```
class Solution {
public:
	// this function will count totalTrips for the given time
	// a = [1,2,3] , and at time 3 how many trips we can take? 
	// 3/1 + 3/2 + 3/3 => 3 + 1 + 1 = 5 Trips
    long long int numberOfTripsForGivenTime(vector<int>&a , long long int givenTime)
    {
        long long int totalTrips = 0;
        for(auto x : a)
        {
            // convert it to long long int 
            long long int val = x;
			
            totalTrips += (givenTime / val);
        }
        return totalTrips;
    }
    long long minimumTime(vector<int>& arr ,  int totalTrips) {
        long long int lowestTime = 1;
        long long int highestTime = 1e14;
        while(lowestTime<highestTime)
        {
            long long int mid = lowestTime + (highestTime-lowestTime)/2;
            
            if(numberOfTripsForGivenTime(arr , mid) >= totalTrips)
                highestTime = mid;
            else
                lowestTime = mid+1;
        }
        return lowestTime;
    }
};
```
**Time Complexity is - O(NlogD) , where D is 1e14
Space Complexity is - O(1)**

Also If you want to practice more such **"Answer on Binary Search"** then you can **check below questions** , also if you find such more add it to comments will update.

**Easy**
https://leetcode.com/problems/arranging-coins/

**Medium**
https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/
https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/
https://leetcode.com/problems/find-the-duplicate-number/
https://leetcode.com/problems/minimum-size-subarray-sum/
https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/
https://leetcode.com/problems/koko-eating-bananas/   [google]
https://leetcode.com/problems/path-with-minimum-effort/
https://leetcode.com/problems/most-beautiful-item-for-each-query/
https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/
https://leetcode.com/problems/heaters/
https://leetcode.com/problems/minimum-absolute-sum-difference/
https://leetcode.com/problems/frequency-of-the-most-frequent-element/

**Hard**
https://leetcode.com/problems/swim-in-rising-water/
https://leetcode.com/problems/split-array-largest-sum/ [ good question can be done using DP but BS is amazing][Google]
https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/
https://leetcode.com/problems/nth-magical-number/
https://leetcode.com/problems/find-k-th-smallest-pair-distance/
https://leetcode.com/problems/maximum-running-time-of-n-computers/

If you like this , please upvote \u2B06\uFE0F.
Good Luck , keep coding \u2764\uFE0F.