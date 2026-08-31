# PHP solution with linear space

**Author:** zihadxomar
**Votes:** 2
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/1497664/](https://leetcode.com/problems/fibonacci-number/solutions/1497664/)

---

```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
   
    function fib($n) {
       
        if($n==0){
            return 0;
        }
        if($n==1 || $n==2){
            return 1;
        }
        $n1 = 1;
        $n2 = 1;
        $result = "";
       for($i=3;$i<=$n;$i++){
           $result = $n1+$n2;
           $n1=$n2;
           $n2=$result;
       }
        return $result;
               
    }
}
```

The above aproach is iterative approach . Normally it is solved by using arrays and then accessing the previous index values .Here we are using variables instead of arrays . First we handled case for n=0,1,2 because they are fixed values,because we will be using them as base values and we won't calculate them . Now for n>2 , we will add values for n=1 and n=2 ,then will replace the variable n=1 with n=2 and n=2 with current sum . then will return the final sum . The recursive solution is given below :

```
class Solution {

    /**
     * @param Integer $n
     * @return Integer
     */
   
    public $dp = [];
    
    function fib($n) {
       
        if($n==0){
            return 0;
        }
        if(!empty($dp[$n])){
            return $dp[$n];
        }
        
        if($n==1 || $n==2){
            return 1;
        }else{
            return $dp[$n] =$this->fib($n-2)+$this->fib($n-1);
        }
               
    }
}
```