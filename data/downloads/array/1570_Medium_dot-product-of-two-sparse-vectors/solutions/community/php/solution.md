# PHP solution with "Follow up"

**Author:** mamyta
**Votes:** 1
**Link:** [https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4484930/](https://leetcode.com/problems/dot-product-of-two-sparse-vectors/solutions/4484930/)

---

# Code
```
class SparseVector {
    private $vec;
    private $size;
    private $isSparseVector = false;
    function __construct($nums) {
        $this->size = 0;
        $n = count($nums);
        for($i=0;$i<$n;$i++){
            // Store non-zero elements in the vector
            if($nums[$i]){
                $this->vec[$i] =  $nums[$i];
                $this->size+=1;
            }
        }
        // Check if the vector is sparse (non-zero elements are less 
        // than half of the total elements)
        if($n > $this->size*2){
            $this->isSparseVector = true;
        }
    }
    
    function dotProduct($vec) {
        // Determine if the passed vector is sparse and accordingly 
        // set the small and big vectors
        if($vec->isSparseVector()){
            $small = $vec->getVector();
            $big = $this->getVector();
        }else{
            $big = $vec->getVector();
            $small = $this->getVector();
        }

        $sum = 0;
        foreach($small as $i => $val){
            if ($big[$i]){
                $sum += $big[$i] * $val;
            }
        }
        return  $sum;
    }

    function isSparseVector(){
        return $this->isSparseVector;
    }

    function getVector(){
        return $this->vec;
    }

    function getSize(){
        return $this->size;
    }
}
```