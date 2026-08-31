# let's understand remainder concept, with added YouTube video

**Author:** vinod_aka_veenu
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854407/](https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/solutions/5854407/)

---

# Youtube solution https://youtu.be/QT87QKgA2kc
# Intuition and Approach
before explaining any thing lets play with some numbers

**what?? are you here to play games?**
hahaha no, just say i have integer **3** and k=**7** need to find another number so that sum of 3 and other number is divisible by 7.

**what is so special in this? numbers like 4, 11, 18 ....**
yeah, nothing special but did you observe one thing, all numbers that you mentioned has one common thing 
our Integer = 3 ==> **3%7** = 3
**4%7 = 4, 11%7 = 4, 18%7 =4**

====> **any two numbers sum would be divisible by k if the remainders sum of these number also divisible by k**

so i can say now :- **(a+b)%k ==> (a%k + b%k)%k** 
                    (3 + 4)%7 ==> (3%7 + 4%7)%7 => (3+4)%7 =0


**But But wait a min bro, what if a = -3, b = 4 and k = 7 ?**

**your formulae will not work?**

good point, so we can do one thing whenever we are finding the remainder of number i would add the k in the value like this

(a%k + k)%k ==> (-3%7 + 7)%7 => (-3 + 7)%7 = **4**

now to make a valid pair we need a number(+ve or -ve) that have remainder as **3** with number 7

numbers like -11 the remainder = (-11%7 + 7)%7 => (-4+7)%7 = 3%7 => 3

so number a = 3, and b = -11 ===> **a valid pair** 
          a = 3   and b = 18 ===> **a valid pair** 

so to get remainder of any number **a**, +ve or -ve with k

**rem = (a%k + k)%k**

**ok, got it so explain the approach now?**

sure , so you observed if we get mod of the numbers in an array then we should have an equal numbers of integers in the array that makes **k-mod** as remainders 

**explain more granular way?**

sure so lets say we have arr[] = {3, 4, -11, 18}, k = 7

mod(3) => (3%7 + 7)%7 = (3+7)%7 = 3
mod(4) => (4%7+7)%7 = (4 + 7)%7 = 4
mod(-11)=> (-11%7 + 7)%7 => (-4+7)%7 = 3%7 = 3
mod(18) => (18%7+7)%7 => (4 + 7)%7 = 4 

now you can observe mod 3 appeared 2 times
                    mod 4 appeard 2 times
that means a **mod and (k-mod) should appear equal number of times** then only a valid pairs can be formed.

**But wait a min bro, what if my numbers arr[] = {5, 10, 20, 30, 7, 3} and k = 10**

here mod(3) = 3, mod(7) = 7 so for 3 and 7 your logic is fine as mod and (k-mod) appeared equal number of time.

but what about others , they all having mod valiue = 0.?

**great point, to handle the zero mod value, we will count the mod frequency and look if they appeared even number of times then it would valid otherwise invalid**

like this {10, 20, 30} = > mod = 0 with k = 10 for all,  but appeaared odd times so we can not have a valid answer.

but if {10, 20, 30, 40} => mod is 0 but apeared 4 times = even = valid

**got it so how about further??**

simple , run a loop and create mod of all numbers with below formulae
**rem = (a%k + k)%k** , we are adding k , because need to handle negative cases, store the frequencies in **hashmap**

then again traverse once more and generate mod and look at the frequencies of mod and k-mod if they are uneuqal return false immediatly.

also if mod = 0 , then freq of 0 should be even if its odd return false immediatly.

**very simple, still have problems, will release youtube video soon**















# Complexity
- Time complexity:
O(n)



# Code
```java []
class Solution {
    public boolean canArrange(int[] arr, int k) {
    HashMap<Integer, Integer> hm = new HashMap<>();
    int n = arr.length/2;
    for(int x : arr)
    {
      int i = (x%k+k)%k;
      hm.put(i, hm.getOrDefault(i, 0)+1);   
    }
    for(int x : arr)
    {
       int i = (x%k+k)%k;
       if(i==0)
       {
         if(hm.get(i)%2==1)
         return false;
         continue;
       }
       Integer p = hm.get(i) ; 
       Integer q = hm.get(k-i);
       if(!Objects.equals(p, q))
       return false;   
    }

    return true;

    }
}
```