# [C++] Easy to understand priority queue solution with explanation

**Author:** cjchirag7
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/610135/](https://leetcode.com/problems/find-the-kth-smallest-sum-of-a-matrix-with-sorted-rows/solutions/610135/)

---

The approach is pretty similar to the one used in [K pairs with smallest sums problem on leetcode](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) 
I would recommend to solve the problem [here](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/) first, before solving this problem.

**My approach:**
- The smallest sum will be produced when the first element is selected from all the rows (As the rows are sorted in non-decreasing order)
- Let's denote the column numbers (0-indexed) selected from each row in a vector ```ind```   (size of vector would be equal to number of rows)
- So, initially the value of ind will be a vector of n zeros (where n is number of rows) : <0,0,0....,0,0>
- Now, the smallest sum, which is just greater than the sum produced by the choosing the elements as indicated by ```ind``` vector can be produced in one of the following ways : (I don't know exactly which way. Anyone of these can lead to the required sum)
<1,0,0....,0,0>
<0,1,0....,0,0>
<0,0,1....,0,0>
....
<0,0,0....,1,0>
<0,0,0....,0,1>
* So, we will push all these in a min priority queue (or a min heap),  which will always give you the ind with smallest sum, at the top.
* We would now pop the top element of priority queue . Say it is having ```ind``` as : <a,b,c...j>
So, we will now push the following to priority queue:
<a+1,b,c....j>
<a,b+1,c....j>
<a,b,c+1....j>
...
<a,b,c....j+1>
* But it might be possible that, the same ```ind``` vector is pushed many times, so we maintain a set to include only unique values for the ```ind``` vector.
* If you know what a Breadth-first search (BFS) traversal of a graph is, then it is quite similar to that. Only we push the nodes to a priority queue here, instead of a queue.  
* We will keep popping the element from the priority queue k times and the last popped value of sum is our answer :) 

**C++ Implementation**
- If you don't know how to implement a priority queue of struct in C++, you can first learn it [here](https://www.***.org/stl-priority-queue-for-structure-or-class/) , then it would be easy to understand the solution

```
struct ls
{
int sum;
vector<int> ind;
};

struct comp
{
    bool operator () (ls l1,ls l2)
    {
        return l1.sum>l2.sum;  // so that minimum sum element is at the top
    }
};

class Solution {
public:
    int kthSmallest(vector<vector<int>>& mat, int k) {
      set<vector<int> > st;
      int n= mat.size();
      int m= mat[0].size();
      int s=0;
      vector<int> temp(n,0);
        for(int i=0; i<n; i++)
      {
          s+=mat[i][0];
      }
      ls a;
      a.sum=s;
      a.ind=temp;
      priority_queue<ls,vector<ls>,comp> pq;
      st.insert(a.ind);
      pq.push(a);
        
      while(k--)
      {
       a=pq.top();
       pq.pop();
       for(int i=0; i<n; i++)
       {
         if(a.ind[i]+1<m)
         {
             ls t;
             t.ind=a.ind;
             t.ind[i]++;
             if(st.count(t.ind))
                 continue;                 
             t.sum=a.sum-mat[i][a.ind[i]]+mat[i][a.ind[i]+1];  
			 // remove previous element and add the newly added element to sum
			 // to get new sum
             pq.push(t);
             st.insert(t.ind);
         }
       }
      }
    return a.sum;
    }
};
```