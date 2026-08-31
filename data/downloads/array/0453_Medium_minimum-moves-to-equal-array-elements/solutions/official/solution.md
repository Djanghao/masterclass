# Official Solution

**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solution/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements/solution/)

---

[TOC]


## Solution

---

### Approach 1: Brute Force [Time Limit Exceeded]

Firstly, we know that in order to make all the elements equal to each other with minimum moves, we need to do the increments in all but the maximum element of the array.
 Thus, in the brute force approach, we scan the complete array to find the maximum and the minimum element. After this, we add 1 to all the elements except the maximum element, and
increment the count for the number of moves done. Again, we repeat the same process, and this continues until the maximum and the minimum element become equal to each other.

<iframe src="https://leetcode.com/playground/zDzVEUkJ/shared" frameBorder="0" name="zDzVEUkJ" width="100%" height="479"></iframe>

#### Complexity Analysis

* Time complexity : $O(n^2 k)$, where $n$ is the length of the array and $k$ is the difference between maximum element and minimum element.
* Space complexity : $O(1)$. No extra space required.

---

### Approach 2: Better Brute Force[Time Limit Exceeded]

#### Algorithm

In the previous approach, we added 1 to every element in a single step. But, we can modify this approach to some extent. In order to make the minimum element equal to the maximum element, we need to add 1 atleast $k$ times,
after which, the maximum element could change. Thus, instead of incrementing in steps of 1,we increment in bursts, where each burst will be of size $k=max-min$.
Thus, we scan the complete array to find the maximum and minimum element. Then, we increment every element by $k$ units and add $k$ to the count of moves. Again we
repeat the same process, until the maximum and minimum element become equal.

<iframe src="https://leetcode.com/playground/FG9JKTT6/shared" frameBorder="0" name="FG9JKTT6" width="100%" height="496"></iframe>

#### Complexity Analysis

* Time complexity : $O(n^2)$. In every iteration two elements are equalized.
* Space complexity : $O(1)$. No extra space required.

---

### Approach 3: Using Sorting [Accepted]

#### Algorithm

The problem gets simplified if we sort the given array in order to obtain a sorted array $a$. Now, similar to Approach 2,we use the difference $diff=max-min$ to update the elements of the array, but we need not traverse the whole array to find the maximum and minimum element every time,
since if the array is sorted, we can make use of this property to find the maximum and minimum element after updation in $O(1)$ time. Further, we need not actually update all the elements of the array.
To understand how this works, we'll go in a stepwise manner.

Firstly, assume that we are updating the elements of the sorted array after every step of calculating the difference $diff$. We'll see how to find the maximum and minimum element without
traversing the array. In the first step, the last element is the largest element. Therefore, $diff=a[n-1]-a[0]$. We add $diff$ to all the elements except the last one i.e. $a[n-1]$.
Now, the updated element at index 0 ,$a'[0]$ will be $a[0]+diff=a[n-1]$. Thus, the smallest element $a'[0]$ is now equal to the previous largest element $a[n-1]$. Since, the
 elements of the array are sorted, the elements upto index $n-2$ satisfy the property $a[j]>=a[j-1]$. Thus, after updation, the element $a'[n-2]$ will become the largest element, which is obvious due to the sorted array property. Also, $a[0]$
 is still the smallest element.

 Thus, for the second updation, we consider the difference $diff$ as $diff=a[n-2]-a[0]$. After updation, $a''[0]$ will become equal to $a'[n-2]$ similar to the first iteration.
 Further, since $a'[0]$ and $a'[n-1]$ were equal. After the second updation, we get $a''[0]=a''[n-1]=a'[n-2]$. Thus, now the largest element will be $a[n-3]$.
 Thus, we can continue in this fashion, and keep on incrementing the number of moves with the difference found at every step.

 Now, let's come to step 2. In the first step, we assumed that we are updating the elements of the array $a$ at every step, but we need not do this. This is because, even after updating
 the elements the difference which we consider to add to the number of moves required remains the same because both the elements $max$ and $min$ required to find the $diff$ get updated by the
 same amount everytime.

 Thus, we can simply sort the given array once and use $moves=\sum_{i=1}^{n-1} (a[i]-a[0])$.

<iframe src="https://leetcode.com/playground/RaVVUTFL/shared" frameBorder="0" name="RaVVUTFL" width="100%" height="224"></iframe>

#### Complexity Analysis

* Time complexity : $O\big(nlog(n)\big)$. Sorting will take $O\big(nlog(n)\big)$ time.

* Space complexity : $O(1)$. No extra space required.

---

### Approach 4: Using DP [Accepted]

#### Algorithm

The given problem can be simplified if we sort the given array once. If we consider a sorted array $a$, instead of trying to work on the complete problem of
equalizing every element of the array, we can break the problem for array of size $n$ into problems of solving arrays of smaller sizes. Assuming, the elements upto
index $i-1$ have been equalized, we can simply consider the element at index $i$ and add the difference $diff=a[i]-a[i-1]$ to the total number of moves for the array upto index $i$ to be equalized i.e. $moves=moves+diff$.
 But when we try to proceed with this step, as per a valid move, the elements following $a[i]$ will also be incremented by the amount $diff$ i.e. $a[j]=a[j]+diff$, for $j>i$.
 But while implementing this approach, we need not increment all such $a[j]$'s. Instead, we'll add the number of $moves$ done so far to the current element i.e. $a[i]$ and update it to $a'[i]=a[i]+moves$.

  In short, we sort the given array, and keep on updating the $moves$ required so far in order to equalize the elements upto the current index without actually changing the elements of the
  array except the current element. After the complete array has been scanned $moves$ gives the required solution.
  
  The following animation will make the process more clear for this example:
  
  ```
  [13 18 3 10 35 68 50 20 50]
  ```
  
  <!-- ![Minimum_Moves_dp](../Figures/453_Minimum_Moves.gif)-->
  !?!../Documents/453_Minimum_Moves.json:1000,563!?!


<iframe src="https://leetcode.com/playground/ZeTzTVy6/shared" frameBorder="0" name="ZeTzTVy6" width="100%" height="258"></iframe>

#### Complexity Analysis

* Time complexity : $O\big(nlog(n)\big)$. Sorting will take $O\big(nlog(n)\big)$ time.

* Space complexity : $O(1)$. Only single extra variable is used.

---

### Approach 5: Using Math[Accepted]

#### Algorithm

This approach is based on the idea that adding 1 to all the elements except one is equivalent to decrementing 1 from a single element, since we are interested in the relative levels of the
 elements which need to be equalized. Thus, the problem is simplified to find the number of decrement operations required to equalize all the elements of the given array.
 For finding this, it is obvious that we'll reduce all the elements of the array to the minimum element. But, in order to find the solution, we need not actually decrement the elements. We can find the
 number of moves required as $moves=\sum_{i=0}^{n-1} a[i] - min(a)*n$, where $n$ is the length of the array.

<iframe src="https://leetcode.com/playground/n9x34Fi5/shared" frameBorder="0" name="n9x34Fi5" width="100%" height="241"></iframe>

#### Complexity Analysis

* Time complexity : $O(n)$. We traverse the complete array once.

* Space complexity : $O(1)$. No extra space required.

---

### Approach 6: Modified Approach Using Maths[Accepted]

#### Algorithm

There could be a problem with the above approach. The value $\sum_{i=0}^{n-1} a[i]$ could be very large and hence could lead to integer overflow if the $a[i]$'s are
very large. To avoid this problem, we can calculate the required number of $moves$ on the fly. $\sum_{i=0}^{n-1} (a[i]-min(a))$.

<iframe src="https://leetcode.com/playground/9udsqVkr/shared" frameBorder="0" name="9udsqVkr" width="100%" height="258"></iframe>

#### Complexity Analysis

* Time complexity : $O(n)$. One pass for finding minimum and one pass for calculating moves.

* Space complexity : $O(1)$. No extra space required.