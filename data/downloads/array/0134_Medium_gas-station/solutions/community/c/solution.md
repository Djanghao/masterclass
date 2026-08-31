# Easy C++ solution in O(n) time complexity

**Author:** imran2018wahid
**Votes:** 219
**Link:** [https://leetcode.com/problems/gas-station/solutions/1237895/](https://leetcode.com/problems/gas-station/solutions/1237895/)

---

```
class Solution 
{
public:
    int canCompleteCircuit(vector<int>& gas, vector<int>& cost) 
    {
        // first of all we need to check whether we've sfficient fuel or not. 
        int total_cost=0,total_fuel=0,n=cost.size();
        for(int i=0;i<n;i++)
        {
            total_cost+=cost[i];
            total_fuel+=gas[i];
        }
        // If the total fuel is lesser than the cost then definitely we can't cover the whole cicular tour.
        if(total_fuel<total_cost)
        {
            return -1;
        }
        
        
        // If the total fuel is sufficient enough to cover the circular tour then definitely an answer exists
        int curr_fuel=0,start=0;  // start with zero fuel.
        for(int i=0;i<n;i++)
        {
            // If at any point our balance/ current fuel is negative that means we can't come to the i'th petrol pump from the previous pump beacuse our fuel won't allow us to cover such distance. 
            //So we'll make the i'th pump as the start point ans proceed. Simultaneously we'll make the current fuel to be 0 as we're starting freshly.
            if(curr_fuel<0)
            {
                start=i;
                curr_fuel=0;
            }
            // at any station we'll fill petrol and pay the cost to go to the next station . so current fuel would be the following.
            curr_fuel+=(gas[i]-cost[i]);
        }
        return start;
    }
};
```
**Now you might be wondering even after reaching the end of the array why we are not making any circular tour and after reaching the end we're concluding the result. The main concept is that :-
Let's suppose we start at the 0'th pump moving on and at the middle we've negative fuel so we'll restart our journey from the middle position. Now let's suppose after reaching the end  we've some fuel in our tank. We're saying that the middle position will be the starting position. But why we're not going back to the middle element ( from where we've started our journey) from the end to just check whether it's possible to make circular tour or not? It's because we've already checked previously that it's possible to come from the 0'th index to the middle. So no need to check for the remainig part of the circular tour since it will always be a valid tour.**

***Please  upvote if you have got any help from my code. Thank you.***