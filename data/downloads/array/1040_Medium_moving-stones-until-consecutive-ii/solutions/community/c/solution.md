# C++  solution | Sliding window for minimum moves

**Author:** shivamxarora
**Votes:** 15
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/555907/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/555907/)

---

First, **sort** the given stones array.
1. To find **minimum** moves, we approach the problem by checking each window which has a size not greater than **stones.size()**. The intitution is that in a window which has size less than or equal to the number of stones, we can always get the unoccupied spaces and accordingly put the other stones inside and outside that window to make them consecutive. We just have to get that window in which we can do so in least number of moves.
2. To find **maximum** moves, we just have to make the stones jump only to their **nearest** unoccupied space in a move and keep doing this until all the stones are consecutive.
```
class Solution {
public:
    vector<int> numMovesStonesII(vector<int>& stones) {
        int n = stones.size();
        vector<int> result;
        
		// sorting the stones array
        sort(stones.begin(), stones.end());
        
		// window size, stones count in a window
        int i = 0, j = 0, wsize, scount, minMoves = INT_MAX;
        
        while (j < n) {
            wsize = stones[j] - stones[i] + 1;
            scount = j - i + 1;
            
			// if window size becomes greater than number of stones
            if (wsize > n) {
                i++;
                continue;
            }
            
			/* To handle some corner cases
			   Example - _ _ 3 4 5 6 _ _ 10
			   Here, putting, stone at 10th position, next to stone at 6th position is an invalid move.
			*/
            if (wsize == n - 1 && scount == n - 1)
                minMoves = min(minMoves, 2);
            
            else minMoves = min(minMoves, n - scount);
                                    
            j++;
        }
        
        result.push_back(minMoves);
        
        int maxMoves;
		
		// consecutive stones at the beginning or consecutive stones at the end or both
        if (stones[1] == stones[0] + 1 || stones[n - 1] == stones[n - 2] + 1)
            maxMoves = stones[n - 1] - stones[0] + 1 - n;
        
		// non-consecutive stones at both the beginning and the end
        else 
            maxMoves = max(((stones[n - 1] - stones[1]) - (n - 1) + 1), ((stones[n - 2] - stones[0]) - (n - 1) + 1));
        
        result.push_back(maxMoves);
        
        return result;
    }
};