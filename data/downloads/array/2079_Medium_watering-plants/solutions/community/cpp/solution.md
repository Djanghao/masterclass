# Line By Line explained "C++ Solution"  Desi Style

**Author:** pandeyharsh407
**Votes:** 15
**Link:** [https://leetcode.com/problems/watering-plants/solutions/2673930/](https://leetcode.com/problems/watering-plants/solutions/2673930/)

---

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    int wateringPlants(vector<int>& plants, int capacity) 
    {
        int steps=0, baalti=capacity;

        for(int i=0;i<plants.size();i++)
        {
            if(baalti>=plants[i])
            {
                steps++; // simply kadam badhate jaao

                baalti=baalti - plants[i]; // plants ko paani dete jaao and balti mai paani ka pta lagao
            }

            else
            {
                baalti=capacity;  // baalti bhar denge nadi k pass jaa k


                baalti=baalti - plants[i];  // balti mai se fir se plants ko paani dena chaloo kar denge
                steps=steps + 2*i+1;  // nadi mai jana and then wapas ana 1 agge wale plant per it takes 2 times ana jana +1
            }
        }
        return steps;
    }
};
```
Please do upvote if it helped... Thank you...
\u2B07