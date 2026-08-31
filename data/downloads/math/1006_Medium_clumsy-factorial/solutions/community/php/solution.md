# PHP- Faster than 100% solution

**Author:** pious2305
**Votes:** 1
**Link:** [https://leetcode.com/problems/clumsy-factorial/solutions/2254923/](https://leetcode.com/problems/clumsy-factorial/solutions/2254923/)

---

class Solution {

    
    function clumsy($n) {
        $total=0;
        $j=1;
        for($i=$n;$i>=1;$i--)
            {

                if($j>4)
                {
                    $f=0;
                }
                else
                    $f=1;

                if($j%4==0)
                {


                    if($f==1)
                    {
                        $total=$total+$i; 
                    }
                    else
                    {
                        $total=$total+$i; 
                    }
                }
                else if($j%4==3)
                {

                    if($f==1)
                    {
                        $total=$total+floor(($i+2)*($i+1)/$i)-($i+2)*($i+1); 
                    }
                    else
                    {

                        $total=$total-floor(($i+2)*($i+1)/$i)+($i+2)*($i+1);  
                    }
                }
                else if($j%4==2)
                {
                                
                    if($f==1)
                    {
                        $total=$total+($i+1)*$i-($i+1);  
                    }
                    else
                    {

                        $total=$total-($i+1)*$i+($i+1);
                    }
                }
                else
                {

                    if($f==1)
                    {
                        $total=$total+$i; 
                    }
                    else
                    {
                        $total=$total-$i; 
                    }
                }
                $j++;
            }
            return $total;
        
    }
}
