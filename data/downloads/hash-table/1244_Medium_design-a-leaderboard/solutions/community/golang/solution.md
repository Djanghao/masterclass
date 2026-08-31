# Golang beats 89% Hashmap + QuickSelect (Simple Brute Force Improvements)

**Author:** faangawannabe
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-a-leaderboard/solutions/2357328/](https://leetcode.com/problems/design-a-leaderboard/solutions/2357328/)

---

# Approach 1.b. Brute Force Improved
The brute-force approach is pretty straightforward in the sense that we will maintain a dictionary of `playerId` as the key and the score as the dictionary. Then, for each top operation, we will simply obtain all the values from the dictionary, sort them, and the obtain the top `K` elements.

**Improvements:**
However, in addition to the original [solution](https://leetcode.com/problems/design-a-leaderboard/solution/) provided by leetcode official.
We see that sorting the scores over and over is naively a waste of compute resources:
* We only need to get the `1st` - `kth` largest elements. Those largest kth elements don't have to be sorted perfectly.
* The rest `n-k` elements, we don't really care, do we?

So what we need really is to divide elements that are smaller than `kth` element on left-hand side and elements larger than `kth` on the right hand side. Once that, we just sum the right-hand side as output of `func topK(k int)` method.

## Algorithm

1. Initialize a dictionary scores that will use the playerId as the key and score as the value.
2. `addScore` (same) ~
	* Simply update the dictionary with the new score for the player.
	* If the player doesn't exist, initialize the score to score
3. `top` (improved) ~
	* Obtain a list of all the values from the dictionary.
	* Perform in-place quick-select algorithm
	* Quick select return the `pivot` idx, where element at and after `pivot` will be the largest kth elements.
4. `reset` (same) ~
	* Delete the entry containing the playerId
	* Note that we can also set the value (score) to 0. 

The only disadvantage of this is that we will be sorting even reset players in the top function. This doesn't matter much for smaller test cases though.

## Solution:
```golang
type Leaderboard map[int]int

func Constructor() Leaderboard {
    return make(Leaderboard)
}

func (lb Leaderboard) AddScore(playerId int, score int)  {
    lb[playerId] += score
}

// Time: O(n), n: len(learderboard)
func (lb Leaderboard) Top(k int) int {
    scores := make([]int, 0, len(lb))
    for _, score := range lb {
        scores = append(scores, score)
    }
    
    // Quickselect: O(n).
    pivot := findKthLargestIdx(scores, k, 0, len(scores)-1)
    sum := 0
    
    for j := pivot; j < len(scores); j++ {
        sum += scores[j]
    }

    return sum
}

func (lb Leaderboard) Reset(playerId int)  {
    lb[playerId] = 0
}

// Quickselect puts the kth largest element at pivot: nlen-k index.
// Elements after pivot are greater equal to kth element.
// Element before pivot are smaller equal to kth element.
func findKthLargestIdx(nums []int, k int, start, end int) int {
    nlen := len(nums)
    targetPos := nlen - k
    
    for {
        pivotIndex := partition(nums, start, end)
        if pivotIndex == targetPos {
            return pivotIndex
        } else if pivotIndex < targetPos {
            start = pivotIndex + 1
        } else {
            end = pivotIndex - 1
        }
    }
}

// partition choses nums[start] as pivot and
// moves all values less than pivot to the left side,
// moves all values greater than pivot to the rigit side
// of the pivot value.
func partition(nums []int, start, end int) int {
    pivot := nums[start]
    left, right := start+1, end

    for left <= right {
        for left <= right && nums[left] <= pivot {
            left++
        }
        for left <= right && nums[right] > pivot {
            right--
        }
        if left <= right {
            nums[left], nums[right] = nums[right], nums[left]
        }
    }

    nums[right], nums[start] = nums[start], nums[right]
    return right
}

```


## Complexity Analysis

Time Complexity:
* `O(1)` for addScore.
* `O(1)` for reset.
* `O(N)` for top where `N` represents the total number of players since we sort all of the player scores and then take the top `K` from the partitioned scores array.

Space Complexity:
* `O(N)` used by the scores dictionary and also by the new list formed using the dictionary values in the top function.
