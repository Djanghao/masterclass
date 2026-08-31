# Simple solution with straightforward logic

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/lemonade-change/solutions/5830682/](https://leetcode.com/problems/lemonade-change/solutions/5830682/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```typescript []
function lemonadeChange(bills: number[]): boolean {

    let count5 :number  = 0;
    let count10:number  = 0;
    let count20:number  = 0;

    for(const num of bills){

        if(num === 5){
            count5++
        }else if(num === 10){

            count10++;
            count5--;

        }else{

            count20++;

            //if we have count10 is 0 and we have count 5 is more than 0 . then we can 5*3 = 15 as   balance
            if(count10 <= 0){ 
                 
                count5 -= 3
            }else{

                count10--;
                count5--; 
            }
           
        }

        if(count5 < 0 || count10 < 0 || count20 < 0 ) return false
    }

    return true
    
};
```