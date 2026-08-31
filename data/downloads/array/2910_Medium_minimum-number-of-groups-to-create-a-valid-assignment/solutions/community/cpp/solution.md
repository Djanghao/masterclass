# Explained Very Well 🔥🔥| Commented Code |

**Author:** introvert9112k
**Votes:** 23
**Link:** [https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4195601/](https://leetcode.com/problems/minimum-number-of-groups-to-create-a-valid-assignment/solutions/4195601/)

---

# Intuition
For each` x` in the range `[1, minimum_frequency]`, try to create groups with either `x` or `x + 1` indices assigned to them while minimizing the total number of groups.

# Approach
1. First find out the frequency of the each unique number in the array.
2. Find out the minimum Frequency among all the frequencies.
### Why Minimum Frequency ? 
> 1. Our Aim is to make the minimum numbers of groups holding the condition that difference in size of any two groups should not > 1.
> 2. In optimal grouping, size of every group should be either `x` or` x + 1.`
> 3. ` x `cannot be greater than the minimum Frequency.
> 4. If `x` is greater than the `minimum Frequency` then there exists a group whose size is less than `x`, for which the condition fails.
> 5. So the size can have only range `[1,minimum_frequency]`.

3. For each distinct number, using its frequency, check that all its occurrences can be assigned to groups of size `x `or` x + 1` while minimizing the number of groups used.


### To get the minimum number of groups needed for a number having frequency `f` to be assigned to groups of size `x` or `x + 1`, 

1. let `a = f / (x + 1)` and b = `f % (x + 1)`.
2. If` b == 0`, then we can simply create a groups of size x + 1.
3. If `b != 0` 
    - That mean there are some numbers which are not part of the groups having size `x + 1`.
    - Now let's try to build a group of size `x` with left over values and some values taken from the groups of size `x + 1`.
    - Now we have `b` values if we want to make a group of size x, we require `(x-b)` values more. 
    - Our aim is to make groups of size `x` or `x + 1` with frequency `f`. 
    - In order to make a group of size `x`, we need to pick only `1` value from groups of size `x + 1`.
    - If we pick more than `1` value size would become `< x`, which is not desired. 
    - `a` denotes the number of groups with `x + 1` size. 
    - We require `(x-b)` values to make a group of size x. 
    - if `(x-b) <= a` then we can pick the `(x-b)` values and add to new group to along with left out `b` values to make a size of group `x`.
    - Now we are taking 1 value from `(x-b)` groups of size `x + 1`, so there size reduced to `x`. 
    - Out of `a` groups of size `x + 1`, `(x-b)` groups size reduced to `x`, so there only `(a - (x-b))` groups with size `x + 1`.
    - We have `(x-b)` groups of size x and we made a new group of size `x` with the taken values and left values, so total number of groups with size `x` is `(x-b+1)`.
    - So total Groups with size either `x` or `x + 1` is `(a - (x-b)) + (x-b + 1) = a + 1`.
    - So Total `a + 1` groups are made. 
    - if `(x-b) >= a` we cannot make the group of size `x` with left out values and values picked from groups of size `x + 1`, so this case is not possible.



4. The minimum number of groups needed for some `x` is the total minimized number of groups needed for each distinct number. 

5. The answer is the minimum number of groups needed for each x in the range `[1, minimum_frequency]`.


# Code
```
class Solution {
private :  
   /*This function returns minimum number of groups that can be made with each 
   group having size either x or x+1*/
   int findMinimumGroups(int x,unordered_map<int,int> &map)
   {  
       int totalGroups = 0;
       for(auto &[num,freq] : map)
       {
           int a = freq/(x+1); //this gives the number of groups of size equal to x+1
           int b = freq%(x+1);
           /*b == 0,then we make a groups of size x + 1 with this number.
           So add a to the totalGroups*/
           if(b == 0)  
               totalGroups += a;
           //If b != 0 then we make a groups of size x+1 and we are left with b elements.
           //Inorder to make a group of size x we need (x-b) elements.
           //We can extract one element from each of x+1 groups and to new group to make x elements.
           //We have taken 1 element so there size would reduce to 1, we have taken (x-b) elements,
           //so out of a groups (x-b) groups size became b.
           //So no of groups with size x+1 is (a - (x-b))
           //No of groups with size x is x - b + 1.
           //Total gropus = (a-(x-b)) + (x-b+1) = a + 1
           else if((x-b) <= a) 
           {
               totalGroups += (a + 1);
           }
           else return -1;
       }
       return totalGroups;
   }
public:
    int minGroupsForValidAssignment(vector<int>& nums) {
        unordered_map<int,int> map; //map to store the frequencey of each element.
        for(auto num : nums) ++map[num]; //find frequencey of each unique number.
        int minFreq = INT_MAX; //variable for storing the number with minimum Frequency. 
        for(auto &[num,freq] : map) 
           minFreq = min(minFreq,freq);
        int minGroups = INT_MAX;
        for(int x = 1; x <= minFreq; ++x)
        {   
            int res = findMinimumGroups(x, map);
            if(res != -1)
              minGroups = min(minGroups,res);
        }
        return minGroups == INT_MAX ? -1 : minGroups;
    }
};
```
If you feel it useful please upvote \uD83D\uDE0A\uD83D\uDE0A.
In case of any queries or suggestions please let me know in the comment section.