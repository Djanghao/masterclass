# Java | Max heap Solution with Algorithm and Explanation

**Author:** aayush912
**Votes:** 11
**Link:** [https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390274/](https://leetcode.com/problems/remove-stones-to-minimize-the-total/solutions/1390274/)

---

*------Please **upvote!** if you like the solution and explanation.  Please put your doubts/queries in the comments section below.  I will try my best to answer them.------*

**Algorithm:**

Think Greedily \u2013 if we remove stones from the biggest piles first, we will get the optimal result, so the data structure that comes to mind is Max Heap.

1.	Create a max heap.
2.	Push all the piles [i] into the heap.
3.	Iterate until k > 0.
4.	Pop from the heap and decrement the value by floor (val / 2) and push the resultant value back in to the heap.
5.	Finally, pop all the remaining elements in the heap and total them and return the sum.

```
class Solution {
    public int minStoneSum(int[] piles, int k) {
        Queue <Integer> heap = new PriorityQueue (new Comparator <Integer> () {
           public int compare (Integer a, Integer b) {
               if (a < b)
                   return 1;
               else if (a > b)
                   return -1;
               else
                   return 0;
           } 
        });
        for (int val : piles)
            heap.offer (val);
        while (k-- > 0) {
            int stones = heap.poll ();
            stones -= (int) (Math.floor (stones / 2));
            heap.offer (stones);
        }
        int sum = 0;
        while (!heap.isEmpty ())
            sum += heap.poll ();
        return sum;
    }
}
```