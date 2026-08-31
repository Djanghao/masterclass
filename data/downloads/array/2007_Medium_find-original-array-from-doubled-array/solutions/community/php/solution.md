# PHP

**Author:** F0xDev
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2578641/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/2578641/)

---

```
class Solution {
    /**
     * @param Integer[] $changed
     * @return Integer[]
     */
    function findOriginalArray($changed) {
		// Basic check
        if (count($changed) < 2) {
            return [];
        }
        
		// Grouping the values and getting an array with values and count
        $values = array_count_values($changed);
		
		// Remove original array (clearing memory)
        unset($changed);
        
		// Sort by values (they are in the keys)
        ksort($values);
        
        $original = [];
        
        do {
			// Get first element (value and count)
            $value = array_key_first($values);
            if ($value === null) {
                break;
            }
            $count = $values[$value];
            unset($values[$value]);

            $doubled = $value * 2;
            
            // Zero case (quantity contains the number of original values and duplicates, since 0 * 2 = 0)
            if ($value === $doubled) {
                if ($count % 2 !== 0) {
                    return [];
                }
                
                $this->addValues($original, $value, $count / 2);
                continue;
            }
            
            // No-Zero case
            if (!isset($values[$doubled]) || $count > $values[$doubled]) {
				// Does the duplicate value not exist or is it not enough? Exit
                return [];
            }
            
			// Change counter and if double value ended - unset
            $values[$doubled] -= $count;
            if ($values[$doubled] === 0) {
                unset($values[$doubled]);
            }
            
            $this->addValues($original, $value, $count);
        } while(true);
        
        return $original;
    }
    
    function addValues(&$original, $value, $count) {
        for ($i = 0; $i < $count; $i++) {
            $original[] = $value;
        }
    }
}
```