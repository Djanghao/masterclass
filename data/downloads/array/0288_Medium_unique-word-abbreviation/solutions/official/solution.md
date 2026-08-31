# Official Solution

**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solution/](https://leetcode.com/problems/unique-word-abbreviation/solution/)

---

[TOC]

## Summary

This problem has a low acceptance rate for a reason. The logic in `isUnique` can be a little tricky to get right due to the number of cases you need to consider. We highly recommend that you practice this similar but easier problem first - [Two Sum III - Data structure design](https://leetcode.com/problems/two-sum-iii-data-structure-design/).

## Solution
---
### Approach #1 (Brute Force)

Let us begin by storing the dictionary first in the constructor. To determine if a word's abbreviation is unique with respect to a word in the dictionary, we check if all the following conditions are met:

1. <a name="condition-1"></a>They are not the same word.
2. They both have equal lengths.
3. They both share the same first and last letter.

Note that [Condition #1](#condition-1) is implicit because from the problem statement:

>A word's abbreviation is unique if no ***other*** word from the dictionary has the same abbreviation.

<iframe src="https://leetcode.com/playground/ESGwBfpv/shared" frameBorder="0" name="ESGwBfpv" width="100%" height="445"></iframe>

**Complexity analysis**

* Time complexity : $$O(n)$$ for each `isUnique` call.
Assume that $$n$$ is the number of words in the dictionary, each `isUnique` call takes $$O(n)$$ time.

---
### Approach #2 (Hash Table) [Accepted]

Note that `isUnique` is called repeatedly for the same set of words in the dictionary each time. We should pre-process the dictionary to speed it up.

Ideally, a hash table supports constant time look up. What should the key-value pair be?

Well, the idea is to *group* the words that fall under the same abbreviation together. For the value, we use a Set instead of a List to guarantee uniqueness.

The logic in `isUnique(word)` is tricky. You need to consider the following cases:

1. Does the word's abbreviation exists in the dictionary? If not, then it must be unique.
2. If above is yes, then it can only be unique if the grouping of the abbreviation contains no other words except *word*.

<iframe src="https://leetcode.com/playground/nn3s5QaL/shared" frameBorder="0" name="nn3s5QaL" width="100%" height="513"></iframe>

---
### Approach #3 (Hash Table) [Accepted]

Let us consider another approach using a counter as the table's value. For example, assume the dictionary = `["door", "deer"]`, we have the mapping of `{"d2r" -> 2}`. However, this mapping alone is not enough, because we need to consider whether the word exists in the dictionary. This can be easily overcome by inserting the entire dictionary into a set.

When an abbreviation's counter exceeds one, we know this abbreviation must not be unique because at least two different words share the same abbreviation. Therefore, we can further simplify the counter to just a boolean.

<iframe src="https://leetcode.com/playground/MVRLCdzb/shared" frameBorder="0" name="MVRLCdzb" width="100%" height="496"></iframe>

**Complexity analysis**

* Time complexity : $$O(n)$$ pre-processing, $$O(1)$$ for each `isUnique` call.
Both [Approach #2](#approach-2) and [Approach #3](#approach-3) above take $$O(n)$$ pre-processing time in the constructor. This is totally worth it if `isUnique` is called repeatedly.

* Space complexity : $$O(n)$$.
We traded the extra $$O(n)$$ space storing the table to reduce the time complexity in `isUnique`.