# ✅ Simple Solutions w/ Explanation | All Possible Approaches Explained!

**Author:** archit91
**Votes:** 413
**Link:** [https://leetcode.com/problems/find-k-closest-elements/solutions/1310981/](https://leetcode.com/problems/find-k-closest-elements/solutions/1310981/)

---

\u2714\uFE0F ***Solution - I (Sort by distance from X)***

In this approach, we can take the given input array and sort its elements by their distance from `x`. After sorting we can choose the first `k` elements and then return them after sorting in ascending order. One point to note that we must use stable sort to ensure that 2nd condition given in the question is satisfied.

```
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        stable_sort(begin(arr), end(arr), [x](const auto a, const auto b){
            return abs(a - x) < abs(b - x);   // sort by distance from x
        });
        arr.resize(k);                        // choose first k elements
        sort(begin(arr), end(arr));           // sort the output in ascending order before returning
        return arr; 
    }
};
```

***Time Complexity :*** **`O(nlogn + klogk)`**, where `n` is the number of elements in *`arr`* and `k` is the number of closest element to be chosen. First we require `O(nlogn)` to custom-sort the whole array, then we are choosing the first `k` elements and sorting them in ascending order which takes another `O(klogk)`.
***Space Complexity :*** **`O(1)`** only constant space is required (ignoring the space used by in-built sorting algorithms)

---

\u2714\uFE0F ***Solution - II (2-Pointers)***

We can initialize two pointers `L=0` and `R=n-1`. Now our window size is `n` and contains excess elements. We will keep reducing the `[L, R]` window size till it becomes exactly equal to `k`. We can do this based on the condition - **`x - arr[L] <= arr[R] - x`**. If it is true, then it means *`arr[R]`* is farther away from `x` than *`arr[L]`* and thus we will eliminate *`arr[R]`*. Otherwise, we will eliminate *`arr[L]`*.

```
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {
        int L = 0, R = size(arr)-1;
        while (R - L >= k) 
            if (x - arr[L] <= arr[R] - x) R--;
            else L++;
        return vector<int>(begin(arr) + L, begin(arr) + R + 1);
    }
};
```

***Time Complexity :*** **`O(n-k)`**, we will keep reducing the window size from initial `n` to final `k` which will require a total of `n-k` comparisons.
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - III (Binary-Search and 2-Pointers)***

In the approach - I, we are not taking any **advantage of the fact that input array given to us is already sorted**. We can use binary search to find the smallest element in *`arr`* which is greater or equal to `x`. Let's mark this index as **`R`**. Let's mark the index preceding to **`R`** as **`L`** and element at this index will be smaller than `x` 

Now, `[L, R]` forms our window of elements closest to `x`. We have to expand this window to fit `k` elements. We will keep picking either *`arr[L]`* or *`arr[R]`* based on whichever's closer to `x` and expand our window till it contains `k` elements.

```
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {        
        int n = size(arr), R = lower_bound(begin(arr), end(arr), x) - begin(arr), L = R - 1;
		// expand the [L, R] window till its size becomes equal to k
        while(k--) 
            if(R >= n || L >= 0 && x - arr[L] <= arr[R] - x) L--;  // expand from left
            else R++;                                              // expand from right
        return vector<int>(begin(arr) + L + 1, begin(arr) + R);
    }
};
```

***Time Complexity :*** **`O(logn + k)`**, We need `O(logn)` time complexity to find **`r`** at the start. Then we need another `O(k)` time to expand our window to fit `k` elements
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - IV (Optimized Binary-Search and 2-Pointers)***

We can see that the answer would always be an array of `k` elements. So, the left pointer ***`L`*** must always start atleast `k` positions from the end, otherwise we would not have enough elements for our answer. So, instead of doing binary search on the entire *`arr`*, we could just do a **binary search on `[0, n-k]`** indices of `arr`. 

Here, `R` won't always hold the index of smallest elmeent >= `x` as it did above but rather it holds index of some element that we are sure would be part of the final window. Thereafter, the process will remain the same of above - use 2-pointers to fit `k` elements inside our window.

```
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {        
        int n = size(arr), R = lower_bound(begin(arr), end(arr) - k, x) - begin(arr), L = R - 1;
        while(k--) 
            if(R >= n || L >= 0 && x - arr[L] <= arr[R] - x) L--;
            else R++;
        return vector<int>(begin(arr) + L + 1, begin(arr) + R);
    }
};
```

***Time Complexity :*** **`O(log(n-k) + k)`**, We need `O(logn)` time complexity to find **`r`** at the start. Then we need another `O(k)` time to expand our window to fit `k` elements
***Space Complexity :*** **`O(1)`**

---

\u2714\uFE0F ***Solution - V (Modified Binary Search to find L)***

We can also observe that the answer will always be a continuous sub-array of *`arr`*. In the above approach we used binary search to find index of some element that would surely be part of our final window. We can further modify our approach to instead use **binary search to find the left bound of our window** so that we could eliminate the need for 2-pointers altogether.

Here, we will initialize `L = 0` and `R = n-k` (<- using the `solution - IV` optimization here). We have `mid = (L+R)/2`. Now, consider `arr[mid]` and `arr[mid + k]`. Both of these elements surely can't be in our final answer or else the final array size exceeds `k`. So we have to pick one of these. 

1. If `arr[mid]` is closer to `x`, then we will never pick `arr[mid+k]` or any element to its right in our final answer - so we can safely eliminate those elements and update `R = mid`. 
2. If `arr[mid + k]` is closer to `x`, then we will never pick `arr[mid]` or any elements to its left in our final answer - so we can safely eliminate those elements and update `L = mid + 1`.
3. **`arr[mid] == arr[mid + k] == C`** - This case needs to be handled properly. Here we can choose to include either `arr[mid]` or `arr[mid + k]` since they are equally close to `x`. It can be observed that it's always better to include `arr[mid+k]` when `x > C` and include `arr[mid]` when `x < C`. (See example below)

   <details>
   <summary><b>Illustration of 3rd case</b></summary>

   I felt the official solution or other posts don't properly illustrate the 3rd condition. So here goes - 
   The following example and diagram better explain it -
	* **`arr[mid] == arr[mid + k] = C`** and **`x > C`** (`k = 4` here) : 


                                                   x \u21B4 somewhere after C
	                          ..--a--b--C--C--C--C--C--d--e--....
                                        ^           ^
                                    arr[mid]   arr[mid+k]
				
		  Exclude arr[mid] by doing L = mid+1
	   	  Including arr[mid+k] gives us better chance of including d later on. 
		  If d turns out to be a lot farther away from x, we can always exclude it and just choose 4 C's. 
		  But if we had included arr[mid], then d was always out of question even if it had turned out to be a lot closer to x
		  
	* **`arr[mid] == arr[mid + k] = C`** and **`x < C`** (again `k = 4` here) :


			                        x \u21B4 somewhere before C
	                          ..--a--b--C--C--C--C--C--d--e--....
                                        ^           ^
                                    arr[mid]   arr[mid+k]
				
		  Exclude arr[mid+k] by doing R = mid. 
		  (Remember we are just finding left bound of window so arr[mid+k-1] is still has a possibility in final window)
	   	  Including arr[mid] gives us better chance of including b later on. 
		  If b turns out to be a lot farther away from x, we can always exclude it and just choose 4 Cs. 
		  But if we had included arr[mid+k], then b was always out of question even if it had turned out to be a lot closer to x

</details>

If the approach is still not clear, I would suggest watching the slides from official solution for better understanding.
<br/>
```
class Solution {
public:
    vector<int> findClosestElements(vector<int>& arr, int k, int x) {        
        int n = size(arr), L = 0, R = n - k;
        while (L < R) {
            int mid = (L + R) / 2;            
            if(arr[mid] == arr[mid + k])          // case - 3
                if (arr[mid] < x) L = mid + 1;
                else R = mid;
				
            else if (abs(x - arr[mid]) <= abs(x - arr[mid + k])) R = mid;   // case - 1
            else L = mid + 1;                                               // case - 2
        }
        return vector<int>(begin(arr) + L, begin(arr) + L + k);
    }
};
```

<details>
<summary><b>Compact Version</b></summary>

Here, 1st if condition will handle both cases 1 and 3.

```
vector<int> findClosestElements (vector<int>& arr, int k, int x) {        
	int n = size(arr), L = 0, R = n - k;
	while (L < R) {
		int mid = (L + R) >> 1;            
		if (x - arr[mid] <= arr[mid + k] - x) R = mid; // case - 1 and 3
		else L = mid + 1;                              // case - 2
	}
	return vector<int> (begin(arr) + L, begin(arr) + L + k);
}
```

</details>


***Time Complexity :*** **`O(log(n-k) + k)`**, We still need `O(k)` to build copy of sub-array of size `k` before returning. Although the TC is same as in above solution but we have eliminated the need for using 2-pointer approach and thus reduced that constant factor from our solution. 
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---