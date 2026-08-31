# Python - short and fast - 8 lines/320ms, 13 lines/90ms

**Author:** Ceay
**Votes:** 26
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/1163328/](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/solutions/1163328/)

---

[DBabibichev gave an excellent explaination of the approach.](https://leetcode.com/problems/minimum-number-of-operations-to-make-string-sorted/discuss/1163050/Python-O(26n)-math-solution-beats-100-explained) Written independently, this is a shorter and faster version of the same concept. Some notation is borrowed from their solution for consistency. The version takes advantage of the iterative update of the key parameter, and does mod operation only at the end. 

At each letter (starting from the end), we need to calculate the the number of operations to sort the string from this letter onward to the end. This is an iterative process. The aswer is the number operations to sort the tail starting from the next letter position, plus for each smaller letter in the tail of the string  that is smaller than the current letter (excluding repetitions), the number of combinations to place the letters in the tail given that the smaller letter is placed at the current position. Let the current letter is *cur_letter.* 

Let *tot* be the number of letters starting from the current position onward and *cnt[letter]* is the number of occurences of letter *letter* starting from the current position onward.

If we put *lower_letter* at the current position, then the number of possible permutations for the tail is (*tot*-1)! *cnt[*lower_letter*] / (*cnt*[*letter  1*]! ... *cnt*[*letter k*]!). This is classical formula for the multinomial distribution. One can see that the expression equals *tot*!/(*cnt*[*letter 1*]! * ... *  cnt[*letter  k*]!) * *cnt*[*lower_letter*]/*tot*, where the first component is the same for all the smaller letters  *lower_letter* and can be iteratively calculated as *comb_tot*=(*comb_tot* * *tot*) / *cnt*[*cur_letter*].

Once we have *comb_tot*, the number of operations for the current positions (excluding sorting the tail from the next position onward) is *comb_tot* (*cnt*[*lower_letter 1*] + ... + *cnt*[*lower_letter p*])  / *tot*.

Memory: O(26) - letters counter, time: O(26n) -loop over all letters in the string and then over all smaller letters

Beautiful problem with beutiful solution!

# 8-line solution, 320 ms
```
class Solution:
    def makeStringSorted(self, s: str) -> int:
        
        cnt, ans, tot, comb_tot = [0]*26, 0, 0, 1           # cnt - counter of the letters, tot - number of letters onward, comb_tot - see in the explanation 
        for cur_letter in s[::-1]:                          # Loop over all the letters from the end
            num = ord(cur_letter) - ord('a')                # Convert letter to number
            cnt[num] += 1                                   # Increment the counter for the current letter
            tot += 1                                        # Increment the number of letters from the current one onward
            comb_tot = (comb_tot * tot) // cnt[num]         # Iteratively update comb_tot
            ans = ans + (comb_tot * sum(cnt[:num]))//tot    # Add the number of combinations for all letters that are smaller than the current one
        return ans % 1_000_000_007
```

# 90 ms solution
[kcsquared](http://leetcode.com/kcsquared) further improved the solution by pre-processing division and using *mod* on *comb_tot* - see their comment in the section below. I am still trying to figure how this improvement works, will provide details later.

```
class Solution:
    def makeStringSorted(self, s: str) -> int:
        MOD = 10 ** 9 + 7
        inverses = [1] * (len(s) + 1)
        for a in range(2, len(s) + 1):
            inverses[a] = MOD - ((MOD // a) * inverses[MOD % a]) % MOD

        ans, tot, comb_tot = 0, 0, 1
        cnt = [0] * 26
        for cur in map(ord, reversed(s)):
            num = cur - 97
            cnt[num] += 1
            tot += 1
            comb_tot = (comb_tot * tot * inverses[cnt[num]]) % MOD
            ans += comb_tot * sum(cnt[:num]) * inverses[tot]
        return ans % MOD
```