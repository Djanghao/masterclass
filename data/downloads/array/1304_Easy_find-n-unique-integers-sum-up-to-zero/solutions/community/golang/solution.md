# Solution faster all

**Author:** Azizjon003
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3424713/](https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/solutions/3424713/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:100%
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:55%
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```Go []
func sumZero(n int) []int {
    answer := make([]int, n)
    x := n / 2
    if n%2 == 0 {
        answer[n-1] = 0
    }
    for i := 1; i <= x; i++ {
        answer[i-1] = -i
        answer[i-1+x] = i
    }
    return answer
}
```
```Javascript []
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  let answer = new Array(n).fill(0)
  
  var x
  if(n%2 ==0){
       x=Math.floor(n/2);
        answer[n-1]=0;  
  }  else{
      x=Math.floor((n-1)/2);  
  }
    for(let i=1;i<=x;i++){    
              answer[i-1]=-1*i;          
              answer[i-1+x]=i;
        }
      return answer; 
};
```

