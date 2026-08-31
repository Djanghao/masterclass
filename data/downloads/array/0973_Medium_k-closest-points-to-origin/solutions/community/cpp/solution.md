# C++ EASY TO SOLVE || Beginner Friendly with detailed explanations

**Author:** Cosmic_Phantom
**Votes:** 124
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/1647428/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/1647428/)

---

# **This are the reasons behind why we should not to use Sort function, minHeap and why we should use a maxHeap .**


The basic gist of the question is that we need to find the k closest point from the origin . 
**Intuition :-**
* The intuition we all got at first was to sort the points in increasing order and just do the math. But this is not a viable solution, i believe this the worst solution beacause let's think of a scenerio were there will be streaming of online data. Everytime a new data[points] comes, we need to sort the entire inputs till that point and since it's online we all know how much data could have been there in just one sec .
* So a good solution can be a heap approach. To be specific a maxheap since in minheap It will store all the array elements and this can be costly for large elemented arrays while in maxheap we just need to store k elements.

***ALWAYS REMEMBER* :-*Whenever a question asks for k closest or k smallest or k largest it's a heap question .Though these questions might be implemented using other algorithms as well but heap will allow to simplify the problem as well as your code.***



**Before starting with algo let's take a example from the description of this question:-**
```
Input: points = [[1,3],[-2,2]], k = 1

The way to judge whether a point is close or not is to find the euclidean distance.
we dont have to perform square root and make the code look complex moreover it's more prone to errors . we can simply just use `dist = x*x+y*y`

Now let's calculate the distance:

dist = 1*1 + 3*3 = 10
dist = -2*-2 + 2*2 = 8

We can see that dist of the 2nd element is smaller so we need to pushback that element into our result vector.
```

**Algorithm:-**
1. Initialize a priority queue for storing the maxheap data. let's name this as `maxHeap` and initialize a `result` vector .
2. let `x` and `y` be the co-ordinates of point `p` .
3. Main logic behind maxHeap is that, we will maintain a maxHeap of size k Thus after addding new points to our maxHeap we need to check the size of heap if it is greater than k or not .If the size is greater than k we will remove remove the root element  to ensure the size of the heap is always k . Thus, the max heap is always maintain top K smallest elements from the first one to current one. 
4. In short The maxheap will show true potential once the size of the heap is over its maximum capacity i.e it will exclude the maximum element in it as it can not be the proper candidate anymore.

**Code:-**
```
//Upvote and Comment
class Solution {
public:
    vector<vector<int>> kClosest(vector<vector<int>>& points, int k) {
         //Answer vector
        vector<vector<int>> result(k);
        //maxheap storage initialization
        priority_queue<vector<int>> maxHeap;
        //Construction of maxheap
        for (auto& p : points) {
            int x = p[0], y = p[1];
            maxHeap.push({x*x + y*y, x, y});
            if (maxHeap.size() > k) {
                maxHeap.pop();
            }
        }
        
        for (int i = 0; i < k; ++i) {
            vector<int> top = maxHeap.top();
            maxHeap.pop();
            result[i] = {top[1], top[2]};
        }
        
        return result;
    }
};
```

**Time Complexity:-** *`O(NlogK)`*
**Space Complexity:-** *`O(K) [Since in maxheap we will be maintaining just k elements]`*
