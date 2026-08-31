# Official Solution

**Link:** [https://leetcode.com/problems/maximum-coins-heroes-can-collect/solution/](https://leetcode.com/problems/maximum-coins-heroes-can-collect/solution/)

---

[TOC]

## Solution

---

### Overview

We are given an array of heroes `heroes`. We are also given an array of monsters `monsters` and an array of coins `coins` where hero `heroes[i]` can collect `coins[j]` coins by defeating the monster `monsters[j]`. However, `heroes[i]` can only defeat `monsters[j]` if `heroes[i] >= monsters[j]`. We want to return an array for the total number of coins each hero can gain by defeating all the possible monsters they can defeat.

### Approach 1: Sorting + Prefix Sum + Binary Search 

### Intuition

A brute force approach for this problem would be to iterate through each `monsters[j]` and check if the current hero `heroes[i]` can defeat it. However, this approach is inefficient as it requires traversing the entirety of the `monsters` array for all `n` heroes. This leads to a $O(n \cdot m)$ time complexity that would result in a Time Limit Exceeded submission. 

We notice that if we have the values of `monsters` sorted in ascending order, we can more efficiently find all the monsters a hero can defeat. Specifically, if the values were sorted, we can use [binary search](https://leetcode.com/explore/learn/card/binary-search/) to find the index `i` of the largest possible monster a hero can defeat. If we can find this index, then we know the hero can defeat all monsters up to the largest possible monster at index `i` in the sorted array. This would only take $O(\log m)$ for each search, whereas the brute force approach would require an entire $O(m)$ traversal to find all the monsters a hero can defeat.

Thus, we can first sort our values of `monsters`. However, if we directly sort `monsters`, we'd lose the 1-to-1 mapping to `coins`, and finding the coin reward for a certain monster `i` would be difficult. Thus, we can first create a new 2D array `monsterAndCoin` where each element is a 1D array of size 2, containing the power of monster `i` as well as the corresponding coins awarded for defeating monster `i`. This way, we can sort our 2D array in ascending order of monster power and maintain access to each monster's coin reward. 

After performing binary search on the 2D array, we will find the index `i` of the largest monster the hero can defeat. However, this won't directly give us the total coin reward for the hero. We know that if the hero can defeat all monsters from index `0` to index `i`, then their total reward is the sum of coins from `monsterAndCoin[0][1]` to `monsterAndCoin[i][1]`. 

This is a prefix sum—a running total of values up to a certain index. Since we need to calculate the coin total for all heroes, we can save time by precomputing the prefix sum for all indices. We create a prefix sum array `coinsSum`, where `coinsSum[i]` equals the sum of coins from defeating all monsters up to index `i`. Building this array takes only $O(m)$ time, as we traverse the `monsterAndCoin` array once.

Thus, for each hero, we can use binary search to find the largest monster `i` it can defeat, and then find the corresponding maximum coins collected from defeating all monsters from `0` to `i` by accessing our prefix sum array `coinsSum[i]`. 

### Algorithm

1. Initialize an empty array `ans` to store the maximum number of coins each hero can collect
2. Initialize our 2D array `monsterAndCoin` to store tuples of `(monsters[i], coins[i])` and populate it accordingly.
3. Sort `monsterAndCoin` by ascending value of monster power so we can perform binary search on it to process our input more efficiently 
4. Initialize our `coinsSum` prefix sum array where `coinsSum[i]` will contain the total number of coins rewarded when beating all monsters up to monster `i`:
    * Initialize variable `prefixSum = 0`
    * Iterate through each tuple in `monsterAndCoin` from left to right:
        * Update `prefixSum` so that it includes the coin reward for the monster in the current tuple:  `prefixSum += monsterAndCoin[i][1]`
        * `coinSum[i] = prefixSum`
5. For each `heroes[i]` in `heroes`:
    * Find the maximum number of coins by performing binary search on `monsterAndCoin` and using `coinsSum`: `ans[i] = findTotalCoins(monsterAndCoin, heroes[i], coinsSum)`
6. Define `findTotalCoins(monsterAndCoin, heroPower, coinsSum)`:
    * Initialize our boundaries for binary search: `l = 0` and `r = monsterAndCoin.length - 1`
    * While `l <= r`:
        * `mid = (l + r) / 2`
        * If `monsterAndCoin[mid][0] > heroPower`, then we want to look for a weaker monster that our hero can defeat, so `r = mid - 1` to look at the left half of the current search space
        * Otherwise, we'd like to look for a stronger monster that our hero can defeat, so `l = mid + 1` to look at the right half of the current search space
    * At this point, `l > r` and we have exhausted all possible indices:
        * If `l == 0`, then that means we exhausted our entire search space by constantly looking towards the left half until we saw that our hero cannot defeat even the weakest monster at `monsterAndCoin[0][0]` in the last iteration. This means no coins can be collected so return `0`.
        * Otherwise, our hero can defeat at least the weakest monster and can collect some coins. Specifically, our `r` pointer would refer to the index of the strongest monster that our hero can defeat, so we can return `coinsSum[r]`, the total coins collected by being able to defeat all monsters up to monster `r`

### Implementation 

<iframe src="https://leetcode.com/playground/5TdPjJaA/shared" frameBorder="0" width="100%" height="500" name="5TdPjJaA"></iframe>


### Complexity Analysis 

* Time Complexity: $O((m + n) \cdot \log m)$

    Sorting our `monsterAndCoin` array of size $m$ will take $O(m \cdot \log m)$ time. Our binary searches for all `n` heroes will take a total of $O(n \cdot \log m)$ time. Thus, the total time complexity is $O((m + n) \cdot \log m)$.

* Space Complexity: $O(m + S)$
    
    Our auxiliary `monsterAndCoin` data structure takes an extra $O(m)$ space.

    The other additional space used is for the sorting algorithm. The space taken by the sorting algorithm ($S$) depends on the language of implementation:
        - In Java, `Arrays.sort()` is implemented using a variant of the Quick Sort algorithm which has a space complexity of $O( \log n)$.
        - In C++, the `sort()` function is implemented as a hybrid of Quick Sort, Heap Sort, and Insertion Sort, with a worst-case space complexity of $O(\log n)$.
        - In Python, the `sort()` method sorts a list using the Timsort algorithm which is a combination of Merge Sort and Insertion Sort and has a space complexity of $O(n)$.