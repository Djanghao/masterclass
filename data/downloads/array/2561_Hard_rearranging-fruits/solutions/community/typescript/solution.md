# Typescript Solution with explanation.

**Author:** pandey_suraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearranging-fruits/solutions/4701159/](https://leetcode.com/problems/rearranging-fruits/solutions/4701159/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Need to make two object then delete as we iterate from that value. Looks easy!! 

# Approach
<!-- Describe your approach to solving the problem. -->

Firstly make sum of Basket1 and Basket 2 in sum of (B1+B2) / 2 is even then we can go furthur if odd then return -1

Store the count of each basket 

Eg: 

    [4,2,1,2] => { 4:1, 2:2, 1:1}

After that I will make the sum of both the basket if the sum of two basket divide by 2 is even the we can divide it equally. If not  even then return -1

I am mainting 2 array to check which value I need to swap from

     B1 -> B2 and B2 -> B1.

Along with this I am check the minimum element from both Basket

     Min(B1) and Min(B2) -> Minimum(Min(B1), Min(B2))
After iteration when I will have 2 array I will make one basket value  in Descending order and one in Ascending Order. So that I will get minimum of A1 and A2. 

I will iterate it on index and check as 

    A =  Min(A1[0], A2[0])
    B = Minimum(Min(B1), Min(B2)) * 2

If (A > B) then we will add in total sum B*2 else we will add A in total

Example:- 

    A = [8,8,7,7,1] 
    B = [4,4,5,5,1]

Here we will get 

    A = 4,
    B = 1 => 1 * 2 => 2

Step 1: We will swap with minimum

    A = [8,8,7,7,4]
    B = [1,4,5,5,1]

Step 2 We will swap again 

    A = [1,8,7,7,4]
    B = [8,4,5,5,1]

For this reason we have taken B * 2

# Complexity
- Time complexity: O(n + m + p + nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->


- Space complexity: O(m + p + n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
# Code
```
function minCost(basket1: number[], basket2: number[]): number {

let obj1 = {}
let obj2 = {}
let sum1 = 0;
let sum2 = 0
let minumumSwap = 0.
let valueOfObj1 = []
let valueOfObj2 = []
let minimumNumber1 = basket1[0]
let minimumNumber2 = basket2[0]

for(let i = 0; i<= basket1.length -1; i++ ){
    if(minimumNumber1 > basket1[i]){
        minimumNumber1 = basket1[i]
    }
    if(!obj1[basket1[i]]){
        obj1[basket1[i]] = 1
    }else{
        obj1[basket1[i]] = obj1[basket1[i]] + 1
    }
    sum1 += basket1[i]
}

for(let i = 0; i<= basket2.length -1; i++ ){
      if(minimumNumber2 > basket2[i]){
        minimumNumber2 = basket2[i]
    }
    if(!obj2[basket2[i]]){
        obj2[basket2[i]] = 1
    }else{
        obj2[basket2[i]] = obj2[basket2[i]] + 1
    }
    sum2 += basket2[i]
}

if((sum1+sum2)%2 != 0){
    return -1
}

for(let [key,value] of Object.entries(obj1)){
    let totalSum = 0
    if(obj2[key]){
        totalSum = obj1[key] + obj2[key]
         let equalDivide = totalSum / 2
         let totalSwap = Math.abs(obj1[key] - equalDivide)
        if(obj2[key] > obj1[key]){
            for(let i = 1; i<= totalSwap; i++){
            valueOfObj2.push(Number(key))
            }
        }else if(obj1[key] > obj2[key]){
            for(let i = 1; i<= totalSwap; i++){
            valueOfObj1.push(Number(key))
            } 
        }
        delete obj2[key]
    }
    else{
        totalSum = obj1[key]
        let equalDivide = totalSum / 2
         let totalSwap = Math.abs(obj1[key] - equalDivide)
            for(let i = 1; i<= totalSwap; i++){
            valueOfObj1.push(Number(key))
            } 
    }

    if(totalSum %2 != 0){
        return -1
    }else{
        let equalDivide = totalSum / 2
        let totalSwap = Math.abs(obj1[key] - equalDivide)
        minumumSwap += totalSwap
    }
}
for(let [key,value] of Object.entries(obj2)){
    if(obj2[key]%2 != 0){
        return -1
    }else{
        let equalDivide = obj2[key] / 2
        let totalSwap = Math.abs(obj2[key] - equalDivide)
         for(let i = 1; i<= totalSwap; i++){
            valueOfObj2.push(Number(key))
        }
        minumumSwap += totalSwap
    }
}

let totalSum = 0
valueOfObj1.sort((a, b) => a - b);
valueOfObj2.sort((a, b) => b - a);
let leastValue = minimumNumber1 > minimumNumber2 ? minimumNumber2 : minimumNumber1
for(let i = 0; i <= valueOfObj1.length-1; i++){
    let min = Math.min(valueOfObj1[i], valueOfObj2[i])
    let minimumPath = leastValue *2
    if( min > minimumPath){
        totalSum += minimumPath
    }else{
    totalSum += min
    }
}
return totalSum
};
```