# 2103. Rings and Rods | Easy | Beats

**Author:** bGap4znztN
**Votes:** 0
**Link:** [https://leetcode.com/problems/rings-and-rods/solutions/5580232/](https://leetcode.com/problems/rings-and-rods/solutions/5580232/)

---


# Code
```
class Solution {

    /**
     * @param String $rings
     * @return Integer
     */
    function countPoints($rings) {
        $colorPosMapper = [
            'R' => [],
            'G' => [],
            'B' => []
        ];
        for($i =0; $i < strlen($rings); $i += 2) {
            array_push($colorPosMapper[$rings[$i]], $rings[$i+1]);
        }
        $redPositions = array_unique($colorPosMapper['R']);
        $bluePositions = array_unique($colorPosMapper['B']);
        $greenPositions = array_unique($colorPosMapper['G']);
        $numOfRods = 0;

        print_r($redPositions);
        print_r($bluePositions);
        print_r($greenPositions);

        for ($i =0; $i < 10; $i += 1)
        {
            if(!in_array($i, $redPositions))
                continue;

            if(!in_array($i, $bluePositions))
                continue;

            if(!in_array($i, $greenPositions))
                continue;
            $numOfRods += 1;
        }

        return $numOfRods;
    }
}
```