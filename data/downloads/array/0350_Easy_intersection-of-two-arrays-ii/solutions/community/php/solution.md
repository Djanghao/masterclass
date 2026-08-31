# 🥷🏻🔥 Two pointers: GO, PHP, Typescript, Javascript ✔️🥷🏻

**Author:** samandareshmamatov
**Votes:** 6
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5400644/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/5400644/)

---

```javascript []
function intersect(nums1, nums2) {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let x = 0;
    let y = 0;
    const result = [];

    while (x < nums1.length && y < nums2.length) {
        if (nums1[x] < nums2[y]) {
            x++;
        } else if (nums1[x] > nums2[y]) {
            y++;
        } else {
            result.push(nums1[x]);
            x++;
            y++;
        }
    }
    
    return result;
};
```
```Go []
func intersect(nums1 []int, nums2 []int) []int {
    slices.Sort(nums1)
    slices.Sort(nums2)
    
    x := 0; 
    y := 0;
    
    var result []int

    for x < len(nums1) && y < len(nums2) {
        if nums1[x] < nums2[y] {
            x++;
        } else if nums1[x] > nums2[y] {
            y++;
        } else {
            result = append(result, nums1[x]);
            x++;
            y++;
        }
    }
    
    return result;
}
```
```Typescript []
function intersect(nums1: number[], nums2: number[]): number[] {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let x: number = 0;
    let y: number = 0;
    const result: number[] = [];

    while (x < nums1.length && y < nums2.length) {
        if (nums1[x] < nums2[y]) {
            x++;
        } else if (nums1[x] > nums2[y]) {
            y++;
        } else {
            result.push(nums1[x]);
            x++;
            y++;
        }
    }
    
    return result;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer[]
     */
    function intersect($nums1, $nums2) {
        sort($nums1);
        sort($nums2);

        $x = 0;
        $y = 0;
        $result = [];

        while ($x < count($nums1) && $y < count($nums2)) {
            if ($nums1[$x] < $nums2[$y]) {
                $x++;
            } else if ($nums1[$x] > $nums2[$y]) {
                $y++;
            } else {
                array_push($result, $nums1[$x]);
                $x++;
                $y++;
            }
        }

        return $result;
    }
}
```