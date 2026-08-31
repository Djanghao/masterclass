# C++ || Easy Solution || Full Explanation

**Author:** TlTAN
**Votes:** 149
**Link:** [https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2176644/](https://leetcode.com/problems/furthest-building-you-can-reach/solutions/2176644/)

---

***Upvote if found helpful:***

**Approach:**

1. The main concept is `we can use ladder for any height`. So suppose you are moving from the first building. `Use bricks first upto as much you can go`. When bricks are finished `if height is more than maximum bricks used in a step use ladder or take the bricks from the biggest step and replace that with ladder`. Now continue till ladders are finished and bricks are not sufficient.

2. So we can take a `priority queue for storing the bricks used in each step` and so that we can take out the maximum bricks used till a building. We add brick count to the queue whenever we use bricks and take out the max brick whenever we use ladder.
  
3. To reduce complexity of code we can provide brick at each step and `if the brick count becomes negetive then add a ladder at the biggest step (In this way we no need to compare the current step with the max brick used before, priority queue will handle the situation)`.
  
4. Similarly give ladder to a step when needed. `If ladder count becomes negetive then we cant go to next building` and return the index of present building. 

**Note:** We run the loop upto the building before the last building.If the loop os passed at the last step then i will increament and will point to the last building.

**Code with Explanation**

```
class Solution {
public:
    int furthestBuilding(vector<int>& heights, int bricks, int ladders) {
        
        // Priority Queue for storing the bricks used in each step in decreasing order (Max at top)
        priority_queue<int> maxB;
    
        int i=0, diff =0; // i is used for storing the position and diff for storing difference.
        for(i=0; i<heights.size()-1; i++){ // go till before the last building.
            
            //difference of the height of corresponding buildings
            diff = heights[i+1]-heights[i];
            
            //If next building is equal or samaller than current then go to next building.
            if(diff <= 0){
                continue;
            }

            bricks -= diff; //taking the bricks needed for going to next building.
            maxB.push(diff); //adding the number of bricks used in priority queue.
            
            // if bricks become negetive then there were not enough bricks. So add a ladder in place of the step where most bricks were used.
            if(bricks < 0){
                bricks += maxB.top(); //taking back bricks from that step
                maxB.pop(); //As max bricks were removed so pop
                ladders--; //1 ladder used
            }

            //if ladder is negetive then the ladder was not provided to go to next building. So we can't proceed.
            if(ladders < 0) break;
        }
        
        // return the present position.
        return i;
    }
};
```