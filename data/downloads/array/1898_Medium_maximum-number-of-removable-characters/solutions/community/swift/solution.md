# [Java/C++/Python/JavaScript/Kotlin/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1984393/](https://leetcode.com/problems/maximum-number-of-removable-characters/solutions/1984393/)

---

***Hello it would be my pleasure to introduce myself Darian.***

***Java***
```
class Solution {
    public int maximumRemovals(String s, String p, int[] removable) {
        int left = 0, right = removable.length;

        while (left < right) {
            int middle = (right + left + 1) / 2;
            String afterRemoval = remove(s, removable, middle);
            if (isSubsequence(p, afterRemoval, p.length(), afterRemoval.length()))
                left = middle;
            else
                right = middle - 1;
        }

        return left;
    }

    private String remove(String s, int[] removable, int k) {
        char[] symbols = s.toCharArray();
        for (int i = 0; i < k; i++) {
            symbols[removable[i]] = Character.MIN_VALUE;
        }
        return String.valueOf(symbols);
    }

    private boolean isSubsequence(String subSequence, String word, int subSequenceChar, int wordChar) {
        if (subSequenceChar == 0) return true;
        if (wordChar == 0) return false;

        if (subSequence.charAt(subSequenceChar - 1) == word.charAt(wordChar - 1))
            return isSubsequence(subSequence, word, subSequenceChar - 1, wordChar - 1);

        return isSubsequence(subSequence, word, subSequenceChar, wordChar - 1);
    }
}
```

***JavaScript***
```
var maximumRemovals = function(s, p, removable) {
    let arr = s.split('');
    
    const stillFunctions = (k) => {
        let result = [...arr];
        for(let i = 0; i < k; i++) {
            result[removable[i]] = '';
        }

        const isSubset = () => {
            let idx = 0;
            for(let c = 0; c < p.length; c++) {
                if(idx > result.length) return false;
                const next = result.indexOf(p[c], idx);
                if(next === -1) {
                    return false;
                }
                idx = next + 1;
            }
            return true;
        }
        
        return isSubset();
    }

    let left = 0;
    let right = removable.length;
    
    while(left < right) {
        // Need to round up the midpoint since we are returning operation LENGTH i.e. ops+1
        const mid = Math.ceil((left+right) / 2);
        if(!stillFunctions(mid)) {
            right = mid -1;
        } else {
            left = mid;
        }
    }
    return left;
};
```

***C++***
```
class Solution {
public:
    bool isSubSequence(string str1, string str2){
        int j = 0,m=str1.size(),n=str2.size();
        for (int i = 0; i < n && j < m; i++)
            if (str1[j] == str2[i])
                j++;
        return (j == m);
    }
    int maximumRemovals(string s, string p, vector<int>& removable) {
        string copy=s;
        int left = 0, right =removable.size();
        while (left <= right) {
            int mid = (left+right)/2;
            for(int i=0;i<mid;i++) copy[removable[i]]='*';
            if (isSubSequence(p,copy))
			 //if p is subsequence of string after mid number of removals then we should look for if it's possible to remove more characters 
                left = mid+1;
            else {
			//if p is not a subsequence of string it means that we have certainly removed more characters from string 
			//so we must decrease our size of removal characters and hence we  add all characters we removed earlier.
                for(int i=0;i<mid;i++) copy[removable[i]] = s[removable[i]];
                right = mid-1;
            }
        }
        return right;
    }
};
```

***Python***
```
class Solution:
    def maximumRemovals(self, s: str, p: str, removable: List[int]) -> int:
        l, r = 0, len(removable)
        ls, lp = len(s), len(p)
        
        while l < r:
            m = (l + r + 1) >> 1
            d = set(removable[:m])
            i, j = 0, 0
            while i < ls and j < lp:
                if i not in d:
                    if s[i] == p[j]:
                        j += 1
                i += 1
            
            if j == lp:
                l = m
            else:
                r = m - 1
        return r
        
```

***Kotlin***
```
class Solution {
    fun maximumRemovals(s: String, p: String, removable: IntArray): Int {
        val n = p.length
        val total = removable.size
        
        fun isSubSeq(till: Int): Boolean {
            var j = 0
            val removed = HashSet<Int>() // store all the first 'k' indices
            for (i in 0 until till) 
                removed.add(removable[i])
            for (i in s.indices) {
                if (removed.contains(i)) continue // value at 'i' is removed
                if (j == n) return true // p is fully matched already
                if (s[i] == p[j]) j++
            }
            return j == n
        }
      
        var (low, high) = 0 to total
        while (low < high) {
            val mid = (low + high + 1) / 2
            if (isSubSeq(mid))
                low = mid
            else
                high = mid - 1
        }
        return low
    }
}
```

***Swift***
```
class Solution {
    func maximumRemovals(_ s: String, _ p: String, _ removable: [Int]) -> Int {
        guard p.count < s.count else { return 0 }
        let s = Array(s), p = Array(p), sn = s.count, pn = p.count

        func isSubsequence(_ k: Int) -> Bool {
            guard k > 0 else { return true }
            let removable = removable[0..<k].reduce(into: [Bool](repeating: false, count: sn), { $0[$1] = true })
            var si = 0
            forpi: for pi in 0..<pn {
                while si < sn {
                    si += 1
                    if !removable[si - 1] && s[si - 1] == p[pi] {
                        continue forpi
                    }
                }
                return false
            }
            return true
        }

        var left = 0, right = removable.count
        while left < right {
            let center = (left + right + 1) / 2
            if isSubsequence(center) {
                left = center
            } else {
                right = center - 1
            }
        }
        return left
    }
}
```

***Consider upvote if useful! Hopefully it can be used in your advantage!***
***Take care brother, peace, love!***