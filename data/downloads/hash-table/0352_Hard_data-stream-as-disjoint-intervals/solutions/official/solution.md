# Official Solution

**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solution/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solution/)

---

[TOC]

## Solution

--- 


### Approach 1: Save all values in an ordered set

#### Intuition

The question asks to combine consecutive values into intervals, namely, if we have values of 1, 2, 3, and 4, we can make an interval that starts from 1 and ends at 4. If the data is sorted, we can easily iterate over it to find the intervals. A data structure is needed that allows us to insert elements while maintaining sorted order, otherwise we would need to sort the data every time we call `getIntervals`, which is expensive.

Java's TreeSet can do the work. The reason to use a TreeSet is that we can iterate on the values in it in the increasing order and elements can be added in $O(\log{}n)$. In Python we can use SortedList and in C++ we can use the standard library's set. To find the intervals, we can look at each value and check whether it is adjacent to the previous one. If it is, we can build an interval, otherwise we need to start a new one.

#### Algorithm

Initialize a TreeSet equivalent data structure `values`.


##### addNum(int value)
Simply add `value` into `values`. If your language's TreeSet equivalent allows duplicate values like Python's SortedList, you will also need to check that `value` does not already exist in `values` as duplicates will break the algorithm.

##### getIntervals


* If `values` is empty, return an empty array.
* Create an empty list of intervals.
* Set `left = right = -1`. `left` represents the left bound of the current interval and `right` represents the right bound.
* Iterate over `values`. At each iteration:
   *  If `left < 0` set `left = right = value` 
   *  else if `value = right + 1`, set `right = value` as we can continue the current interval.
   *  else, we cannot continue the current interval. Insert `[left, right]` into `intervals` and set `left = right = value` to start a new one.
* Insert `[left, right]` into `intervals` and return `intervals`


#### Implementation

<iframe src="https://leetcode.com/playground/GQnYWXuW/shared" frameBorder="0" width="100%" height="500" name="GQnYWXuW"></iframe>


#### Complexity Analysis

Here, $N$ is the total number of calls of `addNum`.

* Time complexity: $O(log(N))$ for addNum, $O(N)$ for getIntervals.

  For `addNum`, we insert a value into the TreeSet which takes $O(log(N))$ time.
  For `getIntervals`, we iterate all the values in the TreeSet which is the same as traversing the whole tree, so the time complexity is $O(N)$.

* Space complexity: $O(N)$.

  This is just the space to save all the values in the TreeSet.


### Approach 2: Maintain all the intervals in ordered map

#### Intuition
Instead of storing the values and then building the intervals every time we call `getIntervals`, we can just store the intervals themselves and update them every time we add a number.

In Java, we can maintain a TreeMap in which each entry represents an interval. The key and value are the left and right bounds of an interval. We still want to maintain the intervals in sorted order so that when we add a number, we can easily find the interval a number is close to and perform merges if necessary. `getIntervals` then returns all the entries in the TreeMap. In Python, SortedDict can be used. In C++, STL map can be used.


When we insert a `value`, there are 3 non-trivial cases (in all cases, blue represents existing intervals, red is the number being added, and cyan is the result after our operations):

1. There is an interval with a right bound of `value - 1`.
In this case, we need to merge the this interval and the `value`, namely change the the interval's right bound into `value`.

<center>
<img src="../Figures/352/352_Data_Stream_as_Disjoint_Intervals_2.png" width="500"/>
</center>
<br>


2. There is an interval with a left bound of `value + 1`.
In this case, we need to merge this interval and the `value`, namely change the interval's left bound into `value`.

<center>
<img src="../Figures/352/352_Data_Stream_as_Disjoint_Intervals_1.png" width="500"/>
</center>
<br>

3. Both condition 1 and 2 are satisfied.
This is the combination of the previous 2 cases. We should make a new interval which "connects" the two intervals and replace them with the new one.

<center>
<img src="../Figures/352/352_Data_Stream_as_Disjoint_Intervals_3.png" width="500"/>
</center>
<br>

To be complete, there are 2 trivial cases as well:

1. The `value` is already in the existing intervals.
We do nothing.

2. All other cases.
We need to insert a new interval [`value`, `value`].


#### Algorithm

Initialize a TreeMap equivalent data structure `intervals`.


##### addNum(int value)
* Set `left = right = value`. These variables will represent the bounds of a new interval to be created.
* Let `smallEntry` be the entry with the greatest key (left bound) no larger than `value` in `intervals`.
* If `smallEntry` exists
   * Let `previous` be the value (right bound) in `smallEntry`, if `previous >= value` then this is the first trivial case, so return. 
   * If `previous == value - 1`, set `left` to the key (left bound) in `smallEntry`. This is the first non trivial case, so we will prepare a merge.
* Let `maxEntry` be the entry with the smallest key (left bound) larger than `value` in `intervals`.
* If `maxEntry` exists and the key in it is `value + 1`, then this is the second non trivial case.
  * Set `right` to the value in `maxEntry`.
  * Remove the key `value + 1` from `intervals`.
* Insert `[left, right]` into `intervals`. All cases are covered here. 

1. In the first case, we are updating the existing interval's entry since we set `left` to be that interval's key.
2. In the second case, we removed the old interval and are now adding a new one with the `right` bound set to be the removed interval's old `right` bound and `left` updated to `value`.
3. In the third case, we have done both of the above. We are replacing the interval on the left and deleting the interval on the right.
4. For the 2nd trivial case, we didn't modify any intervals and `[left, right] = [value, value]`.



##### getIntervals
Iterate over all the entries in `intervals` and return them in order.


#### Implementation

<iframe src="https://leetcode.com/playground/c7bDrXgu/shared" frameBorder="0" width="100%" height="500" name="c7bDrXgu"></iframe>


#### Complexity Analysis

Here, $N$ is the total number of calls of `addNum`.

* Time complexity: $O(log(N))$ for `addNum`, $O(N)$ for `getIntervals`.

  For `addNum`, in the worst case, we remove 2 entries from the TreeMap and add 1 entry, the time complexity for each operation is $O(log(N))$.
  For `getIntervals`, we iterate all the entries in the TreeMap which is the same as traversing the whole tree, so the time complexity is $O(N)$.

* Space complexity: $O(N)$.

  This is just the space to save all the intervals in the TreeMap.

---