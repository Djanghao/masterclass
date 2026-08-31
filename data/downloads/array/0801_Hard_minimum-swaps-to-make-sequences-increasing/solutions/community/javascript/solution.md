# Detailed Explanation : O(n) Solution using 2 cases for Multisequences DP | Javascript | C++

**Author:** rbssmtkr
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3893159/](https://leetcode.com/problems/minimum-swaps-to-make-sequences-increasing/solutions/3893159/)

---

# Intuition
**Dynamic Programming Approach:**
The idea is to keep track of two states at each index i: swap[i] and not_swap[i].

`swap[i]` represents the minimum number of swaps required to make `A[0...i]` and `B[0...i]` strictly increasing, considering that you swap elements at index i.

`not_swap[i]` represents the minimum number of swaps required to make `A[0...i]` and `B[0...i]` strictly increasing, considering that you do not swap elements at index i.


**Transition Rules:**

If `A[i-1] < A[i] and B[i-1] < B[i]`, you can keep the same arrangement or swap elements. So, `swap[i] = swap[i-1] + 1 and not_swap[i] = not_swap[i-1]`.

If `A[i-1] < B[i] and B[i-1] < A[i]`, you can swap at index i or not swap. So, `swap[i] = min(swap[i]`, `not_swap[i-1] + 1)` and n`ot_swap[i] = min(not_swap[i], swap[i-1])`

# Approach

Case 1 : `A[i] > A[i-1] and B[i] > B[i-1]`

`swap[i] = swap[i-1] + 1 `
if you swapped at i - 1 then swap at i 

`not_swap[i] = not_swap[i-1];`
if you didn't swap at i - 1 dont swap here as well


Case 2 : `A[i] > B[i-1] and B[i] > A[i-1]`

Both may not be sorted or one is not sorted in this case

if swapped at [i - 1] index dont swap again otherwise swap here as only one of the 2 swaps are required
`swap[i] = min( swap[i] , not_swap[i-1] + 1 )`

`not_swap[i] = min( not_swap[i] , swap[i-1]  )`

there can be both possibilities together or singly so its taking a minimum of the possibilities in the process of calculation

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```javascript []
var minSwap = function(A, B) {

        const N = A.length;
        const swap = new Array(N).fill(1);
        const not_swap = new Array(N).fill(0);

        for (let i = 1; i < N; i++) {
            not_swap[i] = swap[i] = N;

            if (A[i - 1] < A[i] && B[i - 1] < B[i]) {
                swap[i] = swap[i - 1] + 1;
                not_swap[i] = not_swap[i - 1];
            }

            if (A[i - 1] < B[i] && B[i - 1] < A[i]) {
                swap[i] = Math.min(swap[i], not_swap[i - 1] + 1); 
// swapped at [i] th index
                not_swap[i] = Math.min(not_swap[i], swap[i - 1]); 
// swapped at [i - 1] th index
            }
        }
        return Math.min(swap[N - 1], not_swap[N - 1]);

    
};
```
```cpp []
class Solution {
public:
    int minSwap(vector<int>& A, vector<int>& B) {

        int N = A.size();
        vector<int> swap(N,1) , not_swap(N,0);
        for( int i = 1 ; i < N ; i++)
        {
            not_swap[i] = swap[i] = N;

            if( A[i-1] < A[i] && B[i-1] < B[i] )
            {
                swap[i] = swap[i-1] + 1;
                not_swap[i] = not_swap[i-1];
            }

            if( A[i-1] < B[i] && B[i-1] < A[i] )
            {
                swap[i] = min( swap[i] , not_swap[i-1] + 1 ); // swapped at [i] th index
                not_swap[i] = min( not_swap[i] , swap[i-1] ); // swapped at [i - 1] th index
            }
        }
        return min( swap[N-1] , not_swap[N-1] );
    }
};
```