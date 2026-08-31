# Official Solution

**Link:** [https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solution/](https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/solution/)

---

## Solution

---

### Overview
Every element will have some frequency of occurrence in the array, i.e., the number of times it occurs in the array. Let us try to rephrase the problem in these terms. We want to end up with the least possible number of unique elements after `k` removals. In other words, we want to maximize the number of elements we can remove wholly (all occurrences of the element) in at most `k` removals. Let us figure out what is the most optimal way to do this.

Say we had to remove all occurrences of one element from an array such that it took the least number of removals. In this case, we'd remove the element with the least frequency! If there are multiple elements with the least frequency of occurrence, we could remove any. 
Therefore, to maximize the number of unique elements removed, the initial focus should be on elements with the lowest frequencies. By starting with the removal of the least frequent element and progressing to the next least frequent ones iteratively until we have at most 'k' removals, we would end up removing the maximum number of elements we could remove wholly!​

To summarize the idea, we need to greedily remove elements starting with the element with the lowest frequency. This way, we will ensure that we remove the maximum number of elements wholly and end up with the least number of unique elements.

---

### Approach 1: Sorting the Frequencies

#### Intuition
We need to find an efficient way of removing the lowest frequency element in the array, repeatedly till we have `k` removals. If we created a list of the frequencies of all elements, how could we utilize it? If we sort our list, we could start from the smallest frequency and remove elements till we have `k` removals. The number of remaining frequencies would represent the number of unique elements left in the array after `k` removals!

#### Algorithm
Firstly, we need to build our `frequencies` array. To do this, we'll need to determine the frequencies of all elements. A hashmap can do this efficiently. Once we have our `frequencies` array, we can sort it and iterate over it, removing elements, till the sum of the removed elements does not exceed `k`. We'll track the number of elements removed in a variable `elementsRemoved`. We'll keep iterating over `frequencies` till `elementsRemoved` becomes greater than `k` or we've fully iterated over `frequencies`. The number of remaining elements in the `frequencies` array would be our answer!

Note that `frequencies` contains the frequencies, but not the values, of the given array `arr.` This is because the value of the elements does not matter in the final answer; we simply need the number of unique elements.

Let us summarize the algorithm.

1. Initialize a hashmap `map` which maps `element` to its `frequency`.
2. Iterate over the given `arr` and increment the frequency of its elements in `map`.
3. Create an array `frequencies` and populate it with the frequencies obtained from `map`.
4. Sort `frequencies`.
5. Create a variable `elementsRemoved` which will track the number of elements that are removed.
6. Iterate over `frequencies` and add its elements to `elementsRemoved`.
7. When `elementsRemoved` becomes greater than `k`, we can stop iterating and return the remaining number of integers in `frequencies` (including the present index).
8. Return `0` if we iterated over the entire `frequencies` array. This means that we removed all elements from the original array `arr`.

!?!../Documents/1481/slideshow1.json:960,540!?!​

#### Implementation

<iframe src="https://leetcode.com/playground/5am8whDM/shared" frameBorder="0" width="100%" height="500" name="5am8whDM"></iframe>

#### Complexity Analysis
​Let $$n$$ be the length of `arr` and $$m$$ be the number of unique elements in it. $$k$$ represents the number of elements to be removed.
​
* Time complexity: $$O(n \log n)$$
  +  We traverse `arr` once and populate `map`. Since inserting in a hashmap takes $$O(1)$$ time, the entire operation takes $$O(n)$$. Since there are $$m$$ unique elements in `arr`, `frequencies` will be of size $$m$$, and sorting it would take $$O(m \log m)$$. Finally, traversing `frequencies` and removing at most $$k$$ elements will take $$O(k)$$ time (since we break from the loop once we have removed $$k$$ elements). This makes the total complexity $$O(n + m \log m + k)$$. However, in the worst case, where all elements are unique, $$m = n$$. Also, in the case where we're asked to remove all elements, $$k = n$$. This makes the complexity $$O(n + n \log n + n)$$. The dominating term is $$O(n \log n)$$.
​
* Space complexity: $$O(n)$$
  + We use auxiliary space in creating `map` and `frequencies`, both of which will have $$m$$ elements. As discussed, in the worst case, $$m = n$$. This results in a space complexity of $$O(n)$$. Note that some extra space is used when we sort `frequencies` in place. The space complexity of the sorting algorithm depends on the programming language.
    - In Python, the `sort` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has $$O(n)$$ additional space. 
    - In Java, Arrays.sort() is implemented using a variant of the Quick Sort algorithm which has a space complexity of $$O( \log n)$$ for sorting two arrays.
    - In C++, the sort() function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worse-case space complexity of $O( \log n )$.
    
---
​
### Approach 2: Min-heap

#### Intuition
A heap is a very powerful data structure that allows us to efficiently find the maximum or minimum value in a dynamic dataset.

If you are not familiar with heaps, we recommend checking out the [Heap Explore Card](https://leetcode.com/explore/learn/card/heap/). 

We can use a heap to store all the frequencies and pop out the smallest frequency sequentially till we have removed at most `k` elements. The difference in this approach is that instead of explicitly sorting a list of frequencies, we're using a min-heap to ensure we always get the smallest frequency every time we remove an element from it. We'll add all the frequencies to a min-heap and remove elements from it till we have `k` removals. The number of remaining frequencies, which in this case would be the size of the heap, would represent the number of unique elements left in the array after `k` removals! 

#### Algorithm
Like the previous approach, we'll create a hashmap to determine all the frequencies, but instead of using a vector to store all frequencies, we'll instead use a min-heap. We'll start popping elements out of the heap and store the sum in `elementsRemoved`. We'll keep repeating this process till either `elementsRemoved` becomes greater than `k` or the heap becomes empty. We'll return the size of the heap as our answer (*0* in case the heap is empty).

Let us summarize the algorithm.

1. Initialize a hashmap `map` which maps `element` to its `frequency`.
2. Iterate over the given `arr` and increment the frequency of its elements in `map`.
3. Create a min-heap `frequencies` and populate it with the frequencies obtained from `map`.
4. Create a variable `elementsRemoved` which will track the number of elements that are removed.
5. Remove elements from `frequencies` and increment `elementsRemoved` while there are still elements in `frequencies`.
6. If `elementsRemoved` becomes greater than `k`, we can stop iterating and return the number of remaining elements in the heap.
7. Return `0` if the heap becomes empty. This means we removed all elements from the original array `arr`.

#### Implementation

<iframe src="https://leetcode.com/playground/drhrSmFh/shared" frameBorder="0" width="100%" height="500" name="drhrSmFh"></iframe>

#### Complexity Analysis
​Let $$n$$ be the length of `arr` and $$m$$ be the number of unique elements in it. $$k$$ represents the number of elements to be removed.
​
* Time complexity: $$O(n \log n)$$
  +  We traverse `arr` once and populate `map`. Since inserting in a hashmap takes $$O(1)$$ time, the entire operation takes $$O(n)$$. Since there are $$m$$ unique elements in `arr` and inserting and removing elements from a min-heap of size $$m$$ takes $$O( \log m)$$ time, inserting $$m$$ elements will take $$O(m \log m)$$. Finally, traversing `frequencies` and removing at most $$k$$ elements will take $$O(k \log k)$$ time (since we break from the loop once we have removed $$k$$ elements). This makes the total complexity $$O(n + m \log m + k \log k)$$. However, in the worst case, where all elements are unique, $$m = n$$. Also, in the case where we're asked to remove all elements, $$k = n$$. This makes the complexity $$O(n + n \log n + n \log n)$$, where the dominating term is $$O(n \log n)$$.
​
* Space complexity: $$O(n)$$
  + We use auxiliary space in creating `map` and `frequencies`, both of which will have $$m$$ elements. As discussed, in the worst case, $$m = n$$. This results in a space complexity of $$O(n)$$.

---
​
### Approach 3: Counting Sort

#### Intuition
Note that this is a more challenging approach but can be asked as a follow-up in an interview to improve the time complexity further or fetch brownie points! In the first two approaches, we discussed two ways to store and process frequencies - using an array and sorting it, and using a min-heap (which internally uses heap-sort). There is yet another way to sort the frequencies - [Counting Sort](https://leetcode.com/explore/learn/card/sorting/695/non-comparison-based-sorts/4437/)! We can *count* the frequencies and store this count in an array. In other words, we're storing the frequency of frequencies! We can use this array to process the frequencies in order.

Recall that Counting Sort is dependent on the range of input elements, i.e., it relies on the assumption that the range of input elements is not significantly larger than the number of elements to be sorted. In our case, we can leverage the fact that the maximum possible frequency of any element in an array will be equal to the size of the array itself. This will be when all elements of the array are the same, i.e., there is only one unique element. This value will not exceed `10^5` as mentioned in the constraints; hence, we can use Counting Sort.


#### Algorithm
Like the previous approaches, we'll create a hashmap to determine all the frequencies. We'll initialize an array `countOfFrequencies` with size `n + 1` where `n` is the size of the given array `arr`. Since the largest possible value of a frequency is `n`, we'll need an array of size `n + 1` to store the value in its nth index. `countOfFrequencies` will be initialized with *0* for all its indices. We'll then traverse the hashmap and increment the count of frequencies we encounter in `countOfFrequencies`. Once done, `countOfFrequencies[i]` would represent the number of elements in `arr` with frequency `i`. We'll also initialize a variable `remainingUniqueElements` with the size of our hashmap. This would track the remaining number of unique elements. Now we'll traverse `countOfFrequencies` in order, process each index, and update `k` accordingly. For each index `i`, we can remove a maximum of `k / i` unique elements. However, this is limited by the actual number of elements with frequency `i`. Hence, we'll find the *min* of `k / i` and `countOfFrequences[i]`. Let this be `numElementsToRemove`. This will be the maximum number of unique elements with frequency `i` that can be removed. `k` will be decremented by `i * numElementsToRemove`, and `remainingUniqueElements` will be decremented by `numElementsToRemove`. Now if the updated `k` is less than the current frequency `i`, it'll show that we can no longer remove any more elements with greater frequencies, and we'll return `numElementsToRemove`.

Let us summarize the algorithm.

1. Initialize a hashmap `map` which maps `element` to its `frequency`.
2. Iterate over the given `arr` and increment the frequency of its elements in `map`.
3. Create an array `countOfFrequencies` of size `n + 1` where `n` is the size of `arr`. Initialize all elements of this array with `0`.
4. Traverse over `map` and increment the frequencies of all frequencies in `countOfFrequencies`.
5. Initialize a variable `numElementsToRemove` with the size of `map`. This tracks the remaining number of unique elements.
6. Traverse over `countOfFrequencies` and for each frequency `i`, determine the maximum number of elements that can be removed with that frequency. This value will be `min(k / i, countOfFrequencies[i])`. Initialize a variable `numElementsToRemove` with this value.
7. Decrement `k` by `i * numElementsToRemove` and decrement `remainingUniqueElements` by `numElementsToRemove`.
8. Check if `k < i`. If so, return `numElementsToRemove`.
9. Return `0` if we iterated over all the frequencies. This means we removed all elements from the original array `arr`.

#### Implementation

<iframe src="https://leetcode.com/playground/UJ8mrPep/shared" frameBorder="0" width="100%" height="500" name="UJ8mrPep"></iframe>

#### Complexity Analysis
​Let $$n$$ be the length of `arr`. 

* Time complexity: $$O(n)$$
  +  We traverse `arr` once and populate `map`, which is a linear operation. Then we traverse `map` and populate `countOfFrequencies`. `map` can have a maximum size of $$n$$ so this is also a linear operation. Finally, traversing `countOfFrequencies` is also a linear operation since the size of `countOfFrequencies` is `n + 1`. 
​
* Space complexity: $$O(n)$$
  + We create a hashmap that can have a maximum size of $$n$$ and an array with size `n + 1`.
---