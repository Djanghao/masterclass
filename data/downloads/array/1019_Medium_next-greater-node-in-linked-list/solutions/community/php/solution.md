# PHP 100% Solution

**Author:** tolgakaragol
**Votes:** 0
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2247271/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/2247271/)

---


![image](./images/0.png)
```
class Solution
{
    function nextLargerNodes($head)
    {
        $ans        = [];
        $checked    = [];
        $useSameMax = false;
        $nodes      = $this->listToArray($head);
        $tempMaxArr = $nodes;

        for ($i = 0; $i < count($nodes); $i++) {
            // to find next max remove current node
            unset($tempMaxArr[$i]);

            // if prior nodes with same value can not find a greater value, current node also will not find  
            if (isset($checked[$nodes[$i]])) {
                $ans[] = 0;
                continue;
            }

            $max = $useSameMax ? $max : max($tempMaxArr ?: [0]);

            // if next node is not our max. Next turn using max function will be unnecessary, we can use same max. 
            // Actually this var save my ass.
            $useSameMax = $max !== $nodes[$i + 1];

            // Before using loop we will be sure there is a greater value. 
            if ($nodes[$i] >= $max) {
                $ans[]               = 0;
                $checked[$nodes[$i]] = 0;
            } else {
                // Check all next node one by one.
                for ($j = $i + 1; $j < count($nodes); $j++) {
                    if ($nodes[$i] < $nodes[$j]) {
                        $ans[] = $nodes[$j];
                        break;
                    }
                }
            }
        }

        return $ans;
    }

    function listToArray($head): array
    {
        $arr = [];

        while ($head) {
            $arr[] = $head->val;
            $head  = $head->next;
        }

        return $arr;
    }
}
```