# C++ || O(n) Time, O(1) Space || Full Explanation

**Author:** TlTAN
**Votes:** 896
**Link:** [https://leetcode.com/problems/candy/solutions/2234434/](https://leetcode.com/problems/candy/solutions/2234434/)

---

***Upvote if Found Helpful***

**Alternate O(n) Space Approach :**

We can easily calculate the number of candy needed by using an array to store the candy of each child. And after that traverse the rating array twice. The first loop makes sure children with a higher rating get more candy than its left neighbor, the second loop makes sure children with a higher rating get more candy than its right neighbor. At last add the total number of candies. This approach is O(n) time and O(n) space. This type of solutions are available in other posts.

# **O(1) Space Approach :**

We can consider this problem like valley and peak problem. In each valley there should be 1 candy and for each increasing solpe in either side we need to increse candy by 1. Peaks have highest candy. If any equal rating is found then candy resets to 1 as two equal neighbours may have any number of candies. The peak should contain the higher number of candy between which is calculated from the incresing slope and which is calculated from decreasing slope. Because this will satisfy the condition that peak element is having more candies than its neighbours. 

***Example :***

```
Let take the Rating as : [1,3,6,8,9,5,3,6,8,5,4,2,2,3,7,7,9,8,6,6,6,4,2]

Each child represented as rating(candy he is given)
Peak = max(peak, valley)

See when peak is encountered we take max of the peak calculated from left and valley calculated from right.
When we get any equal element it gets reset to 1 candy or if it is peak we take max(0, right valley)

           (5)         (4)                         (3)
            9           8                           9
           /|\\         /|\\                         /|\\
          / | \\       / | \\                (3)    / | \\
      (4)8  |  5(2)  6  |  5(3)             7 __ 7  |  8(2)
        /   |   \\   (2) |   \\              /|   (1) |   \\
       /    |    \\ /    |    \\            / |    |  |    \\         (3)
   (3)6     |     3     |     4(2)       3(2)    |  |     6 __ 6 __ 6    -> Total candy = 50
     /      |    (1)    |      \\        /   | Reset |    (1)  (1)   |\\
    /       |           |       \\      /    |  to 1 |          |    | \\
(2)3        |           |        2 __ 2     |       |          |    |  4(2)
  /         |           |       (1)  (1)    |       |        Reset  |   \\
 /          |           |                   |       |         to 1  |    \\
1(1)        |           |                   |       |               |     2(1)
   Peak= max(5,3)  Peak= max(3,4)    Peak= max(3,0) |         Peak= max(0,3)
                                               Peak= max(2,3)   
```

**Implementation :**

* So we take initially n candy for n children. Then we start traversing the rating array from the second element. If we find equal elements we continue to next element as they already have 1 candy.

* If an increasing slop is found `(ratings[i] > ratings [i-1])` we increase value of peak and and add the peak value to candy. After each iteration new peak is found and the value is added to candy. In this way we also get the value of minimum height of the peak at the end.

* If a decreasing slope is found `(ratings[i] < ratings [i-1])` we calculate the depth of the valley which is in turn the minimum height of the previous peak. In each iteration we increse the valley by 1 and add it to the candy. You can visualise it as 1 candy is added to each of the previous members untill peak or the new peak value is interted at the previous peak and other values are shifted to right by 1 place. We also need to check if it is going out of array if so then return the number of candy.

* After this we can see we have added the peak value twice in candy once as peak and once as valley. But we need only the max value out of these two so we substract the `min(peak, valley)` from candy. 

* After that return the candy.

**Note :** We have considered the sequence increasing -> decreasing as peak should have the max value between the height of left (increasing) side and height of right (decreasing) side. In case of decresing -> increasing we dont need to give special attention as the vallley will always have 1 candy and in our code in this case peak will have 0 value so nothing will be substracted from the candy in the end of iteration.

See the example for better understanding :

```
In our code we increase the peak and add peak value untill we get the minimum actual peak.
In case of the decreasing part take this example.

[7,5,3,2], initial candy = 4, In each iteration valley++ and candy += valley

7 starting (valley = 0, candy = 4, candy configuaration  = [1,1,1,1])
 \\
  5 (valley = 1, candy = 4+1 = 5, candy configuaration  = [2,1,1,1])
   \\
    3 (valley = 2, candy = 5+2 = 7, candy configuaration = [3,2,1,1])
     \\
      2 [valley = 3, candy = 7+3 = 10, candy configuartion = [4,3,2,1])
	  
Here see the valley is at last equal to the minimum previous peak value.

As we have given 1 candy to all before so the peak and valley values are actually 1 less than the actual candy they should get.
```

**Code :**

```
class Solution {
public:
    int candy(vector<int>& ratings) {
        int n = ratings.size();
        int candy = n, i=1;
        while(i<n){
            if(ratings[i] == ratings[i-1]){
                i++;
                continue;
            }
            
            //For increasing slope
            int peak = 0;
            while(ratings[i] > ratings [i-1]){
                peak++;
                candy += peak;
                i++;
                if(i == n) return candy;
            }
            
            //For decreasing slope
            int valley = 0;
            while(i<n && ratings[i] < ratings[i-1]){
                valley++;
                candy += valley;
                i++;
            }
            candy -= min(peak, valley); //Keep only the higher peak
        }
        return candy;
    }
};
```