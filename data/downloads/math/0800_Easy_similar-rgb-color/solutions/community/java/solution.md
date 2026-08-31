# Java | 2 solutions

**Author:** conchwu
**Votes:** 1
**Link:** [https://leetcode.com/problems/similar-rgb-color/solutions/2704962/](https://leetcode.com/problems/similar-rgb-color/solutions/2704962/)

---

# 2.Math
```
    //2.Math
    //Runtime: 1 ms, faster than 100.00% of Java online submissions for Similar RGB Color.
    //Memory Usage: 40.2 MB, less than 95.24% of Java online submissions for Similar RGB Color.
    public String similarRGB(String color) {
        StringBuffer sb = new StringBuffer("#");
        for (int i = 1 ; i < color.length(); i += 2){
            int number = Integer.valueOf(color.substring(i, i + 2), 16);
            String X = Integer.toHexString(Math.round((float) number / 17));
            sb.append(X).append(X);
        }
        return sb.toString();
    }
```
# 1.Brute force
```
    //1.Brute force
    //Runtime: 2 ms, faster than 83.33% of Java online submissions for Similar RGB Color.
    //Memory Usage: 40.8 MB, less than 85.71% of Java online submissions for Similar RGB Color.
    //Time: O(1); Space:O(1)
    public String similarRGB_1(String color) {

        StringBuffer sb = new StringBuffer("#");
        for (int i = 1 ; i < color.length(); i += 2){
            char x = color.charAt(i);
            char y = color.charAt(i + 1);
            int number = Integer.valueOf(color.substring(i, i + 2), 16);
            int k = 1;
            //Time: worst case: O(16)
            while (x != y) {
                String str = Integer.toHexString(number + k);
                x = str.charAt(0);
                y = str.length() == 2 ? str.charAt(1) : '0';
                if (x == y) break;

                str = Integer.toHexString(number - k);
                x = str.charAt(0);
                y = str.length() == 2 ? str.charAt(1) : '0';
                if (x == y) break;

                k++;
            }
            sb.append(x).append(y);
        }
        return sb.toString();
    }
```