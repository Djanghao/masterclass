# Easy and Intuitive Python Solution With Images and Walkthrough

**Author:** danielkua
**Votes:** 35
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/1948127/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/solutions/1948127/)

---

## Hi guys, I hope my post can help you in understanding this problem. ##

### First, we need to understand what is the "**balanced**" scenario. There are 3 types of balanced scenario as shown below: ###
<img src = "https://assets.leetcode.com/users/images/cd21075c-57a8-46b0-bd0e-911d7e13e3b1_1649990481.5305083.png" width = "700" height = "250"> 

### This is the "**worst**" scenario where everything is not in order: ###
<img src = "https://assets.leetcode.com/users/images/6d0b6637-419a-4c6d-a0ad-8f9fbd8496bc_1649990610.3125339.png" width = "600" height = "200">

### This is the half-good half bad scenario. Some brackets are balanced, some are not. The highlighted brackets are balanced. ###
<img src = "https://assets.leetcode.com/users/images/38fbb1f8-f14e-49bd-bf6c-b38ddbf3d80b_1649990736.5708444.png" width = "700" height = "300">

### Note that the following is a **NON**-efficient way in swapping. We are swapping more than needed. We are swapping 4 times in this case. ### 
<img src = "https://assets.leetcode.com/users/images/fa8c4ba5-8cb0-46d3-8031-109aa7f690e5_1649991599.0594234.png" width = "700" height = "300"> )

### The most efficient way to swap the brackets to become balanced is by using the following trick. We only swap 2 times in this case. Swap brackets 3 and 6 followed with 1 and 8. Note that this is for even numbers of pairs of unbalanced brackets. In this case, we have 4 pairs of unbalanced brackets which is an even numbers of pairs of unbalanced brackets. ###
<img src = "https://assets.leetcode.com/users/images/b119c713-0bac-428c-9586-95d5b6351294_1649991848.5251782.png" width = "700" height = "250" >

### Question: What if we have an odd number of pairs of unbalanced brackets? How many times do we need to switch? Is it  the same as even number of unbalanced brackets? In the image below, we have 3 pairs of unbalanced brackets which is an odd pair. ###
<img src = "https://assets.leetcode.com/users/images/9809a53a-5b93-4496-879c-f568a90b353d_1649992024.3351176.png" width = "700" height = "100">

<img src = "https://assets.leetcode.com/users/images/8c99ca9b-57ed-4ddc-ad08-2cfad70d15fa_1649992325.9850376.png" width = "700" height = "250">

### We can have other methods to switch the brackets to make it balanced. To find the minimum number of swaps to make the string balanced, we have to use the most effective swapping technique which is shown in the image below. In this case we need to switch 2 times. You can try out other possible methods to check it yourself.
<img src = "https://assets.leetcode.com/users/images/2d6c9d51-e8b9-40c7-b597-0e638b2f441a_1649992386.3647358.png" width = "700" height = "250">

### Notice!!! We can ignore balanced brackets in the middle of the given string if there is any! For example, take a look at the image below. ###

<img src="https://assets.leetcode.com/users/images/209111b1-2f2a-4c8d-8380-665c6f38ed24_1649993867.3050117.png" width = "700" height = "300">


### After cancelling the highlighted part, we are left with the simple case of either odd pairs of unbalanced brackets or an even case of unbalanced brackets. ###

### In conclusion, for both even number or odd number of unbalanced brackets, the minimum swaps needed is (n + 1) // 2 since that is the most efficient way to perform the minimum number of swaps. The (n + 1) is used to account for the odd case. For example, in the previous example, we have 3 odd pairs of brackets so minimum number of swaps needed = (3 + 1) // 2 = 2. 


### 
### Question: How do we know whether a string is balanced or not? We can use a counter to keep track of the number of opening " [ " and number 
### of " ] " bracket. Whenever we encounter " [ " we will add one to our counter and we will only decrement the counter if and only if the counter is positive and the current bracket is a closing one (" ] " ). 

### ...
### ...
### ...

###  Why? Let's take a look at the image below!
<img src = "https://assets.leetcode.com/users/images/9e94ae78-20b2-4afd-951f-b0a13b0a8b82_1649994288.6538506.png" width = "700" height = "150">

### For this normal case, the result will be zero after we reached the end of the string. The steps would be +1 + 1 -1 + 1 - 1 - 1 = 0

### Special case !!! ###
<img src = "https://assets.leetcode.com/users/images/937ba7ed-93b6-4c85-9197-397fe939a26a_1649994520.1879165.png" width = "700" height = "150">

### The image above will result in a count of 0 ( -1 + 1 -1 + 1). Does it mean it is balanced? No, it is not. To tackle this special case, we will increase the counter value by one if and only if it is an opening bracket (" [ " ) and decrease the counter value by one if and only if it is a closing bracket  ("  ] " ) and the counter is positive. Reason? This is because we are finding the number of unbalanced pairs of brackets. Whenever we encounter an opening bracket, there must be a closing bracket waiting after the opening bracket to make it balanced. So for the case like the one in the image here: 

<img src = "https://assets.leetcode.com/users/images/937ba7ed-93b6-4c85-9197-397fe939a26a_1649994520.1879165.png" width = "700" height = "150">

### We will skip through the first bracket and do nothing to our counter even if it is a closing one and move to the next bracket. The reason we are allowed to skip this bracket is although we know that it is an unbalanced bracket is because we always know that there is an extra opening bracket waiting for this closing bracket somewhere in the future that makes this pair an unbalanced one. We can increment the counter when we find this leftover opening bracket later in the string afterwards. ###

#  Detailed walkthrough of the changes in counter value: 
### Step 1: 
### We will not decrement our counter since counter is initially zero. Move to the next bracket.
### Step 2:
### It is an opening bracket so add one to our counter. This is because this signifies a possibility of an (one) unbalanced bracket. Now, counter = 1. Move to the next bracket.
### Step 3:
### It is a closing bracket and since counter is greater than zero, we can decrease our counter value. We found a matching pair so it is logical and reasonable to decrement our value by one to indicate that the possibility of an (one) unbalanced bracket has decrease by one. Move to the next bracket.
### Step 4:
### It is an opening bracket so increase counter value by one. Now here, counter = 1 and the loops stop.  ### That means We  found one pair of unbalanced bracket and well where does this come from? This is a result of the mismatched( unbalanced bracket we encounter at start remember???) Hence, that is the reason why we do not need to decrease the counter at step one. The fact is we will always find a pair of opening bracket and opening bracket. If the counter is not positive and we encounter a closing bracket, we will skip it and not decrement the counter and move on and we know that we will find its counter (opening bracket in the future) and we can add one to the counter later on in the future.


```
class Solution:
    def minSwaps(self, s: str) -> int:
        count = 0
        for i in s:
            if i == "[":
                count += 1  # increment only if we encounter an open bracket. 
            else:
                if count > 0:  #decrement only if count is positive. Else do nothing and move on. This is because for the case " ] [ [ ] " we do not need to in
                    count -= 1
        return (count + 1) // 2
       
```








