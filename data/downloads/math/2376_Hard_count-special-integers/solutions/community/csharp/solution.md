# C# Math Observations + Greedy-esq

**Author:** Cocamo1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/4540026/](https://leetcode.com/problems/count-special-integers/solutions/4540026/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
f(999) = f(99) + 9 * 9 * 8
f(99) = f(9) + 9 * 9
f(9) = 9

If a number is of length 3, we can shortcut all the numbers of lengths 1 and 2 using the above approach. This goes for any length.

Then use a method described in code comments below to calculate the remaining special numbers.

# Complexity
- Time complexity: $$O(n.Length ^ 2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
Where n.Length is the length of the string representation of n.

- Space complexity: $$O(n.Length)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
We store a list of n.Length integers.

# Code
```
public class Solution {
    /* n = 999:
        Result is 738 - can be broken down to:
        options for nums length 3 - 9 * 9 * 8
        +
        options for nums length 2 - 9 * 9
        +
        options for nums length 1 - 9
        == 738
        
      n = 99:
      result is 90 - can be broken down to:
      options for nums length 2 - 9 * 9
      +
      options for nums length 1 - 9
      == 90

      The pattern can be contextualized like this:
      The first number can be any number in the range 1-9, so it has 9 
options which is why the start is always 9.
      The next number can be any number in the range 0-9 but one of
 those numbers is definitely taken by the previous num, so it has 
10 numbers in its range minus one that was already taken. AKA 9.
      Third, fourth, fifth are the same as second except they have
 more nums taken in their ranges by the preceeding numbers.

      What about for n = some random number like... 1355?

      We can build up the special numbers in range 1-999 using
 the math formula above.

      Then for the numbers in range 1000-1355 we will process backwards 
starting from 1355. The method I came up with attempts to build
 sections of contiguous 9's, starting from the last number and moving
 towards the first. It does this because we can bulk-calculate
 sections of numbers by using the convenience of 9's generality
 towards overlapping with all possible prior number ranges.

      Lets work through 1355 - we start by finding the first index
 that is not equal to 9 moving from right to left - in this
 case that index would be 3, '5'.

      We are ultimately going to try to work this index pointer
 from right to left, so that the algorithm stops when it reaches -1.

      At each iteration of the loop that tries to work this pointer to
 the left, we first ask if the current number contains any duplicate
 numbers (prior to the block of 9's after firstNot9 index).
 If it does, we simply decrement nums[firstNot9] by 1 and
 move to part 2 of the loop.

      If it doesn't contain duplicate numbers, then the real fun begins!
 *laughs maniacally*

      No but really this part is pretty easy.
 Just count the number of numbers to the left of firstNot9's index
 whos values are less than or equal to firstNot9. This is our overlap
 count - it represents the amount of numbers that nums[firstNot9]
 cannot be.

      Then initialize an integer - toAdd - to be the value
 of nums[firstNot9] minus overlap. If firstNot9 does not equal 0,
 add an extra 1 onto toAdd - just for good luck. lol No its actually
 because the first index has 1 less of a valid number range than
 any other number so if it's not the first number we have to add 1
 extra on to represent that larger range.

      Finally toAdd now holds the amount of numbers that
 nums[firstNot9] could be without violating the non-duplicate rule,
 and everything in front of firstNot9 are, by definition, 9's and
 can have their possible number range be represented simply as
 10 minus count of numbers before this number.

      Iterate from firstNot9 + 1 to the length of nums and
 multiply toAdd by 10 minus (current index + 1).

      Add on toAdd to the total and change nums[firstNot9] to be equal
 to -1 - finally we can move onto part 2 of the loop.


      Part 2 of the loop is just about making sure that the index
 for firstNot9 is pointing to the right spot, and that the numbers in
 nums are what they should be. Basically we run a loop while firstNot9
 does not equal -1, and while nums[firstNot9] == -1, we set
 nums[firstNot9] to be equal to 9, decrement firstNot9 by 1,
 and if its not equal to -1 decrement nums[firstNot9] by 1.
 This needs to be done in a loop because in the process of
 moving firstNot9 back by 1 and decrementing the new nums[firstNot9]
 its possible that we could make the new nums[firstNot9] equal to -1.

      As a final edge case if firstNot9 is equal to 0
 and nums[firstNot9] is equal to 0, make sure to break.




      Ok like I promised lets go through 1355 together now.

      1355, total 0 - has dup before firstNot9 + 1.
      1354, total 0 - no dup, '4' overlaps with '1', '3', adds 3 ways.
      1349, total 3 - no dup, '4' overlaps with '1', '3', 9 overlaps
 with all, 3 * 7 = adds 21 ways.
      1299, total 24 - no dup before firstNot9 - '2' overlaps with '1',
     2 * 8 * 7 = adds 112 ways.
      
      1299 becomes 0999 which ends the loop. Total from 1000-1355
 should be 136 - which means the total from 1 - 1355 should be
 738 + 136 = 874.

      */
    public int CountSpecialNumbers(int n) {
        string nStr = n.ToString();

        int len = nStr.Length;
        int total = 0;
        int curr = 0;

        int currSpecial = 0;
        int multi = 9;

        while (curr != len - 1){
            if (curr == 0){
                currSpecial = 9;
            }
            else{
                currSpecial *= multi--;
            }

            total += currSpecial;
            curr++;
        }
        void processRemaining(){
            List<int> nums = new();
            int num = n;
            while (num != 0){
                nums.Insert(0, num % 10);
                num /= 10;
            }

            int firstNot9 = -1;
            int lenNums = nums.Count;
            for (int i = lenNums - 1; i > -1; i--){
                if (nums[i] != 9){
                    firstNot9 = i;
                    break;
                }
            }

            if (firstNot9 == -1){
                if (currSpecial == 0){
                    if (multi > 0){
                        currSpecial = multi;
                    }
                }
                else currSpecial *= multi;
                total += currSpecial;
                return;
            }

            while (firstNot9 != -1){
                if (hasDup(nums, firstNot9)){
                    nums[firstNot9]--;
                }
                else{
                    int sub = 10 - firstNot9 - 1;

                    int toAdd = 0;
                    int val = nums[firstNot9];
                    bool[] usedNum = new bool[10];

                    for (int i = 0; i < firstNot9; i++){
                        usedNum[nums[i]] = true;
                    } 
                    
                    int overlap = 0;

                    for (int i = 0; i <= val; i++){
                        if (usedNum[i]) overlap++;
                    }
                
                    toAdd = val - overlap;

                    if (firstNot9 != 0) toAdd++;
                    //Console.WriteLine("Overlap is {0}, val is {1}, toAdd is {2}", overlap, val, toAdd);
                    if (toAdd <= 0){
                        nums[firstNot9]--;
                    }
                    else{
                        for (int i = firstNot9 + 1; i < lenNums; i++){
                            toAdd *= sub--;
                        }
                        //Console.WriteLine("Adding {0}", toAdd);
                        //Console.WriteLine("Here is state of nums for this add: ");
                        /*foreach (var number in nums){
                            Console.Write(number + " ");
                        }*/
                        total += toAdd;
                        nums[firstNot9] = -1;
                    }
                }
                
                while (firstNot9 != -1 && nums[firstNot9] == -1){
                    nums[firstNot9] = 9;
                    firstNot9--;
                    if (firstNot9 != -1){
                        nums[firstNot9]--;
                        //Console.WriteLine("firstNot9 index is {0}, firstNot9 is {1}", firstNot9, nums[firstNot9]);
                    }
                    
                }
                if (firstNot9 < 0 || (firstNot9 == 0 && nums[firstNot9] == 0)) break;
            }
        }
        processRemaining();

        return total;
    }

    private bool hasDup(List<int> nums, int end){
        bool[] used = new bool[10];

       for (int i = 0; i <= end; i++){
           if (used[nums[i]]) return true;
           used[nums[i]] = true;
       }
       return false;
    }
}
```