# Strobogrammatic Number-JavaScript using Map()

**Author:** twjeen
**Votes:** 8
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/67260/](https://leetcode.com/problems/strobogrammatic-number/solutions/67260/)

---

    var isStrobogrammatic = function(num) {
        myMap=new Map();
        myMap.set('6','9');
        myMap.set('9','6');
        myMap.set('0','0');
        myMap.set('1','1');
        myMap.set('8','8');  
        var l = 0, r = num.length - 1;
        while (l <= r) {
            if (!myMap.has(num.charAt(l))) return false;
            if (myMap.get(num.charAt(l)) != num.charAt(r))
                return false;
            l++;
            r--;
        } 
        return true;
    };