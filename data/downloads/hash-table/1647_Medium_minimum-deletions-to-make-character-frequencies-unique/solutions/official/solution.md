# Official Solution

**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solution/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solution/)

---

[TOC]

## Solution

--- 

### Overview

We are given a string `s` of lowercase English letters. We need to delete some characters so that the frequency of each character is unique and the length of the remaining string is as long as possible. We can rephrase the question to "Given a list of `26` numbers (where each number represents the frequency of a different lowercase English letter) make these numbers unique by decrementing some of the frequencies."

Note that we can only decrement a number and cannot increment it. Hence, if we have two equal numbers, we will have to make one of these numbers smaller to make them unique. This is the key observation that we will use in the next three approaches.
</br>

---

### Approach 1: Decrement Each Duplicate Until it is Unique

**Intuition**

In each approach, we will first start by calculating the frequency of each character.  Then, in this approach, we will iterate over the frequencies, and for each frequency, we will check to see if this frequency has already been seen.  If it has, we will decrement the frequency until it becomes unique or it becomes zero (signifying that we have deleted all occurrences of this character).  Thus, as we iterate over the frequencies, we will need to store each frequency we have seen.

This approach will ensure that we get unique frequencies, but how do we know that the number of characters we delete in the process is the minimum possible? The reason is for each frequency, we reduce it as few times as possible. When we have multiple occurrences of a frequency, we will reduce each frequency only until it becomes an unused frequency, and then we will stop. If the maximum frequency is $$x$$, then all the frequencies have to be decremented (if needed) to be in the range $$[0, x]$$.

Note that the processing order does not matter. For example, if we have the frequencies `[4, 4, 5, 5]`, the final result will be `[2, 3, 4, 5]` or one of several other possible combinations of the frequencies `2`, `3`, `4`, and `5` that can be obtained by decrementing the values in `[4, 4, 5, 5]`. And the cost will be `(4 + 4 + 5 + 5) - (2 + 3 + 4 + 5) = 4` deletions. Since the number of deletions is just the difference in the sum of frequencies before and after making all frequencies unique, we would get the same result if our final frequencies were say `[4, 2, 3, 5]`. From this, we can conclude that the order in which we decrement frequencies, does not affect the number of deletions.

The following slideshow demonstrates this algorithm:

!?!../Documents/1647_Minimum_Deletions_to_Make_Character_Frequencies_Unique1.json:960,720!?! <br>

**Algorithm**

1. Store the frequency for each character in the given string `s` in a frequency array called `frequency`. We store the frequency for a character `c` at index `c - 'a'`. Thus, we will need `26` indices (from `0` to `25`) to store the frequencies of the characters.
2. Initialize the variable `deleteCount` to `0`, which stores the count of characters that need to be deleted. Also, initialize a HashSet `seenFrequencies` that stores the frequencies that have been occupied.
3. Iterate over the characters from `a` to `z` as `0` to `25`, for each character:
    - Keep decrementing its frequency until it becomes a number that is not present in set `seenFrequencies` or it becomes zero. Every time we decrement the frequency we increment the variable `deleteCount` to mark the deletion of the character.
    - When the frequency becomes unique (or zero) insert it into the set `seenFrequencies`.
4. Return `deleteCount`.

**Implementation**


<iframe src="https://leetcode.com/playground/Z27Zn3hL/shared" frameBorder="0" width="100%" height="480" name="Z27Zn3hL"></iframe>


**Complexity Analysis**

Here, $$N$$ is the length of the given string, and $$K$$ is the maximum possible number of distinct characters in `s`.

* Time complexity: $$O(N + K^2)$$

  To store the frequencies, we need to traverse the string, which will take $$O(N)$$ time. The maximum number of operations will occur when the frequencies for all the $$K$$ characters are the same. In that case, for the $$i_{th}$$ character, we would need to decrement the frequency by $$i - 1$$ to make it unique. Hence the total number of operations would be $$0 + 1 + 2 + .... + K - 1 = ((K - 1) * K )/2$$. Hence, the total time complexity is $$O(N + K^2)$$.

* Space complexity: $$O(K)$$
    
   We need $$K$$ indices in the list `frequency` to store the frequencies. Also, there can be at most $$K$$ unique frequencies, and hence the space required for the HashSet `seenFrequencies` is $$O(K)$$. Hence, the space complexity is equal to $$O(K)$$.
<br/>

---

### Approach 2: Priority Queue

**Intuition**

This approach is based on the observation that if multiple characters have the same frequency, then only one character can keep all of its instances. All other characters must have one or more of their instances deleted.

In this approach, we will push the frequency of each number into a max heap. Then, at each step, we will compare the top two elements in the heap. If they are the same, we will decrement one of them and push it back into the heap. Every time we detect that the two top elements are equal, we will increment the variable `deleteCount`.

An important point here is that when we compare the top two elements, we do so by popping the top element and comparing it to the new top element in the heap. Then, if the top two elements are equal, we will decrement the popped element by $$1$$ so that the two elements are no longer equal, and then we can push the popped element back into the heap. Only when the top two elements are not equal can we say that the top element is unique and can be removed from the heap.

The following slideshow demonstrates this algorithm:

!?!../Documents/1647_Minimum_Deletions_to_Make_Character_Frequencies_Unique2.json:960,720!?! <br>

**Algorithm**

1. Store the frequency for each character in the given string `s` in a frequency array called `frequency`. We store the frequency for a character `c` at index `c - 'a'`. Thus, we will need `26` indices (from `0` to `25`) to store the frequencies of the characters.
2. Store the frequencies in the max heap `pq`. Only insert non-zero frequencies into the priority queue.
3. While the priority queue `pq` has more than one element:
    - Store the top element in the variable `topElement` and pop it.
    - If `topElement` and the new top element in `pq` are the same, decrement the value `topElement` and increment `deleteCount`. If `topElement` is still greater than zero, then push it back into `pq`.
4. Return `deleteCount`.

**Implementation**


<iframe src="https://leetcode.com/playground/JxseTjMH/shared" frameBorder="0" width="100%" height="500" name="JxseTjMH"></iframe>


**Complexity Analysis**

Here, $$N$$ is the length of the given string, and $$K$$ is the maximum possible number of distinct characters in `s`.

* Time complexity: $$O(N + K^2 \log K)$$

  To store the frequency, we need to traverse the string, which will take $$O(N)$$ time. Also, we keep popping elements from the heap until there is only one element left; each time we push or pop an element requires $$O(\log K)$$ time. At each step, the size of the heap may either remain the same (when the top two elements are equal) or it may decrease (when the top two elements are not equal). Hence, the number of operations in the while loop will equal $$K$$ plus the number of characters that we need to delete i.e., `deleteCount`.

  In the worst case, we can have all $$K$$ characters with the same frequency and in such case, the number of characters that need to be deleted would be equal to $$0 + 1 + 2 + 3 + ....... + K-1 = ((K - 1) * K )/2$$. Hence, the time complexity is equal to $$O(N + K^2 \log K)$$.
   
* Space complexity: $$O(K)$$
    
  We need $$K$$ indices in the list `frequency` to store the frequency. Also, as we just discussed the maximum size of the heap can be equal to $$K$$. Hence, the space complexity is equal to $$O(K)$$.
<br/>

---

### Approach 3: Sorting

**Intuition**

In the previous approaches, each time we found a duplicate element, we would repeatedly decrement it by $$1$$, until it became unique. It would be more efficient if we could change it to that unique number in just one step. This is possible if we know the largest unoccupied number that is less than the current number. We could store all unoccupied numbers in a list and then for a particular frequency say $$x$$, find the greatest number in that list which is less than or equal to $$x$$. However, this way is not very space-efficient since we would need to store all of the possible frequencies (which scales with the string length).

We can circumvent the need to have a list of unoccupied frequencies by iterating over the frequencies in descending order and keeping track of only the maximum frequency that is allowed. Remember that for each frequency, if it is unique, we want to keep it as is, and if it is not unique, we want to decrement it as little as possible. Therefore, if we know the maximum number a frequency can be converted to, then we can simply change any duplicate frequency to that value instead of decrementing the frequency one step at a time.

So, in this approach, we will iterate over the frequencies in descending order and before we iterate over an element we would have the maximum frequency that this number can be converted to. This maximum frequency `maxFreqAllowed` is just the maximum possible number that is not occupied yet. If the `maxFreqAllowed` is greater than or equal to the frequency we are considering then we don't need to delete any characters. If the frequency we are considering is greater than `maxFreqAllowed`, we need to delete the excess characters and add the number of deleted characters to `deleteCount`. After each step, we will update the maximum frequency allowed `maxFreqAllowed` to be one less than the frequency we used for the last element.

The following slideshow demonstrates this algorithm:

!?!../Documents/1647_Minimum_Deletions_to_Make_Character_Frequencies_Unique3.json:960,720!?! <br>

**Algorithm**

1. Store the frequency for each character in the given string `s` in a frequency array called `frequency`. We store the frequency for a character `c` at index `c - 'a'`. Thus, we will need `26` indices (from `0` to `25`) to store the frequencies of the characters.
2. Sort the frequencies (`frequency`) in descending order.
3. Set `maxFreqAllowed` equal to the length of `s` because this is the maximum frequency a character can have.
3. Iterate over the frequencies in descending order, for each frequency:
    - If `frequency[i] > maxFreqAllowed`, add the difference of these two in the variable `deleteCount`. Change frequency of the current character `frequency[i]` to `maxFreqAllowed`.
    - Update the `maxFreqAllowed` to `frequency[i] - 1` (or `0` if the value is negative).
4. Return `deleteCount`

**Implementation**


<iframe src="https://leetcode.com/playground/UQhWBW8D/shared" frameBorder="0" width="100%" height="500" name="UQhWBW8D"></iframe>


**Complexity Analysis**

Here, $$N$$ is the length of the given string, and $$K$$ is the maximum possible number of distinct characters in `s`.

* Time complexity: $$O(N + K \log K)$$

   To calculate the frequency of each character, we need to traverse the string which will take $$O(N)$$ time. Note that in this approach, we are sorting the frequencies (not the characters), and there will only be $$K$$ frequencies. Hence the time required for sorting will be $$O(K \log K)$$. Thus, the time complexity equals $$O(N + K \log K)$$.

* Space complexity: $$O(K)$$
    
  We need $$K$$ indices in the list `frequency` to store the frequency. Some space will be used for sorting the list `frequency`. The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the Arrays.sort() for primitives is implemented as a variant of quicksort algorithm whose space complexity is $$O(\log K)$$. In C++ sort() function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort and has a worst-case space complexity of $$O(\log K)$$. Thus, the use of the inbuilt sort() function might add up to $$O(\log K)$$ to space complexity. Hence, the space complexity is equal to $$O(K)$$.
---
**Note:** For this problem, we are given that the string will have only lowercase English letters and hence $$K = 26$$. Since, for this problem, $$ 1 \leq N \leq 10^5 $$, we could consider each of the above approaches to have time complexity as approximately $$O(N)$$ and space complexity as approximately $$O(1)$$.
<br/>

---