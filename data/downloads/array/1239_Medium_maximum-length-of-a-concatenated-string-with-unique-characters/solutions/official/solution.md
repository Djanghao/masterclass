# Official Solution

**Link:** [https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solution/](https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/solution/)

---

[TOC]

## Solution

--- 

### Approach 1: Iterative

**Intuition**

A brute force solution to this problem would entail creating all $$2^N$$ possible combinations of `arr` entries and checking each one for duplicate characters. The iterative solution improves upon the brute force solution by building the results up by adding one entry at a time, thus allowing us to immediately prune any potential new result and its subsequent branch of combinations if a duplicate character is found.

To do this, we initialize our `results` list with an empty string, which will be the base from which to build the subsequent branching results. From there, we can search for new valid results by iterating over each element in `arr` and attempting to append it to each of the prior results.

At this point, we need to be careful to only check the results that existed prior to the beginning of the current element of `arr`, as we will be adding new entries to `results` as we go. Otherwise, we would continue to attempt to append the current element to each of the results that were just made by using this element.

For each new potential result, we can check for duplicate characters by utilizing a set data structure and comparing the length of the potential result with the size of the set formed from its characters. If those values don't match, then there is a duplicate character in the potential result and the result should be discarded. Otherwise, we can add this validated result to our `results` list.

If necessary, we can then update the integer variable `best` which represents the longest valid result seen so far. Once we've fully iterated through all elements in `arr`, we can return `best` as our answer.

**Algorithm**

1. Initialize a `results` list with an empty string.
2. Iterate through each entry in `arr`, and for each entry:
   - Iterate through each entry in `results`, and for each entry:
     - Form a new result combination.
     - Check for duplicate characters with the use of a set.
     - If the new result is valid, then add it to `results`.
     - Keep track of the longest valid result so far in `best`.
3. Return `best`.

<iframe src="https://leetcode.com/playground/b3jt5xKd/shared" frameBorder="0" width="100%" height="500" name="b3jt5xKd"></iframe>

**Optimization**

While relatively simple, the performance of the basic iterative solution leaves much to be desired. In particular, each attempted new result (which can occur up to $$2^N$$ times) requires first the concatenation of the new result string, then the creation of a new set from this string. This process requires multiple iterations through the result string's characters, which is greatly inefficient. This inefficiency can, however, be mostly overcome with the use **bit manipulation**.
 With bit manipulation, we can interact in multiple ways with an integer at the bit level. Since an integer contains 32-bits' worth of data, we can use bit manipulation to provide for more functionality than simply the storage of a single number in an integer.

In the case of this solution, we can use bit manipulation to store an entire **character bitset** in one integer. Essentially, we will use 26 of the 32 bits of the integer as boolean flags where each bit will be a 0 or a 1, depending on whether or not the corresponding letter of the alphabet is present. Each bit then corresponds to a letter of the alphabet (0 -> 'a' ... 25 -> 'z'). The remaining bits (26 through 31) will be unused.

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/591163103" width="640" height="272" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

To accomplish this, we can use some common bit operations:
 - **Bitwise AND operator (`&`)** - Returns an integer in which each bit is a 1 *if and only if* the corresponding bits of both operands are 1s. For example (in binary), `10011001 & 10101010 = 10001000`.

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/591163046" width="640" height="311" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

 - **Bitwise shift left (`<<`) and right (`>>`)** - Returns the integer formed by shifting each bit value of the operand the designated direction by the given number of positions. Any bits values that are shifted to the right of 0 are lost, and any bits that are vacated when shifting to the left are automatically 0s. For example (in binary), `10011001 << 3 = 10011001000` and `10011001 >> 3 = 10011`.

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/591163069" width="640" height="219" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

In addition to these basic bitwise operations, we will also need to use a **bitmask**. A bitmask is simply an integer used to target or isolate a specific section of another integer, typically for reading or writing. Let's say that a partial portion of our character bitset is `110011`, which represents 'a', 'b', 'e', and 'f'. If we wanted to store a 'd', the first step would be to create a bitmask of the specific character using a bitwise shift operation. Since 'd' is the 3rd (0-indexed) bit, we can use `1 << 3 = 1000` as our bitmask. Then, as we're only changing 0s to 1s at this point, we can simply add the bitmask to our bitset (`110011 + 1000 = 111011`) to effectively add the letter 'd'.

To check if a single character is in a bitset, we could use the same bitmask method, but then use the bitwise AND operator to isolate and read the corresponding masked bit of the bitset to see if it is already a 1. For example, using the partial bitset `110011`, checking for a 'd' (`110011 & 1000`) evaluates to 0, while checking for an 'e' (`110011 & 10000`) evaluates to 10000. In this case, the result will be a 0 if the letter is not found and some non-zero number if the letter is found.

In order to avoid having to repeatedly evaluate each bitset to count the length of the result which it represents, we can instead choose to store the length of each bitset in our bitset integer. Since the maximum length of a valid result will be 26, this length data will consequently fit in 5 bits' worth of space ($$2^5 = 32$$), which is conveniently less than the 6 bits' worth of unused space in our bitset integer. To do this, we can shift the length number left, past the end of the character bitset data, before adding it to the bitset integer (`combined = (length << 26) + bitset`).

<div>
    <div class="video-container">
        <iframe src="https://player.vimeo.com/video/591163076" width="640" height="272" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>

This means that we'll have to then use more bit manipulation to isolate and read these two separate pieces of information in our bitset integer. To read the length data, we can simply shift the combined integer to the right by 26 places to drop off the entire bitset portion (`length = combined >> 26`).

To read just the bitset data instead, we'll first need to create a bitmask of the first 26 bits. This is easily accomplished by taking a 1, pushing it past the end of the intended section, then subtracting 1 (`(1 << 26) - 1`) which will result in a 1 in each of the first 26 bit positions. Then we can use this bitmask along with a bitwise AND operation to isolate and read the first 26 bits' worth of data from the combined integer (`bitset = combined & ((1 << 26) - 1)`).

The bitwise AND operator can also be used to quickly compare two entire character bitsets. Any duplicate letter found in both bitsets will result in a 1 somewhere in the resulting integer, which means that any non-zero number result indicates the presence of at least one duplicate letter. Also, as long as there are no overlapping (duplicate) character bits, we can simply add two complete bitsets together to get their union.

The other optimization that is made worthwhile with the use of bit manipulation is to initialize `results` as a **set** data structure instead of a basic list. When dealing with strings, for example, `"abcde"`, `"edcba"`, `"aebdc"`, and `"cdbea"` would all be considered different results, regardless of the fact that they're all functionally the same for the purposes of this solution because they all use the same set of distinct characters. When converted to their character bitset equivalents, each of those results (as well as many more) would resolve into the same value (`11111`). This enhances the effectiveness of using a set for our results collection to avoid duplicates entries, especially since this approach requires us to repeatedly iterate through the entirety of `results`.

Additionally, we can check to see if the character bitset already exists in `results` prior to attemping to combine it with each prior result. If it already exists in `results`, then any subsequent match would already have been made, so we can skip directly to the next element of `arr`.

<iframe src="https://leetcode.com/playground/bqQN3WEY/shared" frameBorder="0" width="100%" height="500" name="bqQN3WEY"></iframe>


**Complexity Analysis**

* Time complexity: $$O(2^N)$$ where $$N$$ is the length of `arr`. With $$N$$ number of strings, there are $$2^N$$ possible combinations of strings. In reality, the optimizations should allow for a great deal of pruning, but the worst case scenario will still be $$O(2^N)$$. This qualification applies to the space complexity, as well.

* Space complexity: $$O(2^{min(N,K)})$$ where $$K$$ is the number of distinct characters that appear in `arr`. The order of characters does not matter once we convert each word to its character bitset, and the `results` set prevents duplicate results, so there cannot be more than $$2^K$$ possible combinations of results, even if $$N$$ > $$K$$.

<br/>

---

### Approach 2: Backtracking

**Intuition**

The downside to using an iterative solution such as the one described in Approach 1 is that it requires the storage of an excessive amount of data in the results list. One common way to achieve the same kind of branching result-building that we need to accomplish for this solution is to use a backtracking approach.

In a backtracking approach, we perform a depth-first search (DFS) to build out one branch as far as it can go before backtracking to a previous state and attempting the next possible branch. This is done using a recursive function.

In the recursive backtracking function, we'll need to iterate through each remaining element of `arr`, update the current result state, recurse to the next position in `arr`, then backtrack the current result state.

Our recursive function should also have a return value of the best length seen in the lower levels of the branch back up the recursive stack so that we can ultimately return the value generated by calling the initial instance of the function.

In order to make the process of updating and backtracking the current result state more efficient, we can use a map data structure (`resMap`) to store character counts. Any character count of more than 1 means that there are duplicates of that character, and the result is invalid.

The first thing we should do in our recursive function, then, is to check for duplicate characters by iterating through `resMap` and looking for values larger than 1. If the current result state is invalid we can return 0, otherwise we should initialize the starting value for our `best` result as the current size of `resMap`.

Next, we should then iterate through each remaining position in `arr` and attempt to start a new branch from that position. This represents potentially skipping the elements in between the two positions (`pos` and `i`). At each iteration, we should add the new element's characters to `resMap` before calling our backtracking function at the following position. The result of this function call should be checked against the current `best` result seen so far and updated if necessary. Then we should backtrack `resMap` to its previous state by subtracting the current element's character counts from the counts stored in `resMap`.

Once we've finished iterating through the elements of `arr`, we can return the updated `best` result length back up the recursion stack.

**Algorithm**

1. Define a recursive depth first search function that will:
   - Use a map data structure for the current result condition.
   - Return 0 if duplicates characters exist in `resMap`.
   - Initialize `best` with the current size of `resMap`.
   - Iterate through each remaining entry in `arr`, and for each entry:
     - Add the entry to `resMap` by updating the character counts.
     - Recurse to the next position in `arr`.
     - Update `best` with the returned value if necessary.
     - Backtrack `resMap` to its previous state.
   - Return `best`.
2. Return the result of the DFS function starting at the beginning of `arr` with an empty `resMap`.

<iframe src="https://leetcode.com/playground/D85kUfd5/shared" frameBorder="0" width="100%" height="500" name="D85kUfd5"></iframe>

**Optimization**

The backtracking solution can also benefit from the bit manipulation optimization method described in Approach 1. Since we're going to be using character bitsets, we can pre-process `arr` by passing its string elements through a helper function that will convert each element into its integer bitset before we call the recursive helper function.

While we convert the words to bitsets, we can omit any elements that contain duplicate characters, and also use a set data structure to remove any element that transforms into a duplicate bitset of a previous element of `arr`. As the recursion process will take $$O(2^N)$$ time, any reduction in `N` will have a significant impact on the efficiency.

<iframe src="https://leetcode.com/playground/hBLrakSn/shared" frameBorder="0" width="100%" height="500" name="hBLrakSn"></iframe>


**Complexity Analysis**

* Time complexity: $$O(2^N)$$ where $$N$$ is the length of `arr`. With $$N$$ number of strings, there are $$2^N$$ possible combinations of strings. As with Approach 1, this represents the worst-case scenario, although there will typically be a significant amount of branch pruning with the optimizations in place.

* Space complexity: $$O(N)$$ for `optSet`, `optArr`, and the max depth of the recursion stack.

<br/>

---

### Approach 3: Recursion

**Intuition**

A slightly more basic approach compared to the backtracking solution seen in Approach 2 is a simple recursive solution. This approach remains more or less the same as the previous one, just without the need for backtracking. This does mean that it creates a new result for each recursive instance, which will increase the overall space used a bit, but this increase is fairly negligible, especially when paired with the further optimizations discussed later.

Without the need to backtrack, we can use a string as the current result, and then use a set data structure to check for duplicate characters, similar to Approach 1. As in Approach 2, each recursive function will iterate through the remaining positions and start new recursive branches at each. Instead of updating a common object, however, we'll simply create a new result string and pass it on to the next recursive level.

The real strength of this approach will be seen after we apply the optimizations in the next section.

**Algorithm**

1. Define a recursive depth first search function that will:
   - Return 0 if duplicates characters exist in the current result condition (`res`).
   - Initialize `best` with the current length of `res`.
   - Iterate through each remaining entry in `arr`, and for each entry:
     - Recurse to the next position in `arr` while adding the entry to `res`.
     - Update `best` with the returned value if necessary.
   - Return `best`.
2. Return the result of the DFS function starting at the beginning of `arr` with an empty string for `res`.

<iframe src="https://leetcode.com/playground/5oPWPB5P/shared" frameBorder="0" width="100%" height="446" name="5oPWPB5P"></iframe>

**Optimization**

Here again we can use the bit manipulation optimization method described in Approach 1 to good effect. As the basic recursion solution is very similar to the backtracking one from Approach 2, we can also apply the same method of pre-processing `arr` by passing its string elements through a helper function to convert each element to its integer bitset before we call the recursive helper function.

While we convert the words to bitsets, we can omit any elements that contain duplicate characters, and also use a set data structure to remove any element that transforms into a duplicate bitset of a previous element of `arr`. As the recursion process will take $$O(2^N)$$ time, any reduction in `N` will have a significant impact on the efficiency.

The use of bit manipulation to convert each element of `arr` into a character bitset stored in a single integer renders the main benefit of the Approach 2's backtracking solution unnecessary, since the entire state of the current result can be stored in a single integer as opposed to a 2-dimensional data structure. This in turn makes the simplified recursive solution described in this optimized approach the most efficient solution.

<iframe src="https://leetcode.com/playground/kB3dC8RZ/shared" frameBorder="0" width="100%" height="500" name="kB3dC8RZ"></iframe>


**Complexity Analysis**

* Time complexity: $$O(2^N)$$ where $$N$$ is the length of `arr`. With $$N$$ number of strings, there are $$2^N$$ possible combinations of strings. As with Approach 1, this represents the worst-case scenario, although there will typically be a significant amount of branch pruning with the optimizations in place.

* Space complexity: $$O(N)$$ for `optSet`, `optArr`, and the max depth of the recursion stack.

<br/>

---