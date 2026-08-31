# faster than 100% -  Kotlin

**Author:** SharoneLev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/2772954/](https://leetcode.com/problems/maximum-score-from-removing-stones/solutions/2772954/)

---

```
fun  maximumScore(a: Int, b: Int, c: Int): Int {
     if(a+b == 0 || b+c == 0 || a+c == 0){ //game ended
          return 0
      }
    
     if(a>b)
      {	
          if(c>b)    
          	return maximumScore(a-1,b,c-1) + 1
      	//c<b
      return maximumScore(a-1,b-1,c) + 1
      }
      if(a>c)
      {
          return maximumScore(a-1,b-1,c) + 1
      }
//a<c
  	return maximumScore(a,b-1,c-1) + 1
}
```