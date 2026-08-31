# PHP solution 0ms

**Author:** kravetzpm
**Votes:** 1
**Link:** [https://leetcode.com/problems/restore-ip-addresses/solutions/1629207/](https://leetcode.com/problems/restore-ip-addresses/solutions/1629207/)

---

I am aware this code can be refactored. But it is a begginer approach to understand what the algorithm should do, step by step.
```
class Solution {

    /**
     * @param String $s
     * @return String[]
     */
    function restoreIpAddresses($s) {
        if (strlen($s) > 12 || strlen($s)==0 || strlen($s) < 4) return array();
        
        //Minimum and maximum block sizes according to length of s
        //For example, if length of s is 12, then it is possible only to have 4 blocks of 3 digits
        if (strlen($s)==4) { $minBlock = 1; $maxBlock = 1; }
        elseif (strlen($s)==5) { $minBlock = 1; $maxBlock = 2; }
        elseif (strlen($s)==7) { $minBlock = 1; $maxBlock= 3; }
        elseif (strlen($s) >8 && strlen($s) < 11) { $minBlock = 1; $maxBlock = 3; }
        elseif (strlen($s)==11) { $minBlock = 2; $maxBlock = 3; }
        elseif (strlen($s)==12) { $minBlock = 3; $maxBlock = 3; }
        else { $minBlock = 1; $maxBlock = 3; }
        
        $sz = strlen($s);
        $ips=array();

        //HADOUKEN TO CREATE ALL POSSIBLE COMBINATIONS
        for ($p1 = $minBlock; $p1 <= $maxBlock; $p1++) {
            for ($p2 = $minBlock; $p2 <= $maxBlock; $p2++) {
                for ($p3 = $minBlock; $p3 <= $maxBlock; $p3++) {
                    for ($p4 = $minBlock; $p4 <= $maxBlock; $p4++) {
                        //ALL DIGITS SHOULD BE USED. If sum of blocks' length is not equal to length of s, jumps to next combination
                        if ($p1+$p2+$p3+$p4 != $sz) continue;
                        
                        //Test block by block if is in range between 0 and 255
                        $i1 = substr($s,0,$p1);
                        if (!$this->isInRange($i1)) continue;
                        
                        $i2 = substr($s,0+$p1, $p2);
                        if (!$this->isInRange($i2)) continue;
                        
                        $i3 = substr($s, 0+$p1+$p2, $p3);
                        if (!$this->isInRange($i3)) continue;
                        
                        $i4 = substr($s, 0+$p1+$p2+$p3, $p4);
                        if (!$this->isInRange($i4)) continue;
                        
                        $ips[] = $i1.".".$i2.".".$i3.".".$i4;
                    }
                }
            }
        }
        return $ips;
    }
    
    function isInRange($n) {
        if ($n==="0") return true;
        if (substr($n,0,1) != "0" && intval($n)<=255) return true;
        return false;
    }
}```