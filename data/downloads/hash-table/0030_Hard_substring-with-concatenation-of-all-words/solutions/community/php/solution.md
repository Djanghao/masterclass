# php solution

**Author:** campa
**Votes:** 1
**Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2420298/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/solutions/2420298/)

---

'''
 function findSubstring($s, $words) {
 
        $result = [];
        if (count($words) < 1) return $result;
		
        $strLength  = strlen($s);
        $wordLength = strlen($words[0]);
        $subLength  = $wordLength * count($words);
		
        sort($words);
		
        for ($i = 0; $i <= ($strLength-$subLength); $i++) {
		
            $strToArr = str_split(substr($s, $i, $subLength), $wordLength);
            sort($strToArr);
			
            if (count($words) === count($strToArr) 
            && empty(array_diff_assoc($strToArr, $words))
            ){
                $result[] = $i;
            }
        }
        return $result;
    }
	'''