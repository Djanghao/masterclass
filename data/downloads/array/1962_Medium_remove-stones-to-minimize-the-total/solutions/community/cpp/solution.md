# C++ | Using Priority Queue | Easy to understand

**Author:** nidhiii_
**Votes:** 43
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390459/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390459/)

---

The idea is to apply the given operation on the largest pile of stones to get the minimum number of stones in the end. To always get the largest element, we use priority queues. 
```
  int minStoneSum(vector<int>& piles, int k) {
        priority_queue<int>pq(piles.begin(),piles.end()); //will copy the vector to the priority queue 
        int ans=0;
        for(int i=0;i<k;i++){
            int tp=pq.top(); //top element will always be the largest element
            pq.pop();
            tp-=(tp/2);   
            pq.push(tp);
        }
        while(!pq.empty()){
            ans+=pq.top();   //adding the left stones, after k operations
            pq.pop();
        }
        return ans;
    }
```
The time complexity would be:
1. Creation of priority queue takes O(n) time.
2.  i.)  the for loop is running k times i.e  O(k).
     ii.) the insertion and deletion in a priority queue takes O(logn) time.
3. Traversing the priority queue to get the answer and deleting the top most element is taking O(nlogn) time.

Hence the total time complexity is O(n)+O(klogn)+O(nlogn)
=> **O((n+k) logn)**

Space Complexity: O(n) because of the priority queue.
 
