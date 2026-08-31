# BFS IMPLEMENTATION C++

**Author:** akb9911
**Votes:** 146
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/2091307/](https://leetcode.com/problems/water-and-jug-problem/solutions/2091307/)

---

Think this problem in terms of only one JUG given as the capacity of (JUG1 and JUG2) combined .
Then you just have to find out if the targetCapacity can be achieved with this JUG or not .

While solving common Graph problems we use something like dx and dy arrays to go in all possible directions . Try to think in that way only !!! Think how many operations can u perfrom !!! how many ?? and What are those????

If x=JUG1CAPACITY , y=JUG2CAPACITY , z=TOTALCAPACITY COMBINED
Simply we just have to go in 4 operations ::
i. ADD x to the JUG
ii. ADD y to the JUG
iii. SUBTRACT x from the JUG
iv. SUBTRACT y from the JUG

and dont forget their boundary checks too !
THE CODED IMPLEMENTATION :::

```
class Solution {
public:
    bool canMeasureWater(int jug1Capacity, int jug2Capacity, int targetCapacity) {
        
        int x=jug1Capacity,y=jug2Capacity,z=x+y;
        int steps[]={x,-x,-y,y}; //STEPS THAT CAN BE PERFORMED
        
        queue<int> q;
        vector<int> vis(z+1,0); // VISITED ARRAY TO KEEP NOT ITERATING THE SAME VALUES OVER AND OVER AGAIN
        q.push(0);
        vis[0]=1;
        while(!q.empty())
        {
            int node=q.front();
            q.pop();
            
            if(node==targetCapacity)
            {
                return true; // WHEN WE FIND THE TARGET CAPACITY ACHIEVED
            }
            for(int i=0;i<4;i++)
            {
                int newNode=node+steps[i];
                if(newNode>=0 && newNode<=z && vis[newNode]==0) //BOUNDARY CHECKS 
                {
                    q.push(newNode);
                    vis[newNode]=1;
                }
            }
        }
        return false; // IF TARGET CAPACITY CAN NEVER BE ACHIVED
    }
};
```


PLEASE DO UPVOTE IF FOUND HELPFULL !!
