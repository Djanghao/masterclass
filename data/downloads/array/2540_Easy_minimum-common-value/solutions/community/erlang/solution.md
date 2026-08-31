# O(n) Soln

**Author:** ozzyozbourne
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-common-value/solutions/5405374/](https://leetcode.com/problems/minimum-common-value/solutions/5405374/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int getCommon(final int[] nums1, final int[] nums2) {
        int l = 0, r = 0;
        while(l < nums1.length && r < nums2.length){
            switch (Integer.compare(nums1[l], nums2[r])){
                case -1 -> l += 1;
                case 1  -> r += 1;
                default -> {return nums1[l];}
            }
        }return -1;
    }
}
```
```python []
class Solution:
    def getCommon(self, nums1: List[int], nums2: List[int]) -> int:
        l, r = 0, 0
        while l < len(nums1) and r < len(nums2):
            match (nums1[l] > nums2[r]) - (nums1[l] < nums2[r]):
                case  1: r += 1
                case -1: l += 1
                case  _: return nums1[l]
        return -1
```
```rust []
impl Solution {
    pub fn get_common(nums1: Vec<i32>, nums2: Vec<i32>) -> i32 {
        use std::cmp::Ordering;
        let (mut l, mut r) = (0, 0);
        while l < nums1.len() && r < nums2.len(){
            match nums1[l].cmp(&nums2[r]){
                Ordering::Less => l += 1,
                Ordering::Greater => r += 1,
                Ordering::Equal => return nums1[l]
            }
        }
        -1
    }
}
```
``` C []
int getCommon(const int* nums1, const int nums1Size, const int* nums2, const int nums2Size) {
    int l = 0, r = 0;
    while(l < nums1Size && r < nums2Size){
        switch ((nums1[l] > nums2[r]) - (nums1[l] < nums2[r])){
            case 1:
                r += 1;
                break;
            case -1: 
                l += 1;
                break;
            default:
                return nums1[l]; 
        }
    }
    return -1;
}
```
``` golang []
func getCommon(nums1 []int, nums2 []int) int {
    var l, r int
    for l < len(nums1) && r < len(nums2){
        switch {
            case nums1[l] > nums2[r]:
                r += 1
            case nums1[l] < nums2[r]:
                l += 1
            default: 
                return nums1[l]
        }
    }
    return -1
}
```
``` javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let l = 0, r = 0
    while (l < nums1.length && r < nums2.length){
        switch ((nums1[l] > nums2[r]) - (nums1[l] < nums2[r])){
            case -1:
                l += 1
                break
            case 1: 
                r += 1
                break
            default:
                return nums1[l]
        }
    }
    return -1
};
```
``` typescript []
function getCommon(nums1: readonly number[], nums2: readonly number[]): number {
    let l = 0, r = 0
    while (l < nums1.length && r < nums2.length){
        switch ((nums1[l] > nums2[r] ? 1 : 0) - (nums1[l] < nums2[r] ? 1 : 0)){
            case -1:
                l += 1
                break
            case 1: 
                r += 1
                break
            default:
                return nums1[l]
        }
    }
    return -1
};
```
``` Erlang []
-spec get_common(Nums1 :: [integer()], Nums2 :: [integer()]) -> integer().
get_common([], _) -> -1; 
get_common(_, []) -> -1;
get_common([H | _], [H | _]) -> H;
get_common(Nums1, Nums2) when hd(Nums1) > hd(Nums2) -> get_common(Nums1, tl(Nums2));
get_common(Nums1, Nums2) -> get_common(tl(Nums1), Nums2).  
```
``` Elixir []
defmodule Solution do
  @spec get_common(nums1 :: [integer], nums2 :: [integer]) :: integer
  def get_common([], _), do: -1
  def get_common(_, []), do: -1
  def get_common([n | _], [n | _]), do: n
  def get_common(n1, n2) when hd(n1) > hd(n2), do: get_common(n1, tl(n2))
  def get_common(n1, n2), do: get_common(tl(n1), n2)  
end
```

