# PHP solution using strtoupper() and strtolower()

**Author:** mtworthen
**Votes:** 0
**Link:** [https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5609614/](https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/solutions/5609614/)

---



Utilize PHP strtolower and strtoupper functions to see if every char in the string exists as both upper and lower, then pull those chars out and store them in an array. By putting them in an array, we can utilize the max() function to return the highest valued letter in the array

#Code 
```
class Solution {

    /**
     * @param String $s
     * @return String
     */
    function greatestLetter($s) {
        $result = array();
        for ($i = 0; $i < strlen($s); $i++) {
            //If the current letter exists in both upper and lowercase in the string, store it in $result
            if (str_contains($s, strtoupper($s[$i])) && str_contains($s, strtolower($s[$i]))) {
                //Store it as an uppercase since thats what we have to return
                //To avoid adding duplicates, use !
                if(!in_array(strtoupper($s[$i]), $result)) {
                    $result[] = strtoupper($s[$i]);
                }
            }
        }
        //Empty array == no letter in the string appeared as both upper and lower
        if (count($result)==0) {
            return '';
        } else if (count($result) == 1) { //If array size is only 1, thats the solution
            return $result[0];
        } else {
            return max($result); //Find the largest string value if theres more than 1
        }
    }
}
```