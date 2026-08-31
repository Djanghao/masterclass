# C++ Solution using Segment Tree | Simplified

**Author:** ganekasar
**Votes:** 36
**Link:** [https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010681/](https://leetcode.com/problems/create-sorted-array-through-instructions/solutions/1010681/)

---

Before directly jumping to the most optimized solution, this of the **most obvious and slowest solution** \u23F3

At any point in the program, you have a sorted array and an element to insert.

To insert that element in its correct position(so that array remains sorted), you have two choices
1. Traverse from start walk \uD83D\uDEB6\u200D\u2642\uFE0F
2. Traverse from end \uD83D\uDEB6\u200D\u2640\uFE0F

We will keep checking every element and stop when we found the right position. (When you reach element equal to current element from either way)

As we are all so lazy, we want to check minimum elements. \uD83D\uDE34

What would the time complexity for this solution? \uD83E\uDD14

For every element, we are traversing the array(may have to traverse whole in the worst case).

So Time Complexity of this approach is O(n^2)

**Optimized Version** \uD83D\uDE0E

Let's see where we can reduce the time complexity.

For every element, we are traversing the whole array. 
We can take benefit of the fact that at every point in the program, the array will remain sorted!

Here I am using *Segment Tree* to solve the problem.

Thanks to [Siddhant Samyak](https://leetcode.com/leopanther) for this approach! \uD83E\uDD17

How Segment Tree is helpful here?

* Segment is used to store the frequency of every element
* To get the count of elements less than x, we will make query *Find sum between 0 to x-1*
* To get the count of elements greater than x, we will make query *Find sum between x+1 to 10^5* (As per constraints, it's maximum value)

We can make each of these queries in logN time!

So the Time Complexity of this approach is *O(NlogN)*! 

```
	//  Segment Tree Array
    int tree[400040];
    
    int get_mid(int a, int b) {
        return a + (b - a)/2;
    }
    
	// Fn to get sum between range s to e
    int query(int index, int s, int e, int qs, int qe) {
		// 1. Base Case - Complete Overlapp
        if(s >= qs and e <= qe)
            return tree[index];
        
		// 2. Base Case - No overlapp
        if(e < qs or s > qe)
            return 0;
        
		// 3. Partial Overlapp
        int mid = get_mid(s, e);
        
        int leftAns = query(2*index + 1, s, mid, qs, qe);
        int rightAns = query(2*index + 2, mid + 1, e, qs, qe);
        
        return leftAns + rightAns;
    }
    
    void update(int index, int s, int e, int pos) {
        
		// 1. Base Case - Reached the node where update is required
        if(s == e) {
            tree[index]++;
            return;
        } 
		
		// 2. Intermidiate Node
        int mid = get_mid(s, e);
            
		if(pos <= mid) 
			update(2*index + 1, s, mid, pos);
		else
			update(2*index + 2, mid + 1, e, pos);

		tree[index] = tree[2*index + 1] + tree[2*index + 2];
    }
    
    int createSortedArray(vector<int>& instructions) {
        
        int cost = 0;
        const int MAXN = 1e5 + 1;
        const int MOD = 1e9 + 7;
        
        for(auto x : instructions) {
			// Get number of elements that are less than current element
            int less_count = query(0, 0, MAXN, 0, x - 1); 
			
			// Get number of elements which are greater than current element
            int greater_count = query(0, 0, MAXN, x + 1, MAXN); 
            
            update(0, 0, MAXN, x);
            
            cost = (cost + min(less_count, greater_count))%MOD;
        }
        
        return cost; 
    }
```

If you got any better approach, do share in comments please\uD83D\uDE00