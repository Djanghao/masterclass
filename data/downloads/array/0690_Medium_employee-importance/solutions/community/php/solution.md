# Faster than 100.00% & Memory Usage less than 100.00% on php

**Author:** olegmifle
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-importance/solutions/1083950/](https://leetcode.com/problems/employee-importance/solutions/1083950/)

---

```
/**
 * Definition for Employee.
 * class Employee {
 *     public $id = null;
 *     public $importance = null;
 *     public $subordinates = array();
 *     function __construct($id, $importance, $subordinates) {
 *         $this->id = $id;
 *         $this->importance = $importance;
 *         $this->subordinates = $subordinates;
 *     }
 * }
 */

class Solution {
    private array $map = [];
    
    /**
     * @param Employee[] $employees
     * @param Integer $id
     * @return Integer
     */
    function getImportance($employees, $id) {
         foreach ($employees as $employee) {
            $this->map[$employee->id] = [
                'importance' => $employee->importance,
                'subordinates' => $employee->subordinates,
            ];
        }
        
        return $this->calc($id);
    }
    
    private function calc($id): int
	{
        $result = $this->map[$id]['importance'];
        if (is_array($this->map[$id]['subordinates'])) {
            foreach ($this->map[$id]['subordinates'] as $sub) {
                $result += $this->calc($sub);
            }
        }
        
        return $result;
    }
}
```