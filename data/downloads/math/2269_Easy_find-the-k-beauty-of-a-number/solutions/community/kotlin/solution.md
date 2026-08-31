# Kotlin Solution

**Author:** KunikaValecha
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2838833/](https://leetcode.com/problems/find-the-k-beauty-of-a-number/solutions/2838833/)

---

```
fun divisorSubstrings(num: Int, k: Int): Int {
            var input = num.toString()
            var i =0
            var j =0
            var inputInt =0
            var count = 0

            while(j<input.length){
                if(j<k-1){
                    j++
                }
                else if(j-i+1==k){
                    inputInt = (input.substring(i,j+1)).toInt()
                    if(inputInt!=0){
                        if(num%inputInt==0)
                            count++
                    }
                    i++
                    j++
                }
            }
            return count

        }
```