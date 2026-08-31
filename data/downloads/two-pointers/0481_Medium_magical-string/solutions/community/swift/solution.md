# Swift Solution Explained

**Author:** edgardowardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/magical-string/solutions/6116263/](https://leetcode.com/problems/magical-string/solutions/6116263/)

---

# Intuition
There is a lot of confusion in the problem desciption. The use of 1's and 2's is the biggest hurdle. Someone from discussion board said start with the string seed of "122". 

# Approach
So looking closely, this is a two pointer problem. The first pointer is the $$turn$$ which switches between 1 and 2. The second pointer is $$i$$ which points to the $$occurence$$ of that turn, or the number of times you write the $$turn$$. The other tricky bit is the initialisation of these values, because at the beginning there is nothing in the string. So we initialise $$turn$$ to 1, the array to [1,2,2] and $$i$$ is 2. This will generate the magic string specified from the description.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```swift []
class Solution {

    func magicalString(_ n: Int) -> Int {
        
        var turn = 1
        var count1 = 1
        var string = [1, 2, 2]
        var i = 2
        
        while string.count < n {

            let occurance = string[i]
            i += 1
            
            for j in 1 ... occurance {
                string.append(turn)
                            
                if turn == 1 {
                    count1 += 1
                }
                guard string.count < n else { break }
            }
            
            if turn == 1 {
                turn = 2
            } else {
                turn = 1
            }
        }
                
        return count1
    }   

}
```