# C Solution (Bit Manipulation)

**Author:** akibr5
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5366872/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5366872/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
1. Iterate through all the numbers b/w a and b.
2. For each number, extract each digit and check if we have already seen the digit. If no, store it in hashbit where the digit corresponds to the index in the hashbit. Else move on to next number in the for loop.

# Complexity
- Time complexity: O(n * D) where n is the num of elements b/w [a,b] and D is the length of digits in each number.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
int numberCount(int a, int b) 
{
    int i=0;
    uint32_t hashbit = 0x00;
    int result = 0;
    for(i=a; i<=b; i++)
    {
        hashbit = 0x00;
        int num = i;
        bool unique = true;
        while(num > 0)
        {
            int rem = (num % 10);
            num /= 10;
            if((hashbit >> rem) & 0x01)
            {
                unique = false;
                break;
            }
            else
            {
                hashbit |= (1 << rem);
            }
        }

        if(unique)
            ++result;
    }
    return result;    
}
```