# [Java] Clean O(N) solution with Monotonic Deque || detailed explanation

**Author:** xieyun95
**Votes:** 8
**Link:** [https://leetcode.com/problems/max-value-of-equation/solutions/1286159/](https://leetcode.com/problems/max-value-of-equation/solutions/1286159/)

---

The moral of this type of questions: 
* **Always** try to regroup terms so that they become **terms of i** and **terms of j**;

```
// for a pair of indices i, j with i < j
	 y_i + y_j  + |x_i - x_j| 
  = (x_j + y_j) + (y_i - x_i)
  =    sum_j   +    diff_i       where   sum_j := (x_j + y_j)  &&  diff_i := (y_i - x_i)
```

Notice as we scan through index j , the only information needed from previous indices i are
```
1.   x_i         since an x_i too far from x_j is not eligible
2.  diff_i       since we care about the sum of sum_j + diff_i
```
This suggest we use a data structure to store the pair {x_i,  diff_i} as we scan through index j. 
Then we may notice one important fact: 

```
/* for a pair of indices i, k with i < p,  if diff_i < diff_p,     */
		diff_p     is superior to     diff_i

The reason is that for any index j > p, 
	1. if x_j - x_i <= k   ==>  x_j - x_p <= k       since p is after i
	2. sum_j + diff_i < sum_j + diff_p               since diff_p is greater
```
Thus we need a data structure to scan through previous diff_i and remove those with less value. This suggest we use a **monotonic stack**. This will be a decreasing stack since we poll all smaller values until we meet a greater one when adding a value. 

Also, we need to poll out the x_i when it is too far from the incoming x_j. Thus we may augment the stack into a **montonic deque**: 
```
Deque<int[]> deque = new LinkedList<>();
// decreasing deque storing {x_i, diff_i}  in the sense that
// for a pair of indice i, p with i < p,  we have:
	1. x_p < x_p 
	2. diff_i > diff_p   
```

Then the O(N) solution is very straightforward: 

```
class Solution {
    public int findMaxValueOfEquation(int[][] points, int k) {
		Deque<int[]> deque = new LinkedList<>();
		int res = Integer.MIN_VALUE;
        
		for (int[] point : points) {
			int x_j = point[0];
            int y_j = point[1];
            
			// discard objects that we will never use since too far away
			while (!deque.isEmpty() && x_j - deque.peekFirst()[0] > k)
                deque.pollFirst();
            
			
            int sum_j = x_j + y_j;
            
			if (!deque.isEmpty())
                res = Math.max(res, deque.peekFirst()[1] + sum_j);
            
			
            int diff_j = y_j - x_j;
            
            // discard objects that are inferior (x_i is further than x_j and it's value is smaller)
			while (!deque.isEmpty() &&  diff_j > deque.peekLast()[1])
                deque.pollLast();
            
			
            deque.offerLast(new int[]{x_j, diff_j});
        }
        
		return res;
    }
}
```

Refering to another great monotonic deque problem: 
* [862. Shortest Subarray with Sum at Least K](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/discuss/1126225/Java-Clean-O(n)-Monotonic-Deque-Solution-oror-with-detailed-explaination)