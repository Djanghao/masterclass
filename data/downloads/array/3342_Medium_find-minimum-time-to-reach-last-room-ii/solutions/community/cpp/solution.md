# Modified Dijkstra's Algorithm

**Author:** donpaul271
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6000369/](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/solutions/6000369/)

---


Use a priority queue containing a tuple of size 4.

1st element in the tuple denotes time taken to reach that cell (negetive to maintain min heap)
2nd and 3rd are the x and y axis.
4th element denotes the decision vairable dec.

when dec is 0 it implies it takes 1 second to move 
when dec is 1 it implies it takes 2 second to move.

Toggle the decision variable everytime we push new element to priority queue.

Run a dijkstras algo with this setup while moving up, down left, right.

(please upvote if it helped)

# Code
```cpp []

#define ll long long

vector<ll> xm{+1, -1, 0, 0};
vector<ll> ym{0, 0, +1, -1};
 
class Solution {
public:
    int minTimeToReach(vector<vector<int>>& g) {
        
        priority_queue<tuple<ll, ll, ll, ll>> pq;
        
        ll n = g.size();
        ll m = g[0].size();
            
        vector<ll> t(m, 1e15);
        vector<vector<ll>> dist(n, t);
        
        pq.push({0, 0, 0, 0}); // initially dec = 0 as time to move = 1.
        dist[0][0] = 0;
        
        ll ans, ex, nx;
        
        while(!pq.empty())
        {
            ll d = -get<0>(pq.top()); // take negetive to get the actual value. While pushing we use negetive sign to maintain min heap. 
            ll x = get<1>(pq.top());
            ll y = get<2>(pq.top());
            ll dec = get<3>(pq.top());

            pq.pop();
            
            if(dec == 0) // if dec == 0 next value of dec = 1 and extra time = 1
            {
                nx = 1;
                ex = 1;
            }
            
            else // if dec == 1 next value of dec = 0 and extra time = 2
            {
                nx = 0;
                ex = 2;
            }
            
            if(dist[x][y] < d) // not useful to proceed if current d is greater than least d possible. 
                continue;
                
            if(x == n-1 && y == m-1) // break when the target cell is found.
            {
                ans = d;
                break;
            }
            
            for(int i=0; i<4; ++i) // checking top, down, left, right.
            {
                ll xn = x + xm[i];
                ll yn = y + ym[i];
                                
                if(xn >=0 && xn < n && yn>=0 && yn < m)
                {
                    ll a = g[xn][yn];
                    ll now = max(d+ex, a+ex); // adding time required to move ex.
                    
                    if(dist[xn][yn] > now) 
                    {
                        dist[xn][yn] = now; 
                        pq.push({-now, xn, yn, nx}); // push negetive value of now to convert default max heap to min heap and push toggled dec variable nx. 
                    }
                }
            }
        }
        
        return ans;
    }
};






```