# JAVA Four different solutions.

**Author:** choids1645
**Votes:** 17
**Link:** [https://leetcode.com/problems/maximum-69-number/solutions/680016/](https://leetcode.com/problems/maximum-69-number/solutions/680016/)

---

```
class Solution {
    public int maximum69Number (int num) {
	
	    /*Using StringBuilder - Slowest*/
        StringBuilder n = new StringBuilder(num+"");
        for(int i = 0; i < n.length(); i++) {
            if(n.charAt(i) == '6') {
                n.setCharAt(i, '9');
                return Integer.parseInt(n.toString());
            }
        }
        return num;
     
        /*Convert to char array and then convert back to int*/
        String s = Integer.toString(num);
        char[] ch = s.toCharArray();
        for(int i=0; i< ch.length; i++) {
                if(ch[i] == '6') {
                    ch[i]='9';
                    return Integer.parseInt(String.valueOf(ch));
                }
        }
        return num;
        
        /*Looping from the rightmost digit*/
        int place = 1;
        int maxPlace = Integer.MIN_VALUE;
        int n = num;
       
        while (n > 0) {
            int d = n % 10;
            if (d == 6) {
				maxPlace = place;
			}
            place *= 10;
            n /= 10;
        }
        
        return (maxPlace == Integer.MIN_VALUE) ? num : num + (3 * maxPlace);
        
        /* From leftmost */
        int digits = (int)(Math.log10((double)num));
        int place = (int)(Math.pow(10, digits));
        
        while(place > 0) {
            if ((num / place) % 10 == 6) {
                return num + (3*place);
            }
            place/=10;   
        }
        return num;
    }
}