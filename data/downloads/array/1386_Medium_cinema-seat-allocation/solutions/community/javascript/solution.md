# [Javascript] 3 Different Approaches EXPLAINED 100%

**Author:** George_Chrysochoou
**Votes:** 4
**Link:** [https://leetcode.com/problems/cinema-seat-allocation/solutions/546684/](https://leetcode.com/problems/cinema-seat-allocation/solutions/546684/)

---

Ok so this problem has edge cases which test the memory used and result in SLE with O(n) solutions.

First a naive bitwise solution. 
**TLDR**: Initialize each row with the bit representation of every seat as available( all ones ). Map each row to its bitwise representation ( 0 for taken seat and  1 for available). There is a total of 3 positionings of 4 consecutive seats available. Namely:
**011 1100 000**
**000 0011 110**
**000 1111 000**
So I will bitwise AND the above masks with any bitwise representation of a row and if the result is the mask itself, then the respective positioning is possible. Although the frequency memo is reduntant, I created a frequency memo for repeating masks to avoid recomputing masks. 

```
//Bitwise O(n) O(n) 48/53 SLE / space limit exceeded
var maxNumberOfFamilies = function(n, reservedSeats) {
    
    var seats=[...Array(n)].map(d=>(1<<10)-1)
  
    for (const [i,j] of reservedSeats) {
        seats[i-1]^=(1<<j-1)
    }

    let freq={}
    for (const num of seats) {
        freq[num]=(freq[num]||0) +1
    }

    let m1=parseInt('0111100000',2)
    let m2=parseInt('0000011110',2)
    let m3=parseInt('0001111000',2)
    let result=0
    for (let [mask,v] of Object.entries(freq)) {
        result+=Math.max(Number((m3&mask)===m3),Number((m2&mask)===m2)+Number((m1&mask)===m1))*v
    }

    return result
};
```

**However**, I can give up some runtime for space. If I sort my reservedSeats in ascending row, the elements of the same row will be next to each other. So I can create the bitwise representation of the row on the spot. I however need to keep track of the number of the row I'm at, incase there are some **MISSING ROWS**. A missing row automatically gets the maximum number of placings possible, and that would be 2.

```
// O(nlogn) runtime O(1) space PASSES
var maxNumberOfFamilies = function(n, reservedSeats) {
    
    reservedSeats.sort((a,b)=>a[0]-b[0])

    let mask=(1<<10)-1
    let m1=parseInt('0111100000',2), m2=parseInt('0000011110',2), m3=parseInt('0001111000',2)

    let UpdateResult=mask=>Math.max(Number((m3&mask)===m3),Number((m2&mask)===m2)+Number((m1&mask)===m1))
  
    let currRow=0,result=-2

    for (let [i,j] of reservedSeats) {
        
        if(currRow!==i){
            if(i!=currRow+1) result+=(i-currRow-1)*2 //a missing row gives me 2 placings 
            result+=UpdateResult(mask)
            currRow=i
            mask=(1<<10)-1
        }
        
        mask^=(1<<j-1) // flip the j-1th bit from 1 to 0 representing an unavailable seat

    }
    //resultsofar + last examined row contribution + the number of seats MISSING rows give me 
    return result+UpdateResult(mask)+(n-currRow)*2
};
```
Although a tad more verbose, I dont need to compute the mask of a row to determien the maximum number of placings,. 
As we've said before only 3 placings are available. If any taken seat of said placings is invalidated, that meas the placing is impossible. Knowing that, i create 3 integers, L, M, R corresponding to the LEFT, MID  and RIGHT placings, with a higher value of 1 each. As i traverse my reserved Seats I will reduce their costs to 0 if any one of their seats is taken. When the number of row changes, I will compute what the previous row contributed to the result as Max(MID,LEFT+RIGHT) (because I always prefer taking LEFT and RIGHT  placings if they re both available. 

```
// Sort() O( NLOGN) runtime O(1) space
var maxNumberOfFamilies = function(n, reservedSeats) {
    
    reservedSeats.sort((a,b)=>a[0]-b[0])
    let l=1,m=1,r=1
    let currRow=0
    let result=-2
    for (let [i,j] of reservedSeats) {
        if(currRow!==i){
            if(i!=currRow+1) result+=(i-currRow-1)*2
            result+=Math.max(m,r+l)
            currRow=i
            l=1
            r=1
            m=1
        }
        
        if(j==2||j==3)l=0

        if(j==4||j==5){
            l=0
            m=0
        }
        if(j==6||j==7){
            m=0
            r=0
        }

        if(j==8||j==9)r=0

    }

    return result+Math.max(m,r+l)+(n-currRow)*2
};
```


