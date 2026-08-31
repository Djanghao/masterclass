# C++ Recursion AND Iteration AND O(1) approaches. FAST SOLUTIONS

**Author:** Krypto2_0
**Votes:** 553
**Link:** [https://leetcode.com/problems/add-digits/solutions/1754040/](https://leetcode.com/problems/add-digits/solutions/1754040/)

---

There are different ways to solve this problem . This problem is pretty straight forward , so in the **BRUTE FORCE** approach , you simply have to **implement what has been asked** in the question. 
You can do that using both **RECURSION and ITERATION**. 

Following are the codes : 

#### RECURSION : 
```
class Solution {
public:
    int addDigits(int num) {
      int sum=0;
        while(num)
        {
            sum+=(num%10);
            num/=10;
        }
        if(sum<10)
            return sum;
        else
            return addDigits(sum);
    }
};
```

#### ITERATION : 
```
class Solution {
public:
    int addDigits(int num) {
      int sum=0;
        while(num>9)
        {
            while(num)
            {
                sum+=(num%10);
                num/=10;
            }
            num=sum;
            sum=0;
        }
        return num;
    }
};
```

#### O(1) APPROACH : 
Honestly , I couldn't come up with this approach on my own. So, I read a few solutions in the discuss section. They didn't explain the approach or the reason behind why it worked . So I have thought an ***explanation*** myself. The ***explanation*** might be incorrect ,( I doubt it though) , but the approach is correct. 

The O(1) approach says :
1. Check if the number is 0 or not . If num==0 , return 0. Else do the following. 
2. Check if (num%9)==0 . If it is true , return 9. Else return (num%9).

This is the answer. 

#### 			CODE : 
```
class Solution {
public:
    int addDigits(int num) {
      if(num==0)
          return 0;
      else if(num%9==0)
          return 9;
      else
          return num%9;
    }
};
```
The logic behind this approach , I think is related to the divisibility test of 9. 
If you don't know then , "To check if a number is divisible by 9, add the digits of the number and check if the sum is divisible by 9 or not. If yes , is the case , then the number is divisible by 9 , otherwise it's not ."
Now if you notice if a number is divisible by 9(and 3) , then if we follow the procedure as mention in the question (sum of digits of every previous num) , we would always find the new_num(the sum of the digits ) to be divisible by 9(and 3).

{
	sum=addDigits(num);
	if num%9==0 , then sum%9==0 too.
	Now, num=sum;
	Since sum%9=0 , so , 
	sum=addDigits(sum) %9 =0 
}

But , if the number is not divisible by 9 , if you continue to evaluate the sum of digits , the sum generated will be a number which when divided by 9 will generate the same remainder as it would have if we wold have divided num. So , if we see , then the remainder of num , doesn't change with sum of digits. 

#### UPDATE : The O(1) approach method is called Digit Root. Check it out. 

I KNOW THE ABOVE EXPLAINATION IS A BIT TOO LENGTHY AND HAZY , BUT IF YOU UNDERSTOOD IT AND FOUND IT HELPFUL , PLEASE UPVOTE.