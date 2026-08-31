# Official Solution

**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solution/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solution/)

---

[TOC]

## Solution
--- 

### Overview


We have a list of $$N$$ pairs denoting `(attack, defense)` of the $$N$$ characters. A character is weak if there exists any other character with the attack and defense value strictly more than it. We need to calculate the number of weak characters.

The brute force approach would be to check for every character if it's weak or not and, to check this we can iterate over every other character and see if there is any pair with both values (attack and defense) greater than it. This approach, however, is not efficient as we would be iterating over all the $$N$$ pairs for every character, and hence the time complexity would be $$O(N^2)$$. We will discuss two possible efficient approaches below.
</br>

---

### Approach 1: Sorting

**Intuition**

Consider a simpler problem, where we only have one parameter say the attack value. In this case, all the characters except the one with the highest attack value will be weak. Hence, the number of weak characters will be the total characters minus the count of characters with the highest attack value. An alternative approach will be: we could sort the array in ascending order and then we can iterate over the array from the right end keeping the maximum attack value we have achieved so far. If this value is more than the current value then the character is weak.

We need to do something similar here, the only difference is we have two parameters. Let's sort these pairs in ascending order of their first value (`attack`). This way we will only need to take care of the second value (`defense`) because the character at a smaller index will not be stronger (i.e., will have a weaker attack value) than the character at a greater index.

Now once we have the array sorted in ascending order of their attack value, we can iterate over the pairs from right to left keeping the maximum defense value achieved so far. If this maximum defense value is more than the defense value at the current index then it's a weak character.

The above-mentioned theory has a catch. Consider the list of pairs `[(1, 2), (3, 4), (3, 6), (3, 7)]`, the pairs are sorted in ascending order of their attack value and in ascending order of defense value in case of a tie in the attack values. When we iterate from the right end the maximum defense value will be equal to `7` when we reach the pair `(3, 6)`, and we will consider this pair to be weak. Although, it's not as the attack value is equal and not strictly greater. The point to note here is, that we need to ignore the defense value of the pairs with the same attack value.

We can achieve it by sorting the pairs by ascending order of their attack value and then in descending order of their defense value in case of a tie. This way, the above list would be `[(1, 2), (3, 7), (3, 6), (3, 4)]` and hence when we iterate over it from the right end, the maximum defense value will be equal to `4` when we reach the pair `(3, 6)`. We can take another example `[(1, 1), (2, 1), (2, 2), (1, 2)]`, after sorting the pairs in ascending order of attack and in ascending order of defense in case of a tie will be  `[(1, 1), (1, 2), (2, 1), (2, 2)]`, now when we will iterate it from right to left the maximum defense value will be `2` when we reach the pair `(2, 1)`, this will lead us to conclude that the pair `(2, 1)` is weak but it's not. On the other hand, sorting the pairs with the same attack value will produce `[(1, 2), (1, 1), (2, 2), (2, 1)]` and hence we will not face the previously mentioned issue here.


**Algorithm**

1. Sort the list of pairs `properties` in ascending order of their attack and then in descending order of the defense value. We can achieve it using the custom comparator.
2. Initialize the maximum defense value achieved `maxDefense` to `0`.
3. Iterate over the pairs from right to left and for each pair:

    a. If the `maxDefense` is greater than the defense value of the current character, increment the value `weakCharacters`.

    b. Update the value of `maxDefense` if it's smaller than the current defense value.
4. Return `weakCharacters`.


**Implementation**


<iframe src="https://leetcode.com/playground/LxwL65ub/shared" frameBorder="0" width="100%" height="429" name="LxwL65ub"></iframe>


**Complexity Analysis**

Here, $$N$$ is the number of pairs in the given list `properties`.

* Time complexity: $$O(N \log N)$$

   Sorting a list of $$N$$ elements takes $$O(N \log N)$$ time. The iteration over the sorted list to count the weak character takes $$O(N)$$ time. Hence the time complexity equals $$O(N \log N)$$.

* Space complexity: $$O(\log N)$$
    
   We only need two variables `maxDefense` and `weakCharacters` to solve the problem. Some space will be used for sorting the list. The space complexity of the sorting algorithm depends on the implementation of each programming language. For instance, in Java, the `Arrays.sort()` for primitives is implemented as a variant of the quicksort algorithm whose space complexity is $$O(\log N)$$. In C++ `std::sort()` function provided by STL is a hybrid of Quick Sort, Heap Sort, and Insertion Sort and has a worst-case space complexity of $$O(\log N)$$. Thus, the use of the inbuilt sort() function might add up to $$O(\log N)$$ to space complexity.
<br/>

---

### Approach 2: Greedy

**Intuition**

In the previous approach, we sorted the pairs by their attack value first, this helped us to ignore the attack value and decide the type of character based on the defense value. We know that the character will be weak only if there is any character with both attack and defense values greater than it. For a pair `(a, b)` we can say it to be weak if the maximum defense value among all the pairs with `attack-value > a` is greater than `b`. So we will keep the maximum defense value among all the pairs with an attack value greater than `x`, for every value of `x`. Then the pair `(a, b)` will be weak if the maximum defense value stored for value `a + 1` is greater than `b`.

To find the maximum defense value as mentioned above. We first find the maximum defense value for the particular value of the attack, to find this we can iterate over the properties from left to right and for each attack value in the pairs, we find the maximum defense value and store it in the `maxDefense`. Then we can iterate over all the possible values of attack and keep the maximum defense value achieved so far in the array, iterating over the attack values from highest to lowest.

**Algorithm**

1. Iterate over `properties`, and store the maximum defense value for attack values in the array `maxDefense`.
2. Iterate over all the possible values of attack from the maximum possible attack value (`100000`) to `0`. Keep the maximum value seen so far, `maxDefense[i]` will represent the maximum value in the suffix `[i, maxAttack]`.
3. Iterate over the `properties` for every pair `(attack, defense)`, increment the counter `weakCharacters` if the value at `maxDefense[attack + 1]` is greater than `defense`.
4. Return `weakCharacters`.

The following slideshow demonstrates the algorithm:

!?!../Documents/1996_The_Number_of_Weak_Characters_in_the_Game.json:960,720!?! <br>

**Implementation**


<iframe src="https://leetcode.com/playground/EXpskwd9/shared" frameBorder="0" width="100%" height="500" name="EXpskwd9"></iframe>


**Complexity Analysis**

Here, $$N$$ is the number of pairs in the given list `properties`, and $$K$$ is the maximum attack value possible.

* Time complexity: $$O(N + K)$$

  The iteration over the pairs to find the maximum defense value for a particular attack value takes $$O(N)$$ time. The iteration over the possible value of the attack property takes $$O(K)$$ time. The iteration over the properties to count the weak characters takes $$O(N)$$ time. Therefore, the total time complexity equals to $$O(N + K)$$.

* Space complexity: $$O(K)$$
   
  The array `maxDefense` will be of size $$K$$ to store the defense value corresponding to all the attack values.
<br/>

---