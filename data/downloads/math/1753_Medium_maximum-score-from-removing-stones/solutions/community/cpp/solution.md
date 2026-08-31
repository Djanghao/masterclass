# C++ Max heap Solution with Explanation of Intuition and Complete Approach

**Author:** dee_stroyer
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1620252/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/1620252/)

---

**Approach Intuition: We want to run the game as long as possible, so in order to run the game as long as possible we have to subtract 1 each time from the greatest two numbers because that will make the game run as long as we want**

Time complexity of the solution: O(k logn), where k is the answer which is how many times the while loop runs.
Space Complexity of the solution is constant as we are inserting only 3 elements in the heap.

```
class Solution {
public:
    int maximumScore(int a, int b, int c) {
        //we will make a max heap and push all the elements into it
        priority_queue<int>pq;
        pq.push(a);
        pq.push(b);
        pq.push(c);
        int score = 0;
        
        //we will pop the top most elements of the heap(top max)
        //subtract one from each of them and insert them again in the heap if they are not equal to 0
        // we will continue the same operation until the size of the pq remains greater than 2
        while(pq.size()>1){
			//taking the top 2 greater elements out of the max heap
            int x = pq.top();
            pq.pop();
            int y = pq.top();
            pq.pop();
			
			//subtracting one from each of the greatest elements
            x-=1;
            y-=1;
            
			//increasing the answer score at each iteration of the loop
			score++;
			
			//if the elements that we took out are still greater than 1 after subtraction operation then we have to insert them again
            if(x>0){
                pq.push(x);
            }
            
            if(y>0){
                pq.push(y);
            }
        }
        
        return score;
    }
};
```
Note: Note that the main reason of using the max heap (priority queue) here is that we have to find the most 2 greater elements in each iteration of the loop.

**Please upvote if you liked the approach!!!!!!!!!!!!**