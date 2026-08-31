# Two pointers | Binary search | Sorting

**Author:** mohamed_amin_hajbi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5636017/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5636017/)

---

# Intuition
To solve the problem we can use a combination of binary search and a two-pointer technique. The idea is to determine the k-th smallest distance by narrowing down possible distances using binary search, and counting how many pairs have a distance less than or equal to a mid value.
# Approach
1. **Sort the Array:** Begin by sorting the array to facilitate easier distance calculations and pair counting.

2. **Binary Search on Distance:**

    - Initialize the binary search range with low set to 0 and high set to the maximum possible distance between any two elements in the sorted array.
    - In each iteration of binary search, compute the middle value mid, which represents a potential distance.
    - Use the countPairs function to count how many pairs have a distance less than or equal to mid.
    - Adjust the search range based on whether the count of such pairs is less than or greater than k.
3. **Count Pairs Function:** For each possible mid value, use a two-pointer technique to count the number of pairs with a distance \u2264 mid. Move the left pointer to maintain valid distances while iterating with the right pointer.

# Complexity
- Time complexity: **O(nlog(range))**
Where range is the difference between the maximum and minimum values in the array.

- Space complexity: **O(1)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    function countPairs($nums,$mid){
            $count = 0;
            $left = 0;
            for($right = 0; $right <count($nums); $right++){
                while($nums[$right]-$nums[$left]>$mid){
                    $left ++;
                }
                $count += $right - $left;
            }
            return $count;
    }

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function smallestDistancePair($nums, $k) {
        sort($nums);
        $n = count($nums);

        $low = 0;
        $high = $nums[$n-1] - $nums[0];
        while($high>$low){
            $mid = intdiv($high+$low,2);
            if($this->countPairs($nums,$mid)<$k){
                $low = $mid+1;
            } else {
                $high = $mid;
            }
        }
        return $low;
    }
}
```