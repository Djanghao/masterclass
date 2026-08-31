# Kotlin - Explained

**Author:** 2pac_shakur
**Votes:** 1
**Link:** [https://leetcode.com/problems/pancake-sorting/solutions/725483/](https://leetcode.com/problems/pancake-sorting/solutions/725483/)

---

## How Selection sort works ?  
Keep on swapping largest element to end. 

```
Selection sort : 
---------------
Iterate from last index where i is the index.
	Find maxIndex m in i-1..0
	if (i != m) Swap arr[i] and arr[m] 
    /*
        1,  3,  2,  8,  5
                    m   i
        1,  3,  2,  5,  8
                    i
                    m
        1,  3,  2,  5,  8
            m   i
        1,  2,  3,  5,  8
            i
            m
        1,  2,  3,  5,  8
        i
        m
       [1,  2,  3,  5,  8]
    */
```

## Now apply the same principle, but do flip instead of swap.

```
Pancake sort :
-------------
Iterate from last index where i is the index.
	Find maxIndex m in i-1..0
	if (i != m) flip(m+1) and then flip(i+1)
/*
  k   1,  3,  2,  8,  5
                  m   i 
  4   8,  2,  3,  1,  5 - flips(m+1) so max is at 0
  5   5,  1,  3,  2,  8 - flips(i+1) so max is at ith index
      m           i
  4   2,  3,  1,  5,  8 - max is already at 0, so flips(i+1) so max is at ith index
          m
  2   3,  2,  1,  5,  8
  3   1,  2,  3,  5,  8
 */
```


```
    fun pancakeSort(arr: IntArray): List<Int> {
        val listOfKs = arrayListOf<Int>()
        for (i in arr.lastIndex downTo 1) {
            var max = arr[i]
            var maxIndex = i
            for (j in i - 1 downTo 0) {
                if (arr[j] > max) {
                    max = arr[j]
                    maxIndex = j
                }
            }
            if (maxIndex != i) {
                flip(arr, maxIndex + 1)
                flip(arr, i + 1)
                listOfKs.add(maxIndex + 1)
                listOfKs.add(i + 1)
            }
        }
        return listOfKs
    }


    private fun flip(arr: IntArray, k: Int) { // flips first k elements
        var i = 0
        while (i * 2 < k) {
            val temp = arr[k - i - 1]
            arr[k - i - 1] = arr[i]
            arr[i] = temp
            i++
        }
    }
```

For more idea, solve this from P_R_A_M_P : https://bit.ly/3e4JYyU