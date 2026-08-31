# Rafa1a: Solution

**Author:** raf1a
**Votes:** 0
**Link:** [https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6117109/](https://leetcode.com/problems/adding-spaces-to-a-string/solutions/6117109/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n+m)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n+m)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```JavaScript []
/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
    const array_s=[]
    spaces.forEach((valor, i) => {
        if(i===0){
            array_s.push(s.slice(0,valor)) 
        }else {
             array_s.push(s.slice(spaces[i-1],valor)) 
        }
        
    })
    array_s.push(s.slice(spaces.at(-1)));
    console.log(array_s.join(" "))
    return array_s.join(" ")
};
```
```php []
class Solution {

    /**
     * @param String $s
     * @param Integer[] $spaces
     * @return String
     */
    function addSpaces($s, $spaces) {
        $array_s = [];
        foreach($spaces as $chave => $valor){
            if($chave === 0){
                $palavra = substr($s, 0, $valor);
            }else {
                $index_anterior = $spaces[$chave-1];
                $palavra = substr($s, $index_anterior, $valor-$index_anterior);
            }
            // echo $palavra;
            array_push($array_s, $palavra);
        }
        array_push($array_s, substr($s, end($spaces)));
        return implode(" ", $array_s);
    }
}
```