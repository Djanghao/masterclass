# [C++] Set + Priority Queue | Commented

**Author:** divyanshu1
**Votes:** 89
**Link:** [https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/1359790/](https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/solutions/1359790/)

---

```

class Solution {
public:
    int smallestChair(vector<vector<int>>& a, int t){
        priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> q;
        int f = a[t][0];                              //target friend arrival time
        sort(a.begin(), a.end());
        int n=0;                                      //starting seat
        set<int> s;
        for(auto v: a){
            int at = v[0];                            //arrival time
            int lt = v[1];                            //leaving time
            int cs;                                   //current seat
            while(!q.empty() && q.top().first<=at){       //it top of priority queue is less than or equal to arrival time push seat number in set..
                s.insert(q.top().second);
                q.pop();
            }
			//if set size is not 0 then current seat will be s.begin() else current seat will be n
            if(s.size()!=0){         
                cs=*(s.begin());
                s.erase(s.begin());
            }
            else{
                cs=n;
                n++;
            }
            q.push({lt, cs});       //push leaving time and seat number in queue
            if(f==at){               //if arrival time of current friend is equal to arrival time of target friend return current seat number  (it is given all arrival time are distinct)
                return cs;
            }
        }
        return 0;
    }
};

```

*If you like the solution, please Upvote \uD83D\uDC4D!!*