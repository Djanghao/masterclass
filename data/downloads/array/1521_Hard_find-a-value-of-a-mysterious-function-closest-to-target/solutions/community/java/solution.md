# [Java] O(n), O(1) multiple approaches with explanation

**Author:** shk10
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/927360/](https://leetcode.com/problems/find-a-value-of-a-mysterious-function-closest-to-target/solutions/927360/)

---

**Key points:**

* Since ```1 <= arr[i] <= 10^6```, AND of any subarray arr[l..r] would lie in [0, 1048575].
-> 10^6 = 1111 0100 0010 0100 0000 (20 bits) so maximum AND could be 1111 1111 1111 1111 1111 = 2^20 - 1 = 1048575
-> Since ```0 <= target <= 10^7```, -1000000000 (-10^9) would always be farther to target in comparison to AND of any subarray. So we'd never choose l > r and will only be concerned with finding best (l, r) wrt l <= r i.e. finding the closest distance of AND of some subarray to target.
* AND of subarrays starting at an index i are non-increasing (in both left and right directions) i.e. elements of the sequence arr[i], arr[i] & arr[i+1], arr[i] & arr[i+1] & arr[i+2], arr[i] & arr[i+1] & arr[i+2] & arr[i+3], ... either stay the same or decrease.
-> Taking AND with another element can only change a 1 to 0 (decrease the result) but not change a 0 to 1 (increase the result).
* There can be atmost 2 + log(A[i]) unique numbers in the AND of subarrays starting at an index i.
-> There are 1 + log(n) bits in binary representation of n.
-> Each bit can change from 1 to 0 only once so after the first number, there can be 1 + log(n) additional numbers. Hence total unique numbers is given by 2 + log(n). Example: n = 7, 7 (111) -> 3 (011) -> 1 (001) -> 0 (000). size( {7, 3, 1, 0} ) = 4 = 2 + log(7).

**Approach 1: Optimized exhaustive search**
If we have all the values of AND of subarrays ending at i, can we calculate all the values of AND of subarrays ending at i+1? Yes, we need to take AND of cur element, A[i+1] with all the previous values and add the current element.
Example:
arr = [9,12,3,7,15]
AND ending at 9 = {9}
AND ending at 12 = {9 & 12} + {12} = {8} + {12} = {8, 12}
AND ending at 3 = {8 & 3, 12 & 3} + {3} = {0, 0} + {3} = {0} + {3} = {0, 3}
AND ending at 7 = {0 & 7, 3 & 7} + {7} = {0, 3} + {7} = {0, 3, 7}
AND ending at 15 = {0 & 15, 3 & 15, 7 & 15} + {15} = {0, 3, 7} + {15} = {0, 3, 7, 15}

What makes this approach O(n) instead of O(n^2) is the last bullet point that there can only be 2 + log(A[i]) elements in the set of values at any i. max(A[i]) = 10^6 so there will never be more than 2 + log(10^6) = 21 elements in the set.

Version 1: 120 ms, 47.90%
```
public int closestToTarget(int[] arr, int target) {
    int res = Integer.MAX_VALUE;
    Set<Integer> set = new HashSet<>();
    for(int a: arr) {
        Set<Integer> next = new HashSet<>();
        for(int p: set) {
            next.add(a & p);
        }
		next.add(a);
        for(int p: next) {
            res = Math.min(res, Math.abs(p - target));
        }
        set = next;
    }
    return res;
}
```

Since we know that the set of AND values at any i are going to be sorted (refer second bullet point and above example), so we can use arrays instead of sets to make the code more performant. Note that worst case time and space complexities remain same.

As a replacement for set and next, we maintain cur and next arrays along with their sizes and swap the two in each iteration. We put -1 as a sentinel at cur[0] and next[0] to replace the condition ```if(next_size == 0 || next[next_size-1] != (cur[i] & a))``` with ```if(next[next_size-1] != (cur[i] & a))```.

Version 2: 9 ms, 96.64%
```
public int closestToTarget(int[] arr, int target) {
    int[] cur = new int[22], next = new int[22];
    cur[0] = next[0] = -1;  // sentinel
    int res = Integer.MAX_VALUE, cur_size = 1;
    for(int a: arr) {
        int next_size = 1;
        for(int i = 1; i < cur_size; i++) {
            if(next[next_size-1] != (cur[i] & a)) {
                next[next_size++] = cur[i] & a;
                res = Math.min(res, Math.abs((cur[i] & a) - target));
            }
        }
        if(next[next_size-1] != a) {
            next[next_size++] = a;
            res = Math.min(res, Math.abs(a - target));
        }
        int[] temp = cur; cur = next; next = temp;  // swap cur and next
        cur_size = next_size;
    }
    return res;
}
```
We can further optimize this code once we realize that we don't need an additional array for next. We can simply write over the same array in the next iteration.

Version 3: 8 ms, 96.64%
```
public int closestToTarget(int[] arr, int target) {
    int[] prefix = new int[22];
    prefix[0] = -1;
    int res = Integer.MAX_VALUE, size = 1;
    for(int a: arr) {
        int ns = 1;
        for(int i = 1; i < size; i++) {
            if(prefix[ns-1] != (prefix[i] & a)) {
                prefix[ns++] = prefix[i] & a;
                res = Math.min(res, Math.abs((prefix[i] & a) - target));
            }
        }
        if(prefix[ns-1] != a) {
            prefix[ns++] = a;
            res = Math.min(res, Math.abs(a - target));
        }
        size = ns;
    }
    return res;
}
```

**Approach 2: Sliding Window**
**Idea:** Maintain a window using two indices l and r. We are concerned with val = AND of values in arr[l..r]. Extend the window to the right as long as val >= target. Once we hit the point where val < target, the window becomes invalid and we start making the window smaller by increasing l to make it valid again. We compare val with target at all times (including when the window becomes invalid) to find the closest val.

**Implementation:** Maintaining val when going from left to right is easy: just keep taking AND of val with the new element but how to quickly update it when an element gets removed from left? To achieve this, instead of maintaining val directly, we maintain count of 1s (or 0s) at each bit position for all the elements in the window. Now updating the window is easy: to add an element, increase the count of 1s at all the positions where the element has a 1 in the binary representation; to remove an element, decrease the count of 1s likewise. val can be calculated on the fly with the help of size of the window: AND would give a 1 at a bit position if the count of 1s at that position is equal to size (meaning that all elements have a 1 at that bit position) else it would give 0. Since max(A[i]) = 10^6, we just need 20 bits for count.

Version 1: 52 ms, 89.92%
```
private void update(int[] count, int val, int delta) {
    for(int i = 0; i < count.length; i++) {
        count[i] += (val & (1 << i)) != 0 ? delta : 0;
    }
}
private int value(int[] count, int size) {
    int val = 0;
    if(size > 0) {
        for(int i = 0; i < count.length; i++) {
            val |= count[i] == size ? (1 << i) : 0;
        }
    }
    return val;
}
public int closestToTarget(int[] arr, int target) {
    int[] count = new int[20];
    int l = 0, res = Integer.MAX_VALUE;
    for(int r = 0; r < arr.length; r++) {
        update(count, arr[r], 1);
        int val = value(count, r-l+1);
        res = Math.min(res, Math.abs(val - target));
        while(val < target && l <= r) {
            update(count, arr[l++], -1);
            val = value(count, r-l+1);
            res = Math.min(res, Math.abs(val - target));
        }
    }
    return res;
}
```