# 🔥 PHP Solution 🔥 - INTUITIVE Sliding Window approach

**Author:** justintelmo
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2853209/](https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/solutions/2853209/)

---

# Intuition
Since we are looking for a minimum, we must store a variable that is initialized to INT_MAX, for PHP that is PHP_INT_MAX. 

We want to use a **sliding window** approach for this problem, since we know that there is a fixed width to work with in **$k**. We want to keep track of the amount of white blocks within the window at any given time and update the minimum amount of white blocks needed to be changed at any given time. 

# Approach
Initialize a dictionary containing the two types of blocks ("W" and "B"). If there were more blocks, we would most likely adjust this loop to look for new colors as they are encountered. 

Loop through each character in the string, incrementing its place in the `colors` dictionary. This will be done even after we have established the window.

Since we do not want to start checking for recolors until we have hit the length of the window **k**, we add a condition for if the current index is greater than **k - 1**. 

Once we have reached our window, we can start checking for the minimum number of recolors. This is a very simple usage of `min()` against the current `minRecolors`.

Once we are past our window, we must move the window start so that our window remains the fixed length of **k**.


# Complexity
- Time complexity:
In all cases, this algorithm is O(n) as it looks at every element (in this case, letters in a string) once.

- Space complexity:
The space complexity os O(k), where k is the size of the window. We disregard anything outside of the window at any given time.

# Code
```
class Solution {

    /**
     * @param String $blocks
     * @param Integer $k
     * @return Integer
     */
    function minimumRecolors($blocks, $k) {
        $minRecolors = PHP_INT_MAX;
        $colors = ["W" => 0, "B" => 0];
        for ($i = 0; $i < strlen($blocks); $i++) {
            $colors[$blocks[$i]]++;

            if ($i >= $k - 1) {
                 // Since we target for black blocks, current number of recolors is how many W there are 
                $minRecolors = min($minRecolors, $colors["W"]);
                $colors[$blocks[$i - ($k - 1)]]--; // Get rid of the i - (k-1)th block 
            }
        }

        return $minRecolors;
    }
}
```