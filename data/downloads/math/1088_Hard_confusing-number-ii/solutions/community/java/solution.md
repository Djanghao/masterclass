# [Java] Clean dfs Solution || with detailed explanation

**Author:** xieyun95
**Votes:** 3
**Link:** [https://leetcode.com/problems/confusing-number-ii/solutions/1117746/](https://leetcode.com/problems/confusing-number-ii/solutions/1117746/)

---

There might be various backtracking approaches. This solution is a direct genearlization of the solution to Leetcode 248. Strobogrammatic Number III. It will be really helpful to get familiar of the key to solve Strobogrammatic Number problems in genearal. I really recommend to try these problems first or revisit them before solving this one.  

It's really interesting that this problem is marked as "Hard" while [788. Rotated Digits](https://leetcode.com/problems/rotated-digits/discuss/1172132/Java-Clean-DFS-Solution-oror-with-Comments), a very similar problem, is marked as "Easy". 

* [247. Strobogrammatic Number II](https://leetcode.com/problems/strobogrammatic-number-ii/discuss/1117755/Java-clean-Backtracking-Solution-oror-with-comments)
* [248. Strobogrammatic Number III](https://leetcode.com/problems/strobogrammatic-number-iii/discuss/1117750/Java-clean-Backtracking-Solution-oror-with-comments)
* [788. Rotated Digits](https://leetcode.com/problems/rotated-digits/discuss/1172132/Java-Clean-DFS-Solution-oror-with-Comments)

```
class Solution {
    private static final Map<Character, Character> map = new HashMap<>();
    private static final char[][] ROTATE_SAME_PAIRS = {{'0', '0'}, {'1', '1'}, {'6', '9'}, {'8', '8'}, {'9', '6'}};
    private static final char[] CANDIDATES = {'0', '1', '6', '8', '9'};
    private String num;
    private int count = 0;
    
    public int confusingNumberII(int N) {
        this.num = String.valueOf(N);
        for (char[] p : ROTATE_SAME_PAIRS) map.put(p[0], p[1]);
        
        
        for (int len = 1; len <= num.length(); len++) {
            dfs(0, len - 1, new char[len], false);
        }
        
        return count;
    }

    private void dfs(int left, int right, char[] arr, boolean valid) {
        if (left > right) {
            if (!valid) return;
            String res = new String(arr);
            if (! (res.length() == num.length() && res.compareTo(num) > 0)) count++;
            return;
        } 
        
        if (left == right) {
            for (char l : CANDIDATES) {
                arr[left] = l;
                dfs(left + 1, right - 1, arr, valid || l == '6' || l == '9');
            }
            return;
        }
        
        
        for (char l : CANDIDATES) {
            if (left == 0 && l == '0') continue;
            
            for (char r : CANDIDATES) {
                arr[left] = l;
                arr[right] = r;
                
                //  two character l & r having r == map.get(l), meaning that l & r forms a pair that's the 
                //  same after rotate (i.e., 0 & 0, 6 & 9), 
                //  Unless r == map.get(l), we know that the final number formed is not "Confusing"
                dfs(left + 1, right - 1, arr, (valid || r != map.get(l)));
            }
        }
        
    }
}
```

The following is another Solution but involves some mathematical thinking. I would not recommand this solution in a real interview. 
```
class Solution {
    private static final char[][] PAIR = {{'0', '0'}, {'1', '1'}, {'6', '9'}, {'8', '8'}, {'9', '6'}};
    private String num;
    private int res;
    
    public int confusingNumberII(int N) {
        this.num = String.valueOf(N);
        this.res = getTotalCandidates();
        
        for (int len = 1; len <= num.length(); len++) {
            dfs(0, len - 1, new char[len]);
        }
        
        return res;
    }

    private void dfs(int left, int right, char[] c) {
        if (left > right) {
            String s = new String(c);
            if (s.length() < num.length() || s.compareTo(num) <= 0) res--;
            return;
        } 
        
        for (char[] p : PAIR) {
            c[left] = p[0];
            c[right] = p[1];

            if (left == right && p[0] != p[1]) continue;
            if (c.length > 1 && c[0] == '0') continue;
            
            dfs(left + 1, right - 1, c);
        }
        
    }
    
    // # of numbers <= num s.t. it's composed of {0,1,6,8,9}
    private int getTotalCandidates() {
        int res = 0, i = 0, n = num.length();
        while (i < n) {
            char c = num.charAt(i);   
            
            /*
            denote num := c_0 c_1 ... c_(n-1), i.e., num's k-th digit from the left is c_k  
            Then # of numbers <= num s.t. composed of {0,1,6,8,9} can be calculated by counting
            
            0. 0-th digit < c_0,  
                and all digits after 0-th digit choosed arbituarily from {0,1,6,8,9}
            1. 0-th digit == c_0, 1-st digit < c_1,  
                and all digits after 1-st digit choosed arbituarily from {0,1,6,8,9}
                    ... 
            k. {i-th digit == c_i} for i in {0,..., k-1}, k-th digit < c_k, 
                and all digits after k-th digit choosed arbituarily from {0,1,6,8,9}
            
            n-1. {i-th digit == c_i} for i in {0,..., n-1} 
                <==> all char matches 
                <==> there's only one such number, the num itself
            
            */
            
            res += countSmallerDigit(c) * (int) (Math.pow(5, n - 1 - i));
            
            if (c != '0' && c != '1' && c != '6' && c != '8' && c != '9') return res;
            
            i++;
        }
        
        if (i == n) res++;   // num is composed of {0,1,6,8,9} ==> include itself
        return res;
        
    }
    
    // given char c, return the number n in {0,1,6,8,9} s.t. n < c
    private int countSmallerDigit(char c) {
        int res = 0;
        for (char[] p : PAIR) {
            if (c > p[0]) res++;
        }
        return res;
    }
    
}

```