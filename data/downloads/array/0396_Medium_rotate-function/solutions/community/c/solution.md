# Sliding window approach in C++

**Author:** CodHeK
**Votes:** 63
**Link:** [https://leetcode.com/problems/rotate-function/solutions/531675/](https://leetcode.com/problems/rotate-function/solutions/531675/)

---

Explanation :

A = [4, 3, 2, 6] 

All the positions when rotated can be represented using the array : [4, 3, 2, 6, 4, 3, 2, 6] that is array A repeated twice.

```

idx : 0 1 2 3 4 5 6 7
arr : 4 3 2 6 4 3 2 6

All rotations :

4 3 2 6 -> 0 to 3

3 2 6 4 -> 1 to 4

2 6 4 3 -> 2 to 5

6 4 3 2 -> 3 to 6

```

`fn` first calculates the answer for the first permutation which is `[4, 3, 2, 6]` = `25`

Moving to next permutation which is `[3, 2, 6, 4]` we see we're removing `(0*4)` and adding `(4*4)` when sliding on the extended array.

But since our answer would now be having `(1*3 + 2*2 + 3*6 + 4*4)` which is just `array_sum + (0*3 + 1*2 + 2*6 + 3*4) ` we would have to subtract the `array_sum` once at each iteration from our answer;

```
 long removed = (l-1) * A[l-1];
 long added = r * A[r%len];
            
 newfn = newfn - removed + added - sum;
			
```


```
class Solution {
public:
    int maxRotateFunction(vector<int>& A) {
        long sum = 0, fn = 0;
        int len = A.size();
        for(int i=0;i<len;i++) {
            sum += A[i];
            fn += (i * A[i]);
        }

        long l = 1, r;
        long newfn = fn;
        
        while(l < len) {
            r = l + len - 1;
            
            long removed = (l-1) * A[l-1];
            long added = r * A[r%len];
            
            newfn = newfn - removed + added - sum;
            
            fn = max(fn, newfn);
            
            l++;
        }
        
        return (int)fn;
    }
};
```

Hope it's clear enough. Cheers! :D