# Interviewers expect Iterative approach, lets understand !!

**Author:** vinod_aka_veenu
**Votes:** 116
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/5813956/](https://leetcode.com/problems/lexicographical-numbers/solutions/5813956/)

---

# Youtube link https://youtu.be/S4d3JvvxBU8
# Intuition
as we know we want to get the sorted list of numbers less than the given numbers in lexicographical order.

**what do you mean by lexicographical here** ??

i mean if lets say n = 11 then sorted numbers would be =>  
{1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11}

but **if i ask you that convert them in form of string and then sort** it...then it would be like below :- 
**{1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9}**

so we need to sort them in this way.

**ok then how to generate them ?**

well so as you would have observed , we started with 1 and then all its associated values like 

1---> (1, 10, 11, 12, 13, 14 ....and so one)

but we need to take care that our number should not go greater than the n while generating those series..

**on so what is next ?**

next is we have to generate to  other numbers as well
like below => 
2 -->{2, 20, 21, 22, 23 ...so on }
3---> {3, 30, 31, 32, 33, ...so on}
.
.
.
** till we get equal to num...and thats it.**

**but string sorting takes O(n log n) , how would make it better?**

i am not using any sorting algorithm, i would do some jugaad.

**what is jugaad??**

i mean some logic we would make so that things would be sorted without using built in methods and in O(n).

**ok so tell me that logical jugaad?**

lets take n = 25 , lets say i have a list initially empty.
int curr = 1; 

for i=1 to i<=25 i++
// would add curr
{1, }
//now i have to add association of 1 , 10, 11 .....>
so to do that we have to multiply curr with 10 (curr=1 as of now)

curr = 1*10; 10 so its less than 25 so no problem, will go to loop

now we would add curr to list (curr = 10 now), now list like below

{1, 10, }

again we will multiply curr * 10 = 10 * 10 = 100 **But But** this is greater than 25 .

yes so we can not do that ....then what ?

no problem whenever this situation appear we will go to else part and increment the curr by 1

well so now curr = 10 + 1 = 11 ...will go to for loop again...
now our list would look like :- 

{1, 10, 11}

again curr*10 = 110 greater than 25...so again go to else part and keep on increatment them.

our list would be at times like below :- 
{1, 10, 12, 13, 14, 15, 16, 17, 18, 19} at this time our char = 19 and we would going below ...again curr = 10 * 19 = 190 > 25 so again will go to else part 

**BUT BUT bro your were saying we would keep on creament** curr by one so now you would make it curr = 19 + 1 = 20
 
**so you would add 20 to list , so where is 2 ? why why??**

wait a min i would be also checking in else part that whatever is my curr value does this curr is having **curr % 10 = 9**

with this help i will catch the values like 19, so when curr = 19
in else part **if(curr%10==9)** i will update the curr val so that it will converted to 

**curr = curr/10 ===> 19/10 ==> 1**  
and now again i will increase it so curr = curr + 1 = 2

and yes , i would keep on doing same thing.

**but wait a min, how would you print all those single digits like 3, 4, 5, 6, 7, 8, 9 ?** 

well when we would add the numbers till 25 , our curr = 26 , we will again check in while loop 26 >= 25 so curr = 26/10 = 2

now here i would also add a condition same if where we put curr%10==9
i will use OR curr>=n (25 in this case) we will make 

curr = curr/10; ===> 26/10 ===> 2 increment = 2+1 = 3 will go to for loop again ..... curr = 10*3 > 25, will go to else part, will increase it again ....

it would add 3, 4, 5, 6, 7, 8, 9

**Ok, so what is next value after adding 9?**

ohh, come one bro, our for loop is only runs 25 times...it would be done no more execcution.

our list would be like this:- 
**{1, 10, ....19, 2, 21, 22, 23, 24, 25, 3, 4, 5, 6, 7, 8, 9}**

**time complexity = O(n)**  
ok still have some doubt, no worries soon would update youtube video.

# Complexity
- Time complexity:
O(n)


# Code
```java []
class Solution {
    public List<Integer> lexicalOrder(int n) {
    List<Integer> al = new  ArrayList<>();
    int curr = 1; 
    for(int i=1; i<=n; i++)
    {
      al.add(curr);
      if(curr*10<=n)
      curr = curr*10;
      else
      {
        while(curr%10==9 || curr>=n)
        {
          curr = curr/10;   
        } 
        curr += 1;
      }
    } 
    return al;

    }
}
```