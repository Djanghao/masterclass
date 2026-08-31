# PHP Solution

**Author:** cxlin001
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389770/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5389770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Creating two triangle and compare the two.

# Approach
<!-- Describe your approach to solving the problem. -->
Compare two triangle, first triangle red being on top and the second triangle blue on top.  Compare the height of the two triangle and return the highest one.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $red
     * @param Integer $blue
     * @return Integer
     */
    function maxHeightOfTriangle($red, $blue) {
            $red_1 = $red;
            $blue_1 = $blue;
            $height_1_count = 1;
            $current_color = 0;
            $continue = true;
            /* test red on top */
            while( $continue ){

                if( $current_color == 0 && ( ($red_1-$height_1_count) >= 0 ) ){
                    $red_1 -= $height_1_count;
                    $height_1_count += 1;
                    $current_color = 1;
                } elseif( $current_color == 1 && ( ($blue_1-$height_1_count) >= 0 ) ) {
                    $blue_1 -= $height_1_count;
                    $height_1_count += 1;
                    $current_color = 0;
                } else {
                    $continue = false;
                }

            }

            $red_2 = $red;
            $blue_2 = $blue;
            $height_2_count = 1;
            $current_color = 0;
            $continue = true;
            /* test blue on top */
            while( $continue ){

                if( $current_color == 0 && ( ($blue_2-$height_2_count) >= 0 ) ){
                    $blue_2 -= $height_2_count;
                    $height_2_count += 1;
                    $current_color = 1;
                } elseif( $current_color == 1 && ( ($red_2-$height_2_count) >= 0 ) ) {
                    $red_2 -= $height_2_count;
                    $height_2_count += 1;
                    $current_color = 0;
                } else {
                    $continue = false;
                }

            }

            return $height_1_count >= $height_2_count? $height_1_count-1 : $height_2_count-1;
    }
}
```