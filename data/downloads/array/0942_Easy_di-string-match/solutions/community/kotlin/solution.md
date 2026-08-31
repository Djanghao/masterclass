# Kotlin 2 options - obvious (on the forehead) and fast (in one pass)

**Author:** sav20011962
**Votes:** 1
**Link:** [https://leetcode.com/problems/di-string-match/solutions/3453912/](https://leetcode.com/problems/di-string-match/solutions/3453912/)

---

# Intuition
I managed to find 2 solutions, both pass the tests. The first one is obvious and understandable:
1) we fill the array sequentially, along the way we change pairs along the matrix
2) The While loop has at least one replacement so far. Inside the FOR loop with replacements of pairs according to the matrix.

The second is not obvious in one pass with two pointers, which are automatically in the process - one increases, the second decreases.

# Approach
I don't know the names of methods (algorithms).
One "on the forehead", the second one-pass with two pointers.

# Complexity
- Time complexity:
1) O(n)
2) O(n+n*n)

- Space complexity:
O(n)

# Code
```
class Solution {
    fun diStringMatch(s: String): IntArray {
        val len = s.length
        val rez = IntArray(len+1,{0})
        var ind = true
        for (i in 0..len-1) {
            if (s[i]=='D') {
// added (i+1)                
                rez[i+1] = rez[i]
                rez[i]=i+1
                ind = false
            }
            else {
                rez[i+1]=i+1
            }
        }
        while (!ind) {
            ind=true
            for (i in len-1 downTo 0) {
                if (s[i]=='D') {
                    if (rez[i+1] > rez[i]) {
// replacement                        
                        val tmp = rez[i]
                        rez[i]= rez[i+1]
                        rez[i+1]= tmp
                        ind = false
                    }
                }
                else {
                    if (rez[i+1] < rez[i]) {
// replacement                        
                        val tmp = rez[i]
                        rez[i]= rez[i+1]
                        rez[i+1]= tmp
                        ind = false
                    }
                }
            }
            
        }
        return rez
    }
}
class Solution {
    fun diStringMatch(s: String): IntArray {

// quick option in 1 pass
        val n = s.length
        val arr = IntArray(n+1)
        var low = 0
        var high = n
        for (i in 0..n-1) {
            if (s[i] == 'I') {
                arr[i] = low
                low +=1
            } else {
                arr[i] = high
                high -=1
            }
        }

        arr[n] = low

        return arr    
    }
}
