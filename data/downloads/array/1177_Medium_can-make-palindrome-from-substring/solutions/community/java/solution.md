# Java, bit vector, linear, clean code, solution explained

**Author:** gthor10
**Votes:** 6
**Link:** [https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/373956/](https://leetcode.com/problems/can-make-palindrome-from-substring/solutions/373956/)

---

We need to simplify the condition for the query first. 

If we can change position of the char this means that we interested only in quantity of every character. If we met same character 2, 4 or any other even number of times - we can do a palindrome anyways, so don't need to spend a replacement point for it, so we don't care of such characters. If the number is odd - this one we need to replace. How many of those we need to replace - every second one, becace by replacing one of odd with another odd we'll make it even number (like 3 + 5 = 8 - even). The catch here - we have to exclude one odd because it can be in the center of the string and don't need to be replaced. But this is only in case there are odd number of odd characters :) 

This condition can be met by doing whole-number division by 2 of number of odd characters - in Java /2. 

So for one query the algorithm is clear - count the number of characters between query[0] and query[1], count number of times we have odd count, divide it by 2 and compare with allowed replacements - query[2].

If we do it for every query separately this will time out. Complexity is O(len(s) x len(queries)), the reason is - we count characters for substring every time, and substring can be very long. 

Improved approach can do just the single pass on the string => O(Max(len(s), len(queries))) - pre-calculate counts for every position in the string - do the prefix counts. Then for every query the count can be found quickly be substracting count of lower index from count for greater index. This way we calculate counts only once.

Another improvement - we can store only flag that indicates odd or even number of each character. In this case we need to store bits only, not real numbers. If we use bit-vector to store those counts and there are only 26 allowed characters it's enough to use single int for this - we can use single int.This leads to final solution.

Complexity - O(Max(len(s), len(queries))) for time. We do len(s) and then len(queries) iterations and save it in separate arrays. So whichever element dominates - this directs the complexity. O(len(s)) space - need to store one int  per character in the string.

```
    public List<Boolean> canMakePaliQueries(String s, int[][] queries) {
        List<Boolean> res = new ArrayList();
        
        if (queries.length == 0)
            return res;
        //create array of prefix counts for every next char in the string
        //count number of odd times we met one character
        int[] countArray = new int[s.length()];
        for (int i = 0; i < s.length(); i++) {
            //take count for previous charter, 0 if first character
            int prev = (i == 0) ? 0 : countArray[i - 1];
            //transfrom char into index
            int idx = s.charAt(i) - 'a';
            //calculate count for this charater in the string by doing XOR
            //of this charater bit with the previous count
            countArray[i]= (prev^(1<<idx));
        }
        
        //now iterate over the query array
        for (int[] q : queries) {
            //simple case - query of 1 character is always a palindrome
            if (q[0] == q[1]) {
                res.add(true);
                continue;
            }
            //take count of previous position in array of prefixes, 0 if it's first element
            int p = q[0] == 0 ? 0 : countArray[q[0] - 1];
            //by doing XOR take count of even number of chars between q[1] and q[0] - 1
            int counts = (p^countArray[q[1]]);
            //check the number of even chars, if / 2 is less then a q[2] - we can satisfy the
            //condition of the query
            res.add((Integer.bitCount(counts) / 2)<= q[2]);
        } 
        
        return res;
    }
```