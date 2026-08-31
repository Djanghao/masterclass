# Official Solution

**Link:** [https://leetcode.com/problems/shortest-word-distance-ii/solution/](https://leetcode.com/problems/shortest-word-distance-ii/solution/)

---

[TOC]

## Video Solution
---

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/844727206" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
</div>

<div>&nbsp;
</div>

## Solution Article

---

Before looking at the solution for this problem, let's look at what the problem asks us to do in simpler terms. We have to design a class which receives a list of words as input in the constructor. The class has a function which we need to implement and that function is `shortest` which takes two words as input and returns the minimum distance between the two as the output.

When the problem talks about the distance between two words, it essentially means the absolute gap between the indices of the two words in the list. For e.g. if the first word occurs at a location `i` and the second word occurs at the location `j`, then the distance between the two would be `abs(i - j)`.

The question asks us to find the `minimum` such different between words which clearly indicates that the words can occur at multiple locations. If we have `K` occurrences for the `word1` and `L` occurrences for the `word2`, then iteratively checking every pair of indices will give us a $O(N^2)$ algorithm which won't be optimal at all. We won't discuss that algorithm here since it is very straightforward.

The brute-force algorithm would simple consider all possible pairs of indices for (`word1_location`, `word2_location`) and see which one produces the minimum distance. Let's try and build on this idea and see if some pre-processing can help us out reduce the complexity of the brute-force algorithm.
<br>
<br>

---

### Approach 1: Using Preprocessed Sorted Indices

**Intuition**

A given word can occur multiple times in the original word list. Let's suppose the first word, `word1` in the input to the function `shortest` occurs at the indices `[i1, i2, i3, i4]` in the original list. Similarly, let's assume that the second word, `word2`, appears at the following locations inside the word list `[j1, j2, j3]`.

Now, given these list of indices, we are to simply find the pair of indices `(i, j)` such that their absolute difference is minimum.

> The main idea for this approach is that if the list of these indices is in sorted order, we can find such a pair in linear time.

The idea is to use a two pointer approach. Let's say we have a pointer `i` for the sorted list of indices of `word1` and `j` for the sorted list of indices of `word2`. At every iteration, we record the difference of indices i.e. `abs(word1[i] - word2[j])`. Once we've done that, we have two possible choices for progressing the two pointers.

<pre>
word1[i] < word2[j]
</pre>

If this is the case, that means there is no point in moving the `j` pointer forward. The location indices for the words are in a sorted order. We know that `word2[j + 1] > word2[j]` because these indices are sorted. So, if we move `j` forward, then the difference `abs(word1[i] - word2[j + 1])` would be even greater than `abs(word1[i] - word2[j])`. That doesn't help us since we want to find the minimum possible distance (difference) overall.

> So, if we have (word1[i] < word2[j]), we move the pointer 'i' one step forward i.e. (i + 1) in the hopes that abs(word1[i + 1] - word2[j]) would give us a lower distance than abs(word1[i] - word2[j]). We say "hopes" because it is not certain this improvement would happen.

Let's look at two different examples. In the first example we will see that moving `i` forward gave us the best difference overall (0). In the second example we see that moving `i` forward leads us to our second case (yet to discuss) but doesn't lead to any improvement in the difference.

**Example-1**

```
word1_locations = [2,4,5,9]
word2_locations = [4,10,11]

i, j = 0, 0
min_diff = 2 (abs(2 - 4))
word1[i] < word2[j] i.e. 2 < 4
  move i one step forward

i, j = 1, 0 (abs(4 - 4))
min_diff = 0 (We hit the jackpot!)  
```

**Example-2**

```
word1_locations = [2,7,15,16]
word2_locations = [4,10,11]

i, j = 0, 0
min_diff = 2 (abs(2 - 4))
word1[i] < word2[j] i.e. 2 < 4
  move i one step forward

i, j = 1, 0
min_diff = 2 (2 < abs(7 - 4))

Here, we did not update out global minimum difference.
That is why we said earlier, moving 'i' forward may or
may not give a lower difference. But moving 'j' forward in
our case would definitely worsen the difference (or keep it same!).
```
Let's move onto our second scenario.

<pre>
word1[i] > word2[j]
</pre>

If this is the case, that means there is no point in moving the `i` pointer forward. We know that `word1[i + 1] > word2[j]` because these indices are sorted. So, if we move `i` forward, then the difference `abs(word1[i + 1] - word2[j])` would be even greater than `abs(word1[i] - word2[j])`. That doesn't help us since we want to find the minimum possible distance (difference) overall.

> So, along the similar lines of thought as the previous case, if we have (word1[i] > word2[j]), we move the pointer 'j' one step forward i.e. (j + 1) in the hopes that abs(word1[i] - word2[j + 1]) would give us a lower distance than abs(word1[i] - word2[j]). We say "hopes" because as showcased in the previous scenario, it is not certain this improvement would happen.

Now let's formally look at the algorithm for solving this problem.

**Algorithm**

1. In the `constructor` of the class, we simply iterate over the given list of words and prepare a dictionary, mapping a word to all it's locations in the array.
2. Since we process all the words from left to right, we will get all the indices in a sorted order by default for all the words. So, we don't have to sort the indices ourselves.
3. Let's call the dictionary that we build, `locations`.
4. For a given pair of words, obtain the list of indices (appearances inside the original list/array of words). Let's call the two arrays `loc1` and `loc2`.
5. Initialize two pointer variables `l1 = 0` and `l2 = 0`.
6. For a given `l1` and `l2`, we first update (if possible) the minimum difference (distance) till now i.e. `dist = min(dist, abs(loc1[l1] - loc2[l2]))`. Then, we check if `loc1[l1] < loc2[l2]` and if this is the case, we move `l1` one step forward i.e. `l1 = l1 + 1`. Otherwise, we move `l2` one step forward i.e. `l2 = l2 + 1`.
7. We keep doing this until all the elements in the smaller of the two location arrays are processed.
8. Return the global minimum distance between the words.

<center>
<img src="../Figures/244/postings_list.png" width="500">
</center>

This represents the locations dictionary that we should build given the original words list in the constructor. The key represents the word and the value is a list containing indices in ascending order of occurrences throughout the array. Let's look at the minimum distance between the words `apple` and `football` in the array. So, we will be considering the two *sorted* lists of indices: `[3, 6, 8, 12]` and `[2, 7, 9]`.

<center>

!?!../Documents/244_Anim.json!?!

</center>

<iframe src="https://leetcode.com/playground/aJTBcfWj/shared" frameBorder="0" width="100%" height="500" name="aJTBcfWj"></iframe>

**Complexity analysis**


- Time complexity: $O(N)$

    The time complexity of the constructor of our class is $O(N)$, considering there were $N$ words in the original list. We iterate over them and prepare a mapping from each word to its list of indices.

    For the function that finds the minimum distance between the two words, the complexity would be $O(K + L)$, where $K$ and $L$ represent the number of occurrences of the two words. This is because we use a two-pointer approach to traverse the two lists of indices for the words, and in the worst case, we traverse both lists fully.

    Combining both, the overall time complexity is $O(N + K + L)$. However, since $K$ and $L$ are both bounded by $N$ (i.e., $K = O(N)$ and $L = O(N)$), the overall time complexity simplifies to $O(N)$.

- Space complexity: $O(N)$

    $O(N)$ for the dictionary that we prepare in the constructor. The keys represent all the unique words in the input, and the values represent all of the indices from $0$ to $N-1$.

---