# Patience sort O(nlogn) solution with explanation

**Author:** new_bee
**Votes:** 12
**Link:** [https://leetcode.com/problems/longest-increasing-subsequence/solutions/1333405/](https://leetcode.com/problems/longest-increasing-subsequence/solutions/1333405/)

---

**Patience sort** 
The algorithm's name derives from a simplified variant of the patience card game. The game begins with a shuffled deck of cards. The cards are dealt one by one into a sequence of piles on the table, according to the following rules.

1. Initially, there are no piles. The first card dealt forms a new pile consisting of the single card.
2. Each subsequent card is placed on the leftmost existing pile whose top card has a value greater than or equal to the new card's value, or to the right of all of the existing piles, thus forming a new pile.

If you have played solitaire before, it's kind of similar.

**Explanation** 
Similar to patience card game, we'll be forming piles of numbers with decreasing subsequence, if a number couldn\u2019t fit in any of the piles, we create a new pile.
e.g. **[10,9,2,5,3,7,101,18]**
We'll take piles as a 2D array for better understanding.
piles = [[]]
Insert 10 - No existing pile found, create a new pile, pile = [10], insert it to piles.
 `piles` = [[10]]
Insert 9 - We start searching for leftmost pile with top card's value >= 9. Insert it to that pile. update the piles array, 
`piles` = [[10, 9]]
Insert 2 -  Start searching for leftmost pile with top card's value >= 2. Insert it to that pile. update the piles array, 
`piles` = [[10, 9, 2]]
Insert 5 - Search for pile with top card's value >= 5. No pile found,  create a new pile, pile = [5], insert it to piles.
				 `piles` = [[10, 9, 2], [5]]
Insert 3 -  Start searching for leftmost pile with top card's value >= 3. Insert it to that pile. update the piles array,
 `piles` =  [[10, 9, 2], [5, 3]]
Insert 7 - Search for pile with top card's value >= 7. No pile found,  create a new pile, pile = [7], insert it to piles.
				 `piles` = [[10, 9, 2], [5, 3], [7]]
Insert 101 - Search for pile with top card's value >= 101. No pile found,  create a new pile, pile = [101], insert it to piles.
				 `piles` = [[10, 9, 2], [5, 3], [7], [101]]
Insert 18 -  Start searching for leftmost pile with top card's value >= 18. Insert it to that pile. update the piles array,
 `piles` =   [[10, 9, 2], [5, 3], [7], [101, 18]]

If we observe, the top card (last element) of every pile when taken together, forms an increasing sequence.
[2,3,7,18] (We needed to create a new pile for an element only because we couldn\u2019t find a top card having value greater than current element. Even if a new element gets inserted to current element's left, it'll be smaller than current element. Therefore, all the top cards to the element's left are smaller than current card)

Further we can observe that we only need the top card (tail) of every pile for comparison, so piles can be reduced to just the tail values instead of maintaining a 2D array. 
Iterate over the original nums array for making piles and store the top card in tails array. Since, our tails array is always going to be an increasing sequence, we can perform binary search to find the position of current element in tails array (Finding an element >= current in tails array, insert it to tails if no position is found)
`nums` - [10,9,2,5,3,7,101,18]

`tails array`  
[10]
[9]
[2]
[2,5]
[2,5,7]
[2,5,7,101]
[2,5,7,18]

**Code**
```
def length_of_lis(nums)
    tails = Array.new
    k = 0 # k is length of tails array
    nums.each do |num|
        start, finish = 0, k
        while start != finish
            mid = (start + finish)/2
            if tails[mid] < num
                start = mid + 1
            else
                finish = mid
            end
        end
        tails[start] = num
        k += 1 if start == k # new insertion in tails array, increase size of tails
    end
    return k # longest increasing subsequence size
end
```