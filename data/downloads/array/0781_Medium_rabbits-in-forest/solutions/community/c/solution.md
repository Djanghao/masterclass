# C++ O(n) solution with Detailed Explanation | Hashmaps

**Author:** im_shreyshah
**Votes:** 10
**Link:** [https://leetcode.com/problems/rabbits-in-forest/solutions/1371564/](https://leetcode.com/problems/rabbits-in-forest/solutions/1371564/)

---

# Explanation
Let's talk about two rabbits, rabbit[i] and rabbit[j]. 
Rabbit[i] says that there are X number of rabbits with the same color as him, and rabbit[j] says that there are Y number of rabbits with the same color as him.

**Case 1 - X!=Y** 
In this  case, it is pretty straightforward that both of the rabbits are of not the same color, as otherwise we would get an inconsistency. Think about it, if array was like [2,3], rabbit[i] is saying that there are 2 rabbits as same color as him, and rabbit[j] is saying that there are 3 rabbits with same color as him. Obviously both of them are not having the same color. 

In this case, we will add (1+2) + (1+3) to our count, (1 for the rabbit[i] to which we were talking, and +2 for the rabbits as same color as him. 1 for the rabbit[j] to which we were talking, and +3 for the rabbits as same color as him. ).

**Case 2 - X==Y**

In this case, we will assign both of them the same color, for the sake of getting the minimum number of rabbits.
For example, if the array was like [1,1], we will assume that both rabbits are of the same color (let's say red). 
Hence we will add 2 to our count, (1 for the rabbit to which we were talking, and +1 for the rabbits as same color as him).
Similarly if our array was like [2,2], we will add 3 to our count, (1 for the rabbit to which we were talking, and +2 for the rabbits as same color as him).

**But there is more to it**
Let's take the example of the array [1,1,1]. Here we can have the first 2 rabbits of the same color, but the third rabbit could not be of the same color. Otherwise there would be some incosistency. 
Let me show you some pattern.
[1] - Add 2 to the count. (1 color sufficient)
[1,1]  - Add 2 to the count.  (1 color sufficient)
[1,1,1] - Add 4 to the count. (2 colors sufficient)
[1,1,1,1] - Add 4 to the count. (2 colors sufficient)
[1,1,1,1,1] - Add 6 to the count. (3 colors sufficient)
[1,1,1,1,1,1] - Add 6 to the count. (3 colors sufficient)

Generalising the result, if we have an array like [i,i,i,i..], we have **upto i+1 elements that can possibly have the same color and talk about each other** (Like for i=1, we have upto 2 rabbits that can have same color, and that can talk about each other). Hence in our count, we will add something like:
```(1+i) * ceil((total count of i's)/(i+1)))```
The second term is for the number of colors that are sufficient, and the first term is about the number of monkeys of a particular color (1 for the rabbit to which we were talking, and +i for the rabbits as same color as him).

# Solution

We will maintain an unordered_map that will count the frequency of the elements. After that, we will traverse through each entry in our unordered_map and add to our count, based on the formua which we discussed above.

```
class Solution {
public:
    int numRabbits(vector<int>& answers) {
        int count=0;
        unordered_map<int,int> freq;
        
        for(int i=0;i<answers.size();i++){
		//If the frequency of same color rabbits is 0,
		//then we have a unique coloured rabbit and we will directly count it
            if(answers[i]==0) count++;
            else{
                freq[answers[i]]++;
            }
        }
        
        for(auto it:freq){
            count= count + (it.first+1)*ceil(((float)it.second/(it.first+1)));
        }
        
        return count;
    }
};
```