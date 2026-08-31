# Easy C++ Solution Using Queue And Set | optimised without queue

**Author:** karan252
**Votes:** 43
**Link:** [https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259176/](https://leetcode.com/problems/the-latest-time-to-catch-a-bus/solutions/2259176/)

---

**Approach:**
We put the people in the queue based on their arrival times and also put the pasenger timings in the set so that we donot clash with timings. Now their can be two cases:
Case1: when the bus goes by full capcity
In this case we need to know the person who boarded the bus at last and assign time 1 less than that person if possible. To fulfill this whenever we see make a person board a bus we update the answer such that we assign a number such that it is 1 less than this person timings if possible.
Case2: bus goes half filled
In this case we need to board the bus when it is departuring.
```
class Solution {
public:
    int latestTimeCatchTheBus(vector<int>& buses, vector<int>& passengers, int capacity) {
        queue<int> q;
        sort(buses.begin(),buses.end());
        sort(passengers.begin(),passengers.end());
        int n=buses.size();
        int m=passengers.size();
        set<int> st;
        for(auto p:passengers)
        {
            q.push(p);
            st.insert(p);
        }
        int ans=0;
        for(int i=0;i<n;i++)
        {
            int currbus=buses[i]; // curr bus depature time.
            int count=0; //number of people in curr bus
            int x;
            //CASE1
            while(!q.empty() && count<capacity && q.front()<=currbus)
            {
                x=q.front();
                q.pop();
                if(st.find(x-1)==st.end()) //checking if person timing-1 doesnt exist and update the answer.
                    ans=x-1; 
                count++;
            }
            //CASE2
            if(count<capacity)
            {
                while(st.find(currbus)!=st.end()) //starting from dept time find a time which does not exist int the set already.
                {
                    currbus--;
                }
                ans=max(ans,currbus);
            }
            
        }
        return ans;
    }
};
```

**Optimised Solution without Queue**
Courtesy: [@ryankert](https://leetcode.com/ryankert/) for this optimised solution
```
class Solution {
public:
    int latestTimeCatchTheBus(vector<int>& buses, vector<int>& passengers, int capacity) {
        int q = 0;
        sort(buses.begin(),buses.end());
        sort(passengers.begin(),passengers.end());
        int n=buses.size();
        int m=passengers.size();
        set<int> st;
        for(auto p:passengers)
        {
            st.insert(p);
        }
        int ans=0;
        for(int i=0;i<n;i++)
        {
            int currbus=buses[i]; // curr bus depature time.
            int count=0; //number of people in curr bus
            int x;
            //CASE1
            while(q < passengers.size() && count<capacity && passengers[q]<=currbus)
            {
                x=passengers[q];
                q++;
                if(st.find(x-1)==st.end()) //checking if person timing-1 doesnt exist and update the answer.
                    ans=x-1; 
                count++;
            }
            //CASE2
            if(count<capacity)
            {
                while(st.find(currbus)!=st.end()) //starting from dept time find a time which does not exist int the set already.
                {
                    currbus--;
                }
                ans=max(ans,currbus);
            }
            
        }
        return ans;
    }
};
```