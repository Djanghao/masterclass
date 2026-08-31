# Learn to Think | Detailed Thought Process | How to Approach | Permutations and DP

**Author:** viv697
**Votes:** 22
**Link:** [https://leetcode.com/problems/count-the-number-of-inversions/solutions/5354671/](https://leetcode.com/problems/count-the-number-of-inversions/solutions/5354671/)

---

# Understanding the Problem
The Description is poor, examples are limited.  Therefore, let us first try to understand the problem.

We are given an integer `n`. We use that to make an array: `arr := [0, 1, 2, 3, ... , n-1]`. We have to consider all the permutations of this array. Recall, for an array of length `n`, there exist `n!` (factorial `n`) permutations.

For each permutation, we can count the number of inversions. An Inversion is a pair of indexes `(i,j)` such that `i<j` and `arr[i] > arr[j]`.

Next, there's this 2D-array called `requirements` - a list of 'requirement'. Each requirement is a constraint to be applied onto permutations of array `arr`. Namely, each requirement is a pair `[end, cnt]`. A permutation of `arr`, hereafter referred to as `arr_perm`, satisfies this constraint iff the number of inversions in `arr_perm[0:end+1] == cnt`. 
Note that I'm using the python slice notation so `arr_perm[0:end+1]` refers to the first `end+1` elements of the permutation of array `arr: arr_perm`, i.e. elements from beginning upto and including index `end`.

Finally, we are to calculate and return the number of permutations of array `arr` that satisfy **all** of the requirements.

Note that number of permutations may be very large, since `n` can be upto `300`, so we have to actually return the answer modulo the constant `1000000007`.  

**Example 1:** 
Input: n = 3, requirements = [[2,2],[0,0]]
Output: 2
**Explanation:**
for n = 3, we build the array `arr := [0, 1, 2]`. This array has `3! = 6` permutations with corresponding inversions*:-
```
Permutation    Inversions
[0, 1, 2]        None
[0, 2, 1]        (1,2)
[1, 0, 2]        (0,1)
[1, 2, 0]        (0,2), (1,2)
[2, 0, 1]        (0,1), (0,2)
[2, 1, 0]        (0,1), (0,2), (1,2)
```
Note the inversions are index pairs, and not the value pairs. Thus in array `arr_perm := [0,2,1]` with inversion pair `(1,2)`, `1` and `2` are indexes. The corresponding values in the `arr_perm` are `2` and `1`.

Next, we have to apply the requirement constraints to various slices of each permutation. 

```              
Permutation  Slice-upto-index-0   Slice-upto-index-1   Slice-upto-index-2   
  of arr        and Inversions       and Inversions     and Inversions    
[0, 1, 2]     [0]   None           [0,1]   None        [0,1,2]
[0, 2, 1]     [0]   None           [0,2]   None        [0,2,1]  (1,2)
[1, 0, 2]     [1]   None           [1,0]   (0,1)       [1,0,2]  (0,1)
[1, 2, 0]     [1]   None           [1,2]   None        [1,2,0]  (0,2), (1,2)
[2, 0, 1]     [2]   None           [2,0]   (0,1)       [2,0,1]  (0,1), (0,2)
[2, 1, 0]     [2]   None           [2,1]   (0,1)       [2,1,0]  (0,1),(0,2),(1,2)
```
Note that there are two requirements: `[0,0]` and `[2,2]`. The former says that slices upto index `0` cannot have any inversions. As can be seen in the table above, all permutations satisfy this requirement. 
Note that this is always going to be true because you need two elements for the possibility of an inversion. Slices upto index `0` are necessarily single element.

The next requirement says that slices upto index `2` must have only `2` inversions. As can be seen from table above, two permutations, specifically, `[1, 2, 0]` and `[2, 0, 1]` satisfy this constraint. 

Hence the output is `2`.   

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
I always try to think of the brute force approach before trying to think of the ideal solution. Thus, my first thought was to consider exploring all the permutations and checking each permutation against the list of requirements. 

It is easy to see that this approach will TLE because, as the question description points out, even after pruning for those permutations that don't satisfy a constraint, the number may be very large ( and hence the need for modulo ). 

So it is clear that I must use some permutation/combination logic so I can explore all permutations without computing each of them.
    
# Approach
<!-- Describe your approach to solving the problem. -->
Once it is understood that we need to work with permutation/combination logic, so as not to explore permutations individually; the immediate idea was to use the fact that requirements apply to slices. Thus it makes sense to sort the slices, and then build up the permutations or prune down the permutations:
1. **Prune Down:** We could start with count of all permutations, go through the requirements in decreasing order to prune permutations that do not satisfy the requirements.
2. **Build Up:** We could start with permutations of smallest slice, and then add elements along the way so that inversions can be controlled.

Exploring the Prune down process:
Let's start with index `n-1`. We can have a total of `n!` permutations. Let's assume a requirement of `c` inversions permitted at index `n-1`. I would then need a formula to calculate how many permutations satisfy the requirement `[n-1,c]`. 
Next, assume another requirement `[n-2, c2]`. In this case, if `c < c2` is not possible. Adding a new elem, inversions can increase, or stay same, but not decrease. Thus, if `c2==c`, the new elem added did not create any new inversions. And if `c2<c`, then new inversions were added. 

The fact that it was naturally easier for me to reason changing inversion count with adding elements, and not removing them, suggested me to explore the Build Up approach.

Exploring the Build Up approach:
let's assume we know there are `m` permutations with `c` inversions upto some index `i`. The next requirement is at some index `j` to have `c2` inversions. Once again-
if `c2==c`: Then there is only one way to add elements- increasing order.
if `c2<c` : This is not possible, because we cannot reduce inversions by adding elements.
if `c2>c` : Now we have added `(j-i)` elements and introduced `(c2-c)` inversions. If we are to use this approach, we need a formula for computing the number of permutations when adding `x` elems with `y` inversions.

Trying to come up with such a formula directly seems hard. So we start with adding one elem:-
Given some permutation of length `l`, there are `l+1` places where the new elem can be put. The number of inversions added by introducing the new elem is given by counting how many elements are larger than it to it's left, and how many are smaller to it on it's right. 

This gave me the idea that if we were adding elems to our permutation sequence in increasing order, one by one, then we can compute the inversions introduced very easily- by knowing the position where were introducing it. We will then add this new inversions created to existing inversion count to get the new inversion count.

Consider an example:
we start at index `0`: slice `[0]`
We add elem `1`. Since the length of existing slice is `1`, there are `(1+1)` two positions we can place `1`. Placing `1` at index `1` produced no inversions. Placing `1` at index `0` produces `1` inversion. 

In general, given a permutation of length `l`, a new elem `x` can be placed at any position `pos` $$ pos \\in [0,l]$$ to add exaclty `l-pos` inversions ( the number of elements to it's right; no elements smaller than `x` exist in the sequence). This is **irrespective** of which specific permutation is under consideration. 

To explain with an example, consider a slice of 3 elements with all permutations:
```
Permutation    Inversion Count
[0, 1, 2]        0
[0, 2, 1]        1
[1, 0, 2]        1
[1, 2, 0]        2
[2, 0, 1]        2
[2, 1, 0]        3

```
Now let's say we add en element `3` to these permutations. For length `3` sequence, there are `(3+1) = 4` places to place the element `3`. Depending upon the position `pos`$$\\in[0,3]$$, we will be adding `3-pos` inversions, irrespective of which specific permutation we add the new element to.

```
          Permutation  Add-4-at-idx-0  Add-4-at-idx-1  Add-4-at-idx-2  Add-4-at-idx-3
                                             
           [0, 1, 2]   [3,0,1,2]        [0,3,1,2]        [0,1,3,2]      [0,1,2,3]            
Inversions     0        0+(3-0)          0+(3-1)          0+(3-2)        0+(3-3)
           [0, 2, 1]   [3,0,2,1]        [0,3,2,1]        [0,2,3,1]      [0,2,1,3]            
Inversions     1        1+(3-0)          1+(3-1)          1+(3-2)        1+(3-3)

           [1, 0, 2]   [3,1,0,2]        [1,3,0,2]        [1,0,3,2]      [1,0,2,3]            
Inversions     1        1+(3-0)          1+(3-1)          1+(3-2)        1+(3-3)

           [1, 2, 0]   [3,1,2,0]        [1,3,2,0]        [1,2,3,0]      [1,2,0,3]            
Inversions     2        2+(3-0)          2+(3-1)          2+(3-2)        2+(3-3)

           [2, 0, 1]   [3,2,0,1]        [2,3,0,1]        [2,0,3,1]      [2,0,1,3]            
Inversions     2        2+(3-0)          2+(3-1)          2+(3-2)        2+(3-3)

           [2, 1, 0]   [3,2,1,0]        [2,3,1,0]        [2,1,3,0]      [2,1,0,3]            
Inversions     3        3+(3-0)          3+(3-1)          3+(3-2)        3+(3-3)

```
This allows us to describe the state via a hashmap that maps inversion_counts to permutation_counts. When we add an element, we operate on all permutations with the same inversion-count as a unit, and are able to compute new inversion counts by iterating over the various positions that the new element can take. We do this over all unique values of inversion-counts to produce the new state.

# Complexity
- Time complexity: $$O(N^4)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
A state groups different permutations based on # of inversion_counts. It is easy to see that the max inversion_count for a permutations of sequence of length `n` is `n*(n-1)/2`. Thus, the state size is bounded by $$O(N^2)$$.
The new inversions are bounded by $$O(N)$$.
Thus, we perform $$O(N^3)$$ operations on sequence of length `N`. 
Therefore, as we build the sequence from size `1` to `N`, we perform operations bounded by $$O(N^4)$$. 

- Space complexity:$$O(N^2)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We only store two states at a time. Thus, the space complexity is bounded by size of state which is bounded by size of set of inversion counts in a sequence of length `N`.

# Code
```
MOD = 1000000007
class Solution(object):    
    def numberOfPermutations(self, n, requirements):
        """
        :type n: int
        :type requirements: List[List[int]]
        :rtype: int
        """        
        requirements.sort(key= lambda x: x[0])
        # After sorting, last requirement is on index n-1
        n = requirements[-1][0] + 1
        c_req = len(requirements)

        # Initialize state with slice of one element 
        # [0] has only one permutation, 0 inversions
        state = {0:1} # inversion_count:permutation-count
        
        idx = 0 # To track requirements
        # consider the case of requirement on [0]
        if requirements[0][0]==0:   
            if requirements[0][1]==0:
                # requirement of [0,0] is already satisfied
                idx = 1
            else:
                # no permutation can have inversions on single element
                return 0

        for l in range(2,n+1):
            # Add one number to all existing permutations
            # current length = l-1; Add one element to make length l. 
            # positions to add new element: l
            # Since every num in all perms is smaller than x, inversions created by x is determined by pos of 'x':[0,l-1] 
            new_state = defaultdict(int)
            for ic in state.keys():
                for new_inversions in range(l):
                    new_state[ic+new_inversions] += state[ic]
                        
            if idx<c_req and l-1==requirements[idx][0]:
                # A requirement has been placed on inversion counts upto this index
                inv_count = requirements[idx][1]
                if inv_count not in new_dict: 
                    # No permutation satisfies this requirement
                    return 0
                state = { inv_count: new_dict[inv_count] }
                idx += 1
            else:
                # Include all permutations
                state = new_state
        return state.items()[0][1] % MOD

```

The above solution actually produced a TLE. We can further optimize the computation by noting that successive requirements introduce new limits on the number of inversion counts. Since inversion counts can only increase as our computation progresses, we need not keep adding inversions to permutations that have exceeded the upcoming requirement limit. These permutations can be thrown out from the state.
Further, the problem itself imposes a maximum limit of 400 inversion counts.

# Optimized Code
```
MOD = 1000000007
class Solution(object):    
    def numberOfPermutations(self, n, requirements):
        """
        :type n: int
        :type requirements: List[List[int]]
        :rtype: int
        """        
        requirements.sort(key= lambda x: x[0])
        # After sorting, last requirement is on index n-1
        n = requirements[-1][0] + 1
        c_req = len(requirements)

        # Initialize state with slice of one element 
        # [0] has only one permutation, 0 inversions
        state = {0:1} # inversion_count:permutation-count
        
        idx = 0 # To track requirements
        # consider the case of requirement on [0]
        if requirements[0][0]==0:   
            if requirements[0][1]==0:
                # requirement of [0,0] is already satisfied
                idx = 1
            else:
                # no permutation can have inversions on single element
                return 0

        limit = requirements[idx][1]    
        for l in range(2,n+1):
            # Add one number to all existing permutations
            # current length = l-1; Add one element to make length l. 
            # positions to add new element: l
            # Since every num in all perms is smaller than x, inversions created by x is determined by pos of 'x':[0,l-1] 
            new_state = defaultdict(int)
            for ic in state.keys():
                # if inversion_count>limit of next req,
                # All these permutations will be thrown out at_ 
                # _next requirement. So no point in keeping them
                if ic>limit: continue
                for new_inversions in range(l):
                    new_state[ic+new_inversions] += state[ic]
                        
            if idx<c_req and l-1==requirements[idx][0]:
                # A requirement has been placed on inversion counts upto this index
                inv_count = requirements[idx][1]
                if inv_count not in new_dict: 
                    # No permutation satisfies this requirement
                    return 0
                state = { inv_count: new_dict[inv_count] }
                idx += 1
                if idx<c_req:
                    limit = requirements[idx][1]
                else:
                    limit = 400 # from description
            else:
                # Include all permutations
                state = new_state
        return state.items()[0][1] % MOD

```