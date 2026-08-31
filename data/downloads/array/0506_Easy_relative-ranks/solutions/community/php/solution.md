# Ranking Athletes in a Competition

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/relative-ranks/solutions/5131483/](https://leetcode.com/problems/relative-ranks/solutions/5131483/)

---

# Intuition
To solve this problem, we need to assign ranks to athletes based on their scores in a competition. The ranks are determined by the position of the athletes in the sorted list of scores.

# Approach
1. We'll start by creating a copy of the original array and sort it in descending order to get the ranks.
2. Next, we'll create a hashmap to store the original scores and their corresponding ranks.
3. Then, we'll iterate through the original scores and assign ranks based on their positions in the sorted list.
4. Finally, we'll return the array with the assigned ranks.

# Complexity
- Time complexity:
O(nlogn) due to sorting, where n is the number of athletes.

- Space complexity:
O(n) for the hashmap and the result array.

# Code
```
class Solution {

    /**
     * @param Integer[] $score
     * @return String[]
     */
    function findRelativeRanks($score) {
        // Create a copy of the original array and sort it in descending order
        $sortedScore = $score;
        rsort($sortedScore);

        // Create a hashmap to store the original scores and their corresponding ranks
        $rankMap = [];
        $n = count($sortedScore);
        for ($i = 0; $i < $n; $i++) {
            $rankMap[$sortedScore[$i]] = $i + 1;
        }

        // Iterate through the original scores to assign ranks
        $result = [];
        foreach ($score as $s) {
            switch ($rankMap[$s]) {
                case 1:
                    $result[] = "Gold Medal";
                    break;
                case 2:
                    $result[] = "Silver Medal";
                    break;
                case 3:
                    $result[] = "Bronze Medal";
                    break;
                default:
                    $result[] = (string) $rankMap[$s];
                    break;
            }
        }

        return $result;
    }
}
```