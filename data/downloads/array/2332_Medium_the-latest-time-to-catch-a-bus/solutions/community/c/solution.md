# C++ | 100% faster | Explanation | Beginner Friendly | Easy | Unordered_set | O(n)

**Author:** ps1077211
**Votes:** 44
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259708/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259708/)

---

Sort the buses array and passengers array. 

Now consider a bus departing at time **t1** so as passengers array is also sorted just iterate over passengers array and look which all passengers can travel by this bus. Suppose a passenger arriving at time **t2** can travel by this bus , then **t2-1** can be a possible answer , if and only if there is not any passenger arriving at t2-1.

Now , there can be a condition that there are less passengers than the capacity which can travel by the bus departing at t1.
For ex - bus departs at t=10 and has capacity 2
but there is only 1 passenger to travel. So departure time of the bus can be a possible answer.
But what if that 1 passenger has arrival time equal to departure time of the bus then departure time cannot be our answer.


Dry Run-
buses - [10,20]
passengers - [4,7,18]
capacity = 2

now from bus1 ->  4 can travel so answer can be  3 which is also not the arrival time of any passenger  **ans = 3**
7 can also travel from bus1  so  6 can be a possible ans , as it is also not an arrival time of any passenger so **ans=6** as of now.

Now capacity for bus1 is 2 , so no more passengers can travel.

now bus2 departs at 20  and 18 can travel by bus2  so ans can be 17 if it is not the arrival time of any passenger and yes it is not ,  so **ans=17** 

But here we can see cap=1 for bus2 so last passenger can arrive at t=20 (max) to travel by bus2 hence ans will be equal to **20**

**Code -** 
```
class Solution {
public:
    int latestTimeCatchTheBus(vector<int>& b, vector<int>& p, int cap) {
        int n1 = b.size() , n2 = p.size() , j=0 , ans;
        unordered_set<int> u;
        sort(b.begin() , b.end());
        sort(p.begin() , p.end());
        
        for(int i=0 ; i<n1 ; i++){
            int c = 0;
            while(c<cap && j<n2 && p[j]<=b[i]){
                if(u.find(p[j]-1)==u.end()) ans = p[j]-1; 
                u.insert(p[j]);
                c++;
                j++;
            }
            if(c<cap && u.find(b[i])==u.end()) ans = b[i];
        }
        return ans;
    }
};
```

Now here , if we look there is no need to maintain an unordered set as passengers arrival time is sorted so we are just concerned with the previous passenger's arrival time , so instead of maintaining the set , we can store the arrival time of previous passenger in a variable.

**Code -**
```
int latestTimeCatchTheBus(vector<int>& b, vector<int>& p, int cap) {
        int n1 = b.size() , n2 = p.size() , j=0 , ans , prev=-1;
        sort(b.begin() , b.end());
        sort(p.begin() , p.end());
        
        for(int i=0 ; i<n1 ; i++){
            int c = 0;
            while(c<cap && j<n2 && p[j]<=b[i]){
                if(p[j]-1!=prev) ans = p[j]-1; 
                prev = p[j];
                c++;
                j++;
            }
            if(c<cap && b[i]!=prev) ans = b[i];
        }
        return ans;
    }
```
In case you like the approach ,  **DO UPVOTE**