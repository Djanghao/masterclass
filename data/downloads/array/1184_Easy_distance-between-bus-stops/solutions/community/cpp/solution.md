# Distance Between Bus Stops Solution in C++

**Author:** The_Kunal_Singh
**Votes:** 4
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/3472016/](https://leetcode.com/problems/distance-between-bus-stops/solutions/3472016/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
class Solution {
public:
    int distanceBetweenBusStops(vector<int>& distance, int start, int destination) {
        int i, dis1=0, dis2=0, j, temp;

        // Swapping the values of start and destination, if destination is smaller than start
        if(start>destination)
        {
            temp = start;
            start = destination;
            destination = temp;
        }

        //Checking Forward distance
        for(i=start ; i<destination ; i++)
        {
            dis1 += distance[i];
        }

        //Checking Backward distance
        i = start-1;
        j = distance.size()-destination+start;
        while(j>0)
        {
            if(i<0)
            {
                dis2 += distance[distance.size()+i];
            }
            else
                dis2 += distance[i];
            i--;
            j--;
        }

        // Result
        if(dis1<dis2)
            return dis1;
        return dis2;
    }
};
```
![upvote new.jpg](./images/0.jpeg)
