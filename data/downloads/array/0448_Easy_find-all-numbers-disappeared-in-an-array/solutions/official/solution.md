# Official Solution

**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solution/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solution/)

---

[TOC]

## Solution

### Approach 1: Using Hash Map

**Intuition**

The intuition behind using a hash map is pretty clear in this case. We are given that the array would be of size `N` and it should contain numbers from `1` to `N`. However, some of the numbers are missing. All we have to do is keep track of which numbers we encounter in the array and then iterate from $$1 \cdots N$$ and check which numbers did not appear in the hash table. Those will be our missing numbers. Let's look at a formal algorithm based on this idea and then an animation explaining the same with the help of a simple example.

**Algorithm**

1. Initialize a hash map, `hash` to keep track of the numbers that we encounter in the array. Note that we can use a `set` data structure as well in this case since we are not concerned about the frequency counts of elements.

    <center>
    <img src="../Figures/448/anim1.png" width="700"/>
    </center>
    
    > Note that for the purposes of illustration, we have use a hash map of size 14 and have ordered the keys of the hash map from 0 to 14. Also, we will be using a simple hash function that directly maps the array entries to their corresponding keys in the hash map. Usually, the mapping is not this simple and is dependent upon the hash function being used in the implementation of the hash map. 
  
2. Next, iterate over the given array one element at a time and for each element, insert an entry in the hash map. Even if an entry were to exist before in the hash map, it will simply be over-written. For the above example, let's look at the final state of the hash map once we process the last element of the array.

    <center>
    <img src="../Figures/448/anim9.png" width="700"/>
    </center>

3. Now that we know the `unique` set of elements from the array, we can simply find out the missing elements from the range $$1 \cdots N$$.
4. Iterate over all the numbers from $$1 \cdots N$$ and for each number, check if there's an entry in the hash map. If there is no entry, add that missing number to a result array that we will return from the function eventually. 

<center>

!?!../Documents/448_Disappeared_Nums.json:600,413!?!

</center>

<iframe src="https://leetcode.com/playground/AtXH5SMC/shared" frameBorder="0" width="100%" height="500" name="AtXH5SMC"></iframe>


**Complexity Analysis**

* Time Complexity : $$O(N)$$
* Space Complexity : $$O(N)$$
<br/>
<br/>

---

### Approach 2: O(1) Space InPlace Modification Solution

**Intuition**

We definitely need to keep track of all the `unique` numbers that appear in the array. However, we don't want to use any extra space for it. This solution that we will look at in just a moment springs from the fact that

> All the elements are in the range [1, N]

Since we are given this information, we can make use of the input array itself to somehow `mark visited` numbers and then find our missing numbers. Now, we don't want to change the actual data in the array but who's stopping us from changing the `magnitude` of numbers in the array? That is the basic idea behind this algorithm. 

> We will be negating the numbers seen in the array and use the sign of each of the numbers for finding our missing numbers. We will be treating numbers in the array as indices and mark corresponding locations in the array as negative.

**Algorithm**

1. Iterate over the input array one element at a time.
2. For each element `nums[i]`, mark the element at the corresponding location negative if it's not already marked so i.e. $$nums[\; nums[i] \;- 1\;] \times -1$$ .
3. Now, loop over numbers from $$1 \cdots N$$ and for each number check if `nums[j]` is negative. If it is negative, that means we've seen this number somewhere in the array. 
4. Add all the numbers to the resultant array which don't have their corresponding locations marked as negative in the original array.

<center>

!?!../Documents/448_Disappeared_Nums_2.json:600,302!?!

</center>

<iframe src="https://leetcode.com/playground/XHixphKh/shared" frameBorder="0" width="100%" height="500" name="XHixphKh"></iframe>

**Complexity Analysis**

* Time Complexity : $$O(N)$$
* Space Complexity : $$O(1)$$ since we are reusing the input array itself as a hash table and the space occupied by the output array doesn't count toward the space complexity of the algorithm. 
<br/>
<br/>