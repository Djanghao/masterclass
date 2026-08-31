# Java Solution With Detailed Explanation

**Author:** profchi
**Votes:** 27
**Link:** [https://leetcode.com/problems/minimum-reverse-operations/solutions/3368312/](https://leetcode.com/problems/minimum-reverse-operations/solutions/3368312/)

---

# Background

Suppose the value 1 in the array is at index x. Let\u2019s think of the places we could move it to if we could reverse any subarray of size k containing x. If we have an array of size 10 and x is 6 and k is 4, we could move x to positions   3,5,7 and 9. If k is 3, we could move x to 4, 6(current position), 8. Notice that the parity (mod 2) of index we could move to are same. So if we can find the minimum and maximum index that could be visited, we can assume that all index of same parity in between can be visited with a single reversal.

# Intuition
\u2028To solve this problem, we can perform a bfs starting at p. We also use two TreeSet (odd and even parity index) to keep track of the index which are not banned and haven\u2019t been visited. While performing the bfs, we find the parity of index we can move to if we  reversing a subarray k containing the index x. Next we find the minimum and maximum index we can move to with a single reversal. In most cases, the minimum index is x - k + 1 and the maximum is x + k - 1. However there are special cases where x is closer to the extreme of the array. If x is closer to the left of the array more formally x < k, then the minimum (k - 1) - x. A Similar logic also apply to the maximum when x closer to the right end. Once we have the parity, max and min index we could move to from the current index under consideration. We can add all values of index in the treeset with the right parity to the queue and remove the values from the set since they are already visited. This process would be repeated until the queue is empty as in the standard bfs.

Time Complexity : O(n log n) as treeset operations take O(log n)
Space Complexity: O(n) used by the sets

Please upvote if you like the solution :)

# Code

```
class Solution {
    public int[] minReverseOperations(int n, int p, int[] banned, int k) {
        TreeSet<Integer> even = new TreeSet<>();
        TreeSet<Integer> odd = new TreeSet<>();
        
        TreeSet<Integer> set;
        
        boolean [] skip = new boolean [n];
        
        for (int num : banned) {
            skip[num] = true;
        }
        
        int start = p;
        
        // Add values to the set that are not banned
        for (int i = 0; i < n; ++i) {
            if (skip[i] || i == p)
                continue;
            
            if (i % 2 == 1)
                odd.add(i);
            else
                even.add(i);
        }
        
        int [] result = new int [n];
        Arrays.fill(result, -1);
        
        Queue<Integer> queue = new LinkedList<>();
        queue.add(p);
        
        int size;
        int current;
        int moves = 0;
        
        int min, max;
        
        Integer key;
        
        int mCurrent;
        
        while (!queue.isEmpty()) {
            size = queue.size();
            
            
            while (size-- > 0) {
                current = queue.remove();
                
                result[current] = moves;
                
                
                // calculate min index
                if (current < k - 1) {
                    min = (k - 1) - current;
                }else {
                    min = current - k + 1;
                }
                
                // calculate max index
                mCurrent = (n - 1) - current;
                if (mCurrent < k - 1) {
                    max = (k - 1) - mCurrent;
                }else {
                    max = mCurrent - k + 1;
                }
                max = (n - 1) - max;
                
                
                // chose the correct parity set
                set = min % 2 == 0 ? even : odd;
                
                key = set.ceiling(min);
                
                // add all values in range to the queue and remove from set
                while (key != null && key <= max) {
                    queue.add(key);
                    set.remove(key);
                    key = set.ceiling(min);
                }
            }
            
            ++moves;
        }
        
        
        return result;
    }
}
```