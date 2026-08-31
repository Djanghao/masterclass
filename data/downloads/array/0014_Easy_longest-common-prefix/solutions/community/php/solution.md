# php easy peasy O(nlogn)

**Author:** Lotlin
**Votes:** 9
**Link:** [https://leetcode.com/problems/longest-common-prefix/solutions/1922482/](https://leetcode.com/problems/longest-common-prefix/solutions/1922482/)

---

Hi. I'd like to show you my solution. 
Hope, it'll be usefull for you.
The main idea is that we need to compare only two the most different strings in array.
So I sort array, take the first and the last strig and compare them.

```
function longestCommonPrefix($strs) {
    $result = '';
    if(count($strs) == 1) return $strs[0];
    sort($strs);
    $str1 = $strs[0];
    $str2 = $strs[count($strs) - 1];
    for($i = 0; $i < strlen($str1); $i++){
        if($str2[$i] != $str1[$i]){
            return $result;
        }
        $result .=$str2[$i];
    }   
    return $result;
}
```