# Using Hashtabel with one loop to solve it || JS and PHP

**Author:** Qiu-IT
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-frequent-even-element/solutions/3412518/](https://leetcode.com/problems/most-frequent-even-element/solutions/3412518/)

---

### Intuition
Not a big deal but using hashtable to solve it. 
The second JS solution is easier to understand.


### Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const m = new Map();
    let max = rs = -1;    
    for (let i=0;i<nums.length;i++ ) {
        if(nums[i]%2==0)
        m.set(nums[i],(m.get(nums[i]) || 0)+1);
        if(m.get(nums[i])>max || (m.get(nums[i]) ==max) && rs>nums[i]){
                max = m.get(nums[i]);
                rs = nums[i];
            }
    }
    return rs;
};
```

```js []
/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    const m = new Map();
    let max = rs = -1;    
    for (let i=0;i<nums.length;i++ ) {
        if(nums[i]%2==0)
        m.set(nums[i],(m.get(nums[i]) || 0)+1);
    }
    for (let key of m.keys()){
            let tmp = m.get(key);
            if(tmp>max || (tmp ==max && rs>key)){
                max = tmp;
                rs = key;
            }
    }
    return rs;
};
```

```php []
class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function mostFrequentEven($nums) {
        $max = $rs = -1;
        for ($i = 0; $i < count($nums); $i++) {
            if ($nums[$i] % 2 == 0) {
                $hashtable[$nums[$i]] += 1;
                if ($hashtable[$nums[$i]] > $max || 
($hashtable[$nums[$i]] == $max && $rs > $nums[$i])) {
                    $max = $hashtable[$nums[$i]];
                    $rs = $nums[$i];
                }
            }
        }
        return $rs;
    }
}
```



