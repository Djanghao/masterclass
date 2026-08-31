# PHP Solution | Flattening Multi Dimentional to an singe Dimention | Simple Solution

**Author:** Hades1295
**Votes:** 1
**Link:** [https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2370659/](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/solutions/2370659/)

---

Logic here is that We can convert the multi dimensional array to a singlle dimensional array using array_merge method and according to the kth value of the array display answer 

```
class Solution {

    /**
     * @param Integer[][] $matrix
     * @param Integer $k
     * @return Integer
     */
function array_flatten($array) { 
    if (!is_array($array)) { 
      return FALSE; 
    } 
    $result = array(); 
    foreach ($array as $key => $value) { 
      if (is_array($value)) { 
        $result = array_merge($result, $this->array_flatten($value)); 
      } 
      else { 
        $result[$key] = $value; 
      } 
    } 
     return $result; 
  } 

  function kthSmallest($matrix, $k) {
 $result =  $this->array_flatten($matrix);
    sort($result);
    return $result[$k-1];
}

}
```