# Php Greedy

**Author:** hnatenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/2996637/](https://leetcode.com/problems/merge-triplets-to-form-target-triplet/solutions/2996637/)

---



# Complexity
- Time complexity:
O (n)



# Code
```
class Solution {

    /**
     * @param Integer[][] $triplets
     * @param Integer[] $target
     * @return Boolean
     */
    function mergeTriplets($triplets, $target) {
        $res = [0,0,0];
		for ($i = 0; $i < count($triplets); $i++) {
            //keep triplets, which are less than or equal to target
            
			if($triplets[$i][0] <= $target[0] && $triplets[$i][1] <= $target[1] && $triplets[$i][2] <= $target[2]) {
                // keep maximum in selected results.
				$res[0] = max($res[0], $triplets[$i][0]);
				$res[1] = max($res[1], $triplets[$i][1]);
				$res[2] = max($res[2], $triplets[$i][2]);
			}
		}
        
		return $res[0]==$target[0] && $res[1]==$target[1] && $res[2]==$target[2];
        
    }
}
```