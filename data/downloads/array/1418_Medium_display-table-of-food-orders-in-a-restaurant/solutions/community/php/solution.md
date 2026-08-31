# PHP solution

**Author:** aungkoko0606
**Votes:** 0
**Link:** [https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/1631672/](https://leetcode.com/problems/display-table-of-food-orders-in-a-restaurant/solutions/1631672/)

---

```
class Solution {

    /**
     * @param String[][] $orders
     * @return String[][]
     */
    function displayTable($orders) {
        $title = [];
        $temp;
        $hashMap = [];
        for($i = 0; $i < count($orders); $i++){
            $hashMap[$orders[$i][1]][] = $orders[$i][2];
        }
        ksort($hashMap);
        
        for($i = 0; $i < count($orders); $i++){
           $title[$i] = $orders[$i][2];
        }
        $sortTitle = array_unique($title);
        sort($sortTitle);
        array_unshift($sortTitle,"Table");
        
        $temp[] = $sortTitle;
        
        $count = 0;
        foreach($hashMap as $key=>$value){
            $row = []; 
            $row[] = "".$key;
            $checkDuplicate = array_count_values($value);
            for($i = 1; $i < count($sortTitle); $i++){
                if(isset($checkDuplicate[$sortTitle[$i]])){
                   $row[] = "".$checkDuplicate[$sortTitle[$i]]; 
                }
                else{
                  $row[] = "0";
                }
            }
            $count++;
            $temp[] = $row; 
        } 
        
        return $temp;
    }
}
```