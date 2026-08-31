# C# beats 100% with O(n), O(1<<k) complexity, clear w/o HashSet

**Author:** need_what
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2095318/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/2095318/)

---

Few points:
1.  k <= 20 so we can use integer mask to replace HashSet, for exampe '00' means 0, '11' means 3. 
2.  We will have 1<<k this masks. 
3.  In moving window, we need to remove the '1's when it slips out of the window. So we can use (val & n -1) to make the all the bits out of k to zero. 
4.  At the end, we just check if all masks being true. 
```
public bool HasAllCodes(string s, int k) {
            int n = 1 << k, greatest = n - 1; ;
            bool[] exists = new bool[n];
            for(int i = 0, val = 0; i < s.Length; i++)
            {
                val = ((val << 1) & greatest) + s[i] - '0';

                if (i >= k - 1) exists[val] = true;
            }

            return exists.All(a => a);        
    }
```
